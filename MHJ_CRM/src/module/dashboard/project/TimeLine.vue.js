import { ref, onMounted, defineAsyncComponent } from 'vue';
import { DayPilot, DayPilotCalendar } from '@daypilot/daypilot-lite-vue';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const calendarRef = ref(null);
const events = ref([
    {
        id: '1',
        start: '2026-02-23T11:00:00',
        end: '2026-02-23T12:00:00',
        text: '11:00 - 12:00 | HTML Basics',
        backColor: '#6aa84faa',
        borderColor: '#38761d',
    },
    {
        id: '2',
        start: '2026-02-24T10:00:00',
        end: '2026-02-24T11:30:00',
        text: '13:00 - 14:30 | CSS Flexbox',
        backColor: '#f1c232aa',
        borderColor: '#bf9000',
    },
]);
const calendarConfig = ref({
    viewType: 'Week',
    startDate: '2026-02-28',
    durationBarVisible: false,
    eventBorderRadius: 5,
    headerDateFormat: 'MM/dd',
    events: events.value,
    onTimeRangeSelected: async (args) => {
        const modal = await DayPilot.Modal.prompt('Create a new event:', 'New Lesson');
        const calendar = args.control;
        calendar.clearSelection();
        if (modal.canceled)
            return;
        const newEvent = {
            id: DayPilot.guid(),
            start: args.start,
            end: args.end,
            text: `${args.start.toString('HH:mm')} | ${modal.result}`,
            backColor: '#6fa8dcaa',
            borderColor: '#3d85c6',
        };
        events.value.push(newEvent);
        calendar.update({ events: events.value });
    },
});
onMounted(() => {
    events.value.push({
        id: DayPilot.guid(),
        start: '2026-02-25T13:00:00',
        end: '2026-02-25T14:00:00',
        text: '15:00 - 16:00 | JavaScript Intro',
        backColor: '#a4c2f4aa',
        borderColor: '#6d9eeb',
    });
    if (calendarRef.value) {
        calendarRef.value.control.update({
            events: events.value,
            startDate: '2026-02-28',
        });
    }
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
    headerTitle: ('Time Line'),
    header: ('total-revenue'),
    padding: (false),
    cardBodyClass: ('pt-0'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Time Line'),
    header: ('total-revenue'),
    padding: (false),
    cardBodyClass: ('pt-0'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "overflow-auto theme-scrollbar custom-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['overflow-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['theme-scrollbar']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "timeline-calendar custom-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['timeline-calendar']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "custom-calendar" },
    id: "calendar-container",
});
/** @type {__VLS_StyleScopedClasses['custom-calendar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "time-line" },
    id: "calendar",
});
/** @type {__VLS_StyleScopedClasses['time-line']} */ ;
let __VLS_7;
/** @ts-ignore @type {typeof __VLS_components.DayPilotCalendar} */
DayPilotCalendar;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    config: (__VLS_ctx.calendarConfig),
    ref: "calendarRef",
}));
const __VLS_9 = __VLS_8({
    config: (__VLS_ctx.calendarConfig),
    ref: "calendarRef",
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
var __VLS_12 = {};
var __VLS_10;
// @ts-ignore
[calendarConfig,];
var __VLS_3;
// @ts-ignore
var __VLS_13 = __VLS_12;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
