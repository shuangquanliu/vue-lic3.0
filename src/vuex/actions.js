/*
包含n个间接修改状态数据的方法
*/

import {reqAddress,reqShops,reqCatorgorys} from '../api/index'
import {RECEIVE_ADDRESS,RECEIVE_SHOPS,RECEIVE_GATEGORGRYS,RECEIVE_USER,RESET_USER,RECEIVE_TOKEN} from './mutation-types'
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
 }
}
