import { reactive, onMounted, onBeforeUnmount } from 'vue';
const timerState = reactive({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
});
let interval = null;
onMounted(() => {
    calculateCountdown();
    interval = setInterval(calculateCountdown, 1000);
});
onBeforeUnmount(() => {
    if (interval)
        clearInterval(interval);
});
function calculateCountdown() {
    const targetDate = new Date();
    targetDate.setHours(0, 0, 0, 0);
    targetDate.setDate(targetDate.getDate() + 7);
    const now = new Date();
    const distance = targetDate.getTime() - now.getTime();
    if (distance > 0) {
        timerState.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        timerState.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        timerState.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        timerState.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }
    else {
        timerState.days = timerState.hours = timerState.minutes = timerState.seconds = 0;
    }
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "days time" },
    id: "day",
});
/** @type {__VLS_StyleScopedClasses['days']} */ ;
/** @type {__VLS_StyleScopedClasses['time']} */ ;
(__VLS_ctx.timerState.days);
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "title" },
});
/** @type {__VLS_StyleScopedClasses['title']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "hours time" },
    id: "hour",
});
/** @type {__VLS_StyleScopedClasses['hours']} */ ;
/** @type {__VLS_StyleScopedClasses['time']} */ ;
(__VLS_ctx.timerState.hours);
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "title" },
});
/** @type {__VLS_StyleScopedClasses['title']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "minutes time" },
    id: "minute",
});
/** @type {__VLS_StyleScopedClasses['minutes']} */ ;
/** @type {__VLS_StyleScopedClasses['time']} */ ;
(__VLS_ctx.timerState.minutes);
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "title" },
});
/** @type {__VLS_StyleScopedClasses['title']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "seconds time" },
    id: "second",
});
/** @type {__VLS_StyleScopedClasses['seconds']} */ ;
/** @type {__VLS_StyleScopedClasses['time']} */ ;
(__VLS_ctx.timerState.seconds);
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "title" },
});
/** @type {__VLS_StyleScopedClasses['title']} */ ;
// @ts-ignore
[timerState, timerState, timerState, timerState,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
