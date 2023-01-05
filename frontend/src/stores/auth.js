import { defineStore } from "pinia";
import { computed, ref } from "vue";
import axios from "axios";

export const useAuthStore = defineStore("auth", () => {
<<<<<<< Updated upstream
  // axios.defaults.baseURL = "http://127.0.0.1:3333/";

  const tokenName = "stoken";
  const errorMessage = ref("");
  const responseStatus = ref(0);
  const data = ref("");
  const validationErrors = ref(null);
  const token = ref(localStorage.getItem(tokenName) || null);

  async function login(payload) {
    errorMessage.value = "";
    data.value = "";
=======
  axios.defaults.baseURL = "http://127.0.0.1:3333/";

  const errorMessage = ref("");
  const responseStatus = ref(0);
  const data = ref("");
  const token = ref(null);

  async function login(payload) {
>>>>>>> Stashed changes
    let res;
    try {
      res = await axios.post("login", payload);
      token.value = res.data.token;
<<<<<<< Updated upstream
      localStorage.setItem(tokenName, res.data.token);
=======
>>>>>>> Stashed changes
    } catch (e) {
      errorMessage.value = e.message;
      if (e.response) {
        data.value = e.response.data;
        responseStatus.value = e.response.status;
      }
    }

    return res;
  }

  async function logout() {
    errorMessage.value = "";
    let res;
    try {
      token.value = null;
<<<<<<< Updated upstream
      localStorage.removeItem(tokenName);
=======
>>>>>>> Stashed changes
      res = await axios.post("logout");
    } catch (e) {
      errorMessage.value = e.message;
      responseStatus.value = e.response.status;
    }

    return res;
  }

<<<<<<< Updated upstream
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

=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    validationErrors,
=======
>>>>>>> Stashed changes
    data,
    token,
    isLoggedIn,
    isGuest,
    login,
    logout,
<<<<<<< Updated upstream
    register,
=======
>>>>>>> Stashed changes
  };
});
