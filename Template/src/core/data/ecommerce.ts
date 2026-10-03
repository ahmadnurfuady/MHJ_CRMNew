import {
  Brand,
  Category,
  CheckoutTabs,
  CollectionItem,
  CustomerDetail,
  Data,
  Details,
  Dimension,
  Discount,
  FilterOption,
  FormField,
  Invoice,
  InvoiceItem,
  Item,
  Option,
  Order,
  OrderDetails,
  OrderStep,
  PaypalOption,
  ProductCategory,
  ProductDetail,
  ProductItem,
  ProductStep,
  Rating,
  RatingData,
  Review,
  Reviews,
  Setting,
  SocialLink,
  Step,
  Store,
  StoreGeneralDetails,
  Table,
  Tabs,
  TopSellingProduct,
} from '@/types/ecommerce'
import { ApexOptions } from 'apexcharts'
const primary = localStorage.getItem('primaryColor') || '#1C1B20'

export const addProduct: ProductStep[] = [
  {
    id: 1,
    productId: '#detail-product',
    icon: 'product-detail',
    title: 'Add Product Details',
    description: 'Add Product name & details',
    active: true,
  },
  {
    id: 2,
    productId: '#gallery-product',
    icon: 'product-gallery',
    title: 'Product Gallery',
    description: 'Thumbnail & Add Product Gallery',
    active: false,
  },
  {
    id: 3,
    productId: '#category-product',
    icon: 'product-category',
    title: 'Product Categories',
    description: 'Add Product category, Status and Tags',
    active: false,
  },
  {
    id: 4,
    productId: '#pricings',
    icon: 'pricing',
    title: 'Selling Prices',
    description: 'Add Product basic price & Discount',
    active: false,
  },
  {
    id: 5,
    productId: '#advance-product',
    icon: 'advance',
    title: 'Advance',
    description: 'Add Meta details & Inventory details',
    active: false,
  },
]

export const product: ProductCategory[] = [
  {
    id: 1,
    title: 'Choose Product',
  },
  {
    id: 2,
    title: 'Apple iphone 13 Pro',
  },
  {
    id: 3,
    title: 'Wood Chair',
  },
  {
    id: 4,
    title: 'M185 Compact Wireless Mouse',
  },
]
export const categories: ProductCategory[] = [
  {
    id: 1,
    title: 'Choose Category',
  },
  {
    id: 2,
    title: 'Furniture',
  },
  {
    id: 3,
    title: 'Smart Gadgets',
  },
  {
    id: 4,
    title: 'Electrics',
  },
]
export const subcategory: ProductCategory[] = [
  {
    id: 1,
    title: 'Choose Sub Category',
  },
  {
    id: 2,
    title: 'Smart Phones',
  },
  {
    id: 3,
    title: 'Smart Watches',
  },
  {
    id: 4,
    title: 'Wireless headphone',
  },
]
export const productStatus: ProductCategory[] = [
  {
    id: 1,
    title: 'Status',
  },
  {
    id: 2,
    title: 'Sold Out',
  },
  {
    id: 3,
    title: 'In Stock',
  },
  {
    id: 4,
    title: 'Pre Order',
  },
  {
    id: 5,
    title: 'Limited Stock',
  },
]
export const price: ProductCategory[] = [
  {
    id: 1,
    title: 'Price',
  },
  {
    id: 2,
    title: '56000.00',
  },
  {
    id: 3,
    title: '19000.00',
  },
  {
    id: 4,
    title: '10000.00',
  },
  {
    id: 5,
    title: '15000.00',
  },
  {
    id: 6,
    title: '99000.00',
  },
]

export const status: ProductCategory[] = [
  {
    id: 1,
    title: 'Publish',
  },
  {
    id: 2,
    title: 'Drafts',
  },
  {
    id: 3,
    title: 'Unpublish',
  },
]

export const category: ProductCategory[] = [
  {
    id: 1,
    title: 'Toys & games',
  },
  {
    id: 2,
    title: 'Sportswear',
  },
  {
    id: 3,
    title: 'Jewellery',
  },
  {
    id: 4,
    title: 'Furniture and Decor',
  },
  {
    id: 5,
    title: 'Health, Personal Care, and Beauty',
  },
  {
    id: 6,
    title: 'Auto and Parts',
  },
  {
    id: 7,
    title: 'Baby Care Products',
  },
]

// In <script setup>
export const discountTabs = [
  {
    id: 1,
    tabId: 'fixed-price',
    label: 'Fixed Price Discount',
    content: 'This is the fixed price discount content.',
  },
  {
    id: 2,
    tabId: 'bogo-offer',
    label: 'BOGO (Buy One, Get One)',
    content: 'This is the BOGO offer content.',
  },
  {
    id: 3,
    tabId: 'percentage-base',
    label: 'Percentage Based Discount(%)',
    content: 'This is the percentage-based discount content.',
  },
  {
    id: 4,
    tabId: 'bulk-discount',
    label: 'Volume or Bulk Discount',
    content: 'This is the bulk discount content.',
  },
]

export const inventory: FormField[] = [
  {
    id: 1,
    for: 'exampleFormControlInput1',
    title: 'SKU',
    type: 'text',
  },
  {
    id: 2,
    for: 'exampleFormControlInput1',
    title: 'Stock Quantity',
    type: 'number',
  },
  {
    id: 3,
    for: 'exampleFormControlInput1',
    title: 'Restock Date',
    type: 'number',
  },
  {
    id: 4,
    for: 'exampleFormControlInput1',
    title: 'Pre-Order',
    type: 'number',
  },
]

export const dimensions: Dimension[] = [
  {
    id: 1,
    placeholder: 'Length[l]',
    class: 'col-md-4 col-sm-6',
  },
  {
    id: 2,
    placeholder: 'Width[w]',
    class: 'col-md-4 col-sm-6',
  },
  {
    id: 3,
    placeholder: 'Height[h]',
    class: 'col-md-4',
  },
]

export const stock: ProductCategory[] = [
  {
    id: 1,
    title: 'Low Stock (5 or less)',
  },
  {
    id: 2,
    title: 'Low Stock (10 or less)',
  },
  {
    id: 3,
    title: 'Low Stock (20 or less)',
  },
  {
    id: 4,
    title: 'Low Stock (25 or less)',
  },
  {
    id: 5,
    title: 'Low Stock (30 or less)',
  },
]
export const availability: ProductCategory[] = [
  {
    id: 1,
    title: 'In stock',
  },
  {
    id: 2,
    title: 'In stock',
  },
  {
    id: 3,
    title: 'Pre-order',
  },
]
export const state: ProductCategory[] = [
  {
    id: 1,
    title: 'State',
  },
  {
    id: 2,
    title: 'Gujarat',
  },
  {
    id: 3,
    title: 'Punjab',
  },
  {
    id: 4,
    title: 'Himachal pradesh',
  },
  {
    id: 5,
    title: 'Goa',
  },
  {
    id: 6,
    title: 'Sikkim',
  },
  {
    id: 7,
    title: 'Telangana',
  },
]
export const shipping: ProductCategory[] = [
  {
    id: 1,
    title: 'Basic Shipping',
  },
  {
    id: 2,
    title: 'Expedited Shipping',
  },
  {
    id: 3,
    title: 'International Shipping',
  },
  {
    id: 4,
    title: 'Free Shipping',
  },
  {
    id: 5,
    title: 'Same-Day or Next-Day Shipping',
  },
  {
    id: 6,
    title: 'Flat Rate Shipping',
  },
  {
    id: 7,
    title: 'Local Pickup',
  },
]

export const social: SocialLink[] = [
  {
    id: 1,
    link: 'https://www.facebook.com/',
    icon: 'fa-brands fa-facebook-f',
  },
  {
    id: 2,
    link: 'https://in.pinterest.com/',
    icon: 'fa-brands fa-pinterest-p',
  },
  {
    id: 3,
    link: 'https://twitter.com/',
    icon: 'fa-brands fa fa-twitter',
  },
  {
    id: 4,
    link: 'https://www.instagram.com/',
    icon: 'fa-brands fa fa-instagram',
  },
  {
    id: 5,
    link: 'https://rss.app/',
    icon: 'fa fa-rss',
  },
]

export const tabs: Tabs[] = [
  { id: 1, tabId: 'inventory', label: 'Inventory' },
  { id: 2, tabId: 'seo', label: 'SEO Tags' },
  { id: 3, tabId: 'shipping', label: 'Shipping' },
  { id: 4, tabId: 'variations', label: 'Variations' },
  { id: 5, tabId: 'publish', label: 'Publish' },
]

export const categoriesItems: Brand[] = [
  {
    id: 1,
    name: 'Bags',
  },
  {
    id: 2,
    name: 'Footwear',
  },
  {
    id: 3,
    name: 'Watches',
  },
  {
    id: 4,
    name: 'Jewelry',
  },
  {
    id: 5,
    name: 'Perfume',
  },
  {
    id: 6,
    name: 'Swimwear',
  },
  {
    id: 7,
    name: 'Books',
  },
  {
    id: 8,
    name: 'Books',
  },
]

export const collection: CollectionItem[] = [
  {
    id: 1,
    icon: 'truck',
    title: 'Free Shipping',
    description: 'Free Shipping World Wide',
  },
  {
    id: 2,
    icon: 'clock',
    title: '24 X 7 Service ',
    description: 'Online Service For New Customer',
  },
  {
    id: 3,
    icon: 'gift',
    title: 'Festival Offer',
    description: 'New Online Special Festival',
  },
  {
    id: 4,
    icon: 'credit-card',
    title: 'Online Payment ',
    description: 'Contrary To Popular Belief. ',
  },
]

export const details: ProductDetail[] = [
  {
    id: 1,
    title: 'Brand &nbsp;&nbsp;&nbsp;:',
    description: 'Pixelstrap',
    space: '&nbsp;&nbsp;&nbsp;',
  },
  {
    id: 2,
    title: 'Availability &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;',
    description: 'In stock',
    space: '&nbsp;&nbsp;&nbsp;',
    class: 'text-success',
  },
  {
    id: 3,
    title: 'Seller &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;',
    description: 'ABC',
    space: '&nbsp;&nbsp;&nbsp;',
  },
  {
    id: 4,
    title: 'Material    &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;',
    description: 'Cotton',
    space: '&nbsp;&nbsp;&nbsp;',
  },
  {
    id: 5,
    title: 'Fit     &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;',
    description: 'Regular Fit',
    space: '&nbsp;&nbsp;&nbsp;',
  },
]

export const productTabs = [
  {
    id: 1,
    productId: 'top-home',
    label: 'Description',
    target: '#top-home',
    active: true,
  },
  {
    id: 2,
    productId: 'contact-top',
    label: 'Additional Info',
    target: '#top-contact',
    active: false,
  },
  {
    id: 3,
    productId: 'brand-top',
    label: 'Write Review',
    target: '#top-brand',
    active: false,
  },
]

export const productTable: Table[] = [
  {
    id: 1,
    material: 'Polyester',
    colors: 'Yellow',
    size: 'XS',
    fit: 'Slim fit',
    neckline: 'V-neck',
    seam: 'French',
  },
  {
    id: 2,
    material: 'Blend',
    colors: 'Black',
    size: 'XL',
    fit: 'Regular fit',
    neckline: 'Scoop neck',
    seam: 'Flat',
  },
  {
    id: 3,
    material: 'Cotton',
    colors: 'Blue',
    size: 'S',
    fit: 'Relaxed',
    neckline: 'Mandarin collar',
    seam: 'Exposed',
  },
  {
    id: 4,
    material: 'Polyester',
    colors: 'White',
    size: 'M',
    fit: 'Slim Fit',
    neckline: 'Spread collar',
    seam: 'Topstitching',
  },
]

export const reviews: Reviews[] = [
  {
    id: 1,
    name: 'Scarlet',
    image: 'dashboard/user/1.jpg',
    product: 'Smart Watch',
    rating: 4,
    date: '03 Feb, 2024',
    review:
      "I adore this outfit! The print is stunning, and the fabric is incredibly smooth and flowing. It's ideal for a night out or summer weddings. Just be mindful that the straps are little adjustable, so you may need fashion tape for piece of mind if you're busty.",
  },
  {
    id: 2,
    name: 'Arya',
    image: 'dashboard/user/2.jpg',
    product: 'Arm Chair',
    rating: 4,
    date: '24 May, 2024',
    review:
      'This tee is a fantastic basic. For warmer days, the lightweight, breathable linen is ideal. You might want to go down if you like a more tailored look because the fit is a little boxy. All in all, this is a versatile shirt that I will wear often.',
  },
  {
    id: 3,
    name: 'Kyro',
    image: 'dashboard/user/3.jpg',
    product: 'Study Lamp',
    rating: 3,
    date: '30 Jun, 2024',
    review:
      'What a letdown this jacket is. In person, the wash is more rigid and dark than it appears in the photo, which is retro and stylish. I got a medium, but it seems more like a small. The size is also incorrect. Returning it in disappointment.',
  },
  {
    id: 4,
    name: 'Izabella',
    image: 'dashboard/user/8.jpg',
    product: 'Beauty Blender',
    rating: 4,
    date: '18 Dec, 2024',
    review:
      "There is nothing but luxury about this jumper. It feels of excellent quality, and the cashmere is wonderfully warm and cuddly. It's a classic piece with a long lifespan. incredibly elegant and comfy, ideal for chilly days.",
  },
]

export const ratingBreakdown: RatingData[] = [
  { id: 1, ratingId: 5, percentage: '85%' },
  { id: 2, ratingId: 4, percentage: '50%' },
  { id: 3, ratingId: 3, percentage: '43%' },
  { id: 4, ratingId: 2, percentage: '32%' },
  { id: 5, ratingId: 1, percentage: '32%' },
]

export const productList: ProductItem[] = [
  {
    id: 1,
    image: 'ecommerce/product-categories/laptop.png',
    name: 'Apple Desktop 2024',
    brand: 'Apple',
    sku: '02145YK796',
    category: 'Laptops',
    price: '56000.00',
    qty: 13,
    status: 'Sold Out',
    statusClass: 'badge-light-secondary',
    rating: 4,
    product: 'Apple iphone 13 Pro',
  },
  {
    id: 2,
    image: 'ecommerce/product-categories/phone.png',
    brand: 'Samsung',
    name: 'Apple iphone 13 Pro',
    sku: '56379FG3AW',
    category: 'Smart Phones',
    price: '19000.00',
    qty: 48,
    status: 'In Stock',
    statusClass: 'badge-light-primary',
    rating: 3,
    product: '',
  },
  {
    id: 3,
    image: 'ecommerce/product-categories/headphone.png',
    brand: 'Philips',
    name: 'Headphones',
    sku: '33KR5689B1',
    category: 'Smart Headphones',
    price: '10000.00',
    qty: 5,
    status: 'In Stock',
    statusClass: 'badge-light-primary',
    rating: 5,
    product: 'Apple iphone 13 Pro',
  },
  {
    id: 4,
    image: 'ecommerce/product-categories/wireless-headphone.png',
    brand: 'Motorola',
    name: 'wireless-headphone',
    sku: 'AD6789HEY0',
    category: 'Smart Headphones ',
    price: '15000.00',
    qty: 4,
    status: 'Sold Out',
    statusClass: 'badge-light-secondary',
    rating: 4,
    product: '',
  },
  {
    id: 5,
    image: 'dashboard-2/product/1.png',
    brand: 'Amazon',
    name: 'Wood Chair',
    sku: '456DF78DFQ',
    category: 'Furniture',
    price: '99000.00',
    qty: 2,
    status: 'Sold Out',
    statusClass: 'badge-light-secondary',
    rating: 5,
    product: '',
  },
  {
    id: 6,
    image: 'email-template/3.png',
    brand: 'Wayfair',
    name: 'Wood Chair',
    sku: '5633GD3K54',
    category: 'Furniture',
    price: '1000.00',
    qty: 8,
    status: 'Sold Out',
    statusClass: 'badge-light-secondary',
    rating: 5,
    product: 'Apple iphone 13 Pro',
  },
  {
    id: 7,
    image: 'ecommerce/product-categories/ipad.png',
    brand: 'Philips',
    name: 'MacBook Air 13.3-inch',
    sku: '589KO8PPQ8',
    category: 'Laptops ',
    price: '45000.00',
    qty: 10,
    status: 'Sold Out',
    statusClass: 'badge-light-secondary',
    rating: 4,
    product: '',
  },
  {
    id: 8,
    image: 'ecommerce/product-categories/mouse.png',
    brand: 'Philips',
    name: 'M185 Compact Wireless Mouse',
    sku: '02145YK796',
    category: 'E-Commerce',
    price: '56000.00',
    qty: 13,
    status: 'Sold Out',
    statusClass: 'badge-light-secondary',
    rating: 2,
    product: 'Apple iphone 13 Pro',
  },
  {
    id: 9,
    image: 'ecommerce/product-categories/dvd.png',
    brand: 'Wayfair',
    name: 'Wood chairs',
    sku: '568GH3LLQ2',
    category: 'Furniture',
    price: '78000.00',
    qty: 50,
    status: 'In Stock',
    statusClass: 'badge-light-primary',
    rating: 5,
    product: '',
  },
  {
    id: 10,
    image: 'ecommerce/product-categories/watch.png',
    brand: 'Motorola',
    name: 'Smart watch',
    sku: '58FR7K34F6',
    category: 'Electric',
    price: '25000.00',
    qty: 48,
    status: 'Sold Out',
    statusClass: 'badge-light-secondary',
    rating: 5,
    product: 'Apple iphone 13 Pro',
  },
  {
    id: 11,
    image: 'ecommerce/product-categories/dvd.png',
    brand: 'Wayfair',
    name: 'DVD',
    sku: 'HG5667DFQ1',
    category: 'Electric',
    price: '5600.00',
    qty: 10,
    status: 'In Stock',
    statusClass: 'badge-light-primary',
    rating: 5,
    product: '',
  },
  {
    id: 12,
    image: 'ecommerce/product-categories/speaker.png',
    brand: 'Philips',
    name: 'Speakers',
    sku: '02145YK796',
    category: 'Electric',
    price: '12200.00',
    qty: 50,
    status: 'Sold Out',
    statusClass: 'badge-light-secondary',
    rating: 4,
    product: '',
  },
  {
    id: 13,
    image: 'ecommerce/product-categories/phone.png',
    brand: 'Motorola',
    name: 'Apple iphone 13 Pro',
    sku: '56379FG3AW',
    category: 'Smart Phones',
    price: '19000.00',
    qty: 48,
    status: 'In Stock',
    statusClass: 'badge-light-primary',
    rating: 3,
    product: 'Apple iphone 13 Pro',
  },
  {
    id: 14,
    image: 'ecommerce/product-categories/headphone.png',
    brand: 'Philips',
    name: 'Headphones',
    sku: '33KR5689B1',
    category: 'Smart Headphones',
    price: '10000.00',
    qty: 5,
    status: 'In Stock',
    statusClass: 'badge-light-primary',
    rating: 5,
    product: '',
  },
  {
    id: 15,
    image: 'ecommerce/product-categories/dvd.png',
    brand: 'Motorola',
    name: 'Wood chairs',
    sku: '568GH3LLQ2',
    category: 'Furniture',
    price: '78000.00',
    qty: 50,
    status: 'In Stock',
    statusClass: 'badge-light-primary',
    rating: 5,
    product: '',
  },
  {
    id: 16,
    image: 'ecommerce/product-categories/watch.png',
    brand: 'Philips',
    name: 'Smart watch',
    sku: '58FR7K34F6',
    category: 'Electric',
    price: '25000.00',
    qty: 48,
    status: 'Sold Out',
    statusClass: 'badge-light-secondary',
    rating: 4,
    product: 'Apple iphone 13 Pro',
  },
  {
    id: 17,
    image: 'ecommerce/product-categories/phone.png',
    brand: 'Philips',
    name: 'Apple iphone 13 Pro',
    sku: '56379FG3AW',
    category: 'Smart Phones',
    price: '19000.00',
    qty: 48,
    status: 'In Stock',
    statusClass: 'badge-light-primary',
    rating: 5,
    product: '',
  },
  {
    id: 18,
    image: 'ecommerce/product-categories/headphone.png',
    brand: 'Motorola',
    name: 'Headphones',
    sku: '33KR5689B1',
    category: 'Smart Headphones',
    price: '10000.00',
    qty: 5,
    status: 'In Stock',
    statusClass: 'badge-light-primary',
    rating: 3,
    product: 'Apple iphone 13 Pro',
  },
  {
    id: 19,
    image: 'ecommerce/product-categories/wireless-headphone.png',
    brand: 'Philips',
    name: 'wireless-headphone',
    sku: 'AD6789HEY0',
    category: 'Smart Headphones',
    price: '15000.00',
    qty: 4,
    status: 'Sold Out',
    statusClass: 'badge-light-secondary',
    rating: 5,
    product: 'Apple iphone 13 Pro',
  },
  {
    id: 20,
    image: 'product/1.png',
    brand: 'Apple',
    name: 'Wood Chair',
    sku: '456DF78DFQ',
    category: 'Furniture',
    price: '99000.00',
    qty: 2,
    status: 'Sold Out',
    statusClass: 'badge-light-secondary',
    rating: 4,
    product: '',
  },
  {
    id: 21,
    image: 'email-template/3.png',
    brand: 'Motorola',
    name: 'Wood Chair',
    sku: '5633GD3K54',
    category: 'Furniture',
    price: '1000.00',
    qty: 8,
    status: 'Sold Out',
    statusClass: 'badge-light-secondary',
    rating: 3,
    product: 'Apple iphone 13 Pro',
  },
  {
    id: 22,
    image: 'ecommerce/product-categories/laptop.png',
    brand: 'Apple',
    name: 'Apple Desktop 2024',
    sku: '02145YK796',
    category: 'Laptops',
    price: '56000.00',
    qty: 13,
    status: 'Sold Out',
    statusClass: 'badge-light-secondary',
    rating: 4,
    product: '',
  },
  {
    id: 23,
    image: 'ecommerce/product-categories/phone.png',
    brand: 'Apple',
    name: 'Apple iphone 13 Pro',
    sku: '56379FG3AW',
    category: 'Smart Phones',
    price: '19000.00',
    qty: 48,
    status: 'In Stock',
    statusClass: 'badge-light-primary',
    rating: 5,
    product: 'Apple iphone 13 Pro',
  },
  {
    id: 24,
    image: 'ecommerce/product-categories/headphone.png',
    brand: 'Philips',
    name: 'Headphones',
    sku: '33KR5689B1',
    category: 'Smart Headphones',
    price: '10000.00',
    qty: 5,
    status: 'In Stock',
    statusClass: 'badge-light-primary',
    rating: 5,
    product: 'Apple iphone 13 Pro',
  },
  {
    id: 25,
    image: 'ecommerce/product-categories/wireless-headphone.png',
    brand: 'Apple',
    name: 'wireless-headphone',
    sku: 'AD6789HEY0',
    category: 'Smart Headphones',
    price: '15000.00',
    qty: 4,
    status: 'Sold Out',
    statusClass: 'badge-light-secondary',
    rating: 4,
    product: '',
  },
  {
    id: 26,
    image: 'product/1.png',
    brand: 'Philips',
    name: 'Wood Chair',
    sku: '456DF78DFQ',
    category: 'Furniture',
    price: '99000.00',
    qty: 2,
    status: 'Sold Out',
    statusClass: 'badge-light-secondary',
    rating: 2,
    product: 'Apple iphone 13 Pro',
  },
]

export const discount: Discount[] = [
  {
    id: 1,
    title: 'upto 5%',
    value: '<5',
    badge: 6,
  },
  {
    id: 2,
    title: '5% - 10%',
    value: '5-10',
    badge: 12,
  },
  {
    id: 3,
    title: '10% - 15%',
    value: '10-15',
    badge: 20,
  },
  {
    id: 4,
    title: '15% - 25%',
    value: '15-25',
    badge: 22,
  },
  {
    id: 5,
    title: 'More than 25%',
    value: '>25',
    badge: 24,
  },
]

export const checkoutTabs: CheckoutTabs[] = [
  {
    id: 1,
    active: true,
    title: 'Information',
    value: 'information',
  },
  {
    id: 2,
    active: false,
    title: 'Shipping',
    value: 'shipping',
  },
  {
    id: 3,
    active: false,
    title: 'Payment',
    value: 'payment',
  },
  {
    id: 4,
    active: false,
    title: 'Completed',
    value: 'completed',
  },
]

export const categoryData: Category[] = [
  {
    id: 1,
    categoryName: 'Fashion',
    description: 'Latest trends in clothing, shoes, and accessories.',
    categoryType: 'Clothing',
    color: 'primary',
    image: 'product/1.png',
    isActive: true,
  },
  {
    id: 2,
    categoryName: 'Furniture',
    description: 'Comfortable and stylish furniture for your home.',
    categoryType: 'Furniture',
    color: 'secondary',
    image: 'product/category/1.png',
    isActive: true,
  },
  {
    id: 3,
    categoryName: 'Electronics',
    description: 'Gadgets and electronics for personal and home use.',
    categoryType: 'Electric',
    color: 'warning',
    image: 'dashboard-2/product/1.png',
    isActive: false,
  },
  {
    id: 4,
    categoryName: 'Beauty & Health',
    description: 'Skincare, cosmetics, and health products.',
    categoryType: 'Personal Care',
    color: 'success',
    image: 'product/category/2.png',
    isActive: true,
  },
  {
    id: 5,
    categoryName: 'Books',
    description: 'A wide collection of books in various genres.',
    categoryType: 'Books',
    color: 'primary',
    image: 'product/category/3.png',
    isActive: false,
  },
  {
    id: 6,
    categoryName: 'Sports & Outdoors',
    description: 'Equipment and gear for sports and outdoor activities.',
    categoryType: 'Sports',
    color: 'secondary',
    image: 'product/category/4.png',
    isActive: true,
  },
  {
    id: 7,
    categoryName: 'Toys & Games',
    description: 'Toys and games for children of all ages.',
    categoryType: 'Toys',
    color: 'warning',
    image: 'ecommerce/shop-categories/camera.png',
    isActive: true,
  },
  {
    id: 8,
    categoryName: 'Automotive',
    description: 'Car accessories, parts, and maintenance products.',
    categoryType: 'Vehicles',
    color: 'success',
    image: 'product/2.png',
    isActive: false,
  },
  {
    id: 9,
    categoryName: 'Groceries',
    description: 'Food items, beverages, and household essentials.',
    categoryType: 'Groceries',
    color: 'primary',
    image: 'ecommerce/product-categories/watch.png',
    isActive: true,
  },
  {
    id: 10,
    categoryName: 'Jewelry',
    description: 'Elegant and fine jewelry for every occasion.',
    categoryType: 'Accessories',
    color: 'success',
    image: 'product/14.png',
    isActive: true,
  },
]

export const categoriesItem: Item[] = [
  { id: 1, name: 'T-shirts' },
  { id: 2, name: 'Purse' },
  { id: 3, name: 'Cameras' },
  { id: 4, name: 'Shoes' },
  { id: 5, name: 'Handbags' },
  { id: 6, name: 'Sleepers' },
  { id: 7, name: 'Watches' },
]

export const categoriesType: Item[] = [
  { id: 1, name: 'Electronic' },
  { id: 2, name: 'Accessories' },
  { id: 3, name: 'Cameras' },
  { id: 4, name: 'Footwear' },
  { id: 5, name: 'Handbags' },
  { id: 6, name: 'Clothing' },
  { id: 7, name: 'Furniture' },
]

export const review: Review[] = [
  {
    id: 1,
    productName: 'Apple Desktop 2025',
    productImage: 'ecommerce/product-categories/laptop.png',
    reviewerName: 'Cameron Williams',
    reviewerProfile: 'user/3.png',
    reviewerEmail: 'cameron@gmail.com',
    review:
      'All of my demanding apps run well on the lightning-fast and very effective Apple Desktop. Everything appears clear and colourful thanks to the amazing Retina display.',
    rating: 4,
    date: '2016-02-02',
    status: 'Approve',
  },
  {
    id: 2,
    productName: 'Apple Iphone 13 Pro',
    productImage: 'ecommerce/product-categories/phone.png',
    reviewerName: 'Russell Rose',
    reviewerProfile: 'dashboard-11/user/11.jpg',
    reviewerEmail: 'russell@gmail.com',
    review:
      'The DPI adjustments are a nice tool for both gaming and daily use, and the ergonomic shape suits my hand perfectly.',
    rating: 4,
    date: '2024-12-29',
    status: 'Approve',
  },
  {
    id: 3,
    productName: 'Apple Iphone 14 Pro',
    productImage: 'ecommerce/shop-categories/phone.png',
    reviewerName: 'Kyler Nunez',
    reviewerProfile: 'user-images/user/1.png',
    reviewerEmail: 'kyler@gmail.com',
    review:
      'The iPhone 14 Pro is a remarkable gadget with state-of-the-art features and performance. With its brilliant colours and fine details, the display is amazing and improves every experience.',
    rating: 5,
    date: '2020-08-10',
    status: 'Reject',
  },
  {
    id: 4,
    productName: 'Arm Chair',
    productImage: 'email-template/3.png',
    reviewerName: 'Andrew Baker',
    reviewerProfile: 'dashboard-11/user/12.jpg',
    reviewerEmail: 'andrew@gmail.com',
    review:
      'I can change the chair to my ideal seating position because to its adjustable features, which make it really comfortable.',
    rating: 4,
    date: '2018-12-08',
    status: 'Approve',
  },
  {
    id: 5,
    productName: 'Beauty Blender',
    productImage: 'product/accessories/03.png',
    reviewerName: 'Andrew Price',
    reviewerProfile: 'dashboard/user/11.jpg',
    reviewerEmail: 'andrew@gmail.com',
    review:
      "I recently bought a Bajaj Grinder Jar, and I'm really delighted with how well it works. The jar is ideal for regular usage because it is sturdy and well-made.",
    rating: 3,
    date: '2021-11-20',
    status: 'Reject',
  },
  {
    id: 6,
    productName: 'Camera',
    productImage: 'ecommerce/shop-categories/camera.png',
    reviewerName: 'Olivia Gor',
    reviewerProfile: 'dashboard/user/13.jpg',
    reviewerEmail: 'olivia@gmail.com',
    review: 'I can easily carry it around on my vacations because of its lightweight design.',
    rating: 4,
    date: '2024-04-02',
    status: 'Approve',
  },
  {
    id: 7,
    productName: 'Comfortable Chair',
    productImage: 'dashboard-2/sub-product/25.png',
    reviewerName: 'Luke Mitchell',
    reviewerProfile: 'user/6.jpg',
    reviewerEmail: 'luke@gmail.com',
    review:
      'The DPI adjustments are a nice tool for both gaming and daily use, and the ergonomic shape suits my hand perfectly.',
    rating: 3,
    date: '2022-11-25',
    status: 'Reject',
  },
  {
    id: 8,
    productName: 'Comfortable Sofa',
    productImage: 'dashboard-2/sub-product/15.png',
    reviewerName: 'Leslie Ape',
    reviewerProfile: 'dashboard-11/user/2.jpg',
    reviewerEmail: 'leslie@gmail.com',
    review:
      'Excellent audio and video quality combine to create a really engaging viewing experience.',
    rating: 3,
    date: '2019-03-18',
    status: 'Approve',
  },
  {
    id: 9,
    productName: 'DVD',
    productImage: 'ecommerce/product-categories/dvd.png',
    reviewerName: 'Alexis Taylor',
    reviewerProfile: 'dashboard/user/12.jpg',
    reviewerEmail: 'alexis@gmail.com',
    review: 'I can easily carry it around on my vacations because of its lightweight design.',
    rating: 5,
    date: '2015-11-11',
    status: 'Approve',
  },
  {
    id: 10,
    productName: 'Golden Headphone',
    productImage: 'product/accessories/02.png',
    reviewerName: 'Bexley Nixon',
    reviewerProfile: 'dashboard/user/3.jpg',
    reviewerEmail: 'bexley@gmail.com',
    review:
      'EI can change the chair to my ideal seating position because to its adjustable features, which make it really comfortable.',
    rating: 5,
    date: '2023-11-17',
    status: 'Approve',
  },
  {
    id: 11,
    productName: 'Green Wireless Mouse',
    productImage: 'ecommerce/shop-categories/mouse.png',
    reviewerName: 'Emily Park',
    reviewerProfile: 'dashboard/user/10.jpg',
    reviewerEmail: 'emily@gmail.com',
    review:
      'Excellent audio and video quality combine to create a really engaging viewing experience.',
    rating: 3,
    date: '2016-01-15',
    status: 'Approve',
  },
  {
    id: 12,
    productName: 'Headphones',
    productImage: 'ecommerce/product-categories/headphone.png',
    reviewerName: 'Darrell Alexa',
    reviewerProfile: 'user-images/user/4.png',
    reviewerEmail: 'darrell@gmail.com',
    review:
      'EI can change the chair to my ideal seating position because to its adjustable features, which make it really comfortable.',
    rating: 3,
    date: '2024-03-20',
    status: 'Approve',
  },
  {
    id: 13,
    productName: 'Leather Handbag',
    productImage: 'dashboard-2/sub-product/16.png',
    reviewerName: 'Caleb Riv',
    reviewerProfile: 'user/10.jpg',
    reviewerEmail: 'caleb@gmail.com',
    review:
      'The design is both fashionable and practical, and it has lots of pockets to keep my stuff organised.',
    rating: 4,
    date: '2024-02-12',
    status: 'Approve',
  },
  {
    id: 14,
    productName: 'M185 Mouse',
    productImage: 'ecommerce/product-categories/mouse.png',
    reviewerName: 'Marvin Bob',
    reviewerProfile: 'dashboard-11/user/10.jpg',
    reviewerEmail: 'marvin@gmail.com',
    review:
      'EI can change the chair to my ideal seating position because to its adjustable features, which make it really comfortable.',
    rating: 4,
    date: '2019-03-09',
    status: 'Reject',
  },
  {
    id: 15,
    productName: 'Pixel Grinder Jar',
    productImage: 'product/accessories/01.png',
    reviewerName: 'Thomas Tim',
    reviewerProfile: 'dashboard-11/user/1.jpg',
    reviewerEmail: 'thomas@gmail.com',
    review:
      'The design is both fashionable and practical, and it has lots of pockets to keep my stuff organised.',
    rating: 4,
    date: '2015-05-19',
    status: 'Approve',
  },
  {
    id: 16,
    productName: 'Pixel Shoes',
    productImage: 'dashboard-2/sub-product/14.png',
    reviewerName: 'Kathryn Rae',
    reviewerProfile: 'dashboard-11/user/5.jpg',
    reviewerEmail: 'kathryn@gmail.com',
    review:
      '	Excellent audio and video quality combine to create a really engaging viewing experience.',
    rating: 4,
    date: '2022-03-26',
    status: 'Reject',
  },
  {
    id: 17,
    productName: 'Study Lamp',
    productImage: 'product/accessories/06.png',
    reviewerName: 'Kase Archer',
    reviewerProfile: 'dashboard/user/1.jpg',
    reviewerEmail: 'kase@gmail.com',
    review:
      'I can change the chair to my ideal seating position because to its adjustable features, which make it really comfortable.',
    rating: 5,
    date: '2022-06-12',
    status: 'Approve',
  },
  {
    id: 18,
    productName: 'Wireless Ear Buds',
    productImage: 'ecommerce/product-categories/wireless-headphone.png',
    reviewerName: 'Miranda Bailey',
    reviewerProfile: 'dashboard-11/user/3.jpg',
    reviewerEmail: 'miranda@gmail.com',
    review:
      'The DPI adjustments are a nice tool for both gaming and daily use, and the ergonomic shape suits my hand perfectly.',
    rating: 4,
    date: '2024-02-21',
    status: 'Approve',
  },
  {
    id: 19,
    productName: 'Wireless Speaker',
    productImage: 'ecommerce/shop-categories/speaker.png',
    reviewerName: 'Savannah Bell',
    reviewerProfile: 'dashboard-11/user/4.jpg',
    reviewerEmail: 'savannah@gmail.com',
    review:
      'The design is both fashionable and practical, and it has lots of pockets to keep my stuff organised.',
    rating: 3,
    date: '2019-03-18',
    status: 'Approve',
  },
  {
    id: 20,
    productName: 'Wool Washing Machine',
    productImage: 'product/accessories/07.png',
    reviewerName: 'Gideon Quinn',
    reviewerProfile: 'user-images/user/2.png',
    reviewerEmail: 'gideon@gmail.com',
    review:
      "For my sensitive wool clothing, the Wool Washing Machine has been a game-changer since I've been using it for a few months.",
    rating: 5,
    date: '2020-05-28',
    status: 'Approve',
  },
]

