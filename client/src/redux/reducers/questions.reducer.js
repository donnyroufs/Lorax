import { ERROR, SUCCESS_QUESTIONS, GET_QUESTIONS } from "../types";

const initialState = {
  data: [],
  loading: true,
  error: false
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };

    case GET_QUESTIONS:
      return {
        ...state,
        loading: true
      };

    case SUCCESS_QUESTIONS:
      return {
        ...state,
        data: action.payload.data,
        loading: false
      };

    default:
      return state;
  }
};

export default questionReducer;
