import axios from "axios";
import store from "../store";
import { LOGOUT } from "../actions/types";
import { setAlert } from "../actions/alert";

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});
/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired or user is no longer
 authenticated.
 logout the user if the token has expired
**/

api.interceptors.response.use(
  (res) => res,
  (err) => {
    console.log("API interceptors Error Status = ", err.response.status);
    console.log("API interceptors Error_1 = ", err.response.statusText);

    if (err.response.status === 401) {
      store.dispatch({ type: LOGOUT });
    } else if (err.response.status === 500) {
      console.log("API interceptors Error_2 = ", err.response.statusText);
      store.dispatch(setAlert(err.response.statusText, "danger"));
    }
    return Promise.reject(err);
  }
);

export default api;
