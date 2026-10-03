import { reactive, computed, onMounted } from 'vue';
import { useMenu } from '@/store/menu';
import { storeToRefs } from 'pinia';
export function useBookmark() {
    const store = useMenu();
    const { menuState } = storeToRefs(store);
    const { searchTerm } = store;
    const menu = menuState.value.menu;
    const state = reactive({
        show: false,
        bookmarkSearchBox: false,
        bookmarkSearchResultEmpty: false,
        terms: '',
        bookmarkItems: [],
    });
    const searchMenuItems = computed(() => menuState.value.searchData);
    const isBookmarked = (item) => item.bookmark === true;
    function openTab() {
        state.show = !state.show;
    }
    function openBookmark() {
        state.bookmarkSearchBox = !state.bookmarkSearchBox;
    }
    function searchTerms() {
        // If user clears input → remove suggestions and hide 'no results'
        if (!state.terms.trim()) {
            state.bookmarkSearchResultEmpty = false;
            menuState.value.searchData = []; // clear suggestions
            return;
        }
        // Otherwise perform search
        searchTerm(state.terms);
        // If no results found
        state.bookmarkSearchResultEmpty = searchMenuItems.value.length === 0;
    }
    function addToBookmark(item) {
        const index = state.bookmarkItems.indexOf(item);
        if (index === -1 && !item.bookmark) {
            item.bookmark = true;
            state.bookmarkItems.push(item);
        }
        else {
            state.bookmarkItems.splice(index, 1);
            item.bookmark = false;
        }
    }
    onMounted(() => {
        menu.forEach((item) => item.bookmark && state.bookmarkItems.push(item));
    });
    return {
        state,
        searchMenuItems,
        isBookmarked,
        openTab,
        openBookmark,
        searchTerms,
        addToBookmark,
    };
}
