import type { NotificationTab } from "@/types/header";

export const notificationTabs: NotificationTab[] = [
  {
    id: "all",
    title: "All",
    items: [
      {
        id: 1,
        type: "cart",
        image: "other-images/receiver-img.jpg",
        title: "Men Blue T-Shirt",
        price: "$695.00",
        qty: 1,
      },
      {
        id: 2,
        type: "message",
        image: "dashboard/user/5.jpg",
        name: "Floyd Miles",
        text: "Sir, Can i remove part in des...",
      },
      {
        id: 3,
        type: "message",
        image: "dashboard/user/6.jpg",
        name: "Dianne Russell",
        text: "So, what is my next work ?",
      },
    ],
  },

  {
    id: "messages",
    title: "Messages",
    items: [
      {
        id: 10,
        type: "message",
        image: "dashboard/user/3.jpg",
        name: "Robert D. Hambly",
        text: "Hello Miss...😊",
        time: "44 sec",
      },
      {
        id: 11,
        type: "message",
        image: "dashboard/user/7.jpg",
        name: "Courtney C. Strang",
        text: "Wishing You a Happy Birthday Dear.. 🥳🎊",
        time: "52 min",
      },
      {
        id: 12,
        type: "message",
        image: "dashboard/user/5.jpg",
        name: "Raye T. Sipes",
        text: "This Theme Is Very beautiful",
        time: "48 min",
      },
    ],
  },
];
