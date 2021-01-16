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
      res.data.owner = { username: authStore.user.username };
      runInAction(() => {
        this.items.push(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  deleteItem = async (itemId) => {
    try {
      await instance.delete(`/items/${itemId}`);
      runInAction(() => {
        this.items = this.items.filter((item) => item.id !== itemId);
      });
    } catch (error) {
      console.log(error);
    }
  };

  updateItem = async (updatedItem) => {
    try {
      const formData = new FormData();
      for (const key in updatedItem)
        if (updatedItem[key]) formData.append(key, updatedItem[key]);
      console.log(formData);
      await instance.put(`/items/${updatedItem.id}`, formData);
      runInAction(() => {
        const item = this.items.find((item) => item.id === updatedItem.id);
        for (const key in updatedItem) item[key] = updatedItem[key];
        item.image = URL.createObjectURL(updatedItem.image);
      });
    } catch (error) {
      console.log("ItemStore -> updateItem -> error", error);
    }
  };
  requestItem = async (requestedItem, option) => {
    try {
      await instance.put(`/items/request/${requestedItem.id}`, requestedItem);
      //update at FE
      const elementsIndex = this.items.findIndex(
        (element) => element.id == requestedItem.id
      );
      let newArray = [...this.items];
      if (option === 1) {
        await instance.put(
          `/items/needDelivery/${requestedItem.id}`,
          requestedItem
        );
        newArray[elementsIndex] = {
          ...newArray[elementsIndex],
          booked: !newArray[elementsIndex].booked,
          needDelivery: !newArray[elementsIndex].needDelivery,
        };
      } else {
        newArray[elementsIndex] = {
          ...newArray[elementsIndex],
          booked: !newArray[elementsIndex].booked,
        };
      }
      this.items = newArray;
    } catch (error) {
      console.log("ItemStore -> requestItem -> error", error);
    }
  };
}
const itemStore = new ItemStore(); //new instance
itemStore.fetchItems();
export default itemStore;