export const orders: Order[] = [
  {
    id: 1,
    orderNumber: 1244,
    orderDate: '12 Mar 2024 04:05:AM',
    customerName: 'Daxton Norris',
    totalAmount: 478.14,
    paymentStatus: 'Pending',
    paymentMethod: 'Paypal',
  },
  {
    id: 2,
    orderNumber: 1245,
    orderDate: '02 Feb 2024 03:21:PM',
    customerName: 'Zakai Ramos',
    totalAmount: 120.45,
    paymentStatus: 'Failed',
    paymentMethod: 'COD',
  },
  {
    id: 3,
    orderNumber: 1246,
    orderDate: '10 Jun 2024 02:10:AM',
    customerName: 'Sophia Kirby',
    totalAmount: 897.0,
    paymentStatus: 'Completed',
    paymentMethod: 'Bank Transfer',
  },
  {
    id: 4,
    orderNumber: 1247,
    orderDate: '01 Jan 2024 07:30:PM',
    customerName: 'Curtis Robertson',
    totalAmount: 304.12,
    paymentStatus: 'Failed',
    paymentMethod: 'Bank Transfer',
  },
  {
    id: 5,
    orderNumber: 1248,
    orderDate: '28 Feb 2024 11:50:PM',
    customerName: 'Rylan Norton',
    totalAmount: 200.4,
    paymentStatus: 'Completed',
    paymentMethod: 'Credit Card',
  },
  {
    id: 6,
    orderNumber: 1249,
    orderDate: '03 Dec 2024 05:15:PM',
    customerName: 'Emir David',
    totalAmount: 140.5,
    paymentStatus: 'Completed',
    paymentMethod: 'COD',
  },
  {
    id: 7,
    orderNumber: 1250,
    orderDate: '09 Mar 2024 03:05:AM',
    customerName: 'Kai Jacobs',
    totalAmount: 450.7,
    paymentStatus: 'Completed',
    paymentMethod: 'Credit Card',
  },
  {
    id: 8,
    orderNumber: 1251,
    orderDate: '13 Apr 2024 04:28:AM',
    customerName: 'Aron Hester',
    totalAmount: 400.05,
    paymentStatus: 'Pending',
    paymentMethod: 'Paypal',
  },
  {
    id: 9,
    orderNumber: 1252,
    orderDate: '18 May 2024 06:00:PM',
    customerName: 'Jaime Ellis',
    totalAmount: 250.0,
    paymentStatus: 'Pending',
    paymentMethod: 'Credit Card',
  },
  {
    id: 10,
    orderNumber: 1253,
    orderDate: '20 Aug 2024 07:10:PM',
    customerName: 'Hector Torres',
    totalAmount: 145.3,
    paymentStatus: 'Completed',
    paymentMethod: 'COD',
  },
  {
    id: 11,
    orderNumber: 1254,
    orderDate: '16 Sep 2024 12:10:PM',
    customerName: 'Salge Lucero',
    totalAmount: 170.0,
    paymentStatus: 'Completed',
    paymentMethod: 'Credit Card',
  },
  {
    id: 12,
    orderNumber: 1255,
    orderDate: '17 Oct 2024 10:40:PM',
    customerName: 'Remi Nelson',
    totalAmount: 300.5,
    paymentStatus: 'Failed',
    paymentMethod: 'Bank Transfer',
  },
  {
    id: 13,
    orderNumber: 1256,
    orderDate: '22 Nov 2024 09:05:PM',
    customerName: 'Ayla Tucker',
    totalAmount: 900.14,
    paymentStatus: 'Pending',
    paymentMethod: 'Paypal',
  },
  {
    id: 14,
    orderNumber: 1257,
    orderDate: '26 Jan 2024 08:15:AM',
    customerName: 'Aniya Davila',
    totalAmount: 870.0,
    paymentStatus: 'Completed',
    paymentMethod: 'Credit Card',
  },
  {
    id: 15,
    orderNumber: 1302,
    orderDate: '01 Jan 2024 10:25:AM',
    customerName: 'Camden Klein',
    totalAmount: 50.14,
    paymentStatus: 'Pending',
    paymentMethod: 'COD',
  },
  {
    id: 16,
    orderNumber: 1306,
    orderDate: '12 Mar 2024 01:35:AM',
    customerName: 'Ezra Gentry',
    totalAmount: 74.0,
    paymentStatus: 'Failed',
    paymentMethod: 'Credit Card',
  },
  {
    id: 17,
    orderNumber: 1310,
    orderDate: '20 Apr 2024 07:00:AM',
    customerName: 'Jax Pierce',
    totalAmount: 74.7,
    paymentStatus: 'Completed',
    paymentMethod: 'COD',
  },
  {
    id: 18,
    orderNumber: 1314,
    orderDate: '22 Dec 2024 09:45:AM',
    customerName: 'Yara Walsh',
    totalAmount: 45.34,
    paymentStatus: 'Pending',
    paymentMethod: 'Paypal',
  },
  {
    id: 19,
    orderNumber: 1380,
    orderDate: '31 May 2024 10:40:PM',
    customerName: 'Fox Roth',
    totalAmount: 48.4,
    paymentStatus: 'Completed',
    paymentMethod: 'Bank Transfer',
  },
  {
    id: 20,
    orderNumber: 1399,
    orderDate: '17 Apr 2024 08:50:PM',
    customerName: 'Selah Bush',
    totalAmount: 78.48,
    paymentStatus: 'Failed',
    paymentMethod: 'Credit Card',
  },
]

export const orderSteps: OrderStep[] = [
  { id: 1, title: 'Order Received', active: true },
  { id: 2, title: 'Processing', active: true },
  { id: 3, title: 'Order Packed', active: true },
  { id: 4, title: 'Shipped', active: false },
  { id: 5, title: 'Delivered', active: false },
]

