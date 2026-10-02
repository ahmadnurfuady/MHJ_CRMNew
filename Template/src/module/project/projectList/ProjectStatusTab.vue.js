import { routes } from '@/router/routes';
import { ref, onMounted } from 'vue';
import { projectTab } from '@/core/data/project';
const emit = defineEmits(['activeTabValue']);
const activeTab = ref(projectTab[0].value);
onMounted(() => {
    emit('activeTabValue', activeTab.value);
});
function handleTab(value) {
    if (value) {
        activeTab.value = value;
        emit('activeTabValue', activeTab.value);
    }
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
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card p-3" },
});
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['p-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "common-space project-tabs" },
});
/** @type {__VLS_StyleScopedClasses['common-space']} */ ;
/** @type {__VLS_StyleScopedClasses['project-tabs']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "nav nav-tabs border-tab" },
});
/** @type {__VLS_StyleScopedClasses['nav']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tabs']} */ ;
/** @type {__VLS_StyleScopedClasses['border-tab']} */ ;
for (const [tab, index] of __VLS_vFor((__VLS_ctx.projectTab))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.handleTab(tab.value);
                // @ts-ignore
                [projectTab, handleTab,];
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
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: (`fa-solid fa-${tab.icon}`) },
    });
    (tab.title);
    // @ts-ignore
    [activeTab,];
}
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
routerLink;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ class: "btn btn-primary" },
    to: (__VLS_ctx.routes.Project.ProjectCreate),
}));
const __VLS_2 = __VLS_1({
    ...{ class: "btn btn-primary" },
    to: (__VLS_ctx.routes.Project.ProjectCreate),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-solid fa-plus" },
});
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-plus']} */ ;
// @ts-ignore
[routes,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
});
export default {};
