import {
  BlockButtonVariation,
  ButtonGroup,
  ButtonGroupVariation,
  Item,
  ToolbarGroup,
  Ui,
  Variations,
} from '@/types/buttons'

export const commonButtons: ButtonGroup[] = [
  {
    id: 1,
    headTitle: 'Flat button',
    bodyClass: 'common-flex',
    description: 'Add <code>.btn-square</code> class for flat button',
    items: [
      {
        class: 'btn btn-square btn-primary',
        text: 'Primary Button',
      },
      {
        class: 'btn btn-square btn-secondary',
        text: 'Secondary Button',
      },
      {
        class: 'btn btn-square btn-success',
        text: 'Success Button',
      },
      {
        class: 'btn btn-square btn-info',
        text: 'Info Button',
      },
      {
        class: 'btn btn-square btn-warning',
        text: 'Warning Button',
      },
      {
        class: 'btn btn-square btn-danger',
        text: 'Danger Button',
      },
      {
        class: 'btn btn-square btn-light',
        text: 'Light Button',
      },
    ],
  },
  {
    id: 2,
    headTitle: 'Default buttons',
    bodyClass: 'common-flex',
    description: 'Use<code> btn-square</code> class for square button.',
    items: [
      {
        class: 'btn btn-primary',
        text: 'Primary Button',
      },
      {
        class: 'btn btn-secondary',
        text: 'Secondary Button',
      },
      {
        class: 'btn btn-success',
        text: 'Success Button',
      },
      {
        class: 'btn btn-info',
        text: 'Info Button',
      },
      {
        class: 'btn btn-warning',
        text: 'Warning Button',
      },
      {
        class: 'btn btn-danger',
        text: 'Danger Button',
      },
      {
        class: 'btn btn-light',
        text: 'Light Button',
      },
    ],
  },
  {
    id: 3,
    headTitle: 'Button Sizes',
    bodyClass: 'common-flex align-items-center buttons-box',
    description: 'Use<code> btn-lg, btn-sm, btn-xs </code>for sizes of buttons',
    items: [
      {
        class: 'button-light-primary btn-lg b-r-8',
        text: 'Large button',
      },
      {
        class: 'button-light-secondary b-r-8',
        text: 'Default button',
      },
      {
        class: 'button-light-warning btn-sm b-r-8',
        text: 'Small button',
      },
      {
        class: 'button-light-success btn-xs b-r-6',
        text: 'Extra small button',
      },
    ],
  },
  {
    id: 4,
    headTitle: 'Outline Button Sizes',
    bodyClass: 'common-flex align-items-center',
    description:
      'Use <code>button-lg, button-sm, and button-xs </code>for size, and use the <code>"outline-*" </code>class for outline colors.',
    items: [
      {
        class: 'btn-outline-primary btn-lg b-r-8',
        text: 'Large button',
      },
      {
        class: 'btn-outline-secondary b-r-8',
        text: 'Default button',
      },
      {
        class: 'btn-outline-warning btn-sm b-r-8',
        text: 'Small button',
      },
      {
        class: 'btn-outline-success btn-xs b-r-6',
        text: 'Extra small button',
      },
    ],
  },
  {
    id: 5,
    headTitle: 'Rounded Buttons',
    bodyClass: 'common-flex buttons-box',
    description: 'Use<code> btn-pill</code> class for rounded buttons.',
    items: [
      {
        class: 'btn-pill button-light-primary',
        text: 'Contacts',
      },
      {
        class: 'btn-pill button-light-dark',
        text: 'Users',
      },
      {
        class: 'btn-pill button-light-success',
        text: 'Chats',
      },
      {
        class: 'btn-pill button-light-info',
        text: 'Animation',
      },
      {
        class: 'btn-pill button-light-warning',
        text: 'Widgets',
      },
      {
        class: 'btn-pill button-light-danger',
        text: 'Project',
      },
      {
        class: 'btn-pill button-light-light',
        text: 'Icons',
      },
    ],
  },
  {
    id: 6,
    headTitle: 'Outline Rounded Sizes',
    bodyClass: 'common-flex buttons-box',
    description:
      'Use<code> btn-pill</code> and <code> btn-outline-*</code> class for outline with buttons.',
    items: [
      {
        class: 'btn-pill btn-outline-primary',
        text: 'Contacts',
      },
      {
        class: 'btn-pill btn-outline-secondary',
        text: 'Users',
      },
      {
        class: 'btn-pill btn-outline-success',
        text: 'Chats',
      },
      {
        class: 'btn-pill btn-outline-info',
        text: 'Animation',
      },
      {
        class: 'btn-pill btn-outline-warning',
        text: 'Widgets',
      },
      {
        class: 'btn-pill btn-outline-danger',
        text: 'Project',
      },
      {
        class: 'btn-pill btn-outline-light',
        text: 'Icons',
      },
    ],
  },
  {
    id: 7,
    headTitle: 'Rounded Sizes',
    bodyClass: 'common-flex align-items-center buttons-box',
    description: 'Use<code> btn-lg, btn-sm, btn-xs </code>for sizes of buttons',
    items: [
      {
        class: 'btn-pill btn-primary btn-lg ',
        text: 'Large button',
      },
      {
        class: 'btn-pill btn-secondary',
        text: 'Default button',
      },
      {
        class: 'btn-pill btn-warning btn-sm',
        text: 'Small button',
      },
      {
        class: 'btn-pill btn-success btn-xs',
        text: 'Extra small button',
      },
    ],
  },
  {
    id: 8,
    headTitle: 'Outline Rounded Sizes',
    bodyClass: 'common-flex align-items-center',
    description: 'Use<code> btn-lg, btn-sm, btn-xs </code>for sizes of buttons',
    items: [
      {
        class: 'btn-pill btn-outline-primary btn-lg',
        text: 'Large button',
      },
      {
        class: 'btn-pill btn-outline-secondary',
        text: 'Default button',
      },
      {
        class: 'btn-pill btn-outline-warning btn-sm',
        text: 'Small button',
      },
      {
        class: 'btn-pill btn-outline-success btn-xs',
        text: 'Extra small button',
      },
    ],
  },
  {
    id: 9,
    headTitle: 'Disabled Buttons',
    bodyClass: 'common-flex',
    description:
      'Use<code> disabled</code> class or <code>disabled="disabled"</code> attribute for disabled button',
    items: [
      {
        class: 'btn-primary disabled',
        text: "I'm disabled",
      },
      {
        class: 'btn-pill btn-warning disabled',
        text: 'Having problems',
      },
      {
        class: 'btn-outline-primary disabled',
        text: 'Inaccessible',
      },
      {
        class: 'btn-pill btn-outline-warning disabled',
        text: 'Disabled',
      },
    ],
  },
  {
    id: 10,
    headTitle: 'Icons Buttons',
    bodyClass: 'common-flex visual-button',
    description: 'Use <code>btn-square </code>and <code>btn-pill </code>class for icons buttons.',
    items: [
      {
        class: 'b-ln-height btn-primary btn-square',
        icon: 'help-circle',
      },
      {
        class: 'b-ln-height btn-secondary btn-square',
        icon: 'clock',
      },
      {
        class: 'b-ln-height btn-warning',
        icon: 'loader',
      },
      {
        class: 'b-ln-height button-light-primary',
        icon: 'radio',
      },
      {
        class: 'btn-pill button-light-secondary',
        icon: 'loader',
      },
      {
        class: 'btn-pill button-light-warning',
        icon: 'radio',
      },
      {
        class: 'btn b-ln-height btn-outline-primary',
        icon: 'radio',
      },
      {
        class: 'btn-pill btn-outline-secondary border border-secondary',
        icon: 'loader',
      },
      {
        class: 'btn-pill btn-outline-warning border border-warning',
        icon: 'radio',
      },
    ],
  },
  {
    id: 11,
    headTitle: 'Icons with Title Buttons',
    bodyClass: 'common-flex visual-button visual-button1',
    description:
      'Use<code> btn-square , btn-pill , button-light-* , btn-* , .btn-outline-* , border-*</code> for icons with title buttons.',
    items: [
      {
        class: 'b-ln-height btn-secondary btn-square',
        title: 'Secondary',
        icon: 'help-circle',
      },
      {
        class: 'b-ln-height btn-warning',
        title: 'Warning',
        icon: 'clock',
      },
      {
        class: 'btn-pill button-light-success',
        title: 'Success',
        icon: 'loader',
      },
      {
        class: 'btn b-ln-height btn-outline-info',
        title: 'Info',
        icon: 'radio',
      },
      {
        class: 'btn-pill btn-outline-primary border border-primary',
        title: 'Primary',
        icon: 'loader',
      },
    ],
  },
  {
    id: 12,
    headTitle: 'Dashed Border',
    bodyClass: 'common-flex',
    description: 'Use <code>border-dashed-*</code> &<code> txt-*</code> for dashed border.',
    items: [
      {
        class: 'border-dashed-primary',
        text: 'Primary',
      },
      {
        class: 'border-dashed-secondary',
        text: 'Secondary',
      },
      {
        class: 'border-dashed-success',
        text: 'Success',
      },
      {
        class: 'border-dashed-info',
        text: 'Info',
      },
      {
        class: 'border-dashed-warning',
        text: 'Warning',
      },
      {
        class: 'border-dashed-danger',
        text: 'Danger',
      },
      {
        class: 'border-dashed-dark',
        text: 'Dark',
      },
    ],
  },
  {
    id: 13,
    headTitle: 'Loader Buttons',
    bodyClass: 'common-flex loader-buttons',
    description:
      'Use <code>border-dashed-*</code> &<code> loader-buttons</code> for loader buttons.',
    items: [
      {
        class: 'border-dashed-primary',
        text: 'Initiating Connection...',
        simpleIcon: 'fa-solid fa-circle-notch fa-spin',
      },
      {
        class: 'border-dashed-secondary',
        text: 'Spooling Data...',
        simpleIcon: 'fa fa-solid fa-arrows-rotate fa-spin',
      },
      {
        class: 'border-dashed-success',
        text: 'Compiling Request...',
        simpleIcon: 'fa-solid fa-spinner fa-spin-pulse',
      },
    ],
  },
  {
    id: 14,
    headTitle: 'Ripple Button',
    bodyClass: 'common-flex',
    description: 'Use<code> ripple-button</code> for ripple animation button.',
    items: [
      {
        class: 'btn-primary ripple-button',
        text: 'Ripple Button',
      },
    ],
  },
]

