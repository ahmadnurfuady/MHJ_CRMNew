import { productTableData } from '@/core/data/dashboard/ecommerce';
import { defineAsyncComponent, onMounted, ref } from 'vue';
import { useProductDetailsNavigation } from '@/composables/useProductNavigation';
import { routes } from '@/router/routes';
import { getImages } from '@/utils';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'));
const { navigateToProduct } = useProductDetailsNavigation();
const baseUrl = import.meta.env.BASE_URL;
const tableConfig = ref({
    columns: [
        { title: 'Product Name', fieldValue: 'name', sort: false },
        { title: 'Gender', fieldValue: 'gender', sort: false },
        { title: 'stock', fieldValue: 'stockHtml', sort: false },
        { title: 'Variants', fieldValue: 'variants', sort: false },
        { title: 'Action', fieldValue: 'actionIcon', sort: false },
    ],
    data: [],
});
onMounted(() => {
    tableConfig.value.data = productTableData;
});
function navigate() {
    navigateToProduct('1');
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('Live Product  '),
    padding: (false),
    cardBodyClass: ('pt-0'),
    header: ('total-revenue'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Live Product  '),
    padding: (false),
    cardBodyClass: ('pt-0'),
    header: ('total-revenue'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
{
    const { header5: __VLS_7 } = __VLS_3.slots;
    let __VLS_8;
    /** @ts-ignore @type { | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link'] | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link']} */
    routerLink;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
        to: (__VLS_ctx.routes.Dashboards.Default),
    }));
    const __VLS_10 = __VLS_9({
        to: (__VLS_ctx.routes.Dashboards.Default),
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    const { default: __VLS_13 } = __VLS_11.slots;
    // @ts-ignore
    [routes,];
    var __VLS_11;
    // @ts-ignore
    [];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "table-order table-responsive custom-scrollbar custom-latest-table" },
});
/** @type {__VLS_StyleScopedClasses['table-order']} */ ;
/** @type {__VLS_StyleScopedClasses['table-responsive']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-latest-table']} */ ;
let __VLS_14;
/** @ts-ignore @type { | typeof __VLS_components.Table | typeof __VLS_components.Table} */
Table;
// @ts-ignore
const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({
    hasCheckbox: (true),
    tableConfig: (__VLS_ctx.tableConfig),
    pageSize: (4),
    pagination: (false),
}));
const __VLS_16 = __VLS_15({
    hasCheckbox: (true),
    tableConfig: (__VLS_ctx.tableConfig),
    pageSize: (4),
    pagination: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_15));
const { default: __VLS_19 } = __VLS_17.slots;
{
    const { name: __VLS_20 } = __VLS_17.slots;
    const [{ row }] = __VLS_vSlot(__VLS_20);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "product-name" },
    });
    /** @type {__VLS_StyleScopedClasses['product-name']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "order-table-images img-fluid" },
        src: (__VLS_ctx.getImages(row.image)),
        alt: "user",
    });
    /** @type {__VLS_StyleScopedClasses['order-table-images']} */ ;
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "product-sub" },
    });
    /** @type {__VLS_StyleScopedClasses['product-sub']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ onClick: (...[$event]) => {
                return (__VLS_ctx.navigate());
                // @ts-ignore
                [tableConfig, getImages, navigate,];
            } },
        ...{ class: "f-14 f-w-600" },
        href: "#",
    });
    /** @type {__VLS_StyleScopedClasses['f-14']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-600']} */ ;
    (row.name);
    // @ts-ignore
    [];
}
{
    const { gender: __VLS_21 } = __VLS_17.slots;
    const [{ row }] = __VLS_vSlot(__VLS_21);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "product-sub" },
    });
    /** @type {__VLS_StyleScopedClasses['product-sub']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ onClick: (...[$event]) => {
                return (__VLS_ctx.navigate());
                // @ts-ignore
                [navigate,];
            } },
        ...{ class: "f-14 f-w-500" },
        href: "#",
    });
    /** @type {__VLS_StyleScopedClasses['f-14']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
    (row.gender);
    // @ts-ignore
    [];
}
{
    const { stockHtml: __VLS_22 } = __VLS_17.slots;
    const [{ row }] = __VLS_vSlot(__VLS_22);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "media" },
    });
    /** @type {__VLS_StyleScopedClasses['media']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "media-body text-end switch-sm" },
    });
    /** @type {__VLS_StyleScopedClasses['media-body']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-end']} */ ;
    /** @type {__VLS_StyleScopedClasses['switch-sm']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "switch" },
    });
    /** @type {__VLS_StyleScopedClasses['switch']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        type: "checkbox",
        checked: (row.stock),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "switch-state" },
    });
    /** @type {__VLS_StyleScopedClasses['switch-state']} */ ;
    // @ts-ignore
    [];
}
{
    const { actionIcon: __VLS_23 } = __VLS_17.slots;
    const [{ row }] = __VLS_vSlot(__VLS_23);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "dropdown" },
    });
    /** @type {__VLS_StyleScopedClasses['dropdown']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        id: "dropdownMenuButtonicon6",
        'data-bs-toggle': "dropdown",
        'aria-expanded': "false",
        role: "menu",
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.svg, __VLS_intrinsics.svg)({
        ...{ class: "invoice-icon" },
    });
    /** @type {__VLS_StyleScopedClasses['invoice-icon']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.use, __VLS_intrinsics.use)({
        href: (`${__VLS_ctx.baseUrl}svg/icon-sprite.svg#${row.actionIcon}`),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "dropdown-menu dropdown-menu-end" },
        'aria-labelledby': "dropdownMenuButtonicon6",
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-menu']} */ ;
    /** @type {__VLS_StyleScopedClasses['dropdown-menu-end']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "dropdown-item" },
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "dropdown-item" },
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "dropdown-item" },
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
    // @ts-ignore
    [baseUrl,];
}
// @ts-ignore
[];
var __VLS_17;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
