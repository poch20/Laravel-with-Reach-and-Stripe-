import Category from '@/SFCR/layouts/client-side/store/StoreComp/Category'
import Detail from '@/SFCR/layouts/client-side/store/StoreComp/Detail'
import CheckOutSuccess from '@/SFCR/layouts/client-side/store/StoreComp/CheckOutSuccess'
import CheckOutCancel from '@/SFCR/layouts/client-side/store/StoreComp/CheckOutCancel'
const ClientRouteUrls = [
  { path: '/store', exact: true, name: 'StoreAppPageRoute' },
  {
    path: '/store/categories',
    exact: true,
    name: 'CategoryPageUrlRoute',
    component: Category,
    //<Route exact path="" component={Profile} />
  },
  {
    path: '/store/product-details/:slug',
    exact: true,
    name: 'ProdDetailsPageUrlRoute',
    component: Detail,
    //<Route exact path="" component={Profile} />
  },
  {
    path: '/store/checkout-success',
    exact: true,
    name: 'CheckOutSuccessPageUrlRoute',
    component: CheckOutSuccess,
    //<Route exact path="" component={Profile} />
  },
  {
    path: '/store/checkout-cancel',
    exact: true,
    name: 'CheckOutCancelPageUrlRoute',
    component: CheckOutCancel,
    //<Route exact path="" component={Profile} />
  },
  { path: '/cart', exact: true, name: 'CartFeaturePageRoute' },
]

export default ClientRouteUrls
