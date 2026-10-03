import { initCheckboxField } from '../common';
export const selectTheme = [
    {
        label: 'Mofi',
        value: 'Mofi',
    },
    {
        label: 'Tivo',
        value: 'Tivo',
    },
    {
        label: 'Wingo',
        value: 'Wingo',
    },
];
export const selectSizing = [
    {
        label: "What's Your Hobbies",
        value: "What's Your Hobbies",
    },
    {
        label: 'Kho-kho',
        value: 'Kho-kho',
    },
    {
        label: 'Reading Books',
        value: 'Reading Books',
    },
    {
        label: 'Creativity',
        value: 'Creativity',
    },
];
export const selectNumber = [
    {
        label: 'I',
        value: 'I',
    },
    {
        label: 'II',
        value: 'II',
    },
    {
        label: 'III',
        value: 'III',
    },
    {
        label: 'IV',
        value: 'IV',
    },
    {
        label: 'V',
        value: 'V',
    },
];
export const selectPainting = [
    {
        label: 'Landscape ',
        value: 'Landscape ',
    },
    {
        label: 'Portrait ',
        value: 'Portrait ',
    },
    {
        label: 'Oil Painting ',
        value: 'Oil Painting ',
    },
    {
        label: 'Abstract art ',
        value: 'Abstract art ',
    },
    {
        label: 'Acrylic ',
        value: 'Acrylic ',
    },
];
export const selectMenu = [
    {
        label: 'One ',
        value: 'One ',
    },
    {
        label: 'Two ',
        value: 'Two ',
    },
    {
        label: 'Three ',
        value: 'Three ',
    },
];
export const themeSelection = [
    {
        label: 'Tivo ',
        value: 'Tivo ',
    },
    {
        label: 'Mofi ',
        value: 'Mofi ',
    },
    {
        label: 'Roxo ',
        value: 'Roxo ',
    },
    {
        label: 'Oslo ',
        value: 'Oslo ',
    },
    {
        label: 'Voxo ',
        value: 'Voxo ',
    },
    {
        label: 'Sheltos ',
        value: 'Sheltos ',
    },
    {
        label: 'Petkart ',
        value: 'Petkart ',
    },
    {
        label: 'Zeta ',
        value: 'Zeta ',
    },
];
export const selectColor = [
    {
        label: 'Red ',
        value: 'Red ',
    },
    {
        label: 'Yellow ',
        value: 'Yellow ',
    },
    {
        label: 'Orange ',
        value: 'Orange ',
    },
    {
        label: 'White ',
        value: 'White ',
    },
    {
        label: 'Black ',
        value: 'Black ',
    },
    {
        label: 'Gray ',
        value: 'Gray ',
    },
    {
        label: 'Brown ',
        value: 'Brown ',
    },
    {
        label: 'Purple ',
        value: 'Purple ',
    },
];
export const selectChocolates = [
    {
        label: 'Dark Chocolates',
        value: 'Dark Chocolates',
    },
    {
        label: 'Dairy Milk',
        value: 'Dairy Milk',
    },
    {
        label: 'Kitkat',
        value: 'Kitkat',
    },
];
export const defaultCheckbox = [
    {
        id: 1,
        title: 'Default Checks',
        details: [
            {
                label: 'Default checkbox',
                id: 'flexCheckDefault',
                checked: false,
                disable: false,
                model: initCheckboxField(),
            },
            {
                label: 'Checked checkbox',
                id: 'flexCheckDefault2',
                checked: true,
                disable: false,
                model: initCheckboxField(),
            },
        ],
    },
    {
        id: 2,
        title: 'Disabled Checks',
        details: [
            {
                label: 'Disabled checkbox',
                id: 'flexCheckDefault3',
                checked: false,
                disable: true,
                model: initCheckboxField(),
            },
            {
                label: 'Disabled checked checkbox',
                id: 'flexCheckDefault4',
                checked: true,
                disable: true,
                model: initCheckboxField(),
            },
        ],
    },
    {
        id: 3,
        title: 'Right Checks',
        details: [
            {
                label: 'Reverse checkbox',
                id: 'flexCheckDefault5',
                checked: false,
                disable: false,
                model: initCheckboxField(),
                reverseLabel: true,
            },
            {
                label: 'Disabled reverse checkbox',
                id: 'flexCheckDefault6',
                checked: true,
                disable: true,
                model: initCheckboxField(),
                reverseLabel: true,
            },
        ],
    },
];
export const borderCheckbox = [
    {
        class: 'primary',
        id: 'checkbox-primary-1',
        label: 'Primary - checkbox-primary',
        checked: true,
        model: initCheckboxField(),
    },
    {
        class: 'secondary',
        id: 'checkbox-secondary-1',
        label: 'Secondary - checkbox-secondary',
        checked: false,
        model: initCheckboxField(),
    },
    {
        class: 'success',
        id: 'checkbox-success-1',
        label: 'Success - checkbox-success',
        checked: false,
        model: initCheckboxField(),
    },
];
export const iconsCheckbox = [
    {
        label: 'Sliders',
        id: 'checkbox-1',
        icon: 'fa-solid fa-sliders',
        checked: false,
        model: initCheckboxField(),
    },
    {
        label: 'User',
        id: 'checkbox-2',
        icon: 'fa-solid fa-user',
        checked: true,
        model: initCheckboxField(),
    },
    {
        label: 'Tags',
        id: 'checkbox-3',
        icon: 'fa-solid fa-tag',
        checked: false,
        model: initCheckboxField(),
    },
    {
        label: 'Android',
        id: 'checkbox-4',
        icon: 'fa-brands fa-android',
        checked: false,
        model: initCheckboxField(),
    },
    {
        label: 'Hidden',
        id: 'checkbox-5',
        icon: 'fa-regular fa-eye-slash',
        checked: false,
        model: initCheckboxField(),
    },
    {
        label: 'Folder',
        id: 'checkbox-6',
        icon: 'fa-regular fa-folder-open',
        checked: false,
        model: initCheckboxField(),
    },
    {
        label: 'Send',
        id: 'checkbox-7',
        icon: 'fa-solid fa-paper-plane',
        checked: false,
        model: initCheckboxField(),
    },
    {
        label: 'Upload',
        id: 'checkbox-8',
        icon: 'fa-solid fa-cloud-arrow-up',
        checked: false,
        model: initCheckboxField(),
    },
];
export const filledCheckbox = [
    {
        class: 'solid-warning',
        label: 'Warning-checkbox-solid-warning',
        checked: true,
        id: 'solid4',
        model: initCheckboxField(),
    },
    {
        class: 'solid-danger',
        label: 'Danger- checkbox-solid-danger',
        checked: false,
        id: 'solid5',
        model: initCheckboxField(),
    },
    {
        class: 'solid-info',
        label: 'Info - checkbox-solid-info',
        checked: false,
        id: 'solid6',
        model: initCheckboxField(),
    },
];
export const defaultRadio = [
    {
        id: 1,
        title: 'Custom Radios',
        selectedValue: 'defaultCheckRadio',
        details: [
            {
                id: 'defaultRadio',
                label: 'Default radio',
                name: 'defaultRadio',
                checked: false,
                disable: false,
            },
            {
                id: 'defaultCheckRadio',
                label: 'Default checked radio',
                name: 'defaultCheckRadio',
                checked: true,
                disable: false,
            },
        ],
    },
    {
        id: 2,
        title: 'Disabled Radios',
        selectedValue: 'disabledCheckRadio',
        details: [
            {
                id: 'disableRadio',
                label: 'Disabled radio',
                checked: false,
                name: 'disableRadio',
                disable: true,
            },
            {
                id: 'disabledCheckRadio',
                label: 'Disabled checked radio',
                name: 'disabledCheckRadio',
                checked: true,
                disable: true,
            },
        ],
    },
    {
        id: 3,
        title: 'Right Radios',
        selectedValue: 'rightCheckRadio',
        details: [
            {
                id: 'rightRadio',
                label: 'Default radio',
                checked: false,
                name: 'rightRadio',
                disable: false,
                reverseLabel: true,
            },
            {
                id: 'rightCheckRadio',
                label: 'Disabled checked radio',
                name: 'rightCheckRadio',
                checked: true,
                disable: true,
                reverseLabel: true,
            },
        ],
    },
];
export const imageCheckbox = [
    {
        id: 1,
        title: 'Custom',
        image: 'switch/1.jpg',
        checked: false,
        disabled: false,
    },
    {
        id: 2,
        title: 'Checked Image',
        image: 'switch/2.jpg',
        checked: true,
        disabled: false,
    },
    {
        id: 3,
        title: 'Disable Image',
        image: 'switch/3.jpg',
        checked: false,
        disabled: true,
    },
    {
        id: 4,
        title: 'Disable Checked Image',
        image: 'switch/4.jpg',
        checked: true,
        disabled: true,
    },
];
export const imageRadio = [
    {
        id: 1,
        title: 'Custom',
        image: 'switch/5.jpg',
        value: 'custom',
        checked: false,
        disabled: false,
    },
    {
        id: 2,
        title: 'Checked Image',
        image: 'switch/6.jpg',
        value: 'checked',
        checked: false,
        disabled: false,
    },
    {
        id: 3,
        title: 'Disable Image',
        value: 'disable',
        image: 'switch/7.jpg',
        checked: false,
        disabled: true,
    },
    {
        id: 3,
        title: 'Disable Image',
        value: 'disable',
        image: 'switch/8.jpg',
        checked: true,
        disabled: true,
    },
];
export const borderedRadio = [
    {
        label: 'Koho Theme',
        checked: true,
        class: 'secondary',
        id: 'radio22',
    },
    {
        label: 'Roxo Theme',
        checked: false,
        class: 'success',
        id: 'radio55',
    },
    {
        label: 'Voxo Theme',
        checked: false,
        class: 'danger',
        id: 'radio33',
    },
    {
        label: 'Zeta Theme',
        checked: false,
        class: 'info',
        id: 'radio66',
    },
];
export const iconsRadio = [
    {
        label: 'Sliders',
        icon: 'sliders',
        checked: false,
        id: 'radio-icon',
    },
    {
        label: 'Hidden',
        icon: 'eye-slash',
        checked: true,
        id: 'radio-icon4',
    },
    {
        label: 'Folder',
        icon: 'folder-open',
        checked: false,
        id: 'radio-icon5',
    },
    {
        label: 'Send',
        icon: 'paper-plane',
        checked: false,
        id: 'radio-icon7',
    },
    {
        label: 'Users',
        icon: 'user',
        checked: false,
        id: 'radio-icon8',
    },
    {
        label: 'Trash',
        icon: 'trash fa-solid',
        checked: false,
        id: 'radio-icon9',
    },
    {
        label: 'github',
        icon: 'github fa-brands',
        checked: false,
        id: 'radio-icon10',
    },
    {
        label: 'Play',
        icon: 'play-circle',
        checked: false,
        id: 'radio-icon10',
    },
];
export const filledRadio = [
    {
        class: 'primary',
        label: 'Product',
        checked: true,
        id: 'radio111',
    },
    {
        class: 'warning',
        label: 'Order history',
        checked: false,
        id: 'radio333',
    },
    {
        class: 'danger',
        label: 'Invoice',
        checked: false,
        id: 'radio444',
    },
    {
        class: 'info',
        label: 'Wishlist',
        checked: false,
        id: 'radio666',
    },
];
export const defaultSwitch = [
    {
        id: 1,
        title: 'Custom Switches',
        class: 'col-md-6 col-xl-4',
        details: [
            {
                label: 'Default switch checkbox input',
                checked: false,
                id: 'flexSwitchCheckDefault',
                disable: false,
            },
            {
                label: 'Checked switch checkbox input',
                checked: true,
                id: 'flexSwitchCheckChecked',
                disable: false,
            },
        ],
    },
    {
        id: 2,
        title: 'Disabled Switches',
        class: 'col-md-6 col-xl-4',
        details: [
            {
                label: 'Disabled switch checkbox input',
                checked: false,
                id: 'flexSwitchCheckDisabled',
                disable: true,
            },
            {
                label: 'Disabled checked switch checkbox',
                checked: true,
                id: 'flexSwitchCheckDisabledChecked',
                disable: true,
            },
        ],
    },
    {
        id: 3,
        title: 'Right Switches',
        class: 'col-md-12 col-xl-4',
        reverseLabel: true,
        details: [
            {
                label: 'Reverse switch checkbox input',
                checked: false,
                id: 'flexSwitchCheckReverse',
                disable: false,
            },
            {
                label: 'Disabled switch checkbox input',
                checked: false,
                id: 'flexSwitchCheckReverseDisabled',
                disable: true,
            },
        ],
    },
];
export const inlineCheckbox = [
    {
        id: 'inlineCheckbox1',
        label: 'I',
        checked: true,
        disable: false,
        model: initCheckboxField(),
    },
    {
        id: 'inlineCheckbox2',
        label: 'II',
        checked: false,
        disable: false,
        model: initCheckboxField(),
    },
    {
        id: 'inlineCheckbox3',
        label: 'III',
        checked: false,
        disable: true,
        model: initCheckboxField(),
    },
];
export const inlineRadio = [
    {
        id: 'inlineRadio1',
        value: 'option1',
        label: '1',
        checked: true,
        disable: false,
    },
    {
        id: 'inlineRadio2',
        value: 'option2',
        label: '2',
        checked: false,
        disable: false,
    },
    {
        id: 'inlineRadio3',
        value: 'option3',
        label: '3 (disabled)',
        checked: false,
        disable: true,
    },
];
export const inlineSwitch = [
    {
        id: 'flexSwitchCheckDefault2',
        value: 'option1',
        checked: true,
        disable: false,
    },
    {
        id: 'flexSwitchCheckDefault3',
        value: 'option2',
        checked: false,
        disable: false,
    },
    {
        id: 'flexSwitchCheckDisabled3',
        value: 'option3',
        checked: false,
        disable: true,
    },
];
export const paymentDetails = [
    {
        label: 'Visa',
        checked: false,
        class: 'primary',
        id: 'visa-card',
    },
    {
        label: 'MasterCard',
        checked: false,
        class: 'secondary',
        id: 'master-card',
    },
    {
        label: 'Paypal',
        checked: true,
        class: 'tertiary',
        id: 'paypal',
    },
    {
        label: 'G-pay',
        checked: false,
        class: 'success',
        id: 'g-pay',
    },
    {
        label: 'Bitpay',
        checked: false,
        class: 'info',
        id: 'bitpay',
    },
];
export const socialMedia = [
    {
        label: 'Instagram',
        checked: false,
        class: 'primary',
        id: 'instagram',
    },
    {
        label: 'Facebook',
        checked: false,
        class: 'secondary',
        id: 'facebook',
    },
    {
        label: 'Whatsapp',
        checked: true,
        class: 'tertiary',
        id: 'whatsapp',
    },
    {
        label: 'Twitter',
        checked: false,
        class: 'danger',
        id: 'twitter',
    },
];
export const basicCheckbox = [
    {
        label: 'Blog',
        checked: false,
        id: 'inline-1',
        model: initCheckboxField(),
    },
    {
        label: 'Gallery',
        checked: true,
        id: 'inline-2',
        model: initCheckboxField(),
    },
    {
        label: 'Faq',
        checked: false,
        id: 'inline-3',
        model: initCheckboxField(),
    },
    {
        label: 'Email',
        checked: false,
        id: 'inline-4',
        model: initCheckboxField(),
    },
    {
        label: 'Icons',
        checked: false,
        id: 'inline-5',
        model: initCheckboxField(),
    },
];
export const simpleRadio = [
    {
        label: 'Maps',
        checked: true,
        id: 'radioinline1',
    },
    {
        label: 'Tasks',
        checked: false,
        id: 'radioinline2',
    },
    {
        label: 'To-do',
        checked: false,
        id: 'radioinline3',
    },
    {
        label: 'Forms',
        checked: false,
        id: 'radioinline4',
    },
    {
        label: 'Login',
        checked: false,
        id: 'radioinline5',
    },
];
export const radioToggle = [
    {
        id: 'option1',
        label: 'Checked',
        checked: true,
        disabled: false,
    },
    {
        id: 'option2',
        label: 'Radio',
        checked: false,
        disabled: false,
    },
    {
        id: 'option3',
        label: 'Disabled',
        checked: false,
        disabled: true,
    },
];
export const outlineCheckbox = [
    {
        id: 'btn-check-outlined',
        class: 'info',
        type: 'checkbox',
        label: 'Single Toggle',
        checked: false,
        disabled: false,
    },
    {
        id: 'btn-check-2-outlined',
        class: 'danger',
        type: 'checkbox',
        label: 'Checked',
        checked: true,
        disabled: false,
    },
    {
        id: 'success-outlined',
        class: 'success',
        type: 'radio',
        label: 'Checked Success Radio',
        checked: true,
        disabled: false,
    },
    {
        id: 'danger-outlined',
        class: 'dark',
        type: 'radio',
        label: 'Dark Radio',
        checked: false,
        disabled: false,
    },
];
export const variationRadio = [
    {
        class: 'col-xl-4 col-md-6',
        subTitle: 'Select your payment method',
        details: [
            {
                id: 'ptm11',
                label: 'BOB',
                image: 'ecommerce/card.png',
                name: 'radio1',
                checked: false,
            },
            {
                id: 'ptm22',
                label: 'MasterCard',
                image: 'ecommerce/mastercard.png',
                name: 'radio1',
                checked: true,
            },
            {
                id: 'ptm33',
                label: 'Paypal',
                image: 'ecommerce/paypal.png',
                name: 'radio1',
                checked: false,
            },
            {
                id: 'ptm44',
                label: 'VISA',
                image: 'ecommerce/visa.png',
                name: 'radio1',
                checked: false,
            },
        ],
    },
    {
        class: 'col-xl-4 col-md-6',
        subTitle: 'What are the most important things to learn about web design?',
        details: [
            {
                label: 'A. HTML',
                id: 'ptm101',
                name: 'radio2',
                checked: false,
            },
            {
                label: 'B. CSS',
                id: 'ptm201',
                name: 'radio2',
                checked: false,
            },
            {
                label: 'C. Javascript',
                id: 'ptm301',
                name: 'radio2',
                checked: true,
            },
            {
                label: 'D. Above the all',
                id: 'ptm401',
                name: 'radio2',
                checked: false,
            },
        ],
    },
    {
        class: 'col-xl-4',
        subTitle: 'Radios With Creative Options & SVG Icons',
        details: [
            {
                label: 'The notification icon displayed new messages.',
                icon: 'notification',
                id: 'ptm100',
                name: 'radio3',
                checked: false,
                class: 'danger',
            },
            {
                label: 'The download icon indicated completion.',
                icon: 'stroke-calendar',
                id: 'ptm200',
                name: 'radio3',
                checked: false,
                class: 'success',
            },
            {
                label: 'The tag icon allowed easy categorization.',
                icon: 'tag',
                id: 'ptm300',
                name: 'radio3',
                checked: true,
                class: 'dark',
            },
            {
                label: 'The email icon was inaccessibly located.',
                icon: 'stroke-email',
                id: 'ptm400',
                name: 'radio3',
                checked: false,
                class: 'primary',
            },
        ],
    },
];
export const defaultStyle = [
    {
        id: 'radio14',
        name: 'radio1',
        value: 'option1',
        label: 'COD',
        badge: '50 INR',
        description: 'Estimated 2 Day Shipping ( Duties end tax may be due delivery )',
        badgeClass: 'primary',
        radioClass: 'radio-primary',
    },
    {
        id: 'radio13',
        name: 'radio1',
        value: 'option1',
        label: 'Fast',
        badge: '100 INR',
        description: 'Estimated 1 Day Shipping ( Duties end tax may be due delivery )',
        badgeClass: 'secondary',
        radioClass: 'radio-secondary',
    },
];
export const withoutBorderStyle = [
    {
        id: 'checkbox11',
        type: 'checkbox',
        checked: true,
        price: '$39',
        speed: '100 MBPS',
        badgeClass: 'warning',
        description: 'Plans for 2/4/6 months are offered to new clients.',
        checkboxClass: 'checkbox-warning',
    },
    {
        id: 'checkbox22',
        type: 'checkbox',
        checked: false,
        price: '$50',
        speed: 'Hired',
        badgeClass: 'info',
        description: 'Plans for 2 years projects offered to new clients.',
        checkboxClass: 'checkbox-info',
    },
];
export const inlineStyle = [
    {
        label: 'Estimated 14-20 Day Shipping ( Duties end taxes may be due upon delivery )',
        title: 'COD',
        digit: '50 INR',
        class: 'warning',
        id: 'radio19',
    },
    {
        label: 'Estimated 1 Day Shipping ( Duties end taxes may be due upon delivery )',
        title: 'Fast',
        digit: '100 INR',
        class: 'secondary',
        id: 'radio20',
    },
    {
        label: 'Estimated 3 Day Shipping ( Duties end taxes may be due upon delivery )',
        title: 'Standard',
        digit: '80 INR',
        class: 'secondary',
        id: 'radio21',
    },
    {
        label: 'Estimated 15 Day Shipping ( Duties end taxes may be due upon delivery )',
        title: 'Local',
        digit: 'Free',
        class: 'warning',
        id: 'radio22',
    },
];
export const verticalStyle = [
    {
        title: 'Delivery Options',
        selectedValue: 'option3',
        details: [
            {
                description: 'Estimated 10 to 15 Day Shipping ( Duties end tax may be due delivery )',
                title: 'COD',
                digit: '50 INR',
                class: 'primary',
                id: 'radio23',
                checked: false,
                name: 'radio5',
                value: 'option1',
                badgeClass: 'megaoption-space',
            },
            {
                description: 'Estimated 10 to 12 Day Shipping ( Duties end tax may be due delivery )',
                title: 'Fast',
                digit: '100 INR',
                class: 'secondary',
                id: 'radio24',
                checked: false,
                name: 'radio5',
                value: 'option2',
                badgeClass: 'megaoption-space',
            },
            {
                description: 'Estimated 3 to 5 Day Shipping ( Duties end tax may be due delivery )',
                title: 'STANDARD',
                digit: '80 INR',
                class: 'success',
                id: 'radio25',
                checked: true,
                name: 'radio5',
                value: 'option3',
                badgeClass: 'megaoption-space',
            },
            {
                description: 'Estimated 3 to 5 Day Shipping ( Duties end taxes may be due upon delivery )',
                title: 'Local',
                digit: 'Free',
                class: 'info',
                id: 'radio5',
                checked: false,
                name: 'radio5',
                value: 'option4',
                badgeClass: 'megaoption-space',
            },
        ],
    },
    {
        title: 'Buying Options',
        selectedValue: 'option5',
        details: [
            {
                label: '5 start rating',
                rating: 5,
                title: 'Pixelstrap',
                digit: '250 INR',
                class: 'warning',
                id: 'radio26',
                checked: true,
                name: 'radio7',
                value: 'option5',
            },
            {
                label: '2 start rating',
                rating: 2,
                title: 'Multikart',
                digit: '150 INR',
                class: 'danger',
                id: 'radio27',
                checked: false,
                name: 'radio7',
                value: 'option6',
            },
        ],
    },
];
export const horizontalStyle = [
    {
        title: 'Delivery Options',
        selectedValue: 'option30',
        details: [
            {
                description: 'Estimated 5 Day Shipping ( Duties end tax may be due delivery )',
                title: 'COD',
                digit: '50 INR',
                class: 'primary',
                id: 'radio30',
                checked: false,
                name: 'radio22',
                value: 'option30',
                badgeClass: 'megaoption-space',
            },
            {
                description: 'Estimated 1 Day Shipping ( Duties end tax may be due delivery )',
                title: 'Fast',
                digit: '100 INR',
                class: 'secondary',
                divClass: 'offset-sm-3',
                id: 'radio31',
                checked: true,
                name: 'radio22',
                value: 'option31',
                badgeClass: 'megaoption-space',
            },
        ],
    },
    {
        title: 'Buying Options',
        selectedValue: 'option32',
        details: [
            {
                label: '5 start rating',
                rating: 5,
                title: 'Pixelstrap',
                digit: '250 INR',
                class: 'success',
                id: 'radio32',
                checked: true,
                name: 'radio23',
                value: 'option32',
            },
            {
                label: '4 start rating',
                rating: 4,
                title: 'Tivo',
                digit: '150 INR',
                class: 'info',
                divClass: 'offset-sm-3',
                id: 'radio33',
                checked: false,
                name: 'radio23',
                value: 'option33',
            },
        ],
    },
];
export const solidBorderStyle = [
    {
        id: 'radio15',
        name: 'radio1',
        value: 'option1',
        imageSrc: 'blog/img.png',
        imageAlt: 'home',
        description: 'We provide end to end digital solutions, right from designing your website/application development: Domain, Web Hosting, Email Hosting Registration.',
    },
    {
        id: 'radio16',
        name: 'radio1',
        value: 'option1',
        imageSrc: 'blog/blog.jpg',
        imageAlt: 'home',
        description: 'When someone visits your homepage, your design should inspire them to stay. Therefore, your value proposition should be established on the homepage for visitors.',
    },
];
export const offerStyleBorder = [
    {
        id: 'checkbox50',
        type: 'checkbox',
        checked: false,
        imageSrc: 'email-template/11.jpg',
        imageAlt: 'fruits',
        description: "Fruits are an essential part of a healthy diet, and offer many health benefits. They're packed with vitamins, minerals, and fiber, which can help improve digestion.",
    },
    {
        id: 'checkbox101',
        type: 'checkbox',
        checked: true,
        imageSrc: 'email-template/10.jpg',
        imageAlt: 'flowers',
        description: 'Flowers have long been used to express feelings and sentiments, and each bloom has its own distinct significance. For instance, while daisies signify innocence and purity.',
    },
];
export const checkBox = [
    {
        label: 'Reading',
        id: 'check-a',
        class: 'success',
        checked: false,
    },
    {
        label: 'Watching TV',
        id: 'check-b',
        class: 'success',
        checked: true,
    },
    {
        label: 'Listening to music',
        id: 'check-c',
        class: 'danger',
        checked: false,
    },
    {
        label: 'Playing video games',
        id: 'check-d',
        class: 'danger',
        checked: false,
    },
    {
        label: 'Painting/Drawing',
        id: 'check-e',
        class: 'success',
        checked: false,
    },
];
export const themeSales = [
    {
        list: 'Mofi',
        sales: '380 sales',
        checked: false,
    },
    {
        list: 'Edmin',
        sales: '1.8K Sales',
        checked: false,
    },
    {
        list: 'Multikart',
        sales: '3.4k Sales',
        checked: false,
    },
    {
        list: 'Viho',
        sales: '2k Sales',
        checked: true,
    },
];
export const nations = [
    { value: 'San Francisco' },
    { value: 'New York' },
    { value: 'Seattle' },
    { value: 'Los Angeles' },
    { value: 'Chicago' },
    { value: 'India' },
];
