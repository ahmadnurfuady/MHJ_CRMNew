import type { List } from '@/types/bonusUI'

export const list: List[] = [
  {
    title: 'Basic Card',
    cardType: 'simple',
    cardClass: 'list-with-icon',
    details: [
      {
        name: 'Logo design',
        list: true,
      },
      {
        name: 'Web development',
        list: true,
      },
      {
        name: 'E-commerce',
        list: true,
      },
      {
        name: 'SEO',
        list: true,
      },
    ],
  },
  {
    title: 'Default Card',
    cardType: 'simple',
    details: [
      {
        name: 'UI Kits',
        active: true,
        list: true,
      },
      {
        name: 'Wow Animations',
        active: false,
        list: true,
      },
      {
        name: 'Apex Charts',
        active: false,
        list: true,
      },
      {
        name: 'Starter Kits',
        active: false,
        list: true,
      },
    ],
  },
  {
    title: 'Flat Card',
    class: 'list-group-flush',
    cardClass: 'b-r-0 list-with-icon',
    cardType: 'simple',
    details: [
      {
        name: 'Charts',
        icon: 'chart-histogram-alt',
        list: true,
      },
      {
        name: 'Alerts',
        icon: 'warning',
        list: true,
      },
      {
        name: 'Cart',
        icon: 'cart',
        list: true,
      },
      {
        name: 'Checkout',
        icon: 'checked',
        list: true,
      },
    ],
  },
  {
    title: 'Primary Color Header',
    cardHeaderClass: 'bg-primary',
    headingClass: 'text-white',
    cardType: 'classic',
    details: [
      {
        title: ' Web Designer ',
        description:
          "By following instructions and adding your own unique twist and style, you may apply your imagination as a web designer. The majority of the tasks you'll be assigned will have a specific due date and work description, but the reason you were employed was because they need a specialist to inject some much-needed creativity.",
      },
    ],
  },
  {
    title: 'Primary Color Body',
    cardType: 'classic',
    cardBodyClass: 'bg-primary',
    details: [
      {
        title: ' UX Designer ',
        description:
          'It is the responsibility of the UX designer to make a product or service useful, pleasurable, and accessible. The word "user experience" is used by various industries, although it is most frequently related to digital design for websites and mobile applications.There is no need for coding in user experience design.',
        titleClass: 'text-white',
        descriptionClass: 'text-white',
      },
    ],
  },
  {
    title: 'Primary Color Footer',
    cardType: 'classic',
    cardFooterClass: 'bg-primary',
    footerClass: 'text-white',
    details: [
      {
        title: ' Web Developer ',
        description:
          'A programmer who uses the client-server architecture to create World Wide Web applications is known as a web developer. The apps generally employ any general-purpose programming language on the server and HTML, CSS, and javaScript on the client.',
      },
    ],
  },
]
