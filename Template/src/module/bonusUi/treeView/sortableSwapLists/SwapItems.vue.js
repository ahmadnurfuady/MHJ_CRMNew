import { defineAsyncComponent } from 'vue';
import { getImages } from '@/utils/index';
const SwapItems = defineAsyncComponent(() => import('@/module/bonusUi/treeView/sortableSwapLists/SwapItems.vue'));
const props = withDefaults(defineProps(), {
    depth: 0,
});
const __VLS_defaults = {
    depth: 0,
};
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
if (props.list) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ class: (`list-group-item nested-${props.depth}`) },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        src: (__VLS_ctx.getImages(props.list.icon)),
        alt: "icon",
    });
    (props.list.title);
    if (props.list.children && props.list.children.length) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
            ...{ class: "list-group" },
        });
        /** @type {__VLS_StyleScopedClasses['list-group']} */ ;
        for (const [item] of __VLS_vFor((props.list.children))) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
                key: (item.id),
            });
            let __VLS_0;
            /** @ts-ignore @type { | typeof __VLS_components.SwapItems} */
            SwapItems;
            // @ts-ignore
            const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
                list: (item),
                depth: (__VLS_ctx.depth + 1),
            }));
            const __VLS_2 = __VLS_1({
                list: (item),
                depth: (__VLS_ctx.depth + 1),
            }, ...__VLS_functionalComponentArgsRest(__VLS_1));
            // @ts-ignore
            [getImages, depth,];
        }
    }
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
    props: {},
});
export default {};
