/*
1.封装接口请求函数，每个函数返回的都是Promise /index_category
*/
import ajax from './ajax.js'
const BASE = '/api'

//1.获取定位
export const reqAddress = (latitude,longitude)=> ajax.get(`${BASE}/position/${latitude},${longitude}`)//先传维度，再传精度
//2.获取食品分类了表
// export const reqCatorgorys = ()=> ajax.get(`/index_category`)

export const reqCatorgorys = () => ajax({
  method:'GET',
  url:BASE+'/index_category',
  headers: {
    needToken: true
  }
})


//3、根据经纬度获取商铺列表
export const reqShops = ({latitude,longitude}) => ajax({
  method:'GET',
  url:BASE+'/shops',
  params:{
    latitude,
    longitude
  },
  headers: {
    needToken: true
  }
})


//4.获取短信验证码
export const reqMsmCode = (phone) => ajax({
  method:'GET',
  url:BASE+'/sendcode',
  params:{
    phone
  }
})


//5.短信登录
export const reqMsmLogin = (phone,code) => ajax({
  method:'POST',
  url:BASE+'/login_sms',
  params:{
    phone,
    code
  }
})

//6.用户名登录
export const reqPwdLogin = ({name,pwd,captcha}) => ajax({
  method:'POST',
  url:BASE+'/login_sms',
  params:{
    name,
    pwd,
    captcha
  }
})