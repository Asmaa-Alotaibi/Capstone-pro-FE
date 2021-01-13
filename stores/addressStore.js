import { makeAutoObservable } from "mobx";
import instance from "./instance";

class AddressStore {
  addresses = [];
  loading = true;
  constructor() {
    makeAutoObservable(this);
  }
  getAddressByUserId = (userId) =>
    this.addresses.find((address) => address.userId === userId);

  getAddressById = (addressId) =>
    this.addresses.find((address) => address.id === addressId);

  fetchAdresses = async () => {
    try {
      const response = await instance.get("/addresses");
      this.addresses = response.data;
      this.loading = false;
    } catch (error) {
      console.error("Addressestore -> fetchAdresses -> error", error);
    }
  };
}
const addressStore = new AddressStore(); //new instance
addressStore.fetchAdresses();
export default addressStore;
