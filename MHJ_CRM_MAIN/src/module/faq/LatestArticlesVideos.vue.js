const props = defineProps();
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "header-faq" },
});
/** @type {__VLS_StyleScopedClasses['header-faq']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
(__VLS_ctx.headerTitle);
if (props.details) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (`row ${__VLS_ctx.faqClass}`) },
    });
    for (const [article, index] of __VLS_vFor((props.details))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "col-xl-4" },
            ...{ class: (props.details.length % 2 !== 0 && index === props.details.length - 1 ? '' : 'col-md-6') },
            key: (index),
        });
        /** @type {__VLS_StyleScopedClasses['col-xl-4']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "row" },
        });
        /** @type {__VLS_StyleScopedClasses['row']} */ ;
        for (const [item, i] of __VLS_vFor((article.details))) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "col-xl-12" },
                ...{ class: ([
                        index === props.details.length - 1 &&
                            article.details.length % 2 !== 0 &&
                            i !== article.details.length - 1
                            ? 'col-md-6'
                            : '',
                    ]) },
                key: (i),
            });
            /** @type {__VLS_StyleScopedClasses['col-xl-12']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "card" },
            });
            /** @type {__VLS_StyleScopedClasses['card']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "card-body" },
            });
            /** @type {__VLS_StyleScopedClasses['card-body']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "d-flex articles-icons" },
            });
            /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
            /** @type {__VLS_StyleScopedClasses['articles-icons']} */ ;
            let __VLS_0;
            /** @ts-ignore @type { | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather']} */
            vueFeather;
            // @ts-ignore
            const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
                type: (item.icon),
                ...{ class: ('m-r-20') },
            }));
            const __VLS_2 = __VLS_1({
                type: (item.icon),
                ...{ class: ('m-r-20') },
            }, ...__VLS_functionalComponentArgsRest(__VLS_1));
            /** @type {__VLS_StyleScopedClasses['m-r-20']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "flex-grow-1" },
            });
            /** @type {__VLS_StyleScopedClasses['flex-grow-1']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
                ...{ class: "pb-2" },
            });
            /** @type {__VLS_StyleScopedClasses['pb-2']} */ ;
            (item.title);
            __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
                ...{ class: "c-light" },
            });
            /** @type {__VLS_StyleScopedClasses['c-light']} */ ;
            (item.description);
            // @ts-ignore
            [headerTitle, faqClass,];
        }
        // @ts-ignore
        [];
    }
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
