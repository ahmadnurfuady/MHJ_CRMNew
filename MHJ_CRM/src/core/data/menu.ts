import { routes } from '@/router/routes'
import { MenuItem } from '@/types/menu'

export const menu: MenuItem[] = [
  {
    headTitle: 'General',
    type: 'headtitle',
  },
  {
    title: 'Dashboards',
    icon: 'home',
    type: 'sub',
    active: false,
    isPinned: false,
    badgeType: 'primary',
    children: [
      {
        path: routes.Dashboards.Default,
        title: 'Default',
        type: 'link',
      },
      {
        path: routes.Dashboards.ECommerce,
        title: 'Ecommerce',
        type: 'link',
      },
      {
        path: routes.Dashboards.Project,
        title: 'Project ',
        type: 'link',
      },
    ],
  },
  {
    title: 'Widgets',
    icon: 'widget',
    type: 'sub',
    active: false,
    isPinned: false,
    children: [
      {
        path: routes.Widgets.General,
        title: 'General',
        type: 'link',
      },
      {
        path: routes.Widgets.Charts,
        title: 'Charts',
        type: 'link',
      },
    ],
  },
  {
    headTitle: 'Applications',
    type: 'headtitle',
  },
  {
    title: 'project',
    icon: 'project',
    type: 'sub',
    isPinned: false,
    menu: true,
    active: false,
    children: [
      {
        path: routes.Project.ProjectDetails,
        title: 'Project Details',
        badgeType: 'warning',
        badge: 'New',
        type: 'link',
      },
      {
        path: routes.Project.ProjectList,
        title: 'Project List',
        type: 'link',
      },
      {
        path: routes.Project.ProjectCreate,
        title: 'Create new',
        type: 'link',
      },
    ],
  },
  {
    path: routes.App.FileManager,
    title: 'File Manager',
    icon: 'file',
    type: 'link',
    isPinned: false,
    active: false,
  },
  {
    path: routes.App.KanbanBoard,
    title: 'Kanban Board',
    icon: 'board',
    type: 'link',
    badgeType: 'light-danger',
    isPinned: false,
    active: false,
  },
  {
    title: 'Ecommerce',
    icon: 'ecommerce',
    type: 'sub',
    active: false,
    menu: true,
    isPinned: false,
    children: [
      {
        title: 'Products',
        type: 'sub',
        active: false,
        children: [
          {
            path: routes.Ecommerce.Products.AddProduct,
            title: 'Add Product',
            type: 'link',
          },
          {
            path: routes.Ecommerce.Products.ProductGrid,
            title: 'Product Grid',
            type: 'link',
          },
          {
            path: routes.Ecommerce.Products.ProductList,
            title: 'Product List',
            type: 'link',
          },
          {
            path: '/product/details/1',
            title: 'Product Details',
            type: 'link',
          },
        ],
      },
      {
        path: routes.Ecommerce.Category,
        title: 'Category',
        type: 'link',
      },
      {
        title: 'Seller',
        type: 'sub',
        active: false,
        children: [
          {
            path: routes.Ecommerce.Seller.SellerList,
            title: 'Seller List',
            type: 'link',
          },
          { path: '/seller/details/1', title: 'Seller Details', type: 'link' },
        ],
      },
      {
        title: 'Orders',
        type: 'sub',
        active: false,
        children: [
          {
            path: routes.Ecommerce.Orders.OrderHistory,
            title: 'Order History',
            type: 'link',
          },
          { path: '/order/details/1244', title: 'Order Details', type: 'link' },
        ],
      },
      {
        title: 'Invoices',
        type: 'sub',
        active: false,
        children: [
          {
            path: routes.Ecommerce.Invoice.Invoice1,
            title: 'Invoice-1',
            type: 'link',
          },
          {
            path: routes.Ecommerce.Invoice.Invoice2,
            title: 'Invoice-2',
            type: 'link',
          },
          {
            path: routes.Ecommerce.Invoice.Invoice3,
            title: 'Invoice-3',
            type: 'link',
          },
          {
            path: routes.Ecommerce.Invoice.Invoice4,
            title: 'Invoice-4',
            type: 'link',
          },
          {
            path: routes.Ecommerce.Invoice.Invoice5,
            title: 'Invoice-5',
            type: 'link',
          },
          {
            path: routes.Ecommerce.Invoice.Invoice6,
            title: 'Invoice-6',
            type: 'link',
          },
        ],
      },
      { path: routes.Ecommerce.Cart, title: 'Cart', type: 'link' },
      { path: routes.Ecommerce.Wishlist, title: 'Wishlist', type: 'link' },
      { path: routes.Ecommerce.Checkout, title: 'Checkout', type: 'link' },
    ],
  },
  {
    path: routes.App.MailBox,
    title: 'Mail Box',
    icon: 'email',
    type: 'link',
    isPinned: false,
    active: false,
  },
  {
    title: 'Chat',
    icon: 'chat',
    type: 'sub',
    active: false,
    isPinned: false,
    children: [
      {
        path: routes.Chat.PrivateChat,
        title: 'Private Chat',
        type: 'link',
      },
      {
        path: routes.Chat.GroupChat,
        title: 'Group Chat',
        type: 'link',
      },
    ],
  },
  {
    title: 'Users',
    icon: 'user',
    type: 'sub',
    active: false,
    isPinned: false,
    children: [
      { path: routes.User.UserProfile, title: 'User Profile', type: 'link' },
      { path: routes.User.AddUser, title: 'Add User', type: 'link' },
      { path: routes.User.UserList, title: 'User List', type: 'link' },
      {
        path: routes.User.UserCards,
        title: 'User Cards',
        type: 'link',
      },
      {
        path: routes.User.Roles,
        title: 'Roles & Permission',
        type: 'link',
      },
    ],
  },

  {
    title: 'Reports',
    icon: 'reports',
    type: 'sub',
    badgeType: 'warning',
    badge: 'New',
    active: false,
    isPinned: false,
    children: [
      {
        path: routes.Reports.Product,
        title: 'Products',
        type: 'link',
      },
      {
        path: routes.Reports.Sales,
        title: 'Sales',
        type: 'link',
      },
      {
        path: routes.Reports.SalesReturn,
        title: 'Sales Return',
        type: 'link',
      },
      {
        path: routes.Reports.CustomerOrder,
        title: 'Customer Order',
        type: 'link',
      },
    ],
  },
  {
    path: routes.App.BookMarks,
    title: 'Bookmark',
    icon: 'bookmark',
    type: 'link',
    isPinned: false,
    bookmark: true,
  },
  {
    path: routes.App.Contacts,
    title: 'Contacts',
    icon: 'contact',
    type: 'link',
    isPinned: false,
    bookmark: true,
  },
  {
    path: routes.App.Task,
    title: 'Tasks',
    icon: 'task',
    isPinned: false,
    active: false,
    type: 'link',
  },
  {
    path: routes.App.Calender,
    title: 'Calendar',
    icon: 'calendar',
    type: 'link',
    isPinned: false,
    bookmark: true,
  },
  {
    path: routes.App.SocialApps,
    title: 'Social App',
    icon: 'social',
    isPinned: false,
    active: false,
    type: 'link',
  },
  {
    path: routes.App.Todo,
    title: 'Todo',
    icon: 'to-do',
    isPinned: false,
    active: false,
    type: 'link',
  },
  {
    path: routes.App.SearchResult,
    title: 'Search Results',
    icon: 'search',
    isPinned: false,
    active: false,
    type: 'link',
  },
  {
    headTitle: 'Forms & Table',
    type: 'headtitle',
  },
  {
    title: 'Forms',
    icon: 'form',
    type: 'sub',
    isPinned: false,
    active: false,
    children: [
      {
        title: 'Form Controls',
        type: 'sub',
        active: false,
        children: [
          {
            path: routes.Forms.FormControls.FormValidation,
            title: 'Form Validation',
            type: 'link',
          },
          {
            path: routes.Forms.FormControls.BaseInput,
            title: 'Base Inputs',
            type: 'link',
          },
          {
            path: routes.Forms.FormControls.CheckboxRadio,
            title: 'Checkbox & Radio',
            type: 'link',
          },
          {
            path: routes.Forms.FormControls.InputGroups,
            title: 'Input Groups',
            type: 'link',
          },
          {
            path: routes.Forms.FormControls.InputMask,
            title: 'Input Mask',
            type: 'link',
          },
          {
            path: routes.Forms.FormControls.MegaOptions,
            title: 'Mega Options',
            type: 'link',
          },
        ],
      },
      {
        title: 'Form Widgets',
        type: 'sub',
        active: false,
        children: [
          {
            path: routes.Forms.FormWidgets.Datepicker,
            title: 'Datepicker',
            type: 'link',
          },
          {
            path: routes.Forms.FormWidgets.TouchSpin,
            title: 'TouchSpin',
            type: 'link',
          },
          {
            path: routes.Forms.FormWidgets.Select2,
            title: 'Select2',
            type: 'link',
          },
          {
            path: routes.Forms.FormWidgets.Switch,
            title: 'Switch',
            type: 'link',
          },
          {
            path: routes.Forms.FormWidgets.Typeahead,
            title: 'Typeahead',
            type: 'link',
          },
          {
            path: routes.Forms.FormWidgets.Clipboard,
            title: 'Clipboard',
            type: 'link',
          },
        ],
      },
      {
        title: 'Form Layout',
        type: 'sub',
        active: false,
        children: [
          {
            path: routes.Forms.FormLayout.FormWizard1,
            title: 'Form Wizard 1',
            type: 'link',
          },
          {
            path: routes.Forms.FormLayout.FormWizard2,
            title: 'Form Wizard 2',
            type: 'link',
          },
          {
            path: routes.Forms.FormLayout.TwoFactor,
            title: 'Two Factor',
            type: 'link',
          },
        ],
      },
    ],
  },
  {
    title: 'Tables',
    icon: 'table',
    type: 'sub',
    isPinned: false,
    active: false,
    children: [
      {
        title: 'Bootstrap Tables',
        path: routes.Table.BootstrapTables.BasicTables,
        type: 'link',
      },
      {
        path: routes.Table.BootstrapTables.TableComponents,
        title: 'Table Components',
        type: 'link',
      },
      {
        path: routes.Table.DataTable,
        title: 'Basic Init',
        type: 'link',
      },
    ],
  },
  {
    headTitle: 'Components',
    type: 'headtitle',
  },
  {
    title: 'UI Kits',
    icon: 'ui-kits',
    type: 'sub',
    isPinned: false,
    active: false,
    children: [
      {
        path: routes.UiKits.Typography,
        title: 'Typography',
        type: 'link',
      },
      {
        path: routes.UiKits.Avatars,
        title: 'Avatars',
        type: 'link',
      },
      {
        path: routes.UiKits.Divider,
        title: 'Divider',
        type: 'link',
        badgeType: 'warning',
        badge: 'New',
      },
      {
        path: routes.UiKits.HelperClasses,
        title: 'Helper Classes',
        type: 'link',
      },
      {
        path: routes.UiKits.Grid,
        title: 'Grid',
        type: 'link',
      },
      {
        path: routes.UiKits.TagPills,
        title: 'Tag & Pills',
        type: 'link',
      },
      {
        path: routes.UiKits.Progress,
        title: 'Progress',
        type: 'link',
      },
      {
        path: routes.UiKits.Modal,
        title: 'Modal',
        type: 'link',
      },
      {
        path: routes.UiKits.Alert,
        title: 'Alert',
        type: 'link',
      },
      {
        path: routes.UiKits.Popover,
        title: 'Popover',
        type: 'link',
      },
      {
        path: routes.UiKits.Placeholders,
        title: 'Placeholders',
        type: 'link',
        badgeType: 'warning',
        badge: 'New',
      },
      {
        path: routes.UiKits.Tooltip,
        title: 'Tooltip',
        type: 'link',
      },
      {
        path: routes.UiKits.Dropdown,
        title: 'Dropdown',
        type: 'link',
      },
      {
        path: routes.UiKits.Accordion,
        title: 'Accordian',
        type: 'link',
      },
      {
        path: routes.UiKits.Tabs,
        title: 'Tabs',
        type: 'link',
      },
      {
        path: routes.UiKits.Offcanvas,
        title: 'Offcanvas',
        type: 'link',
        badgeType: 'warning',
        badge: 'New',
      },
      {
        path: routes.UiKits.NavigateLinks,
        title: 'Navigate Links',
        type: 'link',
        badgeType: 'warning',
        badge: 'New',
      },
      {
        path: routes.UiKits.Lists,
        title: 'Lists',
        type: 'link',
      },
    ],
  },
  {
    title: 'Bonus UI',
    icon: 'bonus-kit',
    type: 'sub',
    isPinned: false,
    active: false,
    menu: true,
    children: [
      {
        path: routes.BonusUI.Scrollable,
        title: 'Scrollable',
        type: 'link',
      },
      {
        path: routes.BonusUI.TreeView,
        title: 'Tree View',
        type: 'link',
        badgeType: 'warning',
        badge: 'New',
      },
      {
        path: routes.BonusUI.Toast,
        title: 'Toasts',
        type: 'link',
      },
      {
        path: routes.BonusUI.BlockUI,
        title: 'Block Ui',
        type: 'link',
        badgeType: 'warning',
        badge: 'New',
      },
      {
        path: routes.BonusUI.Rating,
        title: 'Rating',
        type: 'link',
      },
      {
        path: routes.BonusUI.Dropzone,
        title: 'Dropzone',
        type: 'link',
      },
      {
        path: routes.BonusUI.Tour,
        title: 'Tour',
        type: 'link',
      },
      {
        path: routes.BonusUI.SweetAlert2,
        title: 'SweetAlert2',
        type: 'link',
      },
      {
        path: routes.BonusUI.AnimatedModal,
        title: 'Animated Modal',
        type: 'link',
      },
      {
        path: routes.BonusUI.Swiper,
        title: 'Swiper Slider',
        type: 'link',
      },
      {
        path: routes.BonusUI.Ribbons,
        title: 'Ribbons',
        type: 'link',
      },
      {
        path: routes.BonusUI.Pagination,
        title: 'Pagination',
        type: 'link',
      },
      {
        path: routes.BonusUI.ScrollSpy,
        title: 'ScrollSpy',
        type: 'link',
        badgeType: 'warning',
        badge: 'New',
      },
      {
        path: routes.BonusUI.Breadcrumb,
        title: 'Breadcrumb',
        type: 'link',
      },
      {
        path: routes.BonusUI.RangeSlider,
        title: 'Range Slider',
        type: 'link',
      },
      {
        path: routes.BonusUI.Ratios,
        title: 'Ratios',
        type: 'link',
        badgeType: 'warning',
        badge: 'New',
      },
      {
        path: routes.BonusUI.ImageCropper,
        title: 'Image Cropper',
        type: 'link',
      },
      {
        path: routes.BonusUI.BasicCard,
        title: 'Basic Card',
        type: 'link',
      },
      {
        path: routes.BonusUI.CreativeCard,
        title: 'Creative Card',
        type: 'link',
      },
      {
        path: routes.BonusUI.DraggableCard,
        title: 'Draggable Card',
        type: 'link',
      },
      {
        path: routes.BonusUI.Timeline,
        title: 'Timeline',
        type: 'link',
      },
    ],
  },
  {
    title: 'Animation',
    icon: 'animation',
    type: 'sub',
    isPinned: false,
    active: false,
    children: [
      {
        path: routes.Animations.Animate,
        title: 'Animate',
        type: 'link',
      },
      {
        path: routes.Animations.Aos,
        title: 'AOS Animation',
        type: 'link',
      },
    ],
  },
  {
    title: 'Icons',
    icon: 'icons',
    type: 'sub',
    isPinned: false,
    active: false,
    children: [
      {
        path: routes.Icons.FlagIcon,
        title: 'Flag Icon',
        type: 'link',
      },
      {
        path: routes.Icons.FontAwesomeIcon,
        title: 'Fontawesome Icon',
        type: 'link',
      },
      {
        path: routes.Icons.FeatherIcon,
        title: 'Feather Icon',
        type: 'link',
      },
      {
        path: routes.Icons.IcoIcon,
        title: 'Ico Icon',
        type: 'link',
      },
      {
        path: routes.Icons.ThemifyIcon,
        title: 'Themify Icon',
        type: 'link',
      },
      {
        path: routes.Icons.WeatherIcon,
        title: 'Weather Icon',
        type: 'link',
      },
    ],
  },
  {
    path: routes.App.Buttons,
    title: 'Button',
    icon: 'button',
    isPinned: false,
    active: false,
    type: 'link',
  },
  {
    title: 'Charts',
    icon: 'charts',
    type: 'sub',
    isPinned: false,
    active: false,
    children: [
      {
        path: routes.Charts.ApexChart,
        title: 'ApexChart',
        type: 'link',
      },
      {
        path: routes.Charts.GoogleChart,
        title: 'Google Chart',
        type: 'link',
      },
      {
        path: routes.Charts.ChartJsChart,
        title: 'ChartJs',
        type: 'link',
      },
      {
        path: routes.Charts.ChartistChart,
        title: 'Chartist',
        type: 'link',
      },
    ],
  },
  {
    headTitle: 'Pages',
    type: 'headtitle',
  },
  {
    path: routes.Pages.SamplePage,
    title: 'Sample page',
    icon: 'sample-page',
    isPinned: false,
    active: false,
    type: 'link',
  },

  {
    title: 'Others',
    icon: 'others',
    type: 'sub',
    isPinned: false,
    active: false,
    children: [
      {
        title: 'Error Page',
        type: 'sub',
        isPinned: false,
        active: false,
        children: [
          {
            path: routes.ErrorPages.Error400,
            title: 'Error 400',
            type: 'link',
          },
          {
            path: routes.ErrorPages.Error401,
            title: 'Error 401',
            type: 'link',
          },
          {
            path: routes.ErrorPages.Error403,
            title: 'Error 403',
            type: 'link',
          },
          {
            path: routes.ErrorPages.Error404,
            title: 'Error 404',
            type: 'link',
          },
          {
            path: routes.ErrorPages.Error500,
            title: 'Error 500',
            type: 'link',
          },
          {
            path: routes.ErrorPages.Error503,
            title: 'Error 503',
            type: 'link',
          },
        ],
      },
      {
        title: 'Authentication',
        type: 'sub',
        isPinned: false,
        active: false,
        children: [
          {
            path: routes.Auth.LoginSimple,
            title: 'Login Simple',
            type: 'link',
            active: false,
          },
          {
            path: routes.Auth.LoginBgImage,
            title: 'Login Image',
            type: 'link',
          },
          {
            path: routes.Auth.LoginBgImageTwo,
            title: 'Login Image Two',
            type: 'link',
          },
          {
            path: routes.Auth.LoginValidation,
            title: 'Login Validation',
            type: 'link',
          },
          {
            path: routes.Auth.LoginTooltip,
            title: 'Login Tooltip',
            type: 'link',
          },
          {
            path: routes.Auth.LoginSweetAlert,
            title: 'Login Sweetalert',
            type: 'link',
          },
          {
            path: routes.Auth.RegisterSimple,
            title: 'Register Simple',
            type: 'link',
          },
          {
            path: routes.Auth.RegisterBgImage,
            title: 'Register Image',
            type: 'link',
          },

          {
            path: routes.Auth.RegisterBgImageTwo,
            title: 'Register Image Two',
            type: 'link',
          },
          {
            path: routes.Auth.RegisterWizard,
            title: 'Register Wizard',
            type: 'link',
          },
          {
            path: routes.Auth.UnlockUser,
            title: 'Unlock User',
            type: 'link',
          },
          {
            path: routes.Auth.ForgotPassword,
            title: 'Forget Password',
            type: 'link',
          },
          {
            path: routes.Auth.ResetPassword,
            title: 'Reset Password',
            type: 'link',
          },
          {
            path: routes.Auth.Maintenance,
            title: 'Maintenance',
            type: 'link',
          },
        ],
      },
      {
        title: 'Coming Soon',
        type: 'sub',
        isPinned: false,
        active: false,
        children: [
          {
            path: routes.ComingSoon.ComingSimple,
            title: 'Coming Simple',
            type: 'link',
          },
          {
            path: routes.ComingSoon.ComingBgImage,
            title: 'Coming with Bg Image',
            type: 'link',
          },
          {
            path: routes.ComingSoon.ComingBgVideo,
            title: 'Coming with Bg video',
            type: 'link',
          },
        ],
      },
    ],
  },
  {
    path: routes.Pages.Pricing,
    title: 'Pricing',
    icon: 'price',
    isPinned: false,
    active: false,
    type: 'link',
  },

  {
    headTitle: 'Miscellaneous',
    type: 'headtitle',
  },
  {
    title: 'Gallery',
    icon: 'gallery',
    type: 'sub',
    isPinned: false,
    active: false,
    children: [
      {
        path: routes.Gallery.GalleryGrid,
        title: 'Grid Gallery',
        type: 'link',
      },
      {
        path: routes.Gallery.GalleryGridDescription,
        title: 'Grid Gallery With Desc',
        type: 'link',
      },
      {
        path: routes.Gallery.MasonryGallery,
        title: 'Masonry Gallery',
        type: 'link',
      },
      {
        path: routes.Gallery.MasonryWithDescription,
        title: 'Masonry Gallery Description',
        type: 'link',
      },
      {
        path: routes.Gallery.HoverEffects,
        title: 'Hover Effect',
        type: 'link',
      },
    ],
  },
  {
    title: 'Blog',
    icon: 'blog',
    type: 'sub',
    isPinned: false,
    menu: true,
    active: false,
    children: [
      {
        path: routes.Blog.Blog,
        title: 'Blog',
        type: 'link',
      },
      {
        path: routes.Blog.BlogDetails,
        title: 'Blog Details',
        type: 'link',
      },
      {
        path: routes.Blog.AddBlog,
        title: 'Add Blog',
        type: 'link',
      },
    ],
  },
  {
    path: routes.Pages.Faq,
    title: 'FAQ',
    icon: 'faq',
    isPinned: false,
    active: false,
    type: 'link',
  },
  {
    title: 'Job Search',
    icon: 'job-search',
    type: 'sub',
    active: false,
    isPinned: false,
    children: [
      {
        path: routes.JobSearch.CardView,
        title: 'Card View',
        type: 'link',
      },
      {
        path: routes.JobSearch.ListView,
        title: 'List View',
        type: 'link',
      },
      {
        path: routes.JobSearch.JobDetails,
        title: 'Job Details',
        type: 'link',
      },
      {
        path: routes.JobSearch.Apply,
        title: 'Apply',
        type: 'link',
      },
    ],
  },
  {
    title: 'Course',
    icon: 'learning',
    type: 'sub',
    isPinned: false,
    active: false,
    children: [
      {
        path: routes.Courses.CourseList,
        title: 'Course List',
        type: 'link',
      },
      {
        path: routes.Courses.CourseDetails,
        title: 'Course Details',
        type: 'link',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'maps',
    type: 'sub',
    isPinned: false,
    active: false,
    children: [
      {
        path: routes.Maps.GoogleMap,
        title: 'Google Maps',
        type: 'link',
      },
      {
        path: routes.Maps.LeafletMap,
        title: 'Vue Leaflet',
        type: 'link',
      },
    ],
  },
  {
    title: 'editor',
    icon: 'editors',
    type: 'sub',
    isPinned: false,
    active: false,
    children: [
      {
        path: routes.Editors.CkEditor,
        title: 'Ck Editor',
        type: 'link',
      },
      {
        path: routes.Editors.MdeEditor,
        title: 'MDE Editor',
        type: 'link',
      },
    ],
  },
  {
    path: routes.Pages.KnowledgeBase,
    title: 'Knowledgebase',
    icon: 'knowledgebase',
    type: 'link',
    isPinned: false,
    active: false,
  },
  {
    path: routes.Pages.SupportTicket,
    title: 'Support Ticket',
    icon: 'support-tickets',
    isPinned: false,
    active: false,
    type: 'link',
  },
]