export const orderDetails: OrderDetails[] = [
  {
    id: 1,
    productName: 'Lightweight Headphones',
    productImage: 'ecommerce/shop-categories/headphone.png',
    brand: 'Boat Rockerz',
    color: 'Gray',
    discountPrice: 85.0,
    price: 100.0,
    quantity: 1,
    totalQuantity: 15,
    subTotal: 85.0,
  },
  {
    id: 2,
    productName: 'Smart Watch',
    productImage: 'dashboard-2/sub-product/24.png',
    brand: 'Fastrack',
    color: 'Brown',
    discountPrice: 140.0,
    price: 200.0,
    quantity: 1,
    totalQuantity: 10,
    subTotal: 140.0,
  },
  {
    id: 3,
    productName: 'Leather Handbag',
    productImage: 'dashboard-2/sub-product/16.png',
    brand: 'Fendi',
    color: 'Pink',
    discountPrice: 250.0,
    price: 300.0,
    quantity: 1,
    totalQuantity: 30,
    subTotal: 250.0,
  },
  {
    id: 4,
    productName: "Men's Shoes",
    productImage: 'dashboard-2/sub-product/14.png',
    brand: 'Sneaker',
    color: 'Yellow',
    discountPrice: 150.0,
    price: 180.0,
    quantity: 2,
    totalQuantity: 5,
    subTotal: 300.0,
  },
]

export const customerDetails: CustomerDetail[] = [
  { id: 1, label: 'Name', value: 'Lucy Fisher' },
  { id: 2, label: 'Email Address', value: 'lucy.fisher@example.com' },
  {
    id: 3,
    label: 'Billing Address',
    value: '12B, Pine Valley Road, Seattle, Washington, United States 98101',
  },
  {
    id: 4,
    label: 'Shipping Address',
    value: '12B, Pine Valley Road, Seattle, Washington, United States 98101',
  },
  { id: 5, label: 'Delivery Slot', value: 'Standard Delivery│Approx 5 to 7 Days' },
  { id: 6, label: 'Payment Mode', value: 'COD' },
]

export const filterOptions: FilterOption[] = [
  { id: 1, label: 'All', value: 'all', active: true },
  { id: 2, label: 'Furniture', value: 'furniture', active: false },
  { id: 3, label: 'Professional Services', value: 'professional_service', active: false },
  { id: 4, label: 'Security', value: 'security', active: false },
  { id: 5, label: 'Travel', value: 'travel', active: false },
  { id: 6, label: 'Healthcare', value: 'healthcare', active: false },
]

export const seller: Store[] = [
  {
    id: 1,
    storeName: 'Gadget Grove',
    storeLogo: 'product/seller/1.png',
    vendorName: 'Sabrina Whitney',
    totalOrder: 567,
    totalProduct: 45,
    totalEarning: 233,
    storeCategoryId: 2,
  },
  {
    id: 2,
    storeName: 'Health Haven',
    storeLogo: 'product/seller/2.png',
    vendorName: 'Michael Stone',
    totalOrder: 322,
    totalProduct: 30,
    totalEarning: 450,
    storeCategoryId: 6,
  },
  {
    id: 3,
    storeName: 'Secure Shield',
    storeLogo: 'product/seller/3.png',
    vendorName: 'Emma Grey',
    totalOrder: 278,
    totalProduct: 25,
    totalEarning: 389,
    storeCategoryId: 4,
  },
  {
    id: 4,
    storeName: 'Travel Treasures',
    storeLogo: 'product/seller/4.png',
    vendorName: 'Liam Brooks',
    totalOrder: 150,
    totalProduct: 12,
    totalEarning: 200,
    storeCategoryId: 5,
  },
  {
    id: 5,
    storeName: 'Furniture Fiesta',
    storeLogo: 'product/seller/5.png',
    vendorName: 'Sophia Lee',
    totalOrder: 600,
    totalProduct: 80,
    totalEarning: 700,
    storeCategoryId: 2,
  },
  {
    id: 6,
    storeName: 'Service Spot',
    storeLogo: 'product/seller/6.png',
    vendorName: 'Ethan Miller',
    totalOrder: 90,
    totalProduct: 20,
    totalEarning: 120,
    storeCategoryId: 2,
  },
  {
    id: 7,
    storeName: 'Healthy Habits',
    storeLogo: 'product/seller/7.png',
    vendorName: 'Olivia Brown',
    totalOrder: 350,
    totalProduct: 40,
    totalEarning: 500,
    storeCategoryId: 6,
  },
  {
    id: 8,
    storeName: 'Guardian Goods',
    storeLogo: 'product/seller/8.png',
    vendorName: 'James Wilson',
    totalOrder: 400,
    totalProduct: 60,
    totalEarning: 520,
    storeCategoryId: 4,
  },
  {
    id: 9,
    storeName: 'Adventure Awaits',
    storeLogo: 'product/seller/9.png',
    vendorName: 'Charlotte Taylor',
    totalOrder: 250,
    totalProduct: 35,
    totalEarning: 330,
    storeCategoryId: 5,
  },
  {
    id: 10,
    storeName: 'Furniture World',
    storeLogo: 'product/seller/10.png',
    vendorName: 'Henry Moore',
    totalOrder: 720,
    totalProduct: 90,
    totalEarning: 880,
    storeCategoryId: 2,
  },
  {
    id: 11,
    storeName: 'EcoFurnishings',
    storeLogo: 'product/seller/11.png',
    vendorName: 'Nathaniel Price',
    totalOrder: 275,
    totalProduct: 30,
    totalEarning: 430,
    storeCategoryId: 2,
  },
  {
    id: 12,
    storeName: 'Travel Explorers',
    storeLogo: 'product/seller/12.png',
    vendorName: 'Amelia Scott',
    totalOrder: 600,
    totalProduct: 80,
    totalEarning: 1000,
    storeCategoryId: 5,
  },
  {
    id: 13,
    storeName: 'SecurePro Systems',
    storeLogo: 'product/seller/13.png',
    vendorName: 'Ethan Walker',
    totalOrder: 200,
    totalProduct: 25,
    totalEarning: 350,
    storeCategoryId: 4,
  },
  {
    id: 14,
    storeName: 'Health Haven',
    storeLogo: 'product/seller/14.png',
    vendorName: 'Isabella Martinez',
    totalOrder: 450,
    totalProduct: 40,
    totalEarning: 770,
    storeCategoryId: 6,
  },
  {
    id: 15,
    storeName: 'Service Masters',
    storeLogo: 'product/seller/15.png',
    vendorName: 'William Harris',
    totalOrder: 380,
    totalProduct: 45,
    totalEarning: 690,
    storeCategoryId: 3,
  },
]

export const storeGeneralDetails: StoreGeneralDetails[] = [
  {
    id: 1,
    title: 'Total Revenue',
    value: '$5678000',
    icon: 'c-revenue',
    color: 'secondary',
  },
  {
    id: 2,
    title: 'Total Orders',
    value: 890,
    icon: 'new-order',
    color: 'primary',
  },
  {
    id: 3,
    title: 'Total Stores',
    value: 285,
    icon: 'kanban',
    color: 'warning',
    type: 'stroke',
  },
  {
    id: 4,
    title: 'Total Users',
    value: 2000,
    icon: 'analytics-user',
    color: 'success',
  },
]

export const socialTabs = [
  {
    id: 1,
    title: 'Earnings',
    color: 'warning',
    icon: 'fill-earning',
    tabId: 'v-pills-youtube',
  },
  {
    id: 2,
    title: 'Orders',
    color: 'success',
    icon: 'fill-orders',
    tabId: 'v-pills-facebook',
  },
  {
    id: 3,
    title: 'Products',
    color: 'primary',
    icon: 'fill-product',
    tabId: 'v-pills-instagram',
  },
]

export const sellerOneSeries: ApexOptions['series'] = [
  {
    name: 'Earnings',
    data: [600, 679, 850, 760, 870, 740, 910, 1025, 970, 800, 1040, 1199],
  },
]

export const sellerChartOne: ApexOptions = {
  fill: {
    type: 'gradient',
    gradient: {
      type: 'vertical',
      shadeIntensity: 0.4,
      opacityFrom: 0.4,
      opacityTo: 0,
      stops: [0, 90, 100],
      colorStops: [],
    },
  },
  chart: {
    height: 230,
    type: 'area',
    dropShadow: {
      enabled: true,
      color: '#FFC38D',
      top: 8,
      left: 0,
      blur: 2,
      opacity: 0.2,
    },
    toolbar: {
      show: false,
    },
  },
  colors: ['#FFC38D'],
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return '$' + val
    },
    style: {
      fontSize: '12px',
      fontFamily: 'Rubik, sans-serif',
      fontWeight: 'bold',
      colors: undefined,
    },
  },

  stroke: {
    curve: 'smooth',
    width: 3,
  },
  tooltip: {
    x: {
      show: false,
    },

    y: {
      formatter: function (val) {
        return '$' + val
      },
    },
  },
  markers: {
    size: 1,
  },
  xaxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'July',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    min: 500,
    max: 1200,
    tickAmount: 4,
  },
  legend: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 575,
      options: {
        xaxis: {
          type: 'category',
          tickAmount: 6,
          tickPlacement: 'on',
        },
      },
    },
  ],
}

