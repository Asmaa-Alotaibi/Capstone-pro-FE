import { makeAutoObservable, runInAction } from "mobx";
import authStore from "./authStore";
import instance from "./instance";

class ItemStore {
  items = [];
  loading = true;
  constructor() {
    makeAutoObservable(this);
  }
  getItemById = (itemId) => this.items.find((item) => item.id === itemId);

  fetchItems = async () => {
    try {
      const response = await instance.get("/items");
      runInAction(() => {
        this.items = response.data;
        this.loading = false;
      });
    } catch (error) {
      console.error("ItemStore -> fetchitems -> error", error);
    }
  };
  createItem = async (newItem) => {
    try {
      const formData = new FormData();
      for (const key in newItem) formData.append(key, newItem[key]);
      const res = await instance.post("/items", formData);
      res.data.user = { username: authStore.user.username };
      runInAction(() => {
        this.items.push(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
}
const itemStore = new ItemStore(); //new instance
itemStore.fetchItems();
export default itemStore;
