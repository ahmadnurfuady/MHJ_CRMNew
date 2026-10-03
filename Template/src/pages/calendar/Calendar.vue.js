import { ref, onMounted } from 'vue';
import { Draggable } from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/vue3';
import { startOfDay, addHours } from 'date-fns';
import { calendarOptions, defaultEvents, events, removeAfterDrop } from '@/core/data/calendar';
const defaultEventList = ref(defaultEvents);
const eventList = ref(events);
const externalEventsList = ref(null);
onMounted(() => {
    if (externalEventsList.value) {
        new Draggable(externalEventsList.value, {
            itemSelector: '.fc-event',
            eventData: function (eventEl) {
                return {
                    title: eventEl.getAttribute('data-title') || '',
                    backgroundColor: '#3a53a3',
                    borderColor: '#3a53a3',
                };
            },
        });
    }
});
function addEvent() {
    const newEvent = {
        title: 'New Event',
        start: addHours(startOfDay(new Date()), 1),
        end: addHours(startOfDay(new Date()), 2),
        backgroundColor: '#ffb829',
        borderColor: '#ffb829',
    };
    eventList.value.push(newEvent);
}
function formatDateInput(date) {
    if (!date)
        return '';
    const parsed = new Date(date);
    if (isNaN(parsed.getTime()))
        return '';
    const pad = (n) => String(n).padStart(2, '0');
    const y = parsed.getFullYear();
    const m = pad(parsed.getMonth() + 1);
    const d = pad(parsed.getDate());
    const h = pad(parsed.getHours());
    const min = pad(parsed.getMinutes());
    return `${y}-${m}-${d}T${h}:${min}`;
}
const show = ref(false);
function filter() {
    show.value = !show.value;
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container-fluid calendar-basic" },
});
/** @type {__VLS_StyleScopedClasses['container-fluid']} */ ;
/** @type {__VLS_StyleScopedClasses['calendar-basic']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card calender-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['calender-wrapper']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-body" },
});
/** @type {__VLS_StyleScopedClasses['card-body']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
    id: "wrap",
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-3 box-col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "md-sidebar mb-3" },
});
/** @type {__VLS_StyleScopedClasses['md-sidebar']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.filter());
            // @ts-ignore
            [filter,];
        } },
    ...{ class: "btn btn-primary md-sidebar-toggle" },
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['md-sidebar-toggle']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "md-sidebar-aside job-left-aside custom-scrollbar" },
    ...{ class: ({ open: __VLS_ctx.show }) },
});
/** @type {__VLS_StyleScopedClasses['md-sidebar-aside']} */ ;
/** @type {__VLS_StyleScopedClasses['job-left-aside']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
/** @type {__VLS_StyleScopedClasses['open']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    id: "external-events",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ref: "externalEventsList",
});
for (const [event] of __VLS_vFor((__VLS_ctx.defaultEventList))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
        key: (event.title),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event" },
        'data-title': (event.title),
        draggable: "true",
    });
    /** @type {__VLS_StyleScopedClasses['fc-event']} */ ;
    /** @type {__VLS_StyleScopedClasses['fc-h-event']} */ ;
    /** @type {__VLS_StyleScopedClasses['fc-daygrid-event']} */ ;
    /** @type {__VLS_StyleScopedClasses['fc-daygrid-block-event']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "fc-event-main" },
    });
    /** @type {__VLS_StyleScopedClasses['fc-event-main']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: (`fa-solid ${event.icon} me-2`) },
    });
    (event.title);
    // @ts-ignore
    [show, defaultEventList,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ class: "checkbox_animated" },
    id: "drop-remove",
    type: "checkbox",
});
(__VLS_ctx.removeAfterDrop);
/** @type {__VLS_StyleScopedClasses['checkbox_animated']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "mb-0" },
    for: "drop-remove",
});
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-9 box-col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-9']} */ ;
/** @type {__VLS_StyleScopedClasses['box-col-12']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.FullCalendar} */
FullCalendar;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    options: (__VLS_ctx.calendarOptions),
}));
const __VLS_2 = __VLS_1({
    options: (__VLS_ctx.calendarOptions),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.br)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.br)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({
    ...{ class: "mb-sm-3 mb-2" },
});
/** @type {__VLS_StyleScopedClasses['mb-sm-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.addEvent) },
    ...{ class: "btn btn-primary float-end" },
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['float-end']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "clearfix" },
});
/** @type {__VLS_StyleScopedClasses['clearfix']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "table-responsive custom-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['table-responsive']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.table, __VLS_intrinsics.table)({
    ...{ class: "table table-bordered" },
});
/** @type {__VLS_StyleScopedClasses['table']} */ ;
/** @type {__VLS_StyleScopedClasses['table-bordered']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.thead, __VLS_intrinsics.thead)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.tbody, __VLS_intrinsics.tbody)({});
for (const [event, i] of __VLS_vFor((__VLS_ctx.events))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({
        key: (i),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
        ...{ class: "p-2 border" },
    });
    /** @type {__VLS_StyleScopedClasses['p-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['border']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        ...{ class: "form-control" },
    });
    (event.title);
    /** @type {__VLS_StyleScopedClasses['form-control']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
        ...{ class: "p-2 border" },
    });
    /** @type {__VLS_StyleScopedClasses['p-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['border']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        type: "datetime-local",
        value: (__VLS_ctx.formatDateInput(event.start)),
        ...{ class: "form-control w-full" },
    });
    /** @type {__VLS_StyleScopedClasses['form-control']} */ ;
    /** @type {__VLS_StyleScopedClasses['w-full']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
        ...{ class: "p-2 border" },
    });
    /** @type {__VLS_StyleScopedClasses['p-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['border']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        type: "datetime-local",
        value: (event.end ? __VLS_ctx.formatDateInput(event.end) : ''),
        ...{ class: "form-control w-full" },
    });
    /** @type {__VLS_StyleScopedClasses['form-control']} */ ;
    /** @type {__VLS_StyleScopedClasses['w-full']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
        ...{ class: "p-2 border text-center" },
    });
    /** @type {__VLS_StyleScopedClasses['p-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['border']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                return (__VLS_ctx.events.splice(i, 1));
                // @ts-ignore
                [removeAfterDrop, calendarOptions, addEvent, events, events, formatDateInput, formatDateInput,];
            } },
        ...{ class: "btn btn-danger" },
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['btn-danger']} */ ;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
