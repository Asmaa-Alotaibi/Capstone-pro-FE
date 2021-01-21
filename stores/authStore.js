import AsyncStorage from "@react-native-community/async-storage";
import decode from "jwt-decode";
import instance from "./instance";
import profileStore from "./profileStore";
import { makeAutoObservable, runInAction } from "mobx";

class AuthStore {
  users = [];
  user = {
    id: 0,
  };
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  setUser = async (token) => {
    await AsyncStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    runInAction(() => {
      this.user = decode(token);
    });
  };
  signup = async (userData) => {
    try {
      const res = await instance.post("/signup", userData);
      await this.setUser(res.data.token);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };

  signin = async (userData) => {
    try {
      console.log(userData);
      const res = await instance.post("/signin", userData);
      await this.setUser(res.data.token);
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const decodedToken = decode(token);
      if (Date.now() < decodedToken.exp) {
        await this.setUser(token);
      } else {
        this.signout();
      }
    }
  };

  signout = () => {
    delete instance.defaults.headers.common.Authorization;
    runInAction(() => {
      this.user = {
        id: 0,
        username: "guest",
      };
    });
  };

  getUserBYId = (userId) => this.users.find((user) => user.id === userId);
}

const authStore = new AuthStore();

authStore.checkForToken();
export default authStore;
