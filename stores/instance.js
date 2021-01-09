import axios from "axios";
import ip from "./ipaddress";

const instance = axios.create({
  // baseURL: "http://192.168.1.152:8000",
  baseURL: "http://" + ip + ":8000",
});
export default instance;