export const sellerTwoSeries: ApexOptions['series'] = [
  {
    name: 'Orders',
    data: [30, 50, 105, 80, 120, 40, 90, 150, 60, 160, 170, 140],
  },
]

export const sellerChartTwo: ApexOptions = {
  fill: {
    type: 'gradient',
    gradient: {
      type: 'vertical',
      shadeIntensity: 0.4,
      opacityFrom: 0.4,
      opacityTo: 0,
      stops: [0, 90, 100],
      colorStops: [],
    },
  },
  chart: {
    height: 230,
    type: 'area',
    dropShadow: {
      enabled: true,
      color: '#84D7EB',
      top: 8,
      left: 0,
      blur: 2,
      opacity: 0.2,
    },
    toolbar: {
      show: false,
    },
  },
  colors: ['#84D7EB'],
  dataLabels: {
    enabled: true,
    style: {
      fontSize: '12px',
      fontFamily: 'Helvetica, Arial, sans-serif',
      fontWeight: 'bold',
      colors: undefined, // or array of colors
    },
  },
  stroke: {
    curve: 'smooth',
    width: 3,
  },
  tooltip: {
    x: {
      show: false,
    },
  },
  markers: {
    size: 1,
  },
  xaxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'July',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    min: 0,
    max: 200,
    tickAmount: 4,
  },
  legend: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 575,
      options: {
        xaxis: {
          type: 'category',
          tickAmount: 6,
          tickPlacement: 'on',
        },
      },
    },
  ],
}

export const sellerThreeSeries: ApexOptions['series'] = [
  {
    name: 'Products',
    data: [130, 160, 140, 100, 140, 130, 189, 120, 156, 106, 112, 175],
  },
]

export const sellerChartThree: ApexOptions = {
  fill: {
    type: 'gradient',
    gradient: {
      type: 'vertical',
      shadeIntensity: 0.4,
      opacityFrom: 0.4,
      opacityTo: 0,
      stops: [0, 90, 100],
      colorStops: [],
    },
  },
  chart: {
    height: 230,
    type: 'area',
    dropShadow: {
      enabled: true,
      color: primary,
      top: 8,
      left: 0,
      blur: 2,
      opacity: 0.2,
    },
    toolbar: {
      show: false,
    },
  },
  colors: [primary],
  dataLabels: {
    enabled: true,
    style: {
      fontSize: '12px',
      fontFamily: 'Helvetica, Arial, sans-serif',
      fontWeight: 'bold',
      colors: undefined,
    },
  },

  stroke: {
    curve: 'smooth',
    width: 3,
  },
  tooltip: {
    x: {
      show: false,
    },
  },
  markers: {
    size: 1,
  },
  xaxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'July',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    min: 0,
    max: 200,
    tickAmount: 4,
  },
  legend: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 575,
      options: {
        xaxis: {
          type: 'category',
          tickAmount: 6,
          tickPlacement: 'on',
        },
      },
    },
  ],
}

export const stepList: Step[] = [
  { id: 1, title: 'Personal Info' },
  { id: 2, title: 'Company Contact' },
  { id: 3, title: 'Company Overview' },
  { id: 4, title: 'Financial Info' },
  { id: 5, title: 'Finish' },
]

export const topSellingProducts: TopSellingProduct[] = [
  {
    id: 1,
    productName: 'Apple desktop 2024',
    productImage: 'ecommerce/product-categories/laptop.png', // Replace with actual image URL
    category: 'Laptops',
    price: 587.25,
    orders: 35,
    stock: 50,
    totalAmount: 29362.5,
  },
  {
    id: 2,
    productName: 'Arm Chair',
    productImage: 'email-template/3.png',
    category: 'Furniture',
    price: 1000.0,
    orders: 25,
    stock: 125,
    totalAmount: 25000.0,
  },
  {
    id: 3,
    productName: 'Bajaj Grinder Jar',
    productImage: 'product/accessories/01.png',
    category: 'Electric',
    price: 194.48,
    orders: 99,
    stock: 400,
    totalAmount: 19253.52,
  },
  {
    id: 4,
    productName: 'Beauty Blender',
    productImage: 'product/accessories/03.png',
    category: 'Make-up',
    price: 999.0,
    orders: 10,
    stock: 25,
    totalAmount: 4995.0,
  },
  {
    id: 5,
    productName: 'DVD',
    productImage: 'ecommerce/product-categories/dvd.png',
    category: 'Electric',
    price: 485.45,
    orders: 1,
    stock: 100,
    totalAmount: 485.45,
  },
  {
    id: 6,
    productName: 'Golden Headphone',
    productImage: 'product/accessories/02.png',
    category: 'Electric',
    price: 577.69,
    orders: 20,
    stock: 140,
    totalAmount: 15553.8,
  },
  {
    id: 7,
    productName: 'M185 compact wireless mouse',
    productImage: 'ecommerce/product-categories/mouse.png',
    category: 'Electric',
    price: 22.0,
    orders: 2,
    stock: 100,
    totalAmount: 44.0,
  },
  {
    id: 8,
    productName: 'Projector',
    productImage: 'product/accessories/08.png',
    category: 'Electric',
    price: 597.05,
    orders: 1,
    stock: 50,
    totalAmount: 597.05,
  },
  {
    id: 9,
    productName: 'Smart watch',
    productImage: 'ecommerce/product-categories/watch.png',
    category: 'Electric',
    price: 478.48,
    orders: 1,
    stock: 120,
    totalAmount: 476.48,
  },
  {
    id: 10,
    productName: 'Speakers',
    productImage: 'ecommerce/product-categories/speaker.png',
    category: 'Electric',
    price: 245.45,
    orders: 1,
    stock: 50,
    totalAmount: 245.45,
  },
  {
    id: 11,
    productName: 'Study lamp',
    productImage: 'product/accessories/06.png',
    category: 'Electric',
    price: 100.1,
    orders: 1,
    stock: 10,
    totalAmount: 100.1,
  },
  {
    id: 12,
    productName: 'Wool washing machine',
    productImage: 'product/accessories/07.png',
    category: 'Electric',
    price: 554.99,
    orders: 2,
    stock: 28,
    totalAmount: 1109.98,
  },
]

export const contactDetails: Details[] = [
  {
    id: 1,
    icon: 'fa-location-dot',
    label: 'Location',
    value: 'Germany',
    isLink: false,
  },
  {
    id: 2,
    icon: 'fa-phone',
    label: 'Phone Number',
    value: '+49 30901820',
    isLink: false,
  },
  {
    id: 3,
    icon: 'fa-envelope',
    label: 'Email',
    value: 'Crewwilcox@gmail.com',
    isLink: false,
  },
  {
    id: 4,
    icon: 'fa-square-up-right',
    label: 'URL',
    value: 'https://www.Crewwilcox.com',
    isLink: true,
  },
]

export const ratingList: Rating[] = [
  {
    id: 1,
    rating: 5,
    width: '85%',
  },
  {
    id: 2,
    rating: 4,
    width: '50%',
  },
  {
    id: 3,
    rating: 3,
    width: '43%',
  },
  {
    id: 4,
    rating: 2,
    width: '32%',
  },
  {
    id: 5,
    rating: 1,
    width: '18%',
  },
]

export const notification: Setting[] = [
  {
    id: 1,
    title: 'Receive notification for new orders.',
    checked: true,
  },
  {
    id: 2,
    title: 'Receive notification for returns.',
    checked: false,
  },
  {
    id: 3,
    title: 'Receive notification for customer reviews.',
    checked: false,
  },
  {
    id: 4,
    title: 'Receive notification for product reviews.',
    checked: false,
  },
]

export const receiveNotification: Setting[] = [
  {
    id: 1,
    icon: 'fa-brands fa-whatsapp',
    checked: true,
  },
  {
    id: 2,
    icon: 'fa-regular fa-comments',
    checked: false,
  },
  {
    id: 3,
    icon: 'fa-regular fa-envelope',
    checked: false,
  },
]

