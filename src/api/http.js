//导入axios
import axios from "axios"

//设置基地值
//axios.defaults.baseURL = "http://localhost:8888/api/private/v1/";


//多基地值
const http = axios.create({
  baseURL: "http://localhost:8888/api/private/v1/"
})

//设置请求头默认值
http.defaults.headers.common['Authorization'] = window.localStorage.getItem('token');

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

  })
}
//用户管理列表请求
export const users = ({
  query,
  pagenum,
  pagesize
}) => {

  return http.get("users", {
      params: {
        query,
        pagenum,
        pagesize
      },

    }

  )
}
//添加管理用户
export const addUser = ({
  username,
  password,
  email,
  mobile
}) => {
  return http.post("users", {
    username,
    password,
    email,
    mobile
  })
}
//用户状态开关
export const changeUser = (uId, type) => {
  return http.put(`users/${uId}/state/${type}`)
}
//edit编辑用户
export const editUsers = ({
  id,
  email,
  mobile
}) => {
  return http.put(`users/${id}`, {
   
    email,
    mobile
  })
}
//删除管理用户
export const delUsers = (id) =>{
  return http.delete(`users/${id}`)
}

//角色列表
export const rolesList = () =>{
  return http.get("roles")
}
//分配用户角色
export const getRole = ({id , rid}) =>{
  return http.put(`users/${id}/role`,{
    rid
  })
}

//权限管理列表
export const rights= (type) =>{
  return http.get(`rights/${type}`)
}
