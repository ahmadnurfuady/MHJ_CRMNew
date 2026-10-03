import { defineAsyncComponent } from 'vue';
import { horizontalStyle } from '@/core/data/forms/formControl';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
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
    headerTitle: ('Horizontal Style'),
    border: (true),
    padding: (false),
    cardClass: ('height-equal'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Horizontal Style'),
    border: (true),
    padding: (false),
    cardClass: ('height-equal'),
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
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ class: "mega-horizontal" },
});
/** @type {__VLS_StyleScopedClasses['mega-horizontal']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
for (const [style, index] of __VLS_vFor((__VLS_ctx.horizontalStyle))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
        key: (index),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-sm-3" },
    });
    /** @type {__VLS_StyleScopedClasses['col-sm-3']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "mega-title" },
    });
    /** @type {__VLS_StyleScopedClasses['mega-title']} */ ;
    (style.title);
    for (const [item, index] of __VLS_vFor((style.details))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
            key: (index),
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: (`col-sm-9 ${item.divClass}`) },
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "card" },
        });
        /** @type {__VLS_StyleScopedClasses['card']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "d-flex p-20" },
        });
        /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
        /** @type {__VLS_StyleScopedClasses['p-20']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: (`form-check radio radio-${item.class} m-0 w-100`) },
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
            ...{ class: "form-check-input" },
            id: (item.id),
            type: "radio",
            name: (item.name),
            value: (item.value),
            checked: (item.checked),
        });
        /** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
            ...{ class: "form-check-label mb-0 w-100" },
            for: (item.id),
        });
        /** @type {__VLS_StyleScopedClasses['form-check-label']} */ ;
        /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
        /** @type {__VLS_StyleScopedClasses['w-100']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: (`flex-grow-1 ${item.badgeClass}`) },
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "mt-0 mega-title-badge" },
        });
        /** @type {__VLS_StyleScopedClasses['mt-0']} */ ;
        /** @type {__VLS_StyleScopedClasses['mega-title-badge']} */ ;
        (item.title);
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: (`badge badge-${item.class} pull-right digits`) },
        });
        (item.digit);
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        (item.description);
        if (item.rating) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                ...{ class: "rating-star-wrapper" },
            });
            /** @type {__VLS_StyleScopedClasses['rating-star-wrapper']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "rating" },
            });
            /** @type {__VLS_StyleScopedClasses['rating']} */ ;
            let __VLS_8;
            /** @ts-ignore @type { | typeof __VLS_components.StarRating} */
            StarRating;
            // @ts-ignore
            const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
                rating: (item.rating),
                starSize: (20),
                readOnly: (true),
                showRating: (false),
                maxRating: (5),
                increment: (0.5),
            }));
            const __VLS_10 = __VLS_9({
                rating: (item.rating),
                starSize: (20),
                readOnly: (true),
                showRating: (false),
                maxRating: (5),
                increment: (0.5),
            }, ...__VLS_functionalComponentArgsRest(__VLS_9));
            (item.label);
        }
        // @ts-ignore
        [horizontalStyle,];
    }
    // @ts-ignore
    [];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-footer text-end" },
    details: true,
});
/** @type {__VLS_StyleScopedClasses['card-footer']} */ ;
/** @type {__VLS_StyleScopedClasses['text-end']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-primary m-r-15" },
    type: "submit",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['m-r-15']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "btn btn-light" },
    type: "submit",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-light']} */ ;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
