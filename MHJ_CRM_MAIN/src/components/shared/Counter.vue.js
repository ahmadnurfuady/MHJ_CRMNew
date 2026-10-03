import { ref, computed, watch, onBeforeUnmount } from 'vue';
const props = defineProps();
const displayValue = ref('0');
const count = ref(0);
const intervalTime = ref(50);
let intervalId = null;
// Extract numeric value, prefix, and suffix from any input like "$5000+", "₹100%", etc.
const numericValue = computed(() => {
    const val = String(props.counter ?? '');
    const match = val.match(/(\D*)(\d+(?:\.\d+)?)(\D*)/); // Capture prefix, number, and suffix
    return match ? parseFloat(match[2]) : 0;
});
const prefix = computed(() => {
    const val = String(props.counter ?? '');
    const match = val.match(/^(\D*)\d/); // Non-digit characters before number
    return match ? match[1] : '';
});
const suffix = computed(() => {
    const val = String(props.counter ?? '');
    const match = val.match(/\d(\D*)$/); // Non-digit characters after number
    return match ? match[1] : '';
});
function formatValue(value) {
    return new Intl.NumberFormat('en-IN').format(value);
}
function startCounter() {
    if (intervalId) {
        clearInterval(intervalId);
    }
    count.value = 0;
    const step = Math.ceil(numericValue.value / 100);
    intervalId = setInterval(() => {
        if (count.value < numericValue.value) {
            count.value += step;
            if (count.value > numericValue.value)
                count.value = numericValue.value;
        }
        else {
            if (intervalId) {
                clearInterval(intervalId);
                intervalId = null;
            }
        }
        displayValue.value = `${prefix.value}${formatValue(count.value)}${suffix.value}`;
    }, intervalTime.value);
}
onBeforeUnmount(() => {
    if (intervalId) {
        clearInterval(intervalId);
    }
});
watch(() => props.counter, startCounter, { immediate: true });
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
(__VLS_ctx.displayValue);
// @ts-ignore
[displayValue,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
