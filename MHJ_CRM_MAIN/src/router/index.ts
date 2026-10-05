import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { canAccessRoute } from '@/utils/permission'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      component: () => import('@/components/layout/auth/Auth.vue'),
      children: [
        {
          path: 'login',
          name: 'LoginPage',
          component: () => import('@/components/layout/auth/LoginPage.vue'),
          meta: { title: 'Login | MHJ CRM' },
        },
      ],
    },
    {
      path: '',
      redirect: routes.Dashboards.Default,
    },
    {
      path: '/riho/:pathMatch(.*)*',
      redirect: (to) => {
        const remaining = to.params.pathMatch
        const path = Array.isArray(remaining) ? remaining.join('/') : remaining || ''
        return `/${path}`
      },
    },
    {
      path: '',
      component: () => import('@/layout/Body.vue'),
      children: [
        {
          path: routes.Dashboards.Default,
          name: 'Default',
          component: () => import('@/pages/dashboard/Default.vue'),
          alias: ['/dashboards/dashboard_default', '/dashboards/default'],
          meta: {
            mainTitle: 'Dashboard',
            title: 'Dashboard | MHJ CRM',
            breadcrumb: [{ text: 'Dashboard', subText: 'Default' }],
          },
        },
        {
          path: '/crmAdmin/Projects',
          redirect: '/crmAdmin/Projects/list',
        },
        {
          path: '/crmAdmin/projects',
          redirect: '/crmAdmin/Projects/list',
        },
        {
          path: '/crmAdmin/Report',
          name: 'CrmReport',
          component: () => import('@/pages/reports/SalesReport.vue'),
          alias: ['/crmAdmin/report', '/reports/sales'],
          meta: {
            mainTitle: 'Report',
            title: 'Report | MHJ CRM',
            breadcrumb: [{ text: 'CRM', subText: 'Report' }],
          },
        },
        {
          path: '/crmAdmin/users',
          redirect: '/crmAdmin/users/list',
        },
        {
          path: '/crmAdmin/settings',
          name: 'CrmSettings',
          component: () => import('@/pages/samplePage/SamplePage.vue'),
          meta: {
            mainTitle: 'Settings',
            title: 'Settings | MHJ CRM',
            breadcrumb: [{ text: 'CRM', subText: 'Settings' }],
          },
        },
        {
          path: routes.Dashboards.ECommerce,
          name: 'ECommerceDashboard',
          component: () => import('@/pages/dashboard/Ecommerce.vue'),
          meta: {
            mainTitle: 'Ecommerce Dashboard',
            title: 'Ecommerce Dashboard | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Dashboard', subText: 'Ecommerce' }],
          },
        },
        {
          path: routes.Dashboards.Project,
          name: 'Project',
          component: () => import('@/pages/dashboard/Project.vue'),
          meta: {
            mainTitle: 'Project',
            title: 'Project | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Dashboard', subText: 'Project' }],
          },
        },
        {
          path: routes.Widgets.General,
          name: 'General',
          component: () => import('@/pages/widgets/General.vue'),
          meta: {
            mainTitle: 'General',
            title: 'General | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Widgets', subText: 'General' }],
          },
        },
        {
          path: routes.Widgets.Charts,
          name: 'Chart',
          component: () => import('@/pages/widgets/Chart.vue'),
          meta: {
            mainTitle: 'Chart',
            title: 'Chart |  Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Widgets', subText: 'Chart' }],
          },
        },
        {
          path: routes.Project.ProjectCreate,
          name: 'ProjectCreate',
          component: () => import('@/pages/project/ProjectCreate.vue'),
          meta: {
            mainTitle: 'Project Create',
            title: 'ProjectCreate | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Project', subText: 'Project Create' }],
          },
        },
        {
          path: routes.Project.ProjectDetails,
          name: 'Project Details',
          component: () => import('@/pages/project/ProjectDetails.vue'),
          alias: ['/crmAdmin/projects/details', '/project/project_details'],
          meta: {
            mainTitle: 'Project Details',
            title: 'Project Details | MHJ CRM',
            breadcrumb: [{ text: 'Project', subText: 'Project Details' }],
          },
        },
        {
          path: routes.Project.ProjectList,
          name: 'Project List',
          component: () => import('@/pages/project/ProjectList.vue'),
          alias: ['/crmAdmin/projects/list', '/project/project_list'],
          meta: {
            mainTitle: 'ProjectList',
            title: 'ProjectList | MHJ CRM',
            breadcrumb: [{ text: 'Project', subText: 'Project List' }],
          },
        },
        {
          path: routes.App.FileManager,
          name: 'FileManager',
          component: () => import('@/pages/fileManager/FileManager.vue'),
          meta: {
            mainTitle: 'File Manager',
            title: 'File Manager | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Apps', subText: 'File Manager' }],
          },
        },
        {
          path: routes.App.KanbanBoard,
          name: 'KanbanBoard',
          component: () => import('@/pages/kanbanBoard/KanbanBoard.vue'),
          alias: ['/app/kanban_board'],
          meta: {
            mainTitle: 'Deals',
            title: 'Deals | MHJ CRM',
            breadcrumb: [{ text: 'CRM', subText: 'Deals' }],
          },
        },
        {
          path: routes.App.MailBox,
          name: 'MailBox',
          component: () => import('@/pages/mailBox/MailBox.vue'),
          meta: {
            mainTitle: 'Mail Box',
            title: 'Mail Box | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Email', subText: 'Mail Box' }],
          },
        },
        {
          path: routes.Ecommerce.Products.AddProduct,
          name: 'AddProduct',
          component: () => import('@/pages/ecommerce/AddProduct.vue'),
          meta: {
            mainTitle: 'Add Product',
            title: 'Add Product | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Ecommerce', subText: 'Add Product' }],
          },
        },
        {
          path: routes.Ecommerce.Products.ProductGrid,
          name: 'ProductGrid',
          component: () => import('@/pages/ecommerce/ProductGrid.vue'),
          meta: {
            mainTitle: 'Product',
            title: 'Product | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Ecommerce', subText: 'Product' }],
          },
        },
        {
          path: routes.Ecommerce.Products.ProductList,
          name: 'ProductList',
          component: () => import('@/pages/ecommerce/ProductList.vue'),
          meta: {
            mainTitle: 'Product List',
            title: 'Product List | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Ecommerce', subText: 'Product List' }],
          },
        },
        {
          path: routes.Ecommerce.Products.ProductDetails,
          name: 'ProductDetails',
          component: () => import('@/pages/ecommerce/ProductDetails.vue'),
          meta: {
            mainTitle: 'Product Details',
            title: 'Product Details | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Ecommerce', subText: 'Product Details' }],
          },
        },
        {
          path: routes.Ecommerce.Category,
          name: 'Category',
          component: () => import('@/pages/ecommerce/Category.vue'),
          meta: {
            mainTitle: 'Category',
            title: 'Category | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Ecommerce', subText: 'Category' }],
          },
        },
        {
          path: routes.Ecommerce.Seller.SellerDetails,
          name: 'SellerDetails',
          component: () => import('@/pages/ecommerce/SellerDetails.vue'),
          meta: {
            mainTitle: 'Seller Details',
            title: 'Seller Details | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Ecommerce', subText: 'Seller Details' }],
          },
        },
        {
          path: routes.Ecommerce.Seller.SellerList,
          name: 'SellerList',
          component: () => import('@/pages/ecommerce/SellerList.vue'),
          meta: {
            mainTitle: 'Seller List',
            title: 'SellerList | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Ecommerce', subText: 'SellerList' }],
          },
        },
        {
          path: routes.Ecommerce.Orders.OrderDetails,
          name: 'Order Details',
          component: () => import('@/pages/ecommerce/OrderDetails.vue'),
          meta: {
            mainTitle: 'Order Details',
            title: 'Order Details | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Ecommerce', subText: 'OrderDetails' }],
          },
        },
        {
          path: routes.Ecommerce.Orders.OrderHistory,
          name: 'Order History',
          component: () => import('@/pages/ecommerce/OrderHistory.vue'),
          meta: {
            mainTitle: 'Order History',
            title: 'Order History | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Ecommerce', subText: 'OrderHistory' }],
          },
        },
        {
          path: routes.Ecommerce.Cart,
          name: 'Cart',
          component: () => import('@/pages/ecommerce/Cart.vue'),
          meta: {
            mainTitle: 'Cart',
            title: 'Cart | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Ecommerce', subText: 'Cart' }],
          },
        },
        {
          path: routes.Ecommerce.Checkout,
          name: 'Checkout',
          component: () => import('@/pages/ecommerce/Checkout.vue'),
          meta: {
            mainTitle: 'Checkout',
            title: 'Checkout | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Ecommerce', subText: 'Checkout' }],
          },
        },
        {
          path: routes.Ecommerce.Wishlist,
          name: 'Wishlist',
          component: () => import('@/pages/ecommerce/Wishlist.vue'),
          meta: {
            mainTitle: 'Wishlist',
            title: 'Wishlist | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Ecommerce', subText: 'Wishlist' }],
          },
        },
        {
          path: routes.Ecommerce.Invoice.Invoice6,
          name: 'InvoiceSix',
          component: () => import('@/pages/ecommerce/invoice/InvoiceSix.vue'),
          meta: {
            mainTitle: 'Invoice',
            title: 'InvoiceSix | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'ECommerce', subText: 'Invoice' }],
          },
        },
        {
          path: routes.Chat.PrivateChat,
          name: 'PrivateChat',
          component: () => import('@/pages/chat/PrivateChat.vue'),
          meta: {
            mainTitle: 'Private Chat',
            title: 'Private Chat | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Chat', subText: 'Private Chat' }],
          },
        },
        {
          path: routes.Chat.GroupChat,
          name: 'GroupChat',
          component: () => import('@/pages/chat/GroupChat.vue'),
          meta: {
            mainTitle: 'Group Chat',
            title: 'Group Chat | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Chat', subText: 'Group Chat' }],
          },
        },
        {
          path: routes.User.UserProfile,
          name: 'user-profile',
          component: () => import('@/pages/user/UserProfile.vue'),
          meta: {
            mainTitle: 'User Profile',
            title: 'User Profile | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Users', subText: 'User Profile' }],
          },
        },
        {
          path: routes.User.AddUser,
          name: 'add-user',
          component: () => import('@/pages/user/AddUser.vue'),
          meta: {
            mainTitle: 'Add User',
            title: 'Add User | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Users', subText: 'Add User' }],
          },
        },
        {
          path: routes.User.UserList,
          name: 'user-list',
          component: () => import('@/pages/user/UserList.vue'),
          alias: ['/user/user-list'],
          meta: {
            mainTitle: 'User List',
            title: 'User List | MHJ CRM',
            breadcrumb: [{ text: 'Users', subText: 'User List' }],
          },
        },
        {
          path: routes.User.UserCards,
          name: 'user-cards',
          component: () => import('@/pages/user/UserCards.vue'),
          meta: {
            mainTitle: 'User Cards',
            title: 'User Cards | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Users', subText: 'User Cards' }],
          },
        },
        {
          path: routes.User.Roles,
          name: 'roles-permission',
          component: () => import('@/pages/user/RolesPermission.vue'),
          alias: ['/user/roles-permission'],
          meta: {
            mainTitle: 'Roles & Permission',
            title: 'Roles & Permission | MHJ CRM',
            breadcrumb: [{ text: 'Users', subText: 'Roles & Permission' }],
          },
        },
        {
          path: routes.Reports.Product,
          name: 'products',
          component: () => import('@/pages/reports/ProductReport.vue'),
          meta: {
            mainTitle: 'Products',
            title: 'Products | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Reports', subText: 'Products' }],
          },
        },
        {
          path: routes.Reports.Sales,
          name: 'sales',
          component: () => import('@/pages/reports/SalesReport.vue'),
          meta: {
            mainTitle: 'Sales',
            title: 'Sales | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Reports', subText: 'Sales' }],
          },
        },
        {
          path: routes.Reports.SalesReturn,
          name: 'sales-return',
          component: () => import('@/pages/reports/SalesReturnReport.vue'),
          meta: {
            mainTitle: 'Sales Return',
            title: 'Sales Return | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Reports', subText: 'Sales Return' }],
          },
        },
        {
          path: routes.Reports.CustomerOrder,
          name: 'customer-order',
          component: () => import('@/pages/reports/CustomerOrderReport.vue'),
          meta: {
            mainTitle: 'Customer Order',
            title: 'Customer Order | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Reports', subText: 'Customer Order' }],
          },
        },
        {
          path: routes.App.BookMarks,
          name: 'BookMark',
          component: () => import('@/pages/bookmark/Bookmark.vue'),
          meta: {
            mainTitle: 'Bookmarks',
            title: 'BookMarks | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'App', subText: 'BookMarks' }],
          },
        },
        {
          path: routes.App.Contacts,
          name: 'Contacts',
          component: () => import('@/pages/contacts/Contacts.vue'),
          alias: ['/app/contacts'],
          meta: {
            mainTitle: 'Contacts',
            title: 'Contacts | MHJ CRM',
            breadcrumb: [{ text: 'CRM', subText: 'Contacts' }],
          },
        },
        {
          path: routes.App.RumahSakit,
          name: 'RumahSakit',
          component: () => import('@/pages/rumahSakit/RumahSakit.vue'),
          alias: ['/app/rumah_sakit'],
          meta: {
            mainTitle: 'Companies',
            title: 'Companies | MHJ CRM',
            breadcrumb: [{ text: 'CRM', subText: 'Companies' }],
          },
        },
        {
          path: routes.App.Task,
          name: 'Task',
          component: () => import('@/pages/task/Task.vue'),
          alias: ['/app/task'],
          meta: {
            mainTitle: 'Task',
            title: 'Task | MHJ CRM',
            breadcrumb: [{ text: 'CRM', subText: 'Task' }],
          },
        },
        {
          path: routes.App.Calender,
          name: 'Calendar',
          component: () => import('@/pages/calendar/Calendar.vue'),
          meta: {
            mainTitle: 'Calendar',
            title: 'Calendar | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Apps', subText: 'Calendar' }],
          },
        },
        {
          path: routes.App.SocialApps,
          name: 'SocialApp',
          component: () => import('@/pages/socialApp/SocialApp.vue'),
          meta: {
            mainTitle: 'Social App',
            title: 'Social App | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Apps', subText: 'Social App' }],
          },
        },
        {
          path: routes.App.Todo,
          name: 'Todo',
          component: () => import('@/pages/todo/Todo.vue'),
          meta: {
            mainTitle: 'Todo',
            title: 'Todo | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Apps', subText: 'Todo' }],
          },
        },
        {
          path: routes.App.SearchResult,
          name: 'SearchResult',
          component: () => import('@/pages/search/Search.vue'),
          meta: {
            mainTitle: 'Search Result',
            title: 'Search Result | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Apps', subText: 'Search Result' }],
          },
        },
        {
          path: routes.Forms.FormControls.FormValidation,
          name: 'form-validation',
          component: () => import('@/pages/forms/formControls/FormValidation.vue'),
          meta: {
            mainTitle: 'Validation Form',
            title: 'Form Validation | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Form Controls', subText: 'Form Validation' }],
          },
        },
        {
          path: routes.Forms.FormControls.BaseInput,
          name: 'base-input',
          component: () => import('@/pages/forms/formControls/BaseInput.vue'),
          meta: {
            mainTitle: 'Base Input',
            title: 'Base Input | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Form Controls', subText: 'Base Input' }],
          },
        },
        {
          path: routes.Forms.FormControls.CheckboxRadio,
          name: 'checkbox-radio',
          component: () => import('@/pages/forms/formControls/CheckboxRadio.vue'),
          meta: {
            mainTitle: 'Checkbox Radio',
            title: 'Checkbox Radio | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Form Controls', subText: 'Checkbox Radio' }],
          },
        },
        {
          path: routes.Forms.FormControls.InputGroups,
          name: 'input-groups',
          component: () => import('@/pages/forms/formControls/InputGroups.vue'),
          meta: {
            mainTitle: 'Input Groups',
            title: 'Input Groups | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Form Controls', subText: 'Input Groups' }],
          },
        },
        {
          path: routes.Forms.FormControls.MegaOptions,
          name: 'MegaOptions',
          component: () => import('@/pages/forms/formControls/MegaOptions.vue'),
          meta: {
            mainTitle: 'Mega Options',
            title: 'Mega Options | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Form Controls', subText: 'Mega Options' }],
          },
        },
        {
          path: routes.Forms.FormControls.InputMask,
          name: 'InputMask',
          component: () => import('@/pages/forms/formControls/InputMask.vue'),
          meta: {
            mainTitle: 'Input Mask',
            title: 'Input Mask | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Form Controls', subText: 'Input Mask' }],
          },
        },
        {
          path: routes.Forms.FormWidgets.Datepicker,
          name: 'Datepicker',
          component: () => import('@/pages/forms/formWidgets/Datepicker.vue'),
          meta: {
            mainTitle: 'Datepicker',
            title: 'Datepicker | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Form Widgets', subText: 'Datepicker' }],
          },
        },
        {
          path: routes.Forms.FormWidgets.Select2,
          name: 'Select2',
          component: () => import('@/pages/forms/formWidgets/Select.vue'),
          meta: {
            mainTitle: 'Select2',
            title: 'Select2 | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Form Widgets', subText: 'Select2' }],
          },
        },
        {
          path: routes.Forms.FormWidgets.Clipboard,
          name: 'Clipboard',
          component: () => import('@/pages/forms/formWidgets/Clipboard.vue'),
          meta: {
            mainTitle: 'Clipboard',
            title: 'Clipboard | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Form Widgets', subText: 'Clipboard' }],
          },
        },
        {
          path: routes.Forms.FormWidgets.Switch,
          name: 'switch',
          component: () => import('@/pages/forms/formWidgets/Switch.vue'),
          meta: {
            mainTitle: 'Switch',
            title: 'Switch | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Form Widgets', subText: 'Switch' }],
          },
        },
        {
          path: routes.Forms.FormWidgets.Typeahead,
          name: 'typeahead',
          component: () => import('@/pages/forms/formWidgets/Typeahead.vue'),
          meta: {
            mainTitle: 'Typeahead',
            title: 'Typeahead | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Form Widgets', subText: 'Typeahead' }],
          },
        },
        {
          path: routes.Forms.FormWidgets.TouchSpin,
          name: 'touchSpin',
          component: () => import('@/pages/forms/formWidgets/Touchspin.vue'),
          meta: {
            mainTitle: 'Touchspin',
            title: 'Touchspin | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Form Widgets', subText: 'Touchspin' }],
          },
        },
        {
          path: routes.Forms.FormLayout.FormWizard1,
          name: 'FormWizard1',
          component: () => import('@/pages/forms/formLayout/FormWizard.vue'),
          meta: {
            mainTitle: 'Form Wizard 1',
            title: 'Form Wizard 1 | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Form Layouts', subText: 'Form Wizard 1' }],
          },
        },
        {
          path: routes.Forms.FormLayout.FormWizard2,
          name: 'FormWizard2',
          component: () => import('@/pages/forms/formLayout/FormWizardTwo.vue'),
          meta: {
            mainTitle: 'Form Wizard 2',
            title: 'Form Wizard 2 | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Form Layouts', subText: 'Form Wizard 2' }],
          },
        },
        {
          path: routes.Forms.FormLayout.TwoFactor,
          name: 'TwoFactor',
          component: () => import('@/pages/forms/formLayout/TwoFactor.vue'),
          meta: {
            mainTitle: 'Two Factor',
            title: 'Two Factor | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Form Layouts', subText: 'Two Factor' }],
          },
        },
        {
          path: routes.Table.DataTable,
          name: 'data-table',
          component: () => import('@/pages/table/DataTable.vue'),
          meta: {
            mainTitle: 'Data Table',
            title: 'Data Table | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Table', subText: 'Data Table' }],
          },
        },
        {
          path: routes.Table.BootstrapTables.TableComponents,
          name: 'TableComponents',
          component: () => import('@/pages/table/TableComponents.vue'),
          meta: {
            mainTitle: 'Table Components',
            title: 'Table Components | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Table', subText: 'Table Components' }],
          },
        },
        {
          path: routes.Table.BootstrapTables.BasicTables,
          name: 'BasicTables',
          component: () => import('@/pages/table/BasicTables.vue'),
          meta: {
            mainTitle: 'Basic Tables',
            title: 'Basic Tables | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Table', subText: 'Basic Tables' }],
          },
        },
        {
          path: routes.Icons.FlagIcon,
          name: 'FlagIcon',
          component: () => import('@/pages/icons/FlagIcon.vue'),
          meta: {
            mainTitle: 'Flag Icons',
            title: 'Flag Icon | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Icons', subText: 'Flag Icon' }],
          },
        },
        {
          path: routes.Icons.FontAwesomeIcon,
          name: 'FontAwesomeIcon',
          component: () => import('@/pages/icons/FontAwesomeIcon.vue'),
          meta: {
            mainTitle: 'Font Awesome Icons',
            title: 'Font Awesome Icon | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Icons', subText: 'Font Awesome Icon' }],
          },
        },
        {
          path: routes.Icons.IcoIcon,
          name: 'IcoIcon',
          component: () => import('@/pages/icons/IcoIcon.vue'),
          meta: {
            mainTitle: 'Ico Icons',
            title: 'Ico Icon | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Icons', subText: 'Ico Icon' }],
          },
        },
        {
          path: routes.Icons.ThemifyIcon,
          name: 'ThemifyIcon',
          component: () => import('@/pages/icons/ThemifyIcon.vue'),
          meta: {
            mainTitle: 'Themify Icons',
            title: 'Themify Icon | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Icons', subText: 'Themify Icon' }],
          },
        },
        {
          path: routes.Icons.FeatherIcon,
          name: 'FeatherIcon',
          component: () => import('@/pages/icons/FeatherIcon.vue'),
          meta: {
            mainTitle: 'Feather Icons',
            title: 'Feather Icon | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Icons', subText: 'Feather Icon' }],
          },
        },
        {
          path: routes.Icons.WeatherIcon,
          name: 'WeatherIcon',
          component: () => import('@/pages/icons/WeatherIcon.vue'),
          meta: {
            mainTitle: 'Weather Icons',
            title: 'Weather Icon | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Icons', subText: 'Weather Icon' }],
          },
        },
        {
          path: routes.UiKits.Typography,
          name: 'Typography',
          component: () => import('@/pages/uiKits/Typography.vue'),
          meta: {
            mainTitle: 'Typography',
            title: 'Typography | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Ui kits', subText: 'Typography' }],
          },
        },
        {
          path: routes.UiKits.Avatars,
          name: 'Avatars',
          component: () => import('@/pages/uiKits/Avatars.vue'),
          meta: {
            mainTitle: 'Avatars',
            title: 'Avatars | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Ui kits', subText: 'Avatars' }],
          },
        },
        {
          path: routes.UiKits.HelperClasses,
          name: 'HelperClasses',
          component: () => import('@/pages/uiKits/HelperClasses.vue'),
          meta: {
            mainTitle: 'HelperClasses',
            title: 'HelperClasses | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Ui kits', subText: 'HelperClasses' }],
          },
        },
        {
          path: routes.UiKits.Divider,
          name: 'Divider',
          component: () => import('@/pages/uiKits/Divider.vue'),
          meta: {
            mainTitle: 'Divider',
            title: 'Divider | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Ui kits', subText: 'Divider' }],
          },
        },
        {
          path: routes.UiKits.TagPills,
          name: 'TagPills',
          component: () => import('@/pages/uiKits/TagPills.vue'),
          meta: {
            mainTitle: 'TagPills',
            title: 'TagPills | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Ui kits', subText: 'TagPills' }],
          },
        },
        {
          path: routes.UiKits.Progress,
          name: 'Progress',
          component: () => import('@/pages/uiKits/Progress.vue'),
          meta: {
            mainTitle: 'Progress',
            title: 'Progress | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Ui kits', subText: 'Progress' }],
          },
        },
        {
          path: routes.UiKits.Grid,
          name: 'Grid',
          component: () => import('@/pages/uiKits/Grid.vue'),
          meta: {
            mainTitle: 'Grid',
            title: 'Grid | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Ui kits', subText: 'Grid' }],
          },
        },
        {
          path: routes.UiKits.Modal,
          name: 'Modal',
          component: () => import('@/pages/uiKits/Modal.vue'),
          meta: {
            mainTitle: 'Modal',
            title: 'Modal | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Ui kits', subText: 'Modal' }],
          },
        },
        {
          path: routes.UiKits.Popover,
          name: 'Popover',
          component: () => import('@/pages/uiKits/Popover.vue'),
          meta: {
            mainTitle: 'Popover',
            title: 'Popover | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Ui kits', subText: 'Popover' }],
          },
        },
        {
          path: routes.UiKits.Tooltip,
          name: 'Tooltip',
          component: () => import('@/pages/uiKits/Tooltip.vue'),
          meta: {
            mainTitle: 'Tooltip',
            title: 'Tooltip | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Ui kits', subText: 'Tooltip' }],
          },
        },
        {
          path: routes.UiKits.Alert,
          name: 'Alert',
          component: () => import('@/pages/uiKits/Alert.vue'),
          meta: {
            mainTitle: 'Alert',
            title: 'Alert | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Ui kits', subText: 'Alert' }],
          },
        },
        {
          path: routes.UiKits.Placeholders,
          name: 'Placeholders',
          component: () => import('@/pages/uiKits/Placeholders.vue'),
          meta: {
            mainTitle: 'Placeholders',
            title: 'Placeholders | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Ui kits', subText: 'Placeholders' }],
          },
        },
        {
          path: routes.UiKits.Dropdown,
          name: 'Dropdown',
          component: () => import('@/pages/uiKits/Dropdown.vue'),
          meta: {
            mainTitle: 'Dropdown',
            title: 'Dropdown | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Ui kits', subText: 'Dropdown' }],
          },
        },
        {
          path: routes.UiKits.Accordion,
          name: 'Accordion',
          component: () => import('@/pages/uiKits/Accordion.vue'),
          meta: {
            mainTitle: 'Accordion',
            title: 'Accordion | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Ui kits', subText: 'Accordion' }],
          },
        },
        {
          path: routes.UiKits.Tabs,
          name: 'Tabs',
          component: () => import('@/pages/uiKits/BootstrapTabs.vue'),
          meta: {
            mainTitle: 'Tabs',
            title: 'Tabs | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Ui kits', subText: 'Tabs' }],
          },
        },
        {
          path: routes.UiKits.Lists,
          name: 'Lists',
          component: () => import('@/pages/uiKits/Lists.vue'),
          meta: {
            mainTitle: 'Lists',
            title: 'Lists | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Ui kits', subText: 'Lists' }],
          },
        },
        {
          path: routes.UiKits.Offcanvas,
          name: 'Offcanvas',
          component: () => import('@/pages/uiKits/Offcanvas.vue'),
          meta: {
            mainTitle: 'Offcanvas',
            title: 'Offcanvas | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Ui kits', subText: 'Offcanvas' }],
          },
        },
        {
          path: routes.UiKits.NavigateLinks,
          name: 'NavigateLinks',
          component: () => import('@/pages/uiKits/NavigateLinks.vue'),
          meta: {
            mainTitle: 'NavigateLinks',
            title: 'NavigateLinks | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Ui kits', subText: 'NavigateLinks' }],
          },
        },
        {
          path: routes.BonusUI.Scrollable,
          name: 'Scrollable',
          component: () => import('@/pages/bonusUi/Scrollable.vue'),
          meta: {
            mainTitle: 'Scrollable',
            title: 'Scrollable | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Bonus Ui', subText: 'Scrollable' }],
          },
        },
        {
          path: routes.BonusUI.TreeView,
          name: 'TreeView',
          component: () => import('@/pages/bonusUi/TreeView.vue'),
          meta: {
            mainTitle: 'TreeView',
            title: 'TreeView | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Bonus Ui', subText: 'TreeView' }],
          },
        },
        {
          path: routes.BonusUI.Toast,
          name: 'Toast',
          component: () => import('@/pages/bonusUi/Toast.vue'),
          meta: {
            mainTitle: 'Toast',
            title: 'Toast | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Bonus Ui', subText: 'Toast' }],
          },
        },
        {
          path: routes.BonusUI.BlockUI,
          name: 'BlockUI',
          component: () => import('@/pages/bonusUi/BlockUi.vue'),
          meta: {
            mainTitle: 'BlockUI',
            title: 'BlockUI | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Bonus Ui', subText: 'BlockUI' }],
          },
        },
        {
          path: routes.BonusUI.ImageCropper,
          name: 'ImageCropper',
          component: () => import('@/pages/bonusUi/ImageCropper.vue'),
          meta: {
            mainTitle: 'ImageCropper',
            title: 'ImageCropper | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Bonus Ui', subText: 'ImageCropper' }],
          },
        },
        {
          path: routes.BonusUI.Dropzone,
          name: 'Dropzone',
          component: () => import('@/pages/bonusUi/Dropzone.vue'),
          meta: {
            mainTitle: 'Dropzone',
            title: 'Dropzone | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Bonus Ui', subText: 'Dropzone' }],
          },
        },
        {
          path: routes.BonusUI.Rating,
          name: 'Rating',
          component: () => import('@/pages/bonusUi/Rating.vue'),
          meta: {
            mainTitle: 'Rating',
            title: 'Rating | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Bonus Ui', subText: 'Rating' }],
          },
        },
        {
          path: routes.BonusUI.Timeline,
          name: 'Timeline',
          component: () => import('@/pages/bonusUi/Timeline.vue'),
          meta: {
            mainTitle: 'Timeline',
            title: 'Timeline | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Bonus Ui', subText: 'Timeline' }],
          },
        },
        {
          path: routes.BonusUI.SweetAlert2,
          name: 'SweetAlert2',
          component: () => import('@/pages/bonusUi/SweetAlert.vue'),
          meta: {
            mainTitle: 'SweetAlert2',
            title: 'SweetAlert2 | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Bonus Ui', subText: 'SweetAlert2' }],
          },
        },
        {
          path: routes.BonusUI.Tour,
          name: 'Tour',
          component: () => import('@/pages/bonusUi/Tour.vue'),
          meta: {
            mainTitle: 'Tour',
            title: 'Tour | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Bonus Ui', subText: 'Tour' }],
          },
        },
        {
          path: routes.BonusUI.AnimatedModal,
          name: 'AnimatedModal',
          component: () => import('@/pages/bonusUi/AnimatedModal.vue'),
          meta: {
            mainTitle: 'AnimatedModal',
            title: 'AnimatedModal | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Bonus Ui', subText: 'AnimatedModal' }],
          },
        },
        {
          path: routes.BonusUI.Swiper,
          name: 'SwiperSlider',
          component: () => import('@/pages/bonusUi/SwiperSlider.vue'),
          meta: {
            mainTitle: 'SwiperSlider',
            title: 'SwiperSlider | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Bonus Ui', subText: 'SwiperSlider' }],
          },
        },
        {
          path: routes.BonusUI.Ribbons,
          name: 'Ribbons',
          component: () => import('@/pages/bonusUi/Ribbons.vue'),
          meta: {
            mainTitle: 'Ribbons',
            title: 'Ribbons | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Bonus Ui', subText: 'Ribbons' }],
          },
        },
        {
          path: routes.BonusUI.ScrollSpy,
          name: 'ScrollSpy',
          component: () => import('@/pages/bonusUi/ScrollSpy.vue'),
          meta: {
            mainTitle: 'ScrollSpy',
            title: 'ScrollSpy | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Bonus Ui', subText: 'ScrollSpy' }],
          },
        },
        {
          path: routes.BonusUI.Pagination,
          name: 'Pagination',
          component: () => import('@/pages/bonusUi/Pagination.vue'),
          meta: {
            mainTitle: 'Pagination',
            title: 'Pagination | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Bonus Ui', subText: 'Pagination' }],
          },
        },
        {
          path: routes.BonusUI.Breadcrumb,
          name: 'Breadcrumb',
          component: () => import('@/pages/bonusUi/Breadcrumb.vue'),
          meta: {
            mainTitle: 'Breadcrumb',
            title: 'Breadcrumb | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Bonus Ui', subText: 'Breadcrumb' }],
          },
        },
        {
          path: routes.BonusUI.Ratios,
          name: 'Ratios',
          component: () => import('@/pages/bonusUi/Ratios.vue'),
          meta: {
            mainTitle: 'Ratios',
            title: 'Ratios | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Bonus Ui', subText: 'Ratios' }],
          },
        },
        {
          path: routes.BonusUI.RangeSlider,
          name: 'RangeSlider',
          component: () => import('@/pages/bonusUi/RangeSlider.vue'),
          meta: {
            mainTitle: 'RangeSlider',
            title: 'RangeSlider | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Bonus Ui', subText: 'RangeSlider' }],
          },
        },
        {
          path: routes.BonusUI.DraggableCard,
          name: 'DraggableCard',
          component: () => import('@/pages/bonusUi/DraggableCard.vue'),
          meta: {
            mainTitle: 'DraggableCard',
            title: 'DraggableCard | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Bonus Ui', subText: 'DraggableCard' }],
          },
        },
        {
          path: routes.BonusUI.CreativeCard,
          name: 'CreativeCard',
          component: () => import('@/pages/bonusUi/CreativeCard.vue'),
          meta: {
            mainTitle: 'CreativeCard',
            title: 'CreativeCard | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Bonus Ui', subText: 'CreativeCard' }],
          },
        },
        {
          path: routes.BonusUI.BasicCard,
          name: 'BasicCard',
          component: () => import('@/pages/bonusUi/BasicCards.vue'),
          meta: {
            mainTitle: 'BasicCard',
            title: 'BasicCard | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Bonus Ui', subText: 'BasicCard' }],
          },
        },
        {
          path: routes.Animations.Animate,
          name: 'animate',
          component: () => import('@/pages/animation/Animate.vue'),
          meta: {
            mainTitle: 'Animate',
            title: 'Animate | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Animation', subText: 'Animate' }],
          },
        },
        {
          path: routes.Animations.Aos,
          name: 'aos-animation',
          component: () => import('@/pages/animation/AosAnimation.vue'),
          meta: {
            mainTitle: 'Aos Animation',
            title: 'Aos Animation | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Animation', subText: 'Aos Animation' }],
          },
        },
        {
          path: routes.App.Buttons,
          name: 'buttons',
          component: () => import('@/pages/button/Buttons.vue'),
          meta: {
            mainTitle: 'Buttons',
            title: 'Buttons | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Button', subText: 'Buttons' }],
          },
        },
        {
          path: routes.Charts.ApexChart,
          name: 'ApexChart',
          component: () => import('@/pages/charts/ApexChart.vue'),
          meta: {
            mainTitle: 'Apex Chart',
            title: 'ApexChart | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Charts', subText: 'Apex Chart' }],
          },
        },
        {
          path: routes.Charts.GoogleChart,
          name: 'GoogleChart',
          component: () => import('@/pages/charts/GoogleChart.vue'),
          meta: {
            mainTitle: 'Google Chart',
            title: 'GoogleChart | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Charts', subText: 'Google Chart' }],
          },
        },
        {
          path: routes.Charts.ChartistChart,
          name: 'ChartistChart',
          component: () => import('@/pages/charts/ChartistChart.vue'),
          meta: {
            mainTitle: 'Chartist Chart',
            title: 'ChartistChart | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Charts', subText: 'Chartist Chart' }],
          },
        },
        {
          path: routes.Charts.ChartJsChart,
          name: 'ChartJsChart',
          component: () => import('@/pages/charts/ChartjsChart.vue'),
          meta: {
            mainTitle: 'ChartJs Chart',
            title: 'ChartJsChart | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Charts', subText: 'ChartJs Chart' }],
          },
        },
        {
          path: routes.Pages.SamplePage,
          name: 'SamplePage',
          component: () => import('@/pages/samplePage/SamplePage.vue'),
          meta: {
            mainTitle: 'Sample Page',
            title: 'Sample Page | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Pages', subText: 'Sample Page' }],
          },
        },
        {
          path: routes.Pages.Pricing,
          name: 'Pricing',
          component: () => import('@/pages/pricing/Pricing.vue'),
          meta: {
            mainTitle: 'Pricing',
            title: 'Pricing | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Pages', subText: 'Pricing' }],
          },
        },
        {
          path: routes.Gallery.GalleryGrid,
          name: 'GalleryGrid',
          component: () => import('@/pages/gallery/GalleryGrid.vue'),
          meta: {
            mainTitle: 'GalleryGrid',
            title: 'GalleryGrid | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Gallery', subText: 'GalleryGrid' }],
          },
        },
        {
          path: routes.Gallery.GalleryGridDescription,
          name: 'Gallery Grid With Description',
          component: () => import('@/pages/gallery/GalleryGridDesc.vue'),
          meta: {
            mainTitle: 'Gallery Grid With Description',
            title: 'Gallery Description | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Gallery', subText: 'Gallery Description' }],
          },
        },
        {
          path: routes.Gallery.MasonryGallery,
          name: 'Masonry Gallery',
          component: () => import('@/pages/gallery/MasonryGallery.vue'),
          meta: {
            mainTitle: 'Masonry Gallery',
            title: 'Masonry Gallery | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Gallery', subText: 'Masonry Gallery' }],
          },
        },
        {
          path: routes.Gallery.MasonryWithDescription,
          name: 'Masonry Gallery With Description',
          component: () => import('@/pages/gallery/MasonryWithDesc.vue'),
          meta: {
            mainTitle: 'Masonry Gallery With Description',
            title: 'Masonry Gallery With Description | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Gallery', subText: 'Masonry Gallery With Description' }],
          },
        },
        {
          path: routes.Gallery.HoverEffects,
          name: 'Image Hover Effects',
          component: () => import('@/pages/gallery/HoverEffects.vue'),
          meta: {
            mainTitle: 'Image Hover Effects',
            title: 'Image Hover Effects | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Gallery', subText: 'Image Hover Effects' }],
          },
        },
        {
          path: routes.Blog.AddBlog,
          name: 'Add Blog',
          component: () => import('@/pages/blog/AddBlog.vue'),
          meta: {
            mainTitle: 'Add Blog',
            title: 'Add Blog | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Blog', subText: 'Add Blog' }],
          },
        },
        {
          path: routes.Blog.Blog,
          name: 'Blog',
          component: () => import('@/pages/blog/Blog.vue'),
          meta: {
            mainTitle: 'Blog',
            title: 'Blog | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Blog', subText: 'Blog' }],
          },
        },
        {
          path: routes.Blog.BlogDetails,
          name: 'BlogDetails',
          component: () => import('@/pages/blog/BlogDetails.vue'),
          meta: {
            mainTitle: 'BlogDetails',
            title: 'BlogDetails | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Blog', subText: 'BlogDetails' }],
          },
        },
        {
          path: routes.Pages.Faq,
          name: 'Faq',
          component: () => import('@/pages/faq/Faq.vue'),
          meta: {
            mainTitle: 'Faq',
            title: 'Faq | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Pages', subText: 'Faq' }],
          },
        },
        {
          path: routes.JobSearch.CardView,
          name: 'CardView',
          component: () => import('@/pages/job/CardsView.vue'),
          meta: {
            mainTitle: 'CardView',
            title: 'CardView | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Job Search', subText: 'Card View' }],
          },
        },
        {
          path: routes.JobSearch.ListView,
          name: 'ListView',
          component: () => import('@/pages/job/ListView.vue'),
          meta: {
            mainTitle: 'ListView',
            title: 'ListView | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Job Search', subText: 'List View' }],
          },
        },
        {
          path: routes.JobSearch.JobDetails,
          name: 'JobDetails',
          component: () => import('@/pages/job/JobDetails.vue'),
          meta: {
            mainTitle: 'JobDetails',
            title: 'JobDetails | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Job Search', subText: 'Job Details' }],
          },
        },
        {
          path: routes.JobSearch.Apply,
          name: 'JobApply',
          component: () => import('@/pages/job/Apply.vue'),
          meta: {
            mainTitle: 'Job Apply',
            title: 'JobApply | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Job Search', subText: 'Apply' }],
          },
        },
        {
          path: routes.Courses.CourseDetails,
          name: 'CourseDetails',
          component: () => import('@/pages/course/CourseDetails.vue'),
          meta: {
            mainTitle: 'CourseDetails',
            title: 'CourseDetails | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Courses', subText: 'CourseDetails' }],
          },
        },
        {
          path: routes.Courses.CourseList,
          name: 'CourseList',
          component: () => import('@/pages/course/CourseList.vue'),
          meta: {
            mainTitle: 'CourseList',
            title: 'CourseList | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Courses', subText: 'CourseList' }],
          },
        },
        {
          path: routes.Maps.GoogleMap,
          name: 'Google Map',
          component: () => import('@/pages/maps/GoogleMap.vue'),
          meta: {
            mainTitle: 'Google Map',
            title: 'GoogleMap | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Maps', subText: 'Google Map' }],
          },
        },
        {
          path: routes.Maps.LeafletMap,
          name: 'LeafletMap',
          component: () => import('@/pages/maps/LeafletMap.vue'),
          meta: {
            mainTitle: 'LeafletMap',
            title: 'LeafletMap | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Maps', subText: 'LeafletMap' }],
          },
        },
        {
          path: routes.Editors.CkEditor,
          name: 'CkEditor',
          component: () => import('@/pages/editor/CkEditor.vue'),
          meta: {
            mainTitle: 'CkEditor',
            title: 'CkEditor | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Editor', subText: 'CkEditor' }],
          },
        },
        {
          path: routes.Editors.MdeEditor,
          name: 'MdeEditor',
          component: () => import('@/pages/editor/MdeEditor.vue'),
          meta: {
            mainTitle: 'MdeEditor',
            title: 'MdeEditor | Riho - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Editor', subText: 'MdeEditor' }],
          },
        },
        {
          path: routes.Pages.KnowledgeBase,
          name: 'KnowledgeBase',
          component: () => import('@/pages/knowledgebase/KnowledgeBase.vue'),
          meta: {
            mainTitle: 'KnowledgeBase',
            title: 'KnowledgeBase | Malabo - Premium Vue Admin Template',
            breadcrumb: [{ text: 'KnowledgeBase', subText: 'KnowledgeBase' }],
          },
        },
        {
          path: routes.Pages.SupportTicket,
          name: 'SupportTicket',
          component: () => import('@/pages/supportTicket/SupportTicket.vue'),
          meta: {
            mainTitle: 'SupportTicket',
            title: 'SupportTicket | Malabo - Premium Vue Admin Template',
            breadcrumb: [{ text: 'Pages', subText: 'SupportTicket' }],
          },
        },
      ],
    },
    {
      path: routes.ErrorPages.Error400,
      name: 'Error400',
      component: () => import('@/pages/errorPages/ErrorPageOne.vue'),
      meta: { title: 'Error 400 | Riho - Premium Vue Admin Template' },
    },
    {
      path: routes.ErrorPages.Error401,
      name: 'Error401',
      component: () => import('@/pages/errorPages/ErrorPageTwo.vue'),
      meta: { title: 'Error 401 | Riho - Premium Vue Admin Template' },
    },
    {
      path: routes.ErrorPages.Error403,
      name: 'Error403',
      component: () => import('@/pages/errorPages/ErrorPageThree.vue'),
      meta: { title: 'Error 403 | Riho - Premium Vue Admin Template' },
    },
    {
      path: routes.ErrorPages.Error404,
      name: 'Error404',
      component: () => import('@/pages/errorPages/ErrorPageFour.vue'),
      meta: { title: 'Error 404 | Riho - Premium Vue Admin Template' },
    },
    {
      path: routes.ErrorPages.Error500,
      name: 'Error500',
      component: () => import('@/pages/errorPages/ErrorPageFive.vue'),
      meta: { title: 'Error 500 | Riho - Premium Vue Admin Template' },
    },
    {
      path: routes.ErrorPages.Error503,
      name: 'Error503',
      component: () => import('@/pages/errorPages/ErrorPageSix.vue'),
      meta: { title: 'Error 503 | Riho - Premium Vue Admin Template' },
    },
    {
      path: routes.Ecommerce.Invoice.Invoice1,
      name: 'InvoiceOne',
      component: () => import('@/pages/ecommerce/invoice/InvoiceOne.vue'),
      meta: {
        title: 'InvoiceOne | Riho - Premium Vue Admin Template',
      },
    },
    {
      path: routes.Ecommerce.Invoice.Invoice2,
      name: 'InvoiceTwo',
      component: () => import('@/pages/ecommerce/invoice/InvoiceTwo.vue'),
      meta: {
        title: 'InvoiceTwo | Riho - Premium Vue Admin Template',
      },
    },
    {
      path: routes.Ecommerce.Invoice.Invoice3,
      name: 'InvoiceThree',
      component: () => import('@/pages/ecommerce/invoice/InvoiceThree.vue'),
      meta: {
        title: 'InvoiceThree | Riho - Premium Vue Admin Template',
      },
    },
    {
      path: routes.Ecommerce.Invoice.Invoice4,
      name: 'InvoiceFour',
      component: () => import('@/pages/ecommerce/invoice/InvoiceFour.vue'),
      meta: {
        title: 'InvoiceFour | Riho - Premium Vue Admin Template',
      },
    },
    {
      path: routes.Ecommerce.Invoice.Invoice5,
      name: 'InvoiceFive',
      component: () => import('@/pages/ecommerce/invoice/InvoiceFive.vue'),
      meta: {
        title: 'InvoiceFive | Riho - Premium Vue Admin Template',
      },
    },
    {
      path: routes.Auth.LoginSimple,
      name: 'LoginSimple',
      component: () => import('@/pages/authentication/LoginSimple.vue'),
      meta: { title: 'Login Simple | Riho - Premium Vue Admin Template' },
    },
    {
      path: routes.Auth.LoginBgImage,
      name: 'LoginBgImage',
      component: () => import('@/pages/authentication/LoginBgImage.vue'),
      meta: { title: 'Login With Bg Image | Riho - Premium Vue Admin Template' },
    },
    {
      path: routes.Auth.LoginBgImageTwo,
      name: 'LoginBgImageTwo',
      component: () => import('@/pages/authentication/LoginBgImageTwo.vue'),
      meta: { title: 'Login With Bg Image Two | Riho - Premium Vue Admin Template' },
    },
    {
      path: routes.Auth.LoginValidation,
      name: 'LoginValidation',
      component: () => import('@/pages/authentication/LoginValidation.vue'),
      meta: { title: 'Login  Validation | Riho - Premium Vue Admin Template' },
    },
    {
      path: routes.Auth.LoginTooltip,
      name: 'LoginTooltip',
      component: () => import('@/pages/authentication/LoginTooltip.vue'),
      meta: { title: 'Login With Tooltip | Riho - Premium Vue Admin Template' },
    },
    {
      path: routes.Auth.LoginSweetAlert,
      name: 'LoginSweetAlert',
      component: () => import('@/pages/authentication/LoginSweetAlert.vue'),
      meta: { title: 'Login With Sweet Alert | Riho - Premium Vue Admin Template' },
    },
    {
      path: routes.Auth.RegisterSimple,
      name: 'RegisterSimple',
      component: () => import('@/pages/authentication/RegisterSimple.vue'),
      meta: { title: 'Register Simple | Riho - Premium Vue Admin Template' },
    },
    {
      path: routes.Auth.RegisterBgImage,
      name: 'RegisterBgImage',
      component: () => import('@/pages/authentication/RegisterBgImage.vue'),
      meta: { title: 'Register With Bg Image | Riho - Premium Vue Admin Template' },
    },
    {
      path: routes.Auth.RegisterBgImageTwo,
      name: 'RegisterBgImageTwo',
      component: () => import('@/pages/authentication/RegisterBgImageTwo.vue'),
      meta: { title: 'Register With Bg Image Two | Riho - Premium Vue Admin Template' },
    },
    {
      path: routes.Auth.RegisterWizard,
      name: 'RegisterWizard',
      component: () => import('@/pages/authentication/RegisterWizard.vue'),
      meta: { title: 'Register Wizard | Riho - Premium Vue Admin Template' },
    },
    {
      path: routes.Auth.AccountRestricted,
      name: 'AccountRestricted',
      component: () => import('@/pages/authentication/AccountRestricted.vue'),
      meta: { title: 'Account Restricted | Riho - Premium Vue Admin Template' },
    },
    {
      path: routes.Auth.UnlockUser,
      name: 'UnlockUser',
      component: () => import('@/pages/authentication/UnlockUser.vue'),
      meta: { title: 'Unlock User | Riho - Premium Vue Admin Template' },
    },
    {
      path: routes.Auth.ForgotPassword,
      name: 'ForgotPassword',
      component: () => import('@/pages/authentication/ForgotPassword.vue'),
      meta: { title: 'Forgot Password | Riho - Premium Vue Admin Template' },
    },
    {
      path: routes.Auth.ResetPassword,
      name: 'ResetPassword',
      component: () => import('@/pages/authentication/ResetPassword.vue'),
      meta: { title: 'Reset Password | Riho - Premium Vue Admin Template' },
    },
    {
      path: routes.Auth.Maintenance,
      name: 'Maintenance',
      component: () => import('@/pages/authentication/Maintenance.vue'),
      meta: { title: 'Maintenance | Riho - Premium Vue Admin Template' },
    },
    {
      path: routes.ComingSoon.ComingSimple,
      name: 'ComingSimple',
      component: () => import('@/pages/comingSoon/ComingSoon.vue'),
      meta: { title: 'Coming Simple | Riho - Premium Vue Admin Template' },
    },
    {
      path: routes.ComingSoon.ComingBgVideo,
      name: 'ComingBgVideo',
      component: () => import('@/pages/comingSoon/ComingSoonVideo.vue'),
      meta: { title: 'Coming With Bg Video | Riho - Premium Vue Admin Template' },
    },
    {
      path: routes.ComingSoon.ComingBgImage,
      name: 'ComingBgImage',
      component: () => import('@/pages/comingSoon/ComingSoonImage.vue'),
      meta: { title: 'Coming With Bg Image | Riho - Premium Vue Admin Template' },
    },
  ],
})
router.beforeEach((to, from, next) => {
  // ── Judul halaman dinamis ──
  if (typeof to.meta.title === 'string') {
    document.title = to.meta.title.replace(/Riho - Premium Vue Admin Template/g, 'MHJ CRM')
  } else {
    document.title = 'MHJ CRM - PT. Mulya Husada Jaya'
  }

  const token = localStorage.getItem('token')
  const isAuthPage = to.path.startsWith('/auth') || to.path.startsWith('/coming_soon')
  const isLoginPage = to.path.includes('/login') || to.path.includes('/register')

  // Jika halaman login/register dan pengguna sudah terautentikasi: redirect ke dashboard utama
  if (isLoginPage && token) {
    return next('/')
  }

  // Izinkan akses ke halaman otentikasi publik (login, register, forgot password, dsb.)
  if (isAuthPage) {
    return next()
  }

  // Halaman internal yang diproteksi: wajib punya token aktif
  if (!token) {
    return next('/auth/login')
  }

  // Periksa apakah pengguna memiliki hak akses (HASACCESS == 1) ke rute tujuan
  if (!canAccessRoute(to.path)) {
    import('sweetalert2').then((Swal) => {
      Swal.default.fire({
        icon: 'warning',
        title: 'Akses Ditolak',
        text: 'Anda tidak memiliki hak akses untuk membuka halaman tersebut.',
        confirmButtonColor: 'var(--theme-default)',
        timer: 3500,
        timerProgressBar: true,
      })
    })
    return next('/crmAdmin')
  }

  next()
})
export default router

