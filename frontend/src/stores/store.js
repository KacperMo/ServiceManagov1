import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useStore = defineStore("store", () => {
  const errorMessage = ref("");
  const responseStatus = ref(0);
  const collection = ref([]);
  const data = ref(null);

  async function all(urlFragment) {
    errorMessage.value = "";
    responseStatus.value = 0;
    let res;
    try {
      res = await axios(urlFragment);
      collection.value = res.data;
    } catch (e) {
      errorMessage.value = e.message;
      if (e.response) {
        responseStatus.value = e.response.status;
      }
    }

    return res;
  }

  async function getOne(urlFragment, id) {
    errorMessage.value = "";
    responseStatus.value = 0;
    let res;
    try {
      res = await axios(`${urlFragment}/${id}`);
      data.value = res.data; // console.log(res.data);
    } catch (e) {
      // console.log(e);
      errorMessage.value = e.message;
      responseStatus.value = e.response.status;
    }

    return res;
  }

  return { errorMessage, responseStatus, collection, data, all, getOne };
});
