import axios from "axios";
import ip from "./ipaddress";

const instance = axios.create({
  // baseURL: "http://localhost:8000",
  baseURL: "http://" + ip + ":8000",
});
export default instance;
