import { defineAsyncComponent, ref } from 'vue';
import { javascriptBehaviorListTab } from '@/core/data/uiKits/lists';
import { getImages } from '@/utils/index';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const activeTab = ref('home');
function handleTab(value) {
    activeTab.value = value;
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
    headerTitle: ('JavaScript Behavior'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('JavaScript Behavior'),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-4" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "list-group" },
    id: "list-tab",
    role: "tablist",
});
/** @type {__VLS_StyleScopedClasses['list-group']} */ ;
for (const [tab] of __VLS_vFor((__VLS_ctx.javascriptBehaviorListTab))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
        key: (tab.value),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ onClick: (...[$event]) => {
                return (__VLS_ctx.handleTab(tab.value));
                // @ts-ignore
                [javascriptBehaviorListTab, handleTab,];
            } },
        ...{ class: "list-group-item list-group-item-action list-hover-primary" },
        ...{ class: ({ 'active bg-primary': __VLS_ctx.activeTab === tab.value }) },
        href: "#",
    });
    /** @type {__VLS_StyleScopedClasses['list-group-item']} */ ;
    /** @type {__VLS_StyleScopedClasses['list-group-item-action']} */ ;
    /** @type {__VLS_StyleScopedClasses['list-hover-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-primary']} */ ;
    (tab.title);
    // @ts-ignore
    [activeTab,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-8" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-8']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-content" },
});
/** @type {__VLS_StyleScopedClasses['tab-content']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-pane fade show active" },
    ...{ class: ([
            { 'list-behaviors': __VLS_ctx.activeTab === 'home' },
            { 'dark-list': __VLS_ctx.activeTab === 'profile' },
        ]) },
});
/** @type {__VLS_StyleScopedClasses['tab-pane']} */ ;
/** @type {__VLS_StyleScopedClasses['fade']} */ ;
/** @type {__VLS_StyleScopedClasses['show']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['list-behaviors']} */ ;
/** @type {__VLS_StyleScopedClasses['dark-list']} */ ;
if (__VLS_ctx.activeTab === 'home') {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex mb-xl-4 list-behavior-1" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-xl-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['list-behavior-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex-shrink-0" },
    });
    /** @type {__VLS_StyleScopedClasses['flex-shrink-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "tab-img img-fluid" },
        src: (__VLS_ctx.getImages('blog/img.png')),
        alt: "home",
    });
    /** @type {__VLS_StyleScopedClasses['tab-img']} */ ;
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex-grow-1" },
    });
    /** @type {__VLS_StyleScopedClasses['flex-grow-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "mb-xl-0 mb-sm-4" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-xl-0']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-sm-4']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex list-behavior-1 mb-xl-4" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['list-behavior-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-xl-4']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex-shrink-0" },
    });
    /** @type {__VLS_StyleScopedClasses['flex-shrink-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "tab-img img-fluid" },
        src: (__VLS_ctx.getImages('blog/blog.jpg')),
        alt: "home",
    });
    /** @type {__VLS_StyleScopedClasses['tab-img']} */ ;
    /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex-grow-1" },
    });
    /** @type {__VLS_StyleScopedClasses['flex-grow-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "mb-0" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
}
else if (__VLS_ctx.activeTab === 'profile') {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex-space align-items-center list-light-dark contact-profile" },
    });
    /** @type {__VLS_StyleScopedClasses['flex-space']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['list-light-dark']} */ ;
    /** @type {__VLS_StyleScopedClasses['contact-profile']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        ...{ class: "tab-img" },
        src: (__VLS_ctx.getImages('avtar/3.jpg')),
        alt: "profile",
    });
    /** @type {__VLS_StyleScopedClasses['tab-img']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "d-flex flex-column gap-2" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex-column']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
}
else if (__VLS_ctx.activeTab === 'contact') {
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "d-flex flex-column gap-1" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex-column']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
}
else if (__VLS_ctx.activeTab === 'settings') {
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "d-flex flex-column gap-2" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex-column']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
}
// @ts-ignore
[activeTab, activeTab, activeTab, activeTab, activeTab, activeTab, getImages, getImages, getImages,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
