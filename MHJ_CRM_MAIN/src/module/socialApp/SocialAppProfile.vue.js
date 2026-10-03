import { ref, onMounted, reactive, computed } from 'vue';
import { myProfile, socialAppTab } from '@/core/data/socialApp';
import { getImages } from '@/utils/index';
const appState = reactive({
    tabs: socialAppTab,
    profile: myProfile,
    userProfile: { ...myProfile },
    activeTab: 'timeline',
});
const emits = defineEmits(['currentTab']);
const fileInput = ref(null);
onMounted(() => {
    emits('currentTab', appState.activeTab);
});
const profileImage = computed(() => {
    const img = appState.userProfile.profile;
    if (!img)
        return '';
    if (img.startsWith('data:') || img.startsWith('blob:')) {
        return img;
    }
    return getImages(img);
});
function onFileSelected(event) {
    const input = event.target;
    const file = input?.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            if (appState.userProfile)
                appState.userProfile.profile = reader.result;
        };
        reader.readAsDataURL(file);
    }
}
function removeProfile() {
    if (appState.userProfile)
        appState.userProfile.profile = `${getImages('forms/user2.png')}`;
}
function handleActiveTab(value) {
    appState.activeTab = value;
    emits('currentTab', appState.activeTab);
}
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card hovercard text-center" },
});
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['hovercard']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "cardheader" },
});
/** @type {__VLS_StyleScopedClasses['cardheader']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "user-image" },
});
/** @type {__VLS_StyleScopedClasses['user-image']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "avatar" },
});
/** @type {__VLS_StyleScopedClasses['avatar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "common-align" },
});
/** @type {__VLS_StyleScopedClasses['common-align']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
if (__VLS_ctx.appState.userProfile.profile) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        src: (__VLS_ctx.profileImage),
        alt: "Profile Image",
        id: "output",
    });
}
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ onChange: (...[$event]) => {
            return (__VLS_ctx.onFileSelected($event));
            // @ts-ignore
            [appState, profileImage, onFileSelected,];
        } },
    type: "file",
    accept: "image/*",
    ref: "fileInput",
    id: "fileInput",
    hidden: true,
});
if (__VLS_ctx.appState.userProfile.profile) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.appState.userProfile.profile))
                    throw 0;
                return (__VLS_ctx.removeProfile());
                // @ts-ignore
                [appState, removeProfile,];
            } },
        ...{ class: "icon-wrapper" },
        id: "cancelButton",
    });
    /** @type {__VLS_StyleScopedClasses['icon-wrapper']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "icofont icofont-error" },
    });
    /** @type {__VLS_StyleScopedClasses['icofont']} */ ;
    /** @type {__VLS_StyleScopedClasses['icofont-error']} */ ;
}
if (__VLS_ctx.appState.userProfile.profile && __VLS_ctx.fileInput) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.appState.userProfile.profile && __VLS_ctx.fileInput))
                    throw 0;
                return (__VLS_ctx.fileInput.click());
                // @ts-ignore
                [appState, fileInput, fileInput,];
            } },
        ...{ class: "icon-wrapper" },
    });
    /** @type {__VLS_StyleScopedClasses['icon-wrapper']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
        ...{ class: "icofont icofont-pencil-alt-5" },
    });
    /** @type {__VLS_StyleScopedClasses['icofont']} */ ;
    /** @type {__VLS_StyleScopedClasses['icofont-pencil-alt-5']} */ ;
}
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "share-icons" },
});
/** @type {__VLS_StyleScopedClasses['share-icons']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "social-icon bg-primary" },
    href: "#",
});
/** @type {__VLS_StyleScopedClasses['social-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-regular fa-face-smile fa-flip" },
});
/** @type {__VLS_StyleScopedClasses['fa-regular']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-face-smile']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-flip']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "social-icon bg-secondary" },
    href: "#",
});
/** @type {__VLS_StyleScopedClasses['social-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-secondary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-brands fa-weixin fa-flip" },
});
/** @type {__VLS_StyleScopedClasses['fa-brands']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-weixin']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-flip']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "social-icon bg-warning" },
    href: "#",
});
/** @type {__VLS_StyleScopedClasses['social-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-warning']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-solid fa-share-nodes fa-flip" },
});
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-share-nodes']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-flip']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "info market-tabs p-0" },
});
/** @type {__VLS_StyleScopedClasses['info']} */ ;
/** @type {__VLS_StyleScopedClasses['market-tabs']} */ ;
/** @type {__VLS_StyleScopedClasses['p-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "nav nav-tabs border-tab tabs-scoial" },
});
/** @type {__VLS_StyleScopedClasses['nav']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-tabs']} */ ;
/** @type {__VLS_StyleScopedClasses['border-tab']} */ ;
/** @type {__VLS_StyleScopedClasses['tabs-scoial']} */ ;
for (const [tab, index] of __VLS_vFor((__VLS_ctx.appState.tabs))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
        key: (index),
    });
    if (index == 2) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            ...{ class: "nav-item" },
        });
        /** @type {__VLS_StyleScopedClasses['nav-item']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "user-designation" },
        });
        /** @type {__VLS_StyleScopedClasses['user-designation']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "title" },
        });
        /** @type {__VLS_StyleScopedClasses['title']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            target: "_blank",
            href: "",
        });
        (__VLS_ctx.appState.profile.name);
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "desc mt-2" },
        });
        /** @type {__VLS_StyleScopedClasses['desc']} */ ;
        /** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
        (__VLS_ctx.appState.profile.designation);
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ onClick: (...[$event]) => {
                return (__VLS_ctx.handleActiveTab(tab.value));
                // @ts-ignore
                [appState, appState, appState, handleActiveTab,];
            } },
        ...{ class: "nav-item" },
    });
    /** @type {__VLS_StyleScopedClasses['nav-item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        ...{ class: "nav-link" },
        href: "#",
        ...{ class: ({ active: tab.value == __VLS_ctx.appState.activeTab }) },
    });
    /** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    (tab.title);
    // @ts-ignore
    [appState,];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
});
export default {};
