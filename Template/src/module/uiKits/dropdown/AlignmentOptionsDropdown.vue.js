import { defineAsyncComponent } from 'vue';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const menuItems = [{ value: 'Menu item 1' }, { value: 'Menu item 2' }, { value: 'Menu item 3' }];
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
    headerTitle: ('Alignment Options'),
    border: (true),
    padding: (false),
    cardBodyClass: ('dark-dropdown-box'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Alignment Options'),
    border: (true),
    padding: (false),
    cardBodyClass: ('dark-dropdown-box'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
{
    const { header5: __VLS_7 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "f-m-light mt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "common-flex" },
});
/** @type {__VLS_StyleScopedClasses['common-flex']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "btn-group" },
});
/** @type {__VLS_StyleScopedClasses['btn-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-primary dropdown-toggle" },
    type: "button",
    'data-bs-toggle': "dropdown",
    'aria-expanded': "false",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['dropdown-toggle']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "dropdown-menu" },
});
/** @type {__VLS_StyleScopedClasses['dropdown-menu']} */ ;
for (const [item, index] of __VLS_vFor((__VLS_ctx.menuItems))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        key: (index),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ class: "dropdown-item" },
        href: "#",
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
    (item.value);
    // @ts-ignore
    [menuItems,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "btn-group" },
});
/** @type {__VLS_StyleScopedClasses['btn-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-secondary dropdown-toggle" },
    type: "button",
    'data-bs-toggle': "dropdown",
    'aria-expanded': "false",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['dropdown-toggle']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "dropdown-menu dropdown-menu-end" },
});
/** @type {__VLS_StyleScopedClasses['dropdown-menu']} */ ;
/** @type {__VLS_StyleScopedClasses['dropdown-menu-end']} */ ;
for (const [item, index] of __VLS_vFor((__VLS_ctx.menuItems))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        key: (index),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ class: "dropdown-item" },
        href: "#",
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
    (item.value);
    // @ts-ignore
    [menuItems,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "btn-group" },
});
/** @type {__VLS_StyleScopedClasses['btn-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-warning dropdown-toggle text-white show" },
    type: "button",
    'data-bs-toggle': "dropdown",
    'data-bs-display': "static",
    'aria-expanded': "false",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-warning']} */ ;
/** @type {__VLS_StyleScopedClasses['dropdown-toggle']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['show']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "dropdown-menu dropdown-menu-lg-end" },
});
/** @type {__VLS_StyleScopedClasses['dropdown-menu']} */ ;
/** @type {__VLS_StyleScopedClasses['dropdown-menu-lg-end']} */ ;
for (const [item, index] of __VLS_vFor((__VLS_ctx.menuItems))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        key: (index),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ class: "dropdown-item" },
        href: "#",
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
    (item.value);
    // @ts-ignore
    [menuItems,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "btn-group" },
});
/** @type {__VLS_StyleScopedClasses['btn-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-success dropdown-toggle" },
    type: "button",
    'data-bs-toggle': "dropdown",
    'data-bs-display': "static",
    'aria-expanded': "false",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-success']} */ ;
/** @type {__VLS_StyleScopedClasses['dropdown-toggle']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "dropdown-menu dropdown-menu-end dropdown-menu-lg-start" },
});
/** @type {__VLS_StyleScopedClasses['dropdown-menu']} */ ;
/** @type {__VLS_StyleScopedClasses['dropdown-menu-end']} */ ;
/** @type {__VLS_StyleScopedClasses['dropdown-menu-lg-start']} */ ;
for (const [item, index] of __VLS_vFor((__VLS_ctx.menuItems))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        key: (index),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ class: "dropdown-item" },
        href: "#",
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
    (item.value);
    // @ts-ignore
    [menuItems,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "btn-group dropstart" },
});
/** @type {__VLS_StyleScopedClasses['btn-group']} */ ;
/** @type {__VLS_StyleScopedClasses['dropstart']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-info dropdown-toggle" },
    type: "button",
    'data-bs-toggle': "dropdown",
    'aria-expanded': "false",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-info']} */ ;
/** @type {__VLS_StyleScopedClasses['dropdown-toggle']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "dropdown-menu" },
});
/** @type {__VLS_StyleScopedClasses['dropdown-menu']} */ ;
for (const [item, index] of __VLS_vFor((__VLS_ctx.menuItems))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        key: (index),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ class: "dropdown-item" },
        href: "#",
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
    (item.value);
    // @ts-ignore
    [menuItems,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "btn-group dropend" },
});
/** @type {__VLS_StyleScopedClasses['btn-group']} */ ;
/** @type {__VLS_StyleScopedClasses['dropend']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-danger dropdown-toggle" },
    type: "button",
    'data-bs-toggle': "dropdown",
    'aria-expanded': "false",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-danger']} */ ;
/** @type {__VLS_StyleScopedClasses['dropdown-toggle']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "dropdown-menu" },
});
/** @type {__VLS_StyleScopedClasses['dropdown-menu']} */ ;
for (const [item, index] of __VLS_vFor((__VLS_ctx.menuItems))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        key: (index),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ class: "dropdown-item" },
        href: "#",
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
    (item.value);
    // @ts-ignore
    [menuItems,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "btn-group dropup" },
});
/** @type {__VLS_StyleScopedClasses['btn-group']} */ ;
/** @type {__VLS_StyleScopedClasses['dropup']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-dark dropdown-toggle" },
    type: "button",
    'data-bs-toggle': "dropdown",
    'aria-expanded': "false",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-dark']} */ ;
/** @type {__VLS_StyleScopedClasses['dropdown-toggle']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "dropdown-menu" },
});
/** @type {__VLS_StyleScopedClasses['dropdown-menu']} */ ;
for (const [item, index] of __VLS_vFor((__VLS_ctx.menuItems))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        key: (index),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ class: "dropdown-item" },
        href: "#",
    });
    /** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
    (item.value);
    // @ts-ignore
    [menuItems,];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
