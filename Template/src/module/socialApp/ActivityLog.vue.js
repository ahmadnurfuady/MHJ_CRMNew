import { ref, defineAsyncComponent, computed } from 'vue';
import { myProfile } from '@/core/data/socialApp';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const profile = ref(myProfile);
const activityGroups = computed(() => {
    const groups = {};
    profile.value.activityLog.forEach((activity) => {
        if (!groups[activity.date]) {
            groups[activity.date] = [];
        }
        groups[activity.date].push(activity);
    });
    return groups;
});
const todayDate = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
});
const yesterdayDate = new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
});
function getDateLabel(date) {
    if (date === todayDate) {
        return 'Today';
    }
    else if (date === yesterdayDate) {
        return 'Yesterday';
    }
    else {
        return date;
    }
}
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
    headerTitle: ('Activity Log'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Activity Log'),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "activity-log" },
});
/** @type {__VLS_StyleScopedClasses['activity-log']} */ ;
for (const [group, index] of __VLS_vFor((Object.keys(__VLS_ctx.activityGroups)))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "my-activity" },
        key: (index),
    });
    /** @type {__VLS_StyleScopedClasses['my-activity']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
        ...{ class: "mb-3" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
    (__VLS_ctx.getDateLabel(group));
    for (const [activity, index] of __VLS_vFor((__VLS_ctx.activityGroups[group]))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
            key: (index),
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        let __VLS_7;
        /** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
        vueFeather;
        // @ts-ignore
        const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
            type: (activity.icon),
            ...{ class: ('m-r-20') },
        }));
        const __VLS_9 = __VLS_8({
            type: (activity.icon),
            ...{ class: ('m-r-20') },
        }, ...__VLS_functionalComponentArgsRest(__VLS_8));
        /** @type {__VLS_StyleScopedClasses['m-r-20']} */ ;
        (activity.activity);
        // @ts-ignore
        [activityGroups, activityGroups, getDateLabel,];
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
