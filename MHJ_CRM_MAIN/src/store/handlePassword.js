import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import { initInputField, initSelectField } from '@/core/data/common';
import { validateForm } from '@/utils/validators/formValidators';
import { toast } from 'vue3-toastify';
import { routes } from '@/router/routes';
export const usePassword = defineStore('passwordStore', () => {
    const router = useRouter();
    // --- Form & OTP State ---
    const form = reactive({
        countryCode: initSelectField(),
        contactNumber: initInputField(),
    });
    const formSubmitted = ref(false);
    const otpSent = ref(false);
    const otpDigits = ref(Array(6).fill(''));
    const otp = ref('');
    const inputs = ref([]);
    // --- Timer State ---
    const resendEnabled = ref(false);
    const timer = ref(30);
    const intervalId = ref(null);
    const timeoutId = ref(null);
    const showLoader = ref(false);
    const handleInput = (index) => {
        const currentDigit = otpDigits.value[index];
        if (/^[0-9]$/.test(currentDigit)) {
            if (index < otpDigits.value.length - 1) {
                inputs.value[index + 1]?.focus();
            }
            if (otpDigits.value.every((digit) => digit !== '')) {
                otp.value = otpDigits.value.join('');
            }
        }
        else {
            otpDigits.value[index] = '';
        }
    };
    const handleKeyDown = (index, event) => {
        if (event.key === 'Backspace' && otpDigits.value[index] === '' && index > 0) {
            inputs.value[index - 1]?.focus();
        }
    };
    function sendOTP() {
        formSubmitted.value = true;
        const { isValid } = validateForm(form);
        if (isValid) {
            handleOTP();
            formSubmitted.value = false;
        }
    }
    function handleOTP() {
        const { isValid } = validateForm(form);
        if (isValid) {
            const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
            localStorage.setItem('otp', generatedOtp);
            otpSent.value = true;
            toast.success('OTP has been stored in localStorage...');
            // Reset OTP inputs
            otpDigits.value = Array(6).fill('');
            otp.value = '';
            startResendTimer();
        }
    }
    function verifyOTP() {
        showLoader.value = true;
        const storedOtp = localStorage.getItem('otp');
        // Clear previous timeout
        if (timeoutId.value) {
            clearTimeout(timeoutId.value);
            timeoutId.value = null;
        }
        if (storedOtp && otp.value) {
            if (storedOtp === otp.value) {
                timeoutId.value = setTimeout(() => {
                    showLoader.value = false;
                    router.push(routes.Auth.ResetPassword);
                }, 2000);
            }
            else {
                timeoutId.value = setTimeout(() => {
                    toast.error('Please enter valid OTP!!!');
                    showLoader.value = false;
                }, 2000);
            }
        }
    }
    function startResendTimer() {
        resendEnabled.value = false;
        timer.value = 30;
        // Clear previous interval
        if (intervalId.value) {
            clearInterval(intervalId.value);
            intervalId.value = null;
        }
        intervalId.value = setInterval(() => {
            timer.value--;
            if (timer.value <= 0) {
                resendEnabled.value = true;
                if (intervalId.value) {
                    clearInterval(intervalId.value);
                    intervalId.value = null;
                }
            }
        }, 1000);
    }
    function clearTimers() {
        if (intervalId.value) {
            clearInterval(intervalId.value);
            intervalId.value = null;
        }
        if (timeoutId.value) {
            clearTimeout(timeoutId.value);
            timeoutId.value = null;
        }
    }
    return {
        form,
        formSubmitted,
        otpSent,
        resendEnabled,
        timer,
        otpDigits,
        showLoader,
        inputs,
        sendOTP,
        handleOTP,
        handleInput,
        handleKeyDown,
        verifyOTP,
        clearTimers,
    };
});
