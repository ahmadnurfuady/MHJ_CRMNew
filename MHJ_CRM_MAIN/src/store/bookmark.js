import { ref, reactive, computed } from 'vue';
import { defineStore } from 'pinia';
import { bookmarkFilter, bookmarks, bookmarkTags } from '@/core/data/bookmark';
import { initInputField, initSelectField } from '@/core/data/common';
import { resetForm } from '@/utils/index';
import { validateForm } from '@/utils/validators/formValidators';
export const useBookmark = defineStore('bookmark', () => {
    const bookmarkState = reactive({
        bookmarkTabsList: bookmarkFilter,
        bookmarkTagsList: bookmarkTags,
        bookmarkList: bookmarks,
        activeTab: bookmarkFilter[0],
        isListView: false,
        formSubmitted: false,
        isBookmarkModalOpen: false,
        currentBookmark: null,
        bookmarkForm: {
            url: initInputField(),
            title: initInputField(),
            description: initInputField(),
            tag: initSelectField(),
            collection: initSelectField(),
        },
    });
    function handleTab(item) {
        if ('title' in item) {
            bookmarkState.activeTab = item;
        }
        else {
            bookmarkState.activeTab = {
                id: Number(item.value),
                title: item.label,
                value: item.value,
            };
        }
    }
    function toggleListView(value) {
        bookmarkState.isListView = value;
    }
    const getFilteredBookmark = computed(() => {
        const list = bookmarkState.bookmarkList;
        if (bookmarkState.activeTab.value == 'created_by_me') {
            return list;
        }
        if (bookmarkState.activeTab.value == 'favorites') {
            return list.filter((bookmark) => bookmark.isFavorite);
        }
        return [];
    });
    function favoriteBookmark(bookmark) {
        bookmark.isFavorite = !bookmark.isFavorite;
    }
    function deleteBookmark(bookmark) {
        bookmarkState.bookmarkList = bookmarkState.bookmarkList.filter((bookmarks) => bookmarks.id !== bookmark.id);
    }
    function openModal() {
        bookmarkState.isBookmarkModalOpen = true;
    }
    function handleSubmit() {
        bookmarkState.formSubmitted = true;
        const newBookmark = ref();
        const { isValid, formData } = validateForm(bookmarkState.bookmarkForm);
        if (isValid) {
            if (bookmarkState.currentBookmark) {
                const index = bookmarkState.bookmarkList.findIndex((bookmark) => bookmark.id == bookmarkState.currentBookmark?.id);
                if (index !== -1) {
                    bookmarkState.bookmarkList[index] = {
                        ...bookmarkState.bookmarkList[index],
                        url: bookmarkState.bookmarkForm.url.data,
                        title: bookmarkState.bookmarkForm.title.data,
                        description: bookmarkState.bookmarkForm.description.data,
                        tag: bookmarkState.bookmarkForm.tag.data,
                        collection: bookmarkState.bookmarkForm.collection.data,
                    };
                }
                bookmarkState.currentBookmark = null;
            }
            else {
                newBookmark.value = {
                    ...formData,
                    id: Math.floor(Math.random() * 1000000),
                    image: 'lightgallry/06.jpg',
                    isFavorite: false,
                };
                bookmarkState.bookmarkList.push(newBookmark.value);
            }
            bookmarkState.isBookmarkModalOpen = false;
            bookmarkState.bookmarkForm = resetForm(bookmarkState.bookmarkForm);
        }
    }
    function editBookmarkModal(bookmark) {
        bookmarkState.currentBookmark = bookmark;
        openModal();
    }
    return {
        bookmarkState,
        handleTab,
        toggleListView,
        getFilteredBookmark,
        favoriteBookmark,
        deleteBookmark,
        openModal,
        handleSubmit,
        editBookmarkModal,
    };
});
