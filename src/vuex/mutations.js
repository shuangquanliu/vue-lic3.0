/*
包含n个直接修改状态数据的方法
*/

import {RECEIVE_ADDRESS,RECEIVE_SHOPS,RECEIVE_GATEGORGRYS,RECEIVE_USER,RESET_USER,RECEIVE_TOKEN} from './mutation-types'

export default {
  //直接上修改数据
  [RECEIVE_ADDRESS](state,address){
    state.address = address
  },
  [RECEIVE_GATEGORGRYS](state,categorys){
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state,shops){
    state.shops = shops
  },
  [RECEIVE_USER](state,user){
    state.user = user
  },
  [RESET_USER](state){
    state.user = {}
  },
  [RECEIVE_TOKEN](state,{token}){
    state.token = token
  }
}
