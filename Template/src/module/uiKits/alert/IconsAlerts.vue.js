import { computed, defineAsyncComponent } from 'vue';
import { iconsAlert } from '@/core/data/uiKits/alert';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const processedAlerts = iconsAlert.map((alert) => {
    const isLight = alert.color === 'light';
    return {
        ...alert,
        iconClass: isLight ? 'stroke-dark' : `stroke-${alert.color}`,
        textClass: isLight ? 'txt-dark' : 'txt-white',
        linkClass: isLight ? 'text-dark' : 'text-white',
    };
});
const groupedAlerts = computed(() => {
    const chunks = [];
    for (let i = 0; i < processedAlerts.length; i += 4) {
        chunks.push(processedAlerts.slice(i, i + 4));
    }
    return chunks;
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('Icons with Alerts'),
    border: (true),
    padding: (false),
    cardBodyClass: ('alerts-icon'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Icons with Alerts'),
    border: (true),
    padding: (false),
    cardBodyClass: ('alerts-icon'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
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
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
for (const [group, groupIndex] of __VLS_vFor((__VLS_ctx.groupedAlerts))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "col-xl-6" },
        key: (groupIndex),
    });
    /** @type {__VLS_StyleScopedClasses['col-xl-6']} */ ;
    for (const [alert] of __VLS_vFor((group))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            key: (alert.color),
            ...{ class: (['alert', `alert-${alert.color}`, 'd-flex', 'align-items-center']) },
            role: "alert",
        });
        /** @type {__VLS_StyleScopedClasses['alert']} */ ;
        /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
        /** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
        let __VLS_8;
        /** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
        vueFeather;
        // @ts-ignore
        const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
            type: (alert.icon),
            ...{ class: (alert.iconClass) },
        }));
        const __VLS_10 = __VLS_9({
            type: (alert.icon),
            ...{ class: (alert.iconClass) },
        }, ...__VLS_functionalComponentArgsRest(__VLS_9));
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: (alert.textClass) },
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            ...{ class: "alert-link" },
            ...{ class: (alert.linkClass) },
            href: "#",
        });
        /** @type {__VLS_StyleScopedClasses['alert-link']} */ ;
        (alert.color);
        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            ...{ class: "alert-link" },
            ...{ class: (alert.linkClass) },
            href: "#",
        });
        /** @type {__VLS_StyleScopedClasses['alert-link']} */ ;
        (alert.color);
        // @ts-ignore
        [groupedAlerts,];
    }
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
