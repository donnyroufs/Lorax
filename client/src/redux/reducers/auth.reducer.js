import { SUCCESS_PROFILE, ERROR, LOGGED_OUT } from "../types";

const initialState = {
  isAuthenticated: false,
  userId: null,
  avatar: null,
  username: null,
  loading: true,
  error: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_PROFILE:
      return {
        userId: action.payload.id,
        avatar: action.payload.avatar,
        username: action.payload.username,
        isAuthenticated: true,
      };

    case ERROR:
      return {
        ...initialState,
        loading: false,
      };

    case LOGGED_OUT:
      return {
        ...initialState,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
