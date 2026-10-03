import { defineAsyncComponent } from 'vue';
import Swal from 'sweetalert2';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
async function open() {
    const { value: formValues } = await Swal.fire({
        title: 'Registration Form',
        html: `
        <div class="swal2-wrapper custom-input">
          <div class="mb-3">
            <label for="swal-input-email" class="form-label">Email Address:</label>
            <input id="swal-input-email" class="swal2-input form-control" placeholder="Enter your email address">
          </div>
          <div class="mb-3">
            <label for="swal-input-password" class="form-label">Your Password:</label>
            <input type="password" id="swal-input-password" class="swal2-input form-control" placeholder="Enter your password">
          </div>
          <div class="swal2-select">
            <label for="swal-input-select">Select Country:</label>
            <select id="swal-input-select" class="swal2-input form-select">
              <option value="India">India</option>
              <option value="US">US</option>
              <option value="UK">UK</option>
              <option value="Africa">Africa</option>
            </select>
          </div>
          <div class="swal2-genders">
            <label for="swal-input-radio">Gender:</label>
            <div id="swal-input-radio" class="swal2-radio-group">
              <input type="radio" id="radio-male" class="form-check-input checkbox-primary mt-0" name="swal-radio" value="Male">
              <label for="radio-male" class="mb-0">Male</label>
              <input type="radio" id="radio-female" class="form-check-input checkbox-primary ms-2 mt-0" name="swal-radio" value="Female">
              <label for="radio-female" class="mb-0">Female</label>
            </div>
          </div>
          <div class="swal2-checkbox justify-content-start">
            <input type="checkbox" id="swal-input-accept" class="form-check-input checkbox-primary mx-0">
            <label for="swal-input-accept" class="f-16 mx-0 mb-0">I accept the terms and conditions.</label>
          </div>
        </div>`,
        focusConfirm: false,
        preConfirm: () => {
            const email = document.getElementById('swal-input-email')?.value;
            const password = document.getElementById('swal-input-password')?.value;
            const country = document.getElementById('swal-input-select')?.value;
            const gender = document.querySelector('input[name="swal-radio"]:checked')?.value;
            const accept = document.getElementById('swal-input-accept')?.checked;
            return [email, password, country, gender, accept];
        },
    });
    if (formValues) {
        const [email, password, country, gender, accept] = formValues;
        Swal.fire(`
        Entered Email:  ${email}
        Entered Password:  ${password}
        Selected Country:  ${country}
        Selected Gender :  ${gender}
        Agreed with T&C:  ${accept ? 'Yes' : 'No'}
      `);
    }
}
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
    cardClass: ('height-equal'),
    headerTitle: ('Registration Form'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    cardClass: ('height-equal'),
    headerTitle: ('Registration Form'),
    border: (true),
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
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
}
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.open());
            // @ts-ignore
            [open,];
        } },
    ...{ class: "btn btn-primary sweet-20" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['sweet-20']} */ ;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
