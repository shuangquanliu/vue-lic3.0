/*
包含n个状态属性数据
*/
export default {
  latitude:'40.10039',//维度
  longitude:'116.36868',//精度
  address:{},//定位地址
  categorys:[],//商品分类
  shops:[],//商家列表
  user:{},//用户信息
  token:localStorage.getItem('token_key')
}
