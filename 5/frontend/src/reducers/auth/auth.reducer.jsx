import {
  USER_FOUND,
  LOADING_USER,
  USER_SIGNED_OUT,
  LOAD_USER_ERROR,
  SET_TOKEN
} from "./auth.constant";

const initialState = {
  user: null,
  isLoadingUser: false,
  token: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_SIGNED_OUT:
      return Object.assign(
        {},
        { ...state },
        { user: null, isLoadingUser: false, token: null }
      );
    case LOAD_USER_ERROR:
      return Object.assign(
        {},
        { ...state },
        { user: null, isLoadingUser: false, token: null }
      );
    case USER_FOUND:
      return Object.assign(
        {},
        { ...state },
        { user: action.payload, isLoadingUser: false }
      );
    case LOADING_USER:
      return Object.assign({}, { ...state }, { isLoadingUser: true });
    case SET_TOKEN:
      return Object.assign({}, { ...state }, { token: action.payload });
    default:
      return state;
  }
}
