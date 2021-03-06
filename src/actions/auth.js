import api from "../utils/api";
import { setAlert } from "../actions/alert";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  IN_PROGRESS,
} from "./types";

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get("/auth");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register = (formData) => async (dispatch) => {
  try {
    const res = await api.post("/users", formData);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login User
export const login = (email, password) => async (dispatch) => {
  const body = { email, password };

  dispatch({ type: IN_PROGRESS });

  try {
    const newLocal = await api.post("/auth", body);
    const res = newLocal;

    setTimeout(() => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    }, 2000);

    setTimeout(() => {
      dispatch(loadUser());
    }, 2000);
  } catch (err) {
    // if (err.response.status != 500) {
    console.log("Actions Auth err = ", err.response.data.errors);
    const errors = err.response.data.errors;
    console.log("Actions Auth errors = ", errors);
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    // }
    setTimeout(() => {
      dispatch({
        type: LOGIN_FAIL,
      });
    }, 2000);
  }
};

// Logout
export const logout = () => ({ type: LOGOUT });
