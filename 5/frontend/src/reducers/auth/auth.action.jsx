import {
  USER_FOUND,
  LOADING_USER,
  USER_SIGNED_OUT,
  LOAD_USER_ERROR,
  SET_TOKEN
} from "./auth.constant";

export function userFound(user) {
  return {
    type: USER_FOUND,
    payload: user
  };
}

export function loadingUser() {
  return {
    type: LOADING_USER
  };
}

export function userSignedOut() {
  return {
    type: USER_SIGNED_OUT
  };
}

export function loadUserError() {
  return {
    type: LOAD_USER_ERROR
  };
}

export function setToken(token) {
  return {
    type: SET_TOKEN,
    payload: token
  };
}
