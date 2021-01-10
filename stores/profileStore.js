import { action, makeAutoObservable } from "mobx";
import instance from "./instance";
class ProfileStore {
  profiles = [];
  loading = true;
  constructor() {
    // when using makeAutoObservable just give it `this`.
    makeAutoObservable(this, {
      fetchprofiles: action,
    });
  }
  fetchprofiles = async () => {
    try {
      const response = await instance.get("/profiles");
      this.profiles = response.data;
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  };

  updateProfile = async (updatedProfile) => {
    try {
      const formData = new FormData();
      for (const key in updatedProfile)
        formData.append(key, updatedProfile[key]);
      await instance.put(`/profiles/${updatedProfile.id}`, formData);

      const profile = this.profiles.find(
        (profile) => profile.id === updatedProfile.id
      );
      for (const key in updatedProfile) profile[key] = updatedProfile[key];
      profile.image = URL.createObjectURL(updatedProfile.image);
    } catch (error) {
      console.log("ProfileStore -> updateProfile -> error", error);
    }
  };
  getProfileByUserId = (userId) =>
    this.profiles.find((profile) => profile.userId === userId);
}

const profileStore = new ProfileStore();
profileStore.fetchprofiles();
export default profileStore;
