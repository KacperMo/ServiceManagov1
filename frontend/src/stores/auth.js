import { defineStore } from "pinia";
import { computed, ref } from "vue";
import axios from "axios";

export const useAuthStore = defineStore("auth", () => {
  // axios.defaults.baseURL = "http://127.0.0.1:3333/";

  const tokenName = "stoken";
  const errorMessage = ref("");
  const responseStatus = ref(0);
  const data = ref("");
  const validationErrors = ref(null);
  const token = ref(localStorage.getItem(tokenName) || null);

  async function login(payload) {
    // errorMessage.value = "";
    data.value = "";
    let res;
    try {
      res = await axios.post("login", payload);
      token.value = res.data.token;
      localStorage.setItem(tokenName, res.data.token);
    } catch (e) {
      // console.log("error:", e);
      data.value = e.response.data;
      errorMessage.value = e.message;
      responseStatus.value = e.response.status;
    }

    return res;
  }

  async function logout() {
    let res;
    try {
      token.value = null;
      localStorage.removeItem(tokenName);
      res = await axios.post("logout");
    } catch (e) {
      errorMessage.value = e.message;
      responseStatus.value = e.response.status;
    }

    return res;
  }

  async function register(payload) {
    data.value = "";
    errorMessage.value = "";
    let res;
    try {
      res = await axios.post("register", payload);
    } catch (e) {
      // console.log("error:", e.response.data.errors);
      validationErrors.value = e.response.data.errors;
      data.value = e.response.data;
      errorMessage.value = e.message;
      responseStatus.value = e.response.status;
    }

    return res;
  }

  const isLoggedIn = computed(() => {
    if (token.value == null) {
      return false;
    }

    return true;
  });

  const isGuest = computed(() => {
    if (token.value == null) {
      return true;
    }

    return false;
  });

  return {
    errorMessage,
    responseStatus,
    validationErrors,
    data,
    token,
    isLoggedIn,
    isGuest,
    login,
    logout,
    register,
  };
});
