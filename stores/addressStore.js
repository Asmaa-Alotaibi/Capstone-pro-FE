import { makeAutoObservable, runInAction } from "mobx";

import authStore from "./authStore";
import instance from "./instance";

// import UpdateItem from "../components/item/UpdateItem";

class AddressStore {
  addresses = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  // sara code
  getAddressById = (addressId) =>
    this.addresses.find((address) => address.id === addressId);

  fetchAddresses = async () => {
    try {
      const response = await instance.get("/addresses");
      runInAction(() => {
        this.addresses = response.data;
        this.loading = false;
      });
    } catch (error) {
      console.error("AddressStore -> fetchAddresses -> error", error);
    }
  };

  createAddress = async (newAddress) => {
    try {
      const res = await instance.post("/addresses", newAddress);
      runInAction(() => {
        this.addresses.push(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  deleteAddress = async (addressId) => {
    try {
      await instance.delete(`/addresses/${addressId}`);
      runInAction(() => {
        this.addresses = this.addresses.filter(
          (address) => address.id !== addressId
        );
      });
    } catch (error) {
      console.log(error);
    }
  };
  updateAddress = async (updatedAddress) => {
    try {
      await instance.put(`/addresses/${updatedAddress.id}`, updatedAddress);

      const addressIndex = this.addresses.findIndex(
        (address) => address.id === updatedAddress.id
      );
      let newArray = [...this.addresses];
      newArray[addressIndex] = updatedAddress;
      runInAction(() => {
        this.addresses = newArray;
      });
    } catch (error) {
      console.log("AddressStore -> updateAddress -> error", error);
    }
  };

  // asmaa code
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
addressStore.fetchAddresses();
export default addressStore;

// updateAddress = async (updatedAddress) => {
//   try {
//     const formData = new FormData();
//     for (const key in updatedAddress)
//       if (updatedAddress[key]) formData.append(key, updatedAddress[key]);
//     console.log(formData);
//     await instance.put(`/addresses/${updatedAddress.id}`, formData);
//     runInAction(() => {
//       const address = this.addresses.find(
//         (address) => address.id === updatedAddress.id
//       );
//       for (const key in updatedAddress) address[key] = updatedAddress[key];
//     });
//   } catch (error) {
//     console.log("AddressStore -> updateAddress -> error", error);
//   }
// };

// createAddress = async (newAddress) => {
//   try {
//     const formData = new FormData();
//     for (const key in newAddress) formData.append(key, newAddress[key]);
//     const res = await instance.post("/addresses", formData);
//     res.data.user = { username: authStore.user.username };
//     runInAction(() => {
//       this.addresses.push(res.data);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
