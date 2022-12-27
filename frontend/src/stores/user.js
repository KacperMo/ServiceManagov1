import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useUserStore = defineStore("user", () => {
  axios.defaults.baseURL = "http://127.0.0.1:3333/";
  // axios.defaults.withCredentials = true;

  const errorMessage = ref("");
  const responseStatus = ref(0);
  const users = ref(null);

  async function all(urlFragment) {
    let res;
    try {
      res = await axios(urlFragment);
      users.value = res.data;
    } catch (e) {
      errorMessage.value = e.message;
      responseStatus.value = e.response.status;
    }

    return res;
  }

  return { errorMessage, responseStatus, users, all };
});
