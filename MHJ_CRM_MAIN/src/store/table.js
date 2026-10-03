import { defineStore } from 'pinia';
export const useTable = defineStore('table', () => {
    function getPager(totalItems, currentPage, pageSize) {
        const totalPages = Number(Math.ceil(Number(totalItems) / Number(pageSize)));
        const paginateRange = 3;
        if (Number(currentPage) < 1) {
            currentPage = 1;
        }
        else if (Number(currentPage) > Number(totalPages)) {
            currentPage = Number(totalPages);
        }
        let startPage, endPage;
        if (Number(totalPages) <= Number(paginateRange)) {
            startPage = 1;
            endPage = Number(totalPages);
        }
        else if (Number(currentPage) <= Number(Math.floor(Number(paginateRange) / 2))) {
            startPage = 1;
            endPage = Number(paginateRange);
        }
        else if (Number(currentPage) >=
            Number(totalPages) - Number(Math.floor(Number(paginateRange) / 2))) {
            startPage = Number(totalPages) - Number(paginateRange) + 1;
            endPage = Number(totalPages);
        }
        else {
            startPage = Number(currentPage) - Number(Math.floor(Number(paginateRange) / 2));
            endPage = Number(currentPage) + Number(Math.floor(Number(paginateRange) / 2));
        }
        const startIndex = (Number(currentPage) - 1) * Number(pageSize);
        const endIndex = Math.min(Number(startIndex) + Number(pageSize) - 1, Number(totalItems) - 1);
        const pages = Array.from(Array(Number(endPage) + 1 - Number(startPage)).keys()).map((i) => Number(startPage) + Number(i));
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages,
        };
    }
    return {
        getPager,
    };
});
