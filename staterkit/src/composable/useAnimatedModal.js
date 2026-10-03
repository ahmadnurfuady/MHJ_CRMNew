import { ref, onMounted, onBeforeUnmount } from 'vue';
import { titleCase } from '@/utils/index';
import { initSelectField } from '@/core/data/common';
export function useAnimatedModal() {
    const modalValue = ref({
        inValue: initSelectField(),
        outValue: initSelectField(),
    });
    const modalOpen = ref(false);
    const modalDialogClass = ref('');
    const toastVisible = ref(false);
    let closeTimer = null;
    let toastTimer = null;
    onMounted(() => {
        setAnimation('inValue', 'bounceIn');
        setAnimation('outValue', 'flipOutX');
    });
    onBeforeUnmount(() => {
        if (closeTimer)
            clearTimeout(closeTimer);
        if (toastTimer)
            clearTimeout(toastTimer);
    });
    function setAnimation(type, animation) {
        modalValue.value[type] = {
            selectedItems: [],
            selected: { label: titleCase(animation), value: animation },
            data: animation,
            errorMessage: '',
            type: 'dropdown',
        };
    }
    function handlePosition(value, type) {
        setAnimation(type, value.data);
        if (type === 'inValue') {
            modalDialogClass.value = `animated ${value.data}`;
        }
    }
    function openModal() {
        modalOpen.value = true;
        modalDialogClass.value = `animated ${modalValue.value.inValue.data}`;
    }
    function closeModal() {
        modalDialogClass.value = `animated ${modalValue.value.outValue.data}`;
        if (closeTimer)
            clearTimeout(closeTimer);
        if (toastTimer)
            clearTimeout(toastTimer);
        closeTimer = window.setTimeout(() => {
            modalOpen.value = false;
            toastVisible.value = true;
            toastTimer = window.setTimeout(() => {
                toastVisible.value = false;
                toastTimer = null;
            }, 2000);
            closeTimer = null;
        }, 500);
    }
    return {
        modalValue,
        modalOpen,
        modalDialogClass,
        toastVisible,
        handlePosition,
        openModal,
        closeModal,
    };
}
