import Swal from 'sweetalert2';
import { defineAsyncComponent, watch } from 'vue';
import { getImages, columnValue } from '@/utils/index';
import { tableUtils } from '@/utils/tableUtils';
import { getTableRowId, hasId } from '@/utils/index';
import { dateOptions } from '@/core/data/common';
const __VLS_export = ((__VLS_props, __VLS_ctx, __VLS_exposed, __VLS_setup = (async () => {
    const { tableState, pageSizeOptions, handlePaginationSize, setPage, searchTerm, handleSelect, checkUncheckAll, onItemChecked, onSort, openRowDetails, getColSpan, applyFilters, getDefaultIcon, getDynamicClass, handleDropdown, handleDateFilter, handleDate, } = tableUtils();
    const props = withDefaults(defineProps(), {
        pageSize: 4,
        paginateDetails: false,
        showPaginate: false,
        search: true,
        pagination: true,
        selectedRows: false,
        rowDetails: false,
        dateFilter: false,
        searchPlaceholder: 'Search Here...',
    });
    const Pagination = defineAsyncComponent(() => import('@/components/shared/Pagination.vue'));
    const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
    const emits = defineEmits(['action']);
    watch(() => props.pageSize, (newPageSize) => {
        if (newPageSize) {
            tableState.filter['pageSize'] = newPageSize;
            handlePaginationSize();
        }
    }, { immediate: true });
    watch(() => props.tableConfig.data, (newData) => {
        if (newData) {
            applyFilters(props);
        }
    }, { immediate: true });
    watch(() => tableState.pageNo, (newValue) => {
        if (newValue) {
            applyFilters(props);
        }
    }, { immediate: true });
    function handleAction(value, details) {
        if (value.actionToPerform == 'delete') {
            if (!value.modal) {
                emits('action', {
                    actionToPerform: value.actionToPerform,
                    data: details,
                });
            }
            else {
                Swal.fire({
                    title: 'Are you sure?',
                    text: value.modelText ? value.modelText : 'Do you really want to delete the product?',
                    imageUrl: getImages('gif/trash.gif'),
                    confirmButtonText: 'Yes, delete it!',
                    showCancelButton: true,
                    cancelButtonText: 'Cancel',
                    cancelButtonColor: '#FC4438',
                }).then((result) => {
                    if (result.isConfirmed) {
                        emits('action', {
                            actionToPerform: value.actionToPerform,
                            data: details,
                        });
                    }
                });
            }
            if (hasId(details)) {
                const numericId = Number(details.id);
                if (tableState.selected.includes(numericId)) {
                    tableState.selected = tableState.selected.filter((id) => id !== numericId);
                }
                else {
                    tableState.selected.push(numericId);
                }
            }
        }
        if (value.actionToPerform == 'view') {
            emits('action', { actionToPerform: value.actionToPerform, data: details });
        }
    }
    watch(() => [
        tableState.filter['search'],
        tableState.filter['sort'],
        tableState.filter['date'],
        tableState.filter['page'],
        tableState.filter['pageSize'],
    ], () => {
        applyFilters(props);
    });
    const __VLS_defaults = {
        pageSize: 4,
        paginateDetails: false,
        showPaginate: false,
        search: true,
        pagination: true,
        selectedRows: false,
        rowDetails: false,
        dateFilter: false,
        searchPlaceholder: 'Search Here...',
    };
    const __VLS_ctx = {
        ...{},
        ...{},
        ...{},
        ...{},
        ...{},
    };
    let __VLS_components;
    let __VLS_intrinsics;
    let __VLS_directives;
    if (props.tableConfig) {
        if (props.search || props.dateFilter || props.showPaginate) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "top-body" },
            });
            /** @type {__VLS_StyleScopedClasses['top-body']} */ ;
            if (props.showPaginate) {
                __VLS_asFunctionalElement1(__VLS_intrinsics.select, __VLS_intrinsics.select)({
                    ...{ onChange: (...[$event]) => {
                            if (!(props.tableConfig))
                                return;
                            if (!(props.search || props.dateFilter || props.showPaginate))
                                return;
                            if (!(props.showPaginate))
                                return;
                            __VLS_ctx.handleSelect($event);
                            // @ts-ignore
                            [handleSelect,];
                        } },
                });
                for (const [pages] of __VLS_vFor((__VLS_ctx.pageSizeOptions))) {
                    __VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({
                        value: (pages.value),
                        selected: (pages.selected),
                        key: (pages.value),
                    });
                    (pages.title);
                    // @ts-ignore
                    [pageSizeOptions,];
                }
            }
            if (props.dateFilter) {
                __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
                __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                    ...{ class: "row align-items-center g-1" },
                });
                /** @type {__VLS_StyleScopedClasses['row']} */ ;
                /** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
                /** @type {__VLS_StyleScopedClasses['g-1']} */ ;
                __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                    ...{ class: "col-auto" },
                });
                /** @type {__VLS_StyleScopedClasses['col-auto']} */ ;
                __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
                    ...{ class: "form-label" },
                });
                /** @type {__VLS_StyleScopedClasses['form-label']} */ ;
                __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                    ...{ class: "col-auto" },
                });
                /** @type {__VLS_StyleScopedClasses['col-auto']} */ ;
                __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                    ...{ class: "rrange-dropdown flatpickr-input" },
                    id: "reportrange",
                    readonly: "readonly",
                });
                /** @type {__VLS_StyleScopedClasses['rrange-dropdown']} */ ;
                /** @type {__VLS_StyleScopedClasses['flatpickr-input']} */ ;
                __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                    ...{ onClick: (...[$event]) => {
                            if (!(props.tableConfig))
                                return;
                            if (!(props.search || props.dateFilter || props.showPaginate))
                                return;
                            if (!(props.dateFilter))
                                return;
                            __VLS_ctx.handleDropdown();
                            // @ts-ignore
                            [handleDropdown,];
                        } },
                });
                (__VLS_ctx.tableState.selectedDate ? __VLS_ctx.tableState.selectedDate : 'Select');
                __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                    id: "rangeButtons",
                    ...{ class: ({ 'range-option': __VLS_ctx.tableState.dateDropdownOpen }) },
                });
                /** @type {__VLS_StyleScopedClasses['range-option']} */ ;
                for (const [option] of __VLS_vFor((__VLS_ctx.dateOptions))) {
                    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
                        ...{ onClick: (...[$event]) => {
                                if (!(props.tableConfig))
                                    return;
                                if (!(props.search || props.dateFilter || props.showPaginate))
                                    return;
                                if (!(props.dateFilter))
                                    return;
                                __VLS_ctx.handleDateFilter(option.value);
                                // @ts-ignore
                                [tableState, tableState, tableState, dateOptions, handleDateFilter,];
                            } },
                        key: (option.value),
                        ...{ class: ({
                                active: __VLS_ctx.tableState.selectedValue === option.value,
                            }) },
                    });
                    /** @type {__VLS_StyleScopedClasses['active']} */ ;
                    (option.label);
                    // @ts-ignore
                    [tableState,];
                }
                if (__VLS_ctx.tableState.selectedValue && __VLS_ctx.tableState.selectedValue === 'custom') {
                    let __VLS_0;
                    /** @ts-ignore @type {typeof __VLS_components.Flatpickr} */
                    Flatpickr;
                    // @ts-ignore
                    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
                        ...{ 'onOnChange': {} },
                        modelValue: (__VLS_ctx.tableState.date),
                        config: (__VLS_ctx.tableState.config),
                    }));
                    const __VLS_2 = __VLS_1({
                        ...{ 'onOnChange': {} },
                        modelValue: (__VLS_ctx.tableState.date),
                        config: (__VLS_ctx.tableState.config),
                    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
                    let __VLS_5;
                    const __VLS_6 = ({ onChange: {} },
                        { onOnChange: (__VLS_ctx.handleDate) });
                    var __VLS_3;
                    var __VLS_4;
                }
            }
            if (props.search) {
                __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                    id: "basic-1_filter",
                    ...{ class: "dataTables_filter" },
                });
                /** @type {__VLS_StyleScopedClasses['dataTables_filter']} */ ;
                __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
                __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
                    ...{ onKeyup: (...[$event]) => {
                            if (!(props.tableConfig))
                                return;
                            if (!(props.search || props.dateFilter || props.showPaginate))
                                return;
                            if (!(props.search))
                                return;
                            __VLS_ctx.searchTerm(__VLS_ctx.tableState.searchText);
                            // @ts-ignore
                            [tableState, tableState, tableState, tableState, tableState, handleDate, searchTerm,];
                        } },
                    type: "text",
                    name: "searchTerm",
                    value: (__VLS_ctx.tableState.searchText),
                    placeholder: (props.searchPlaceholder),
                });
            }
        }
        __VLS_asFunctionalElement1(__VLS_intrinsics.table, __VLS_intrinsics.table)({
            ...{ class: "table" },
            ...{ class: (props.tableClass) },
        });
        /** @type {__VLS_StyleScopedClasses['table']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.thead, __VLS_intrinsics.thead)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
        if (props.hasCheckbox) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({
                ...{ class: "datatable-checkbox" },
                ...{ class: ({
                        'selected-checkbox': __VLS_ctx.tableState.selected.length &&
                            __VLS_ctx.tableState.selected.length != props.tableConfig.data.length,
                    }) },
            });
            /** @type {__VLS_StyleScopedClasses['datatable-checkbox']} */ ;
            /** @type {__VLS_StyleScopedClasses['selected-checkbox']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
                ...{ onChange: (...[$event]) => {
                        if (!(props.tableConfig))
                            return;
                        if (!(props.hasCheckbox))
                            return;
                        __VLS_ctx.checkUncheckAll($event, props);
                        // @ts-ignore
                        [tableState, tableState, tableState, checkUncheckAll,];
                    } },
                type: "checkbox",
                ...{ class: "cb-select-checkbox" },
                checked: ((props.tableConfig &&
                    props.tableConfig.data.length &&
                    __VLS_ctx.tableState.selected &&
                    __VLS_ctx.tableState.selected.length == props.tableConfig.data.length) ||
                    false),
            });
            /** @type {__VLS_StyleScopedClasses['cb-select-checkbox']} */ ;
        }
        if (props.rowDetails) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
        }
        for (const [column] of __VLS_vFor((props.tableConfig.columns))) {
            (column.fieldValue);
            if (!column.hideColumn) {
                if (column.sort) {
                    __VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({
                        ...{ onClick: (...[$event]) => {
                                if (!(props.tableConfig))
                                    return;
                                if (!(!column.hideColumn))
                                    return;
                                if (!(column.sort))
                                    return;
                                __VLS_ctx.onSort(String(column.sortableKey ?? column.fieldValue), props);
                                // @ts-ignore
                                [tableState, tableState, onSort,];
                            } },
                        ...{ class: (__VLS_ctx.tableState.sortableKey ==
                                (column.sortableKey ? column.sortableKey : column.fieldValue) &&
                                __VLS_ctx.tableState.filter['sort'] == 'asc'
                                ? 'asc'
                                : __VLS_ctx.tableState.sortableKey ==
                                    (column.sortableKey ? column.sortableKey : column.fieldValue) &&
                                    __VLS_ctx.tableState.filter['sort'] == 'desc'
                                    ? 'desc'
                                    : '') },
                    });
                    (column.title);
                    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                        ...{ class: "cb-accending-decending" },
                    });
                    /** @type {__VLS_StyleScopedClasses['cb-accending-decending']} */ ;
                }
                else {
                    __VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
                    (column.title);
                }
            }
            // @ts-ignore
            [tableState, tableState, tableState, tableState,];
        }
        if (props.tableConfig.rowAction) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
            ('Actions');
        }
        if (__VLS_ctx.tableState.tableRecords && __VLS_ctx.tableState.tableRecords.length) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.tbody, __VLS_intrinsics.tbody)({});
            for (const [details, index] of __VLS_vFor((__VLS_ctx.tableState.tableRecords))) {
                (index);
                __VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({
                    ...{ class: ({
                            selected: __VLS_ctx.hasId(details) &&
                                __VLS_ctx.tableState.selected &&
                                __VLS_ctx.tableState.selected.length &&
                                __VLS_ctx.tableState.selected.includes(Number(details.id)),
                        }) },
                });
                /** @type {__VLS_StyleScopedClasses['selected']} */ ;
                if (props.hasCheckbox) {
                    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
                        ...{ class: "datatable-checkbox" },
                    });
                    /** @type {__VLS_StyleScopedClasses['datatable-checkbox']} */ ;
                    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
                        ...{ onChange: (...[$event]) => {
                                if (!(props.tableConfig))
                                    return;
                                if (!(__VLS_ctx.tableState.tableRecords && __VLS_ctx.tableState.tableRecords.length))
                                    return;
                                if (!(props.hasCheckbox))
                                    return;
                                __VLS_ctx.onItemChecked($event);
                                // @ts-ignore
                                [tableState, tableState, tableState, tableState, tableState, tableState, hasId, onItemChecked,];
                            } },
                        type: "checkbox",
                        'data-id': (__VLS_ctx.getTableRowId(details)),
                        value: (__VLS_ctx.getTableRowId(details)),
                        checked: (__VLS_ctx.tableState.selected.includes(__VLS_ctx.getTableRowId(details))),
                    });
                }
                if (props.rowDetails) {
                    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
                        ...{ onClick: (...[$event]) => {
                                if (!(props.tableConfig))
                                    return;
                                if (!(__VLS_ctx.tableState.tableRecords && __VLS_ctx.tableState.tableRecords.length))
                                    return;
                                if (!(props.rowDetails))
                                    return;
                                __VLS_ctx.openRowDetails(__VLS_ctx.getTableRowId(details));
                                // @ts-ignore
                                [tableState, getTableRowId, getTableRowId, getTableRowId, getTableRowId, openRowDetails,];
                            } },
                        ...{ style: ({
                                background: `url(${__VLS_ctx.getImages(__VLS_ctx.tableState.selectedOpenRows.includes(__VLS_ctx.getTableRowId(details))
                                    ? 'details_close'
                                    : 'details_open') + '.png'}) no-repeat center center`,
                                cursor: 'pointer',
                            }) },
                    });
                }
                for (const [column] of __VLS_vFor((props.tableConfig.columns))) {
                    (column.fieldValue);
                    if (!column.hideColumn) {
                        __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
                            ...{ class: (column.class ? column.class : '') },
                        });
                        var __VLS_7 = {
                            row: (details),
                            column: (column),
                        };
                        var __VLS_8 = __VLS_tryAsConstant(String(column.fieldValue));
                        if (column.text) {
                            (__VLS_ctx.columnValue(details, column.fieldValue));
                            (column.text);
                        }
                        else if (column.type == 'price') {
                            if (column.decimalNumber) {
                                (__VLS_ctx.columnValue(details, column.fieldValue, true));
                            }
                            else {
                                (__VLS_ctx.columnValue(details, column.fieldValue));
                            }
                        }
                        else {
                            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
                            __VLS_asFunctionalDirective(__VLS_directives.vHtml, {})(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.columnValue(details, column.fieldValue)) }, null, null);
                        }
                    }
                    // @ts-ignore
                    [tableState, getTableRowId, getImages, columnValue, columnValue, columnValue, columnValue,];
                }
                if (props.tableConfig.rowAction) {
                    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
                    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                        ...{ class: "product-action common-align gap-2 justify-content-start" },
                    });
                    /** @type {__VLS_StyleScopedClasses['product-action']} */ ;
                    /** @type {__VLS_StyleScopedClasses['common-align']} */ ;
                    /** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
                    /** @type {__VLS_StyleScopedClasses['justify-content-start']} */ ;
                    for (const [row, i] of __VLS_vFor((props.tableConfig.rowAction))) {
                        (i);
                        if (row.type === 'button' || row.label === 'Create') {
                            __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
                                ...{ onClick: (...[$event]) => {
                                        if (!(props.tableConfig))
                                            return;
                                        if (!(__VLS_ctx.tableState.tableRecords && __VLS_ctx.tableState.tableRecords.length))
                                            return;
                                        if (!(props.tableConfig.rowAction))
                                            return;
                                        if (!(row.type === 'button' || row.label === 'Create'))
                                            return;
                                        __VLS_ctx.handleAction(row, details);
                                        // @ts-ignore
                                        [handleAction,];
                                    } },
                                ...{ class: (row.type === 'button' ? row.class : 'plus-btn') },
                                type: "button",
                            });
                            if (row.fontType) {
                                __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
                                    ...{ class: (`fa-solid fa-${row.icon}`) },
                                });
                            }
                            else {
                                (row.label === 'Create' ? '+' : row.label);
                            }
                        }
                        else if (['Edit', 'Delete', 'View'].includes(row.label)) {
                            let __VLS_11;
                            /** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
                            routerLink;
                            // @ts-ignore
                            const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
                                ...{ 'onClick': {} },
                                ...{ class: "square-white" },
                                to: (row.path || ''),
                            }));
                            const __VLS_13 = __VLS_12({
                                ...{ 'onClick': {} },
                                ...{ class: "square-white" },
                                to: (row.path || ''),
                            }, ...__VLS_functionalComponentArgsRest(__VLS_12));
                            let __VLS_16;
                            const __VLS_17 = ({ click: {} },
                                { onClick: (...[$event]) => {
                                        if (!(props.tableConfig))
                                            return;
                                        if (!(__VLS_ctx.tableState.tableRecords && __VLS_ctx.tableState.tableRecords.length))
                                            return;
                                        if (!(props.tableConfig.rowAction))
                                            return;
                                        if (!!(row.type === 'button' || row.label === 'Create'))
                                            return;
                                        if (!(['Edit', 'Delete', 'View'].includes(row.label)))
                                            return;
                                        __VLS_ctx.handleAction(row, details);
                                        // @ts-ignore
                                        [handleAction,];
                                    } });
                            /** @type {__VLS_StyleScopedClasses['square-white']} */ ;
                            const { default: __VLS_18 } = __VLS_14.slots;
                            if (['Edit', 'Delete'].includes(row.label)) {
                                let __VLS_19;
                                /** @ts-ignore @type {typeof __VLS_components.SvgIcon} */
                                SvgIcon;
                                // @ts-ignore
                                const __VLS_20 = __VLS_asFunctionalComponent1(__VLS_19, new __VLS_19({
                                    icon: (row.icon || ''),
                                }));
                                const __VLS_21 = __VLS_20({
                                    icon: (row.icon || ''),
                                }, ...__VLS_functionalComponentArgsRest(__VLS_20));
                            }
                            else if (row.label === 'View') {
                                __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
                                    ...{ class: "fa-solid fa-eye" },
                                });
                                /** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
                                /** @type {__VLS_StyleScopedClasses['fa-eye']} */ ;
                            }
                            // @ts-ignore
                            [];
                            var __VLS_14;
                            var __VLS_15;
                        }
                        else {
                            __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
                                ...{ class: "square-white btn" },
                                ...{ class: (__VLS_ctx.getDynamicClass(row.label)) },
                                href: "#",
                                title: (row.label),
                            });
                            __VLS_asFunctionalDirective(__VLS_directives.vTooltip, {})(null, { ...__VLS_directiveBindingRestFields, }, null, null);
                            /** @type {__VLS_StyleScopedClasses['square-white']} */ ;
                            /** @type {__VLS_StyleScopedClasses['btn']} */ ;
                            __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
                                ...{ class: (`fa-solid fa-${row.icon || __VLS_ctx.getDefaultIcon(row.label)}`) },
                            });
                        }
                        // @ts-ignore
                        [getDynamicClass, vTooltip, getDefaultIcon,];
                    }
                }
                if (props.rowDetails &&
                    __VLS_ctx.hasId(details) &&
                    __VLS_ctx.tableState.selectedOpenRows.includes(details.id)) {
                    __VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({
                        'data-dt-row': "8",
                    });
                    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
                        colspan: "8",
                    });
                    __VLS_asFunctionalElement1(__VLS_intrinsics.table, __VLS_intrinsics.table)({
                        ...{ style: ({ 'padding-left': '50px' }) },
                    });
                    __VLS_asFunctionalElement1(__VLS_intrinsics.tbody, __VLS_intrinsics.tbody)({});
                    for (const [column] of __VLS_vFor((props.tableConfig.columns))) {
                        __VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({
                            key: (column.fieldValue),
                        });
                        __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
                        (column.title);
                        __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
                        __VLS_asFunctionalDirective(__VLS_directives.vHtml, {})(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.columnValue(details, column.fieldValue)) }, null, null);
                        // @ts-ignore
                        [tableState, hasId, columnValue,];
                    }
                }
                // @ts-ignore
                [];
            }
        }
        else if (!__VLS_ctx.tableState.tableRecords.length) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.tbody, __VLS_intrinsics.tbody)({});
            __VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({
                'data-dt-row': (__VLS_ctx.getColSpan(props)),
            });
            __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
                colspan: (__VLS_ctx.getColSpan(props)),
                ...{ class: "empty-data text-center" },
            });
            /** @type {__VLS_StyleScopedClasses['empty-data']} */ ;
            /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
        }
        var __VLS_24 = {};
        if (props.tableConfig.data.length && props.pagination) {
            let __VLS_26;
            /** @ts-ignore @type {typeof __VLS_components.Pagination} */
            Pagination;
            // @ts-ignore
            const __VLS_27 = __VLS_asFunctionalComponent1(__VLS_26, new __VLS_26({
                ...{ 'onSetPage': {} },
                total: (props.tableConfig.data.length),
                paginate: (__VLS_ctx.tableState.paginate),
                paginateDetails: (props.paginateDetails),
                selectedRows: (props.selectedRows),
                selectedItems: (__VLS_ctx.tableState.selected.length),
            }));
            const __VLS_28 = __VLS_27({
                ...{ 'onSetPage': {} },
                total: (props.tableConfig.data.length),
                paginate: (__VLS_ctx.tableState.paginate),
                paginateDetails: (props.paginateDetails),
                selectedRows: (props.selectedRows),
                selectedItems: (__VLS_ctx.tableState.selected.length),
            }, ...__VLS_functionalComponentArgsRest(__VLS_27));
            let __VLS_31;
            const __VLS_32 = ({ setPage: {} },
                { onSetPage: (...[$event]) => {
                        if (!(props.tableConfig))
                            return;
                        if (!(props.tableConfig.data.length && props.pagination))
                            return;
                        __VLS_ctx.setPage($event);
                        // @ts-ignore
                        [tableState, tableState, tableState, getColSpan, getColSpan, setPage,];
                    } });
            var __VLS_29;
            var __VLS_30;
        }
    }
    // @ts-ignore
    var __VLS_9 = __VLS_8, __VLS_10 = __VLS_7, __VLS_25 = __VLS_24;
    // @ts-ignore
    [];
    return {};
})()) => ({}));
export default {};
