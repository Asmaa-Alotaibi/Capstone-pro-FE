import { makeAutoObservable } from "mobx";
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
      this.items = response.data;
      this.loading = false;
    } catch (error) {
      console.error("ItemStore -> fetchitems -> error", error);
    }
  };
}
const itemStore = new ItemStore(); //new instance
itemStore.fetchItems();
export default itemStore;
