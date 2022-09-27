import axios from "axios";

export function request(config) {
 
  
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: '5000'
  })

  
  instance.interceptors.request.use(config => {
    
    // console.log(config)
    return config
  }, err => {
    console.log(err)
    // return err
  })

  
  instance.interceptors.response.use(res => {
    // console.log(res)
    //res.data.name = 'neo'
    return res.data
  }, err => {
    console.log(err)
    // return err
  })

  //发送请求
  return instance(config)

}