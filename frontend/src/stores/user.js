import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useUserStore = defineStore("user", () => {
  const errorMessage = ref("");
  const responseStatus = ref(0);
  const users = ref([]);

  async function all(urlFragment) {
    errorMessage.value = "";
    let res;
    try {
      res = await axios(urlFragment);
      users.value = res.data;
    } catch (e) {
      errorMessage.value = e.message;
      if (e.response) {
        responseStatus.value = e.response.status;
      }
    }

    return res;
  }

  return { errorMessage, responseStatus, users, all };
});
