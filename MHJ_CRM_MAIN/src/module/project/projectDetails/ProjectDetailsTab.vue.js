import { ref, onMounted, defineAsyncComponent } from 'vue';
import { projectDetailsTab } from '@/core/data/project';
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'));
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const emit = defineEmits(['activeTab']);
const tabs = ref(projectDetailsTab);
const activeTab = ref(tabs.value[0].value);
onMounted(() => {
    emit('activeTab', activeTab.value);
});
function changeTab(value) {
    activeTab.value = value;
    emit('activeTab', activeTab.value);
}
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
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "sidebar-left-icons nav nav-pills" },
});
/** @type {__VLS_StyleScopedClasses['sidebar-left-icons']} */ ;
/** @type {__VLS_StyleScopedClasses['nav']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-pills']} */ ;
for (const [tab, index] of __VLS_vFor((__VLS_ctx.tabs))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ onClick: (...[$event]) => {
                return (__VLS_ctx.changeTab(tab.value));
                // @ts-ignore
                [tabs, changeTab,];
            } },
        ...{ class: "nav-item" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['nav-item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ class: "nav-link" },
        ...{ class: ({ active: __VLS_ctx.activeTab == tab.value }) },
        href: "#",
    });
    /** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "absolute-border" },
    });
    /** @type {__VLS_StyleScopedClasses['absolute-border']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "nav-rounded" },
    });
    /** @type {__VLS_StyleScopedClasses['nav-rounded']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "product-icons" },
    });
    /** @type {__VLS_StyleScopedClasses['product-icons']} */ ;
    let __VLS_7;
    /** @ts-ignore @type { | typeof __VLS_components.SvgIcon | typeof __VLS_components.SvgIcon} */
    SvgIcon;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
        icon: (tab.icon),
        type: "default",
    }));
    const __VLS_9 = __VLS_8({
        icon: (tab.icon),
        type: "default",
    }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "product-tab-content" },
    });
    /** @type {__VLS_StyleScopedClasses['product-tab-content']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({});
    (tab.title);
    // @ts-ignore
    [activeTab,];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
});
export default {};
