<template>
  <form class="theme-form" @submit.prevent="submit()">
    <h4>Create your account</h4>
    <p>Enter your personal details to create account</p>
    <div class="form-group">
      <InputWrapper :title="'Your Name'" :class="'col-form-label pt-0'" :required="true">
        <div class="row g-2">
          <div class="col-sm-6">
            <InputField
              :formSubmitted="formSubmitted"
              :errorMessage="'First name is required.'"
              v-model:modelValue="form.firstName"
              :inputId="'first-name'"
              :placeholder="'First name'"
            />
          </div>
          <div class="col-sm-6">
            <InputField
              :formSubmitted="formSubmitted"
              :errorMessage="'Last name is required.'"
              v-model:modelValue="form.lastName"
              :inputId="'last-name'"
              :placeholder="'Last name'"
            />
          </div>
        </div>
      </InputWrapper>
    </div>
    <div class="form-group">
      <InputWrapper :title="'Email Address'" :required="true">
        <InputField
          :formSubmitted="formSubmitted"
          :errorMessage="'Email is required.'"
          v-model:modelValue="form.email"
          :inputId="'email'"
          :placeholder="'test@gmail.com'"
          :inputType="'email'"
          :browserValidation="props.browserValidation"
        />
      </InputWrapper>
    </div>
    <div class="form-group">
      <InputWrapper :title="'Password'" :required="true">
        <InputField
          :formSubmitted="formSubmitted"
          :errorMessage="'Password is required.'"
          v-model:modelValue="form.password"
          :inputId="'password'"
          :placeholder="'*********'"
          :inputType="showPassword ? 'text' : 'password'"
          :browserValidation="props.browserValidation"
        >
          <div class="show-hide" @click="togglePassword()">
            <span :class="{ show: !showPassword }"></span>
          </div>
        </InputField>
      </InputWrapper>
    </div>
    <div class="form-group mb-0">
      <div class="form-check">
        <input class="checkbox-primary form-check-input" id="checkbox1" type="checkbox" />
        <label class="text-muted form-check-label" for="checkbox1"
          >I agree to the terms & conditions and
          <a class="ms-2" href="#">Privacy Policy</a>
        </label>
      </div>
      <button class="btn btn-primary btn-block w-100 mt-3" type="submit">
        Create Account
      </button>
    </div>
    <h6 class="text-muted mt-4 or">Or signup with</h6>
    <div class="social mt-4">
      <div class="btn-showcase">
        <a
          class="btn btn-light social-disabled"
          href="javascript:void(0)"
          role="button"
          aria-disabled="true"
          @click.prevent
        >
          <vue-feather :type="'linkedin'" class="txt-linkedin"></vue-feather> LinkedIn
        </a>
        <a
          class="btn btn-light social-disabled"
          href="javascript:void(0)"
          role="button"
          aria-disabled="true"
          @click.prevent
        >
          <vue-feather :type="'twitter'" class="txt-twitter"></vue-feather>twitter
        </a>
        <a
          class="btn btn-light social-disabled"
          href="javascript:void(0)"
          role="button"
          aria-disabled="true"
          @click.prevent
        >
          <vue-feather :type="'facebook'" class="txt-fb"></vue-feather> facebook
        </a>
      </div>
    </div>
    <p class="mt-4 mb-0">
      Already have an account?<router-link class="ms-2" :to="props.path"
        >Sign in</router-link
      >
    </p>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive, defineAsyncComponent, onBeforeUnmount } from "vue";
import { toast } from "vue3-toastify";
import { useRouter } from "vue-router";
import { initInputField } from "@/core/data/common";
import { resetForm } from "@/utils/index";
import { validateForm } from "@/utils/validators/formValidators";

const InputWrapper = defineAsyncComponent(
  () => import("@/components/shared/formElements/InputWrapper.vue")
);
const InputField = defineAsyncComponent(
  () => import("@/components/shared/formElements/InputField.vue")
);

const props = withDefaults(
  defineProps<{
    path: string;
    browserValidation?: boolean;
  }>(),
  {
    browserValidation: false,
  }
);

const router = useRouter();

const formSubmitted = ref(false);
let form = reactive({
  firstName: initInputField(),
  lastName: initInputField(),
  email: initInputField(),
  password: initInputField(),
});

const showPassword = ref(false);
let timeoutRef: ReturnType<typeof setTimeout> | null = null;
function togglePassword() {
  showPassword.value = !showPassword.value;
}

function submit() {
  formSubmitted.value = true;
  const { isValid, formData } = validateForm(form);
  if (isValid) {
    toast.success(
      `First Name: ${formData.firstName}\n Last Name: ${formData.lastName}\n Email: ${formData.email}\n Password: ${formData.password}`
    );
    form = resetForm(form);
    formSubmitted.value = false;
    timeoutRef = setTimeout(() => {
      if (props.path) router.push(props.path);
    }, 1000);
  }
}

onBeforeUnmount(() => {
  if (timeoutRef) clearTimeout(timeoutRef);
});
</script>
