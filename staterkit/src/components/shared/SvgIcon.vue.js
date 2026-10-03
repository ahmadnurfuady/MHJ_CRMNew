import { computed } from "vue";
const props = defineProps();
const iconPath = computed(() => {
    switch (props.type) {
        case "fill":
            return `${import.meta.env.BASE_URL}svg/icon-sprite.svg#fill-${props.icon}`;
        case "stroke":
            return `${import.meta.env.BASE_URL}svg/icon-sprite.svg#stroke-${props.icon}`;
        default:
            return `${import.meta.env.BASE_URL}svg/icon-sprite.svg#${props.icon}`;
    }
});
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.svg, __VLS_intrinsics.svg)({
    ...{ class: (__VLS_ctx.svgClass) },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.use)({
    href: (__VLS_unwrap(iconPath, {})),
    ...{ class: (__VLS_ctx.svgInnerClass) },
});
// @ts-ignore
[svgClass, iconPath, svgInnerClass,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
import { defineProps, } from 'vue';
