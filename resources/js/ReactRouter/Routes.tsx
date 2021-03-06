import Profile from '@/SFCR/layouts/admin/SideNav--DashboardComp/Profile'
import Dashboard from '@/SFCR/layouts/admin/SideNav--DashboardComp/Dashboard'
import Category from '@/SFCR/layouts/admin/SideNav--DashboardComp/Category'
import ViewCategory from '@/SFCR/layouts/admin/SideNav--DashboardComp/ViewCategory'
import EditCategory from '@/SFCR/layouts/admin/SideNav--DashboardComp/EditCategory'
import StoreProduct from '@/SFCR/layouts/admin/SideNav--DashboardComp/StoreProduct'
import ViewProduct from '@/SFCR/layouts/admin/SideNav--DashboardComp/ViewProduct'
import EditProduct from '@/SFCR/layouts/admin/SideNav--DashboardComp/EditProduct'

const routes = [
  { path: '/admin', exact: true, name: 'AdminRoute' },
  {
    path: '/admin/dashboard',
    exact: true,
    name: 'DashboardRoute',
    component: Dashboard,
  },
  {
    path: '/admin/profile',
    exact: true,
    name: 'ProfileRoute',
    component: Profile,
  },
  {
    path: '/admin/category',
    exact: true,
    name: 'CategoryRoute',
    component: Category,
  },
  {
    path: '/admin/view-category',
    exact: true,
    name: 'ViewCategoryRoute',
    component: ViewCategory,
  },
  {
    path: '/admin/edit-category/:id',
    exact: true,
    name: 'EditCategoryRoute',
    component: EditCategory,
  },
  {
    path: '/admin/create-product',
    exact: true,
    name: 'PostProductRoute',
    component: StoreProduct,
  },
  {
    path: '/admin/read-product',
    exact: true,
    name: 'GetProductRoute',
    component: ViewProduct,
  },
  {
    path: '/admin/update-product/:id',
    exact: true,
    name: 'PutCategoryRoute',
    component: EditProduct,
  },
]

export default routes