export const settingTab: Setting[] = [
  {
    id: 1,
    tabId: 'ver-pills-general',
    icon: 'general-setting',
    title: 'General',
  },
  {
    id: 2,
    tabId: 'ver-pills-activation',
    icon: 'activation-setting',
    title: 'Activation',
  },
  {
    id: 3,
    tabId: 'ver-pills-point',
    icon: 'wallet-point',
    title: 'Wallet Points',
  },
  {
    id: 4,
    tabId: 'ver-pills-seller',
    icon: 'seller-commission',
    title: 'Seller Commissions',
  },
  {
    id: 5,
    tabId: 'ver-pills-refund',
    icon: 'setting-refund',
    title: 'Refund',
  },
  {
    id: 6,
    tabId: 'ver-pills-delivery',
    icon: 'complete-deliver',
    title: 'Delivery',
  },
  {
    id: 7,
    tabId: 'ver-pills-payment',
    icon: 'setting-payment',
    title: 'Payment Method',
  },
  {
    id: 8,
    tabId: 'ver-pills-analytics',
    icon: 'setting-analytics',
    title: 'Analytics',
  },
]

export const timezones: Option[] = [
  { id: 1, name: 'UTC' },
  { id: 2, name: 'Abidjan' },
  { id: 3, name: 'Accra' },
  { id: 4, name: 'Bamako' },
  { id: 5, name: 'Bangui' },
  { id: 6, name: 'Banjul' },
  { id: 7, name: 'Cairo' },
  { id: 8, name: 'Ceuta' },
  { id: 9, name: 'Douala' },
  { id: 10, name: 'Juba' },
  { id: 11, name: 'Kigali' },
  { id: 12, name: 'Lome' },
  { id: 13, name: 'Tripoli' },
  { id: 14, name: 'Adak' },
  { id: 15, name: 'Salta' },
  { id: 16, name: 'Tucuman' },
  { id: 17, name: 'Aruba' },
  { id: 18, name: 'Bahia' },
  { id: 19, name: 'Boise' },
  { id: 20, name: 'Cancun' },
  { id: 21, name: 'Denver' },
  { id: 22, name: 'Grenada' },
  { id: 23, name: 'Knox' },
  { id: 24, name: 'Vevay' },
  { id: 25, name: 'Lima' },
  { id: 26, name: 'Samara' },
]

export const currency: Option[] = [
  { id: 1, name: 'USD' },
  { id: 2, name: 'INR' },
  { id: 3, name: 'GBP' },
  { id: 4, name: 'EUR' },
]

export const activation: Data[] = [
  {
    id: 1,
    label: 'Multivendor',
    info: '*Enable or disable external vendors access to our online store.',
    checked: true,
  },
  {
    id: 2,
    label: 'Enable Wallet',
    info: '*Enable the use of wallet balance for payment during checkout.',
    checked: true,
  },
  {
    id: 3,
    label: 'Enable Point',
    info: '*Enable the use of points for payment during checkout.',
    checked: true,
  },
  {
    id: 4,
    label: 'Coupon Enable',
    info: '*Allow customers to use coupons for payment at checkout.',
    checked: true,
  },
  {
    id: 5,
    label: 'Hide Stock Product',
    info: '*Decide whether to show product stock or not.',
    checked: false,
  },
]

export const point: Data[] = [
  {
    id: 1,
    label: 'Signup Points',
    value: 150,
    icon: 'fa-regular fa-gem',
    placeholder: 'Enter signup points',
    info: '*Provide points to new users as a signup incentive.',
  },
  {
    id: 2,
    label: 'Min Per Order Amount',
    value: 150,
    icon: 'fa-regular fa-gem',
    placeholder: 'Enter min per order amount',
    info: '*Collect points when orders meet or exceed the minimum value.',
  },
  {
    id: 3,
    label: 'Point Currency Ratio',
    value: 30,
    placeholder: 'Enter point current ratio',
    info: '*Determine the conversion factor from points to currency.',
  },
  {
    id: 4,
    label: 'Reward Per Order Point',
    value: 10,
    placeholder: 'Enter reward per order point',
    info: '*Earn reward points based on each orders value.<br>(Rewards Points = (Total Order Amount / Min Per Order Amount) * Reward Per Order Point)',
  },
]

export const commission: Data[] = [
  {
    id: 1,
    label: 'Min Withdraw Amount',
    icon: 'fa-solid fa-dollar-sign',
    placeholder: 'Enter min withdraw amount',
    info: '*Payout Minimum for Sellers: Specify the min amount sellers can request for withdrawal.',
  },
  {
    id: 2,
    label: 'Commission Rate',
    sign: '%',
    placeholder: 'Enter default commission rate',
    info: '*Set the rate at which admin receives a commission from seller earnings..',
  },
  {
    id: 3,
    label: 'Category Based Commission',
    switch: true,
    info: '*Set the rate at which admin receives a commission from seller earnings..',
  },
]

export const paymentTab: Setting[] = [
  {
    id: 1,
    tabId: 'paypal-option',
    title: 'Paypal',
  },
  {
    id: 2,
    tabId: 'razorpay-option',
    title: 'Razorpay',
  },
  {
    id: 3,
    tabId: 'mollie-option',
    title: 'Mollie',
  },
  {
    id: 4,
    tabId: 'cod-option',
    title: 'COD',
  },
  {
    id: 5,
    tabId: 'stripe-option',
    title: 'Stripe',
  },
]

export const paypalOption: PaypalOption[] = [
  {
    id: 1,
    label: 'Status',
    switch: true,
  },
  {
    id: 2,
    label: 'Sandbox Mode',
    switch: true,
  },
  {
    id: 3,
    label: 'Client ID',
    placeholder: 'Enter client Id',
  },
  {
    id: 4,
    label: 'Secret',
    placeholder: 'Enter client Id',
  },
]

export const analytics: Setting[] = [
  {
    id: 1,
    tabId: 'facebookPixel-option',
    title: 'Facebook Pixel',
  },
  {
    id: 2,
    tabId: 'googleAnalysis-option',
    title: 'Google Analytics',
  },
]

export const invoice6: Invoice[] = [
  {
    id: 1,
    name: 'Red Shirt',
    description: "Wild West - Red Cotton Blend Regular Fit Men's Formal Shirt.",
    hours: 5,
    rate: 75,
  },
  {
    id: 2,
    name: 'Flower Dress',
    description: 'Skyblue Flower Printed Sleevless Strappy Dress.',
    hours: 3,
    rate: 75,
  },
  {
    id: 3,
    name: 'Red Skirt',
    description: "R L F - Red Cotton Blend Women's A-Line Skirt.",
    hours: 10,
    rate: 75,
  },
  {
    id: 4,
    name: 'Brown Dress',
    description: "Aask - Brown Polyester Blend Women's Fit & Flare Dress.",
    hours: 10,
    rate: 75,
  },
]

export const invoiceProducts = [
  {
    title: 'Apple Desktop',
    code: '#XDG-6437',
    qty: 2,
    price: 100,
    unit: 'Hour(s)',
    vat: 0,
    img: 'ecommerce/product-categories/laptop.png',
  },
  {
    title: 'Smart Watch',
    code: '#XDG-6437',
    qty: 1,
    price: 200,
    unit: 'Hour(s)',
    vat: 0,
    img: 'ecommerce/product-categories/watch.png',
  },
  {
    title: 'Apple iphone 13 Pro',
    code: '#XDG-6437',
    qty: 1,
    price: 10000,
    unit: 'Hour(s)',
    vat: 0,
    img: 'ecommerce/product-categories/phone.png',
  },
  {
    title: 'Wireless Headphone',
    code: '#XDG-6437',
    qty: 2,
    price: 8000,
    unit: 'Hour(s)',
    vat: 0,
    img: 'ecommerce/product-categories/headphone.png',
  },
]

export const invoice3Products = [
  {
    title: 'HTML Admin template',
    license: 'Regular License',
    qty: 2,
    price: 35,
    color: '#3a53a3',
  },
  {
    title: 'React Admin template',
    license: 'Regular License',
    qty: 1,
    price: 25,
    color: '#ffae46',
  },
  {
    title: 'Laravel Admin template',
    license: 'Regular License',
    qty: 2,
    price: 30,
    color: '#0284C7',
  },
  {
    title: 'Vuejs Admin template',
    license: 'Regular License',
    qty: 3,
    price: 20,
    color: '#ff3364',
  },
]

export const invoiceItems: InvoiceItem[] = [
  { title: 'Proposal & Brochure Design', license: 'Regular License', price: 300, qty: 1 },
  { title: 'Web design and development', license: 'Regular License', price: 400, qty: 2 },
  { title: 'Logo & Brand design', license: 'Regular License', price: 240, qty: 2 },
  { title: 'Stationary Design', license: 'Regular License', price: 100, qty: 1 },
]
