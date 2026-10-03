import { defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useKanban } from '@/store/kanban';
import { getUserText, getTextColor, getImages } from '@/utils/index';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const GroupItem = defineAsyncComponent(() => import('@/components/shared/GroupItem.vue'));
const kanbanStore = useKanban();
const { customCards } = storeToRefs(kanbanStore);
const { getBadgeClass, addCard, cancel, newCard } = kanbanStore;
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
    headerTitle: ('Custom Boards'),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Custom Boards'),
    padding: (false),
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
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    id: "demo2",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "kanban-container d-flex gap-4 row" },
});
/** @type {__VLS_StyleScopedClasses['kanban-container']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
for (const [boards] of __VLS_vFor((__VLS_ctx.customCards))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
        key: (boards.title),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "kanban-board col-3" },
    });
    /** @type {__VLS_StyleScopedClasses['kanban-board']} */ ;
    /** @type {__VLS_StyleScopedClasses['col-3']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.header, __VLS_intrinsics.header)({
        ...{ class: "kanban-board-header" },
        ...{ class: (boards.class) },
    });
    /** @type {__VLS_StyleScopedClasses['kanban-board-header']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "kanban-title-board" },
    });
    /** @type {__VLS_StyleScopedClasses['kanban-title-board']} */ ;
    (boards.title);
    let __VLS_8;
    /** @ts-ignore @type { | typeof __VLS_components.draggable | typeof __VLS_components.Draggable | typeof __VLS_components.draggable | typeof __VLS_components.Draggable} */
    draggable;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
        modelValue: (boards.cards),
        group: ('kanban-cards'),
        itemKey: "id",
        ...{ class: "kanban-drag" },
    }));
    const __VLS_10 = __VLS_9({
        modelValue: (boards.cards),
        group: ('kanban-cards'),
        itemKey: "id",
        ...{ class: "kanban-drag" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    /** @type {__VLS_StyleScopedClasses['kanban-drag']} */ ;
    const { default: __VLS_13 } = __VLS_11.slots;
    {
        const { item: __VLS_14 } = __VLS_11.slots;
        const [{ element: card }] = __VLS_vSlot(__VLS_14);
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "kanban-item" },
        });
        /** @type {__VLS_StyleScopedClasses['kanban-item']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            ...{ class: "kanban-box" },
            href: "#",
        });
        /** @type {__VLS_StyleScopedClasses['kanban-box']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "date" },
        });
        /** @type {__VLS_StyleScopedClasses['date']} */ ;
        (card.date);
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: (`badge badge-${__VLS_ctx.getBadgeClass(card.taskPriority)} f-right`) },
        });
        (card.taskPriority);
        __VLS_asFunctionalElement1(__VLS_intrinsics.h5, __VLS_intrinsics.h5)({});
        (card.title);
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "common-align" },
        });
        /** @type {__VLS_StyleScopedClasses['common-align']} */ ;
        if (card.userProfile) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
                ...{ class: "me-2 rounded-circle" },
                src: (__VLS_ctx.getImages(card.userProfile)),
            });
            /** @type {__VLS_StyleScopedClasses['me-2']} */ ;
            /** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
        }
        if (!card.userProfile) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: (`common-circle bg-lighter-${__VLS_ctx.getTextColor(__VLS_ctx.getUserText(card.userName))}`) },
            });
            (__VLS_ctx.getUserText(card.userName, 'singleText'));
        }
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "flex-grow-1" },
        });
        /** @type {__VLS_StyleScopedClasses['flex-grow-1']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
        (card.userName);
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "d-flex mt-3" },
        });
        /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
        /** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
            ...{ class: "list" },
        });
        /** @type {__VLS_StyleScopedClasses['list']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            title: "Comments",
            'data-bs-placement': "bottom",
        });
        __VLS_asFunctionalDirective(__VLS_directives.vTooltip, {})(null, { ...__VLS_directiveBindingRestFields, }, null, null);
        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
            ...{ class: "fa-regular fa-comments" },
        });
        /** @type {__VLS_StyleScopedClasses['fa-regular']} */ ;
        /** @type {__VLS_StyleScopedClasses['fa-comments']} */ ;
        (card.comments);
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            title: "Attachment",
            'data-bs-placement': "bottom",
        });
        __VLS_asFunctionalDirective(__VLS_directives.vTooltip, {})(null, { ...__VLS_directiveBindingRestFields, }, null, null);
        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
            ...{ class: "fa-solid fa-paperclip" },
        });
        /** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
        /** @type {__VLS_StyleScopedClasses['fa-paperclip']} */ ;
        (card.attachment);
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            title: "View",
            'data-bs-placement': "bottom",
        });
        __VLS_asFunctionalDirective(__VLS_directives.vTooltip, {})(null, { ...__VLS_directiveBindingRestFields, }, null, null);
        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
            ...{ class: "fa-regular fa-eye" },
        });
        /** @type {__VLS_StyleScopedClasses['fa-regular']} */ ;
        /** @type {__VLS_StyleScopedClasses['fa-eye']} */ ;
        if (card.members && card.members.length) {
            let __VLS_15;
            /** @ts-ignore @type { | typeof __VLS_components.GroupItem} */
            GroupItem;
            // @ts-ignore
            const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({
                items: (card.members),
                ...{ class: ('common-f-start') },
                imgClass: ('img-30'),
                showItems: (3),
            }));
            const __VLS_17 = __VLS_16({
                items: (card.members),
                ...{ class: ('common-f-start') },
                imgClass: ('img-30'),
                showItems: (3),
            }, ...__VLS_functionalComponentArgsRest(__VLS_16));
            /** @type {__VLS_StyleScopedClasses['common-f-start']} */ ;
        }
        // @ts-ignore
        [customCards, getBadgeClass, getImages, getTextColor, getUserText, getUserText, vTooltip, vTooltip, vTooltip,];
    }
    // @ts-ignore
    [];
    var __VLS_11;
    if (boards.addCard) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
            ...{ class: "itemform not-draggable" },
        });
        /** @type {__VLS_StyleScopedClasses['itemform']} */ ;
        /** @type {__VLS_StyleScopedClasses['not-draggable']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "form-group" },
        });
        /** @type {__VLS_StyleScopedClasses['form-group']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.textarea, __VLS_intrinsics.textarea)({
            ...{ class: "form-control" },
            rows: "2",
            autofocus: true,
            value: (boards.newCardTitle),
        });
        /** @type {__VLS_StyleScopedClasses['form-control']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "form-group" },
        });
        /** @type {__VLS_StyleScopedClasses['form-group']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ onClick: (...[$event]) => {
                    if (!(boards.addCard))
                        throw 0;
                    return (__VLS_ctx.addCard(boards));
                    // @ts-ignore
                    [addCard,];
                } },
            type: "submit",
            ...{ class: "btn btn-primary btn-sm me-2" },
        });
        /** @type {__VLS_StyleScopedClasses['btn']} */ ;
        /** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
        /** @type {__VLS_StyleScopedClasses['btn-sm']} */ ;
        /** @type {__VLS_StyleScopedClasses['me-2']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ onClick: (...[$event]) => {
                    if (!(boards.addCard))
                        throw 0;
                    return (__VLS_ctx.cancel(boards));
                    // @ts-ignore
                    [cancel,];
                } },
            type: "button",
            id: "CancelBtn",
            ...{ class: "btn button-light-primary btn-sm" },
        });
        /** @type {__VLS_StyleScopedClasses['btn']} */ ;
        /** @type {__VLS_StyleScopedClasses['button-light-primary']} */ ;
        /** @type {__VLS_StyleScopedClasses['btn-sm']} */ ;
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.footer, __VLS_intrinsics.footer)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                return (__VLS_ctx.newCard(boards));
                // @ts-ignore
                [newCard,];
            } },
        ...{ class: "btn" },
    });
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
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
