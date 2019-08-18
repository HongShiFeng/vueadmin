//导入axios
import axios from "axios"

//设置基地值
//axios.defaults.baseURL = "http://localhost:8888/api/private/v1/";


//多基地值
const http = axios.create({
  baseURL: "http://localhost:8888/api/private/v1/"
})

export default http;
//登录请求
export const login = ({
  username,
  password
}) => {
  return http.post("login", {
    username,
    password
  });
}
//左侧菜单获取
export const menus = () => {

    return http.get("menus", {
      headers: {
        Authorization: window.localStorage.getItem('token')
      }
    })
  } 
  //users请求
  export const users = ({query, pagenum, pagesize}) => {

    return http.get("users", {
      params:{
        query,
        pagenum,
        pagesize
      },
        headers: {
          Authorization: window.localStorage.getItem('token')
        }
      }

    )
  }