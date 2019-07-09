import Login from '../pages/Login/Login.vue'
import Msit  from '../pages/Msit/Msit.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'

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
    path:'/',
    redirect: '/Msit'
  }
]
