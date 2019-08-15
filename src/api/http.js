//导入axios
import axios from "axios"

//设置基地值
//axios.defaults.baseURL = "http://localhost:8888/api/private/v1/";


//多基地值
const http = axios.create({
  baseURL: "http://localhost:8888/api/private/v1/"
})

export default http;

export const login = ({username,password}) => {
  return http.post("login", {
    username,
    password
  });

}