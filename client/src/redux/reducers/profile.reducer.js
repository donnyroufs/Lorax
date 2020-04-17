import { ERROR, SUCCESS_QUESTIONS, GET_QUESTIONS } from "../types";

const initialState = {
  data: [],
  loading: true,
  error: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case GET_QUESTIONS:
      return {
        ...state,
        loading: true,
      };

    case SUCCESS_QUESTIONS:
      console.log(action.payload);
      return {
        ...state,
        data: action.payload.data.Questions,
        loading: false,
      };

    default:
      return state;
  }
};

export default profileReducer;
