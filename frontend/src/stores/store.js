import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useStore = defineStore("store", () => {
  const errorMessage = ref("");
  const responseStatus = ref(0);
  const data = ref([]);

  async function all(urlFragment) {
    errorMessage.value = "";
    let res;
    try {
      res = await axios(urlFragment);
      data.value = res.data;
    } catch (e) {
      errorMessage.value = e.message;
      if (e.response) {
        responseStatus.value = e.response.status;
      }
    }

    return res;
  }

  return { errorMessage, responseStatus, data, all };
});