export const buttonGroups: ButtonGroupVariation[] = [
  {
    id: 1,
    headTitle: 'Button Group Variation',
    class: 'button-wrapper button-variation',
    item: [
      {
        class: 'btn-group btn-group-square',
        button: [
          {
            class: 'btn-primary',
            text: 'Left',
          },
          {
            class: 'button-light-primary',
            text: 'Middle',
          },
          {
            class: 'btn-primary',
            text: 'Right',
          },
        ],
      },
      {
        class: 'btn-group btn-group-pill',
        button: [
          {
            class: 'button-light-primary',
            text: 'Left',
          },
          {
            class: 'btn-primary',
            text: 'Middle',
          },
          {
            class: 'button-light-primary',
            text: 'Right',
          },
        ],
      },
      {
        class: 'btn-group',
        button: [
          {
            class: 'btn-primary',
            text: 'Left',
          },
          {
            class: 'button-light-primary',
            text: 'Middle',
          },
          {
            class: 'btn-primary',
            text: 'Right',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    headTitle: 'Outline Button Group',
    class: 'button-wrapper button-variation',
    item: [
      {
        class: 'btn-group btn-group-square',
        button: [
          {
            class: 'btn-outline-primary',
            icon: 'arrow-left',
          },
          {
            class: 'btn-outline-primary',
            icon: 'arrow-up',
          },
          {
            class: 'btn-outline-primary',
            icon: 'arrow-right',
          },
        ],
      },
      {
        class: 'btn-group btn-group-pill',
        button: [
          {
            class: 'btn-outline-primary',
            icon: 'arrow-left',
          },
          {
            class: 'btn-outline-primary',
            icon: 'arrow-up',
          },
          {
            class: 'btn-outline-primary',
            icon: 'arrow-right',
          },
        ],
      },
      {
        class: 'btn-group',
        button: [
          {
            class: 'btn-outline-primary',
            icon: 'arrow-left',
          },
          {
            class: 'btn-outline-primary',
            icon: 'arrow-up',
          },
          {
            class: 'btn-outline-primary',
            icon: 'arrow-right',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    headTitle: 'Button Group Sizes',
    class: 'button-wrapper ',
    item: [
      {
        class: 'btn-group',
        button: [
          {
            class: 'btn-outline-primary btn-lg',
            text: 'Left',
          },
          {
            class: 'btn-outline-primary btn-lg',
            text: 'Middle',
          },
          {
            class: 'btn-outline-primary btn-lg',
            text: 'Right',
          },
        ],
      },
      {
        class: 'btn-group',
        button: [
          {
            class: 'btn-outline-primary',
            text: 'Left',
          },
          {
            class: 'btn-outline-primary',
            text: 'Middle',
          },
          {
            class: 'btn-outline-primary',
            text: 'Right',
          },
        ],
      },
      {
        class: 'btn-group',
        button: [
          {
            class: 'btn-outline-primary btn-sm',
            text: 'Left',
          },
          {
            class: 'btn-outline-primary btn-sm',
            text: 'Middle',
          },
          {
            class: 'btn-outline-primary btn-sm',
            text: 'Right',
          },
        ],
      },
    ],
  },
]

export const blockButton: BlockButtonVariation[] = [
  {
    id: 1,
    title: 'Block Button',
    class: 'buttons-box',
    buttons: [
      {
        class: 'btn button-light-primary',
        text: 'Click here, there is a big surprise with you, Hurry Up!!',
      },
      {
        class: 'btn btn-primary',
        text: '40% off all B-Stock Sale!! Hurry Up!!',
      },
    ],
  },
  {
    id: 2,
    title: 'Button Center',
    class: 'col-6 mx-auto buttons-box',
    buttons: [
      {
        class: 'btn button-light-primary',
        text: 'Center Button',
      },
      {
        class: 'btn btn-primary',
        text: 'Center Button',
      },
    ],
  },
  {
    id: 3,
    title: 'Button End',
    class: ' d-md-flex justify-content-md-end buttons-box',
    buttons: [
      {
        class: 'btn button-light-primary me-md-2',
        text: 'Cancel',
      },
      {
        class: 'btn btn-primary',
        text: 'Submit',
      },
    ],
  },
]

export const verticalVariations: Variations[] = [
  {
    id: 1,
    class: 'success',
  },
  {
    id: 2,
    mainClass: 'dropstart',
    class: 'danger',
  },
  {
    id: 3,
    mainClass: 'dropend',
    class: 'warning',
  },
  {
    id: 4,
    mainClass: 'dropup',
    class: 'info',
  },
]

export const nestedGroup: Item[] = [
  {
    id: 1,
    class: 'btn-primary',
    text: 'C',
  },
  {
    id: 1,
    class: 'btn-warning',
    text: 'U',
  },
  {
    id: 3,
    class: 'btn-primary',
    text: 'B',
  },
  {
    id: 4,
    class: 'btn-warning',
    text: 'A',
  },
]

export const toolbarGroups: ToolbarGroup[] = [
  {
    id: 1,
    ariaLabel: 'First group',
    buttons: [
      { class: 'btn btn-primary', text: 'I' },
      { class: 'btn btn-warning', text: 'II' },
      { class: 'btn btn-primary', text: 'III' },
      { class: 'btn btn-warning', text: 'IV' },
    ],
  },
  {
    id: 2,
    ariaLabel: 'Second group',
    buttons: [
      { class: 'btn btn-primary', text: 'V' },
      { class: 'btn btn-warning', text: 'VI' },
      { class: 'btn btn-primary', text: 'VII' },
    ],
  },
  {
    id: 3,
    ariaLabel: 'Third group',
    buttons: [{ class: 'btn btn-warning', text: 'VIII' }],
  },
]

export const boldBorder: Item[] = [
  {
    id: 1,
    class: 'primary-2x',
    title: 'Animation',
  },
  {
    id: 2,
    class: 'secondary-2x',
    title: 'Icons',
  },
  {
    id: 3,
    class: 'success-2x',
    title: 'Blog',
  },
  {
    id: 4,
    class: 'info-2x',
    title: 'Widgets',
  },
  {
    id: 5,
    class: 'warning-2x',
    title: 'Chat',
  },
  {
    id: 6,
    class: 'danger-2x',
    title: 'Users',
  },
  {
    id: 7,
    class: 'light-2x txt-dark',
    title: 'FAQ',
  },
]

export const radioButton: Ui[] = [
  {
    id: 1,
    for: 'radio7',
    title: 'Theme',
    checked: false,
  },
  {
    id: 2,
    for: 'radio8',
    title: 'E-commerce',
    checked: true,
  },
]

export const checkboxButton: Ui[] = [
  {
    id: 1,
    for: 'checkbox-primary-1',
    title: 'Theme',
  },
  {
    id: 2,
    for: 'checkbox-primary-2',
    title: 'E-commerce',
  },
]

export const radialButtons: ButtonGroup[] = [
  {
    id: 1,
    headTitle: 'Default Gradient Buttons',
    colClass: 'col-xl-4 col-sm-6',
    items: [
      { text: 'Icons', class: 'btn btn-primary-gradien' },
      { text: 'Animation', class: 'btn btn-secondary-gradien' },
      { text: 'Tasks', class: 'btn btn-success-gradien' },
      { text: 'Letter box', class: 'btn btn-info-gradien' },
      { text: 'Chat', class: 'btn btn-warning-gradien' },
      { text: 'Blog', class: 'btn btn-danger-gradien' },
      { text: 'Gallery', class: 'btn btn-light-gradien text-dark' },
    ],
  },
  {
    id: 2,
    headTitle: 'Flat Gradient Buttons',
    colClass: 'col-xl-4 col-sm-6',
    items: [
      { text: 'Icons', class: 'btn btn-square btn-primary-gradien' },
      { text: 'Animation', class: 'btn btn-square btn-secondary-gradien' },
      { text: 'Tasks', class: 'btn btn-square btn-success-gradien' },
      { text: 'Letter box', class: 'btn btn-square btn-info-gradien' },
      { text: 'Chat', class: 'btn btn-square btn-warning-gradien' },
      { text: 'Blog', class: 'btn btn-square btn-danger-gradien' },
      { text: 'Gallery', class: 'btn btn-square btn-light-gradien text-dark' },
    ],
  },
  {
    id: 3,
    headTitle: 'Rounded Gradient Buttons',
    colClass: 'col-xl-4 col-sm-12',
    items: [
      { text: 'Icons', class: 'btn btn-pill btn-air-primary btn-primary-gradien' },
      { text: 'Animation', class: 'btn btn-pill btn-air-secondary btn-secondary-gradien' },
      { text: 'Tasks', class: 'btn btn-pill btn-air-success btn-success-gradien' },
      { text: 'Letter box', class: 'btn btn-pill btn-air-info btn-info-gradien' },
      { text: 'Chat', class: 'btn btn-pill btn-air-warning btn-warning-gradien' },
      { text: 'Blog', class: 'btn btn-pill btn-air-danger btn-danger-gradien' },
      { text: 'Gallery', class: 'btn btn-pill btn-air-light btn-light-gradien txt-dark' },
    ],
  },
]
