import { defineStore } from 'pinia';
import { menu } from '@/core/data/menu';
import { ref } from 'vue';
export const useSearch = defineStore('search', () => {
    const active = ref(false);
    const show = ref(false);
    const searchData = ref([]);
    function searchTerm(terms) {
        terms = terms.toLowerCase();
        const items = [];
        const searchItem = (item, nearestIcon) => {
            const currentIcon = item.icon || nearestIcon;
            const title = (item.title || '').toLowerCase();
            if (title.includes(terms) && item.type === 'link') {
                items.push({ ...item, iconForDisplay: currentIcon });
            }
            if (item.children) {
                item.children.forEach((child) => searchItem(child, currentIcon));
            }
        };
        menu.forEach((menuItem) => searchItem(menuItem, menuItem.icon));
        searchData.value = items;
    }
    function toggleSearch() {
        show.value = !show.value;
    }
    function closeSearch() {
        show.value = false;
    }
    return {
        searchTerm,
        active,
        searchData,
        toggleSearch,
        closeSearch,
        show,
    };
});
