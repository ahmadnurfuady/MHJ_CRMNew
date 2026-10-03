import { ref } from "vue";
import { useTable } from "@/store/table";
export function handlePagination() {
    const { getPager } = useTable();
    const pagination = ref();
    const totalPages = ref();
    const currentPage = ref(1);
    const pageSize = ref(1);
    function paginate() {
        if (totalPages.value) {
            pagination.value = getPager(totalPages.value, currentPage.value, pageSize.value);
        }
    }
    function handlePage(value) {
        if (totalPages.value) {
            const nextPage = currentPage.value + value;
            if (nextPage >= 1 && nextPage <= totalPages.value) {
                currentPage.value = nextPage;
                paginate();
            }
        }
    }
    function setPage(page) {
        currentPage.value = page;
        paginate();
    }
    function setTotalPages(pages, pageItems) {
        totalPages.value = pages;
        pageSize.value = pageItems;
        paginate(); // optional: paginate immediately
    }
    return {
        paginate,
        handlePage,
        setPage,
        setTotalPages,
        pagination,
        currentPage,
        totalPages,
    };
}
