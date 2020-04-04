import { ERROR, SUCCESS_ANSWERS, GET_ANSWERS } from "../types";

const initialState = {
  questions: [],
  answers: [],
  loading: true,
  error: false,
};

const answerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case GET_ANSWERS:
      return {
        ...state,
        loading: true,
      };

    // @REFACTOR: DO THIS IN THE ACTION!!
    case SUCCESS_ANSWERS:
      console.log(action.payload.data);
      return {
        ...state,
        questions: action.payload.data.map((q, index) => {
          return {
            ...q,
          };
        }),
        answers: action.payload.data.map((q) => {
          return {
            id: q.id,
            data: q.Answers,
          };
        }),
        loading: false,
      };

    default:
      return state;
  }
};

export default answerReducer;
