import Login from '../pages/Login/Login.vue'
import Msit  from '../pages/Msit/Msit.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods.vue'
import ShopInfo from '../pages/Shop/ShopInfo.vue'
import ShopRatings from '../pages/Shop/ShopRatings.vue'

export default[
  {
    path:'/login',
    component:Login
  },
  {
    path:'/msit',
    component:Msit,
    meta: {isShowFooter:true}
  },
  {
    path:'/order',
    component:Order,
    meta: {isShowFooter:true}
  },
  {
    path:'/search',
    component:Search,
    meta: {isShowFooter:true}
  },
  {
    path:'/profile',
    component:Profile,
    meta: {isShowFooter:true}
  },
  {
    path:'/shop',
    component:Shop,
    children:[
      {
        path:'/shop/goods',
        component:ShopGoods
      },
      {
        path:'/shop/ratings',
        component:ShopRatings
      },
      {
        path:'/shop/info',
        component:ShopInfo
      },
      {
        path:'/shop',
        redirect:'/shop/goods'
      }
    ]
  },
  {
    path:'/',
    redirect: '/Msit'
  }
]
