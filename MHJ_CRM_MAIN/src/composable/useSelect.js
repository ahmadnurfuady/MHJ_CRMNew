import { ref, computed, watch, nextTick, onMounted, } from 'vue';
export function useSmartSelect(props, emits) {
    const showDropdown = ref(false);
    const search = ref('');
    const highlightedIndex = ref(0);
    const wrapperRef = ref(null);
    const searchInput = ref(null);
    const optionRefs = ref([]);
    const filteredOptions = computed(() => {
        return props.options.filter((option) => {
            const key = props.displayKey;
            const val = option[key];
            if (typeof val === 'string' || typeof val === 'number') {
                return val.toString().toLowerCase().includes(search.value.toLowerCase());
            }
            return false;
        });
    });
    const displaySelected = computed(() => {
        if (props.multiSelect && Array.isArray(props.modelValue.selectedItems)) {
            return props.modelValue.selectedItems;
        }
        else if (!props.multiSelect && props.modelValue?.selected && props.displayKey) {
            return props.modelValue.selected[props.displayKey] || '';
        }
        return '';
    });
    onMounted(() => {
        if (props.modelValue && filteredOptions.value.length) {
            if (props.modelValue.selected) {
                handleSelect(props.modelValue.selected);
            }
            setInitialHighlightedIndex();
        }
    });
    const toggleDropdown = (event) => {
        showDropdown.value = !showDropdown.value;
        if (showDropdown.value) {
            event?.preventDefault();
            nextTick(() => {
                searchInput.value?.focus({
                    preventScroll: true,
                });
            });
        }
    };
    function isSelected(option) {
        const key = props.getValueKey;
        if (props.multiSelect) {
            return (Array.isArray(props.modelValue.selectedItems) &&
                props.modelValue.selectedItems.some((item) => item[key] === option[key]));
        }
        return props.modelValue.selected?.[key] === option[key];
    }
    function handleSelect(option) {
        if (!props.getValueKey)
            return;
        const key = props.getValueKey;
        if (props.multiSelect) {
            const selected = Array.isArray(props.modelValue.selectedItems)
                ? [...props.modelValue.selectedItems]
                : [];
            const index = selected.findIndex((item) => item[key] === option[key]);
            if (index >= 0) {
                selected.splice(index, 1);
            }
            else {
                selected.push(option);
            }
            emits('update:modelValue', {
                selectedItems: selected,
                data: selected.map((item) => item[key]),
                errorMessage: '',
                type: 'dropdown',
            });
        }
        else {
            emits('update:modelValue', {
                selected: option,
                data: option[key],
                errorMessage: '',
                type: 'dropdown',
            });
            showDropdown.value = false;
            search.value = '';
        }
        validate();
    }
    function handleKeydown(event) {
        if (event.key === 'ArrowDown') {
            highlightedIndex.value = (highlightedIndex.value + 1) % filteredOptions.value.length;
            event.preventDefault();
            scrollToHighlighted();
        }
        else if (event.key === 'ArrowUp') {
            highlightedIndex.value =
                (highlightedIndex.value - 1 + filteredOptions.value.length) % filteredOptions.value.length;
            event.preventDefault();
            scrollToHighlighted();
        }
        else if (event.key === 'Enter') {
            if (filteredOptions.value[highlightedIndex.value]) {
                handleSelect(filteredOptions.value[highlightedIndex.value]);
                event.preventDefault();
            }
        }
    }
    function setInitialHighlightedIndex() {
        if (props.modelValue && props.modelValue.selected && filteredOptions.value.length) {
            const selectedIndex = filteredOptions.value.findIndex((item) => {
                if (props.displayKey) {
                    return item[props.displayKey] === props.modelValue.selected?.label;
                }
                else if (props.getValueKey) {
                    return item[props.getValueKey] === props.modelValue.selected?.value;
                }
            });
            highlightedIndex.value = selectedIndex !== -1 ? selectedIndex : 0;
        }
    }
    function setOptionRef(el, index) {
        if (el instanceof HTMLElement) {
            optionRefs.value[index] = el;
        }
    }
    function scrollToHighlighted() {
        const el = optionRefs.value[highlightedIndex.value];
        if (el)
            el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    function validate() {
        const isEmpty = (props.multiSelect && (!props.modelValue?.data || props.modelValue?.data?.length === 0)) ||
            (!props.multiSelect && !props.modelValue?.data);
        props.modelValue.errorMessage =
            isEmpty && props.required ? props.errorMessage || 'Please select a value' : '';
    }
    function clear() {
        emits('update:modelValue', props.multiSelect
            ? {
                selectedItems: [],
                data: [],
                errorMessage: props.required ? props.errorMessage || 'Please select a value' : '',
            }
            : {
                selected: null,
                data: '',
                errorMessage: props.required ? props.errorMessage || 'Please select a value' : '',
            });
        search.value = '';
    }
    watch(() => props.modelValue, () => (highlightedIndex.value = 0));
    watch(() => [props.formSubmitted, props.modelValue.data], () => validate());
    return {
        showDropdown,
        search,
        wrapperRef,
        searchInput,
        highlightedIndex,
        displaySelected,
        filteredOptions,
        toggleDropdown,
        isSelected,
        handleSelect,
        handleKeydown,
        setOptionRef,
        clear,
    };
}
