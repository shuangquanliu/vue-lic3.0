/*
包含n个间接修改状态数据的方法
*/

import {reqAddress,reqShops,reqCatorgorys,reqAutoLogin,reqInfo,reqRatings,reqGoods} from '../api/index'
import {RECEIVE_ADDRESS,RECEIVE_SHOPS,RECEIVE_GATEGORGRYS,RECEIVE_USER,RESET_USER,RECEIVE_TOKEN,RECEIVE_INFO,RECEIVE_RATINGS,RECEIVE_GOODS} from './mutation-types'
export default {
  async reqAddress({commit,state}){
    const {latitude,longitude} = state
    const result = await reqAddress(latitude,longitude)
    if(result.code===0){
      const address = result.data
      commit(RECEIVE_ADDRESS,address)
    }
  },
  async reqCategorys({commit}){
    const result = await reqCatorgorys()
    if(result.code===0){
      const categorys = result.data
      commit(RECEIVE_GATEGORGRYS,categorys)
    }
  },
  async reqShops({commit,state}){
    const {latitude,longitude} = state
    const result = await reqShops({latitude,longitude})
    if(result.code===0){
      const shops = result.data
      commit(RECEIVE_SHOPS,shops)
    }
  },
  /* 
  记录user:
  持久化保存token
  在state中保存user
  */
 recordUser({commit},user){
   //将user的taken保存到cocalstorage中
  localStorage.setItem('token_key',user.token)
  //将token保存到state中
  commit(RECEIVE_TOKEN,{token:user.token})
  //将user保存到state中
  
  delete user.token
  commit(RECEIVE_USER,user)
 },

 /* 
 退出登陆
 */
 logout ({commit}) {
   // 重置状态中的user
   commit(RESET_USER)
   // 清除local中保存的token
   localStorage.removeItem('token_key')
 /*   // 清除cookie中的user_id
   Cookies.remove('user_id') */
 },


 /* 
  7天免登录
 */

 async autoLogin({commit,state}){
  const token = state.token
    if(token){
      const result = await reqAutoLogin()
      if (result.code===0) {
        const user = result.data
        commit(RECEIVE_USER, user)
      }
    }
 },


 // 异步获取商家信息
  async getShopInfo({commit}, cb) {
    const result = await reqInfo()
    if(result.code===0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
      cb && cb()
    }
  },

  // 异步获取商家评价列表
  async getShopRatings({commit}, cb) {
    const result = await reqRatings()
    if(result.code===0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
      cb && cb()
    }
  },

  // 异步获取商家商品列表
  async getShopGoods({commit}, cb) {
    const result = await reqGoods()
    if(result.code===0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      cb && cb()
    }
  },


}
