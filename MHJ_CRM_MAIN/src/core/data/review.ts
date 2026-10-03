import type { Select } from '@/types/common'
import type { Review } from '@/types/review'

export const reviews: Review[] = [
  {
    id: 1,
    productName: 'Apple Desktop 2025',
    productImage: 'dashboard-8/product-categories/laptop.png',
    reviewerName: 'Cameron Willia',
    reviewerProfile: 'dashboard-8/product-categories/laptop.png',
    reviewerEmail: 'cameron@gmail.com',
    review:
      'Thanks to the new M-series processor, which can handle even the most demanding programs without lag, the performance is lightning quick. The gorgeous Retina 6K display is ideal for creative work like graphic design and video editing because it produces fine details and bright colours. I also like how the design is simple and elegant, and it looks great on my desk.',
    rating: 4,
    date: '02 Feb, 2016',
    status: 'Approve',
  },
  {
    id: 2,
    productName: 'DVD',
    productImage: 'dashboard-8/product-categories/dvd.png',
    reviewerName: 'Alexis Taylor',
    reviewerProfile: 'dashboard/user/12.jpg',
    reviewerEmail: 'alexis@gmail.com',
    review:
      "The best smartphone I've ever had is without a doubt the Apple iPhone 13 Pro. With its Super Retina XDR OLED screen, the display is gorgeous, and the ProMotion function gives everything an exceptionally smooth appearance. I adore the 120Hz refresh rate since it makes the smartphone more snappy, especially while scrolling and playing games. The camera system is great.",
    rating: 5,
    date: '11 Mar, 2015',
    status: 'Approve',
  },
  {
    id: 3,
    productName: 'Beauty Blender',
    productImage: 'product/accessories/03.png',
    reviewerName: 'Andrew Price',
    reviewerProfile: 'dashboard/user/11.jpg',
    reviewerEmail: 'andrew@gmail.com',
    review:
      "Kyler Nunezkyler@gmail.com The camera system is amazing; the ProRAW feature offers a great deal of editing versatility, and the new 48 MP primary sensor takes clear, colourful pictures in any setting. Considering this device's capabilities, the battery has held up well, lasting a whole day with heavy use. The price, which is on the upper end, is the main drawback, but considering all the features and performance you get, I think its worth it..",
    rating: 3,
    date: '20 Nov, 2021',
    status: 'Reject',
  },
  {
    id: 4,
    productName: 'Comfortable Chair',
    productImage: 'dashboard-2/order/sub-product/25.png',
    reviewerName: 'Luke Mitchell',
    reviewerProfile: 'user/6.jpg',
    reviewerEmail: 'luke@gmail.com',
    review:
      "The plush cushion feels wonderful for reading or relaxing, and it offers strong back support. It is quite comfy. The design is contemporary and goes well with the décor in my house. The cloth is comfortable and long-lasting, and I like the strong construction. But for more comfort, I do wish the armrests were a little broader. All things considered, it's a good chair for anyone searching for a chic and comfortable seating solution.",
    rating: 3,
    date: '25 Nov, 2022',
    status: 'Reject',
  },
  {
    id: 5,
    productName: 'Green Wireless Mouse',
    productImage: 'dashboard-8/shop-categories/mouse.png',
    reviewerName: 'Emily Park',
    reviewerProfile: 'dashboard/user/10.jpg',
    reviewerEmail: 'emily@gmail.com',
    review:
      'Smoothies made with this blender are easy and quick to prepare. It is a fantastic vacation or work partner because it is small, light, and incredibly cleanable. However, it tends to become caught when it comes to frozen fruits or ice cubes. It is very effective and time-efficient for soft ingredients, such as protein drinks or fresh fruits.',
    rating: 3,
    date: '15 Jan, 2016',
    status: 'Approve',
  },
  {
    id: 6,
    productName: 'Camera',
    productImage: 'dashboard-8/shop-categories/camera.png',
    reviewerName: 'Olivia Gor',
    reviewerProfile: 'dashboard/user/13.jpg',
    reviewerEmail: 'olivia@gmail.com',
    review:
      'Its sophisticated lens and sensor provide amazing image clarity, especially in low light. Because the autofocus is so quick, I can get every moment without any fuzz. I also adore how portable and lightweight it is, which makes travelling with it a breeze. For both novice and expert photographers, the touch screen interface is easy to use and provides a range of customisable options.',
    rating: 4,
    date: '02 Apr, 2025',
    status: 'Approve',
  },
  {
    id: 7,
    productName: 'Pixel Shoes',
    productImage: 'dashboard-2/order/sub-product/14.png',
    reviewerName: 'Kathryn Roe',
    reviewerProfile: 'dashboard-11/user/5.jpg',
    reviewerEmail: 'kathryn@gmail.com',
    review:
      'My back is supported and the tension is lessened because to the ergonomic design, which has proven invaluable for me working from home. Comfort and durability are well-balanced by the robust yet soft padding. It took a little while to assemble, but the finished product is well worth the effort. I heartily recommend this chair to anyone searching for a high-quality, reasonably priced one.',
    rating: 4,
    date: '26 Mar, 2022',
    status: 'Reject',
  },
  {
    id: 8,
    productName: 'Leather Handbag',
    productImage: 'dashboard-2/order/sub-product/16.png',
    reviewerName: 'Caleb Riv',
    reviewerProfile: 'user/10.jpg',
    reviewerEmail: 'caleb@gmail.com',
    review:
      "leslie@gmail.com I'm really happy with the comfortable sofa I recently bought for my living room. It is ideal for relaxing after a long day because of the extraordinarily soft cushions. In addition to being opulent, the cloth is strong and resilient, withstanding regular use without deteriorating. The size of the sofa is ideal; it provides lots of room without taking up too much space.",
    rating: 4,
    date: '12 Feb, 2025',
    status: 'Approve',
  },
  {
    id: 9,
    productName: 'Arm Chair',
    productImage: 'email-template/3.png',
    reviewerName: 'Andrew Baker',
    reviewerProfile: 'dashboard-11/user/12.jpg',
    reviewerEmail: 'andrew@gmail.com',
    review:
      "This is DVD delivered on its promise of high-quality audio and visuals, which is why I bought it! Watching films or television shows at home is enjoyable because of the crisp, clear images and the engrossing sound. It's also very portable, light, and works with my old DVD player, which is fantastic.",
    rating: 4,
    date: '08 Dec, 2018',
    status: 'Approve',
  },
  {
    id: 10,
    productName: 'Wireless Ear Buds',
    productImage: 'dashboard-8/product-categories/wireless-headphone.png',
    reviewerName: 'Miranda Bailey',
    reviewerProfile: 'dashboard-11/user/3.jpg',
    reviewerEmail: 'miranda@gmail.com',
    review:
      'The first thing that caught my eye was the gorgeous gold finish, which distinguishes them from other headphones in my collection and adds an elegant touch. With its powerful bass and clear treble, the sound quality is superb and provides a well-rounded listening experience for all musical genres.',
    rating: 4,
    date: '21 Feb, 2025',
    status: 'Approve',
  },
  {
    id: 11,
    productName: 'Bajaj Grinder Jar',
    productImage: 'product/accessories/01.png',
    reviewerName: 'Thomas Tim',
    reviewerProfile: 'dashboard-11/user/1.jpg',
    reviewerEmail: 'thomas@gmail.com',
    review:
      'The Pixel Grinder Jar has surpassed all of my expectations since I recently bought it! It fits my kitchen countertop nicely and has a clean, contemporary appearance. The smooth and effective grinding mechanism consistently produces a uniform texture. I mostly use it to grind spices, and it does a fantastic job of adding freshly ground flavours to any meal.',
    rating: 4,
    date: '19 May, 2015',
    status: 'Approve',
  },
  {
    id: 12,
    productName: 'M185 Mouse',
    productImage: 'dashboard-8/product-categories/mouse.png',
    reviewerName: 'Marvin Bob',
    reviewerProfile: 'dashboard-11/user/10.jpg',
    reviewerEmail: 'marvin@gmail.com',
    review:
      "Anyone looking for a dependable and reasonably priced wireless mouse should choose the M185 Mouse. Its ergonomic design makes it comfortable to handle, even for prolonged periods of time. Setup is quite easy—just put in the USB receiver and you're ready to go—and the wireless connection is reliable.",
    rating: 4,
    date: '03 Jan, 2019',
    status: 'Reject',
  },
  {
    id: 13,
    productName: 'Apple Iphone 13 pro',
    productImage: 'dashboard-8/product-categories/phone.png',
    reviewerName: 'Russell Rose',
    reviewerProfile: 'dashboard-11/user/11.jpg',
    reviewerEmail: 'russell@gmail.com',
    review:
      "The best smartphone I've ever had is without a doubt the Apple iPhone 13 Pro. With its Super Retina XDR OLED screen, the display is gorgeous, and the ProMotion function gives everything an exceptionally smooth appearance. I adore the 120Hz refresh rate since it makes the smartphone more snappy, especially while scrolling and playing games. The camera system is great.",
    rating: 4,
    date: '29 Dec, 2025',
    status: 'Approve',
  },
  {
    id: 14,
    productName: 'Wireless Speaker',
    productImage: 'dashboard-8/shop-categories/speaker.png',
    reviewerName: 'Savannah Bell',
    reviewerProfile: 'dashboard-11/user/4.jpg',
    reviewerEmail: 'savannah@gmail.com',
    review:
      'This wireless speaker has me completely smitten! Even at high volumes, the sound quality is superb, with deep bass and clean highs without distortion. Because it is waterproof and surprisingly loud for its small size, it is ideal for both inside and outdoor use.',
    rating: 3,
    date: '18 Mar, 2019',
    status: 'Approve',
  },
  {
    id: 15,
    productName: 'Comfortable Sofa',
    productImage: 'dashboard-2/order/sub-product/15.png',
    reviewerName: 'Leslie Ape',
    reviewerProfile: 'dashboard-11/user/2.jpg',
    reviewerEmail: 'leslie@gmail.com',
    review:
      "I'm really happy with the comfortable sofa I recently bought for my living room. It is ideal for relaxing after a long day because of the extraordinarily soft cushions. In addition to being opulent, the cloth is strong and resilient, withstanding regular use without deteriorating. The size of the sofa is ideal; it provides lots of room without taking up too much space.",
    rating: 3,
    date: '30 May 2018',
    status: 'Approve',
  },
]

export const rating: Select[] = [
  {
    value: 5,
    label: '5 Star',
  },
  {
    value: 4,
    label: '4 Star',
  },
  {
    value: 3,
    label: '3 Star',
  },
  {
    value: 2,
    label: '2 Star',
  },
  {
    value: 1,
    label: '1 Star',
  },
]

export const reviewStatus: Select[] = [
  {
    value: 'Approve',
    label: 'Approve',
  },
  {
    value: 'Reject',
    label: 'Reject',
  },
]
