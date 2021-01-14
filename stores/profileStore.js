import { action, makeAutoObservable, runInAction } from "mobx";
import instance from "./instance";
class ProfileStore {
  profiles = [];
  loading = true;
  constructor() {
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
      console.log(formData);
      await instance.put(`/profiles/${updatedProfile.id}`, formData);
      runInAction(() => {
        const profile = this.profiles.find(
          (profile) => profile.id === updatedProfile.id
        );
        for (const key in updatedProfile) profile[key] = updatedProfile[key];
        profile.image = URL.createObjectURL(updatedProfile.image);
      });
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
