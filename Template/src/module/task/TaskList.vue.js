import { getImages } from '@/utils/index';
import { storeToRefs } from 'pinia';
import { useTask } from '@/store/task';
const store = useTask();
const { currentTask } = storeToRefs(useTask());
function printWindow() {
    window.print();
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card mb-0" },
});
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-header d-flex" },
});
/** @type {__VLS_StyleScopedClasses['card-header']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({
    ...{ class: "mb-0" },
});
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
(__VLS_ctx.currentTask?.title);
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.printWindow());
            // @ts-ignore
            [currentTask, printWindow,];
        } },
    ...{ class: "txt-primary f-w-600" },
});
/** @type {__VLS_StyleScopedClasses['txt-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['f-w-600']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather'] | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather']} */
vueFeather;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    type: "printer",
    ...{ class: "me-2" },
}));
const __VLS_2 = __VLS_1({
    type: "printer",
    ...{ class: "me-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['me-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-body p-0" },
});
/** @type {__VLS_StyleScopedClasses['card-body']} */ ;
/** @type {__VLS_StyleScopedClasses['p-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "taskadd" },
});
/** @type {__VLS_StyleScopedClasses['taskadd']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "table-responsive custom-scrollbar theme-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['table-responsive']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
/** @type {__VLS_StyleScopedClasses['theme-scrollbar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.table, __VLS_intrinsics.table)({
    ...{ class: "table" },
});
/** @type {__VLS_StyleScopedClasses['table']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.tbody, __VLS_intrinsics.tbody)({});
for (const [item, index] of __VLS_vFor((__VLS_ctx.currentTask?.data))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({
        key: (index),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
        ...{ class: "task_title_0 f-w-600" },
    });
    /** @type {__VLS_StyleScopedClasses['task_title_0']} */ ;
    /** @type {__VLS_StyleScopedClasses['f-w-600']} */ ;
    (item.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "project_name_0" },
    });
    /** @type {__VLS_StyleScopedClasses['project_name_0']} */ ;
    (item.subtitle);
    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "task_desc_0" },
    });
    /** @type {__VLS_StyleScopedClasses['task_desc_0']} */ ;
    (item.description);
    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ class: "me-2" },
        href: "#",
    });
    /** @type {__VLS_StyleScopedClasses['me-2']} */ ;
    let __VLS_5;
    /** @ts-ignore @type { | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather'] | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather']} */
    vueFeather;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
        type: "link",
    }));
    const __VLS_7 = __VLS_6({
        type: "link",
    }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        href: "#",
    });
    let __VLS_10;
    /** @ts-ignore @type { | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather'] | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather']} */
    vueFeather;
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
        type: "more-horizontal",
    }));
    const __VLS_12 = __VLS_11({
        type: "more-horizontal",
    }, ...__VLS_functionalComponentArgsRest(__VLS_11));
    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ onClick: (...[$event]) => {
                return (__VLS_ctx.store.warningAlert(index));
                // @ts-ignore
                [currentTask, store,];
            } },
    });
    let __VLS_15;
    /** @ts-ignore @type { | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather'] | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components['vue-feather']} */
    vueFeather;
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({
        type: "trash-2",
    }));
    const __VLS_17 = __VLS_16({
        type: "trash-2",
    }, ...__VLS_functionalComponentArgsRest(__VLS_16));
    // @ts-ignore
    [];
}
if (!__VLS_ctx.currentTask?.data?.length) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "card-body" },
    });
    /** @type {__VLS_StyleScopedClasses['card-body']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "details-bookmark text-center" },
    });
    /** @type {__VLS_StyleScopedClasses['details-bookmark']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "row" },
        id: "favouriteData",
    });
    /** @type {__VLS_StyleScopedClasses['row']} */ ;
    if (__VLS_ctx.currentTask?.value == 'todayTask') {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "no-favourite" },
        });
        /** @type {__VLS_StyleScopedClasses['no-favourite']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
            ...{ class: "img-100 img-fluid m-r-20 rounded-circle update_img_0" },
            src: (__VLS_ctx.getImages('/mood-sad.png')),
            alt: "sad",
        });
        /** @type {__VLS_StyleScopedClasses['img-100']} */ ;
        /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
        /** @type {__VLS_StyleScopedClasses['m-r-20']} */ ;
        /** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
        /** @type {__VLS_StyleScopedClasses['update_img_0']} */ ;
    }
    else {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "no-favourite" },
        });
        /** @type {__VLS_StyleScopedClasses['no-favourite']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
            ...{ class: "img-100 img-fluid m-r-20 rounded-circle update_img_0" },
            src: (__VLS_ctx.getImages('/mood-sad.png')),
            alt: "sad",
        });
        /** @type {__VLS_StyleScopedClasses['img-100']} */ ;
        /** @type {__VLS_StyleScopedClasses['img-fluid']} */ ;
        /** @type {__VLS_StyleScopedClasses['m-r-20']} */ ;
        /** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
        /** @type {__VLS_StyleScopedClasses['update_img_0']} */ ;
    }
}
// @ts-ignore
[currentTask, currentTask, getImages, getImages,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
