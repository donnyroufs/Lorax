import {
  ERROR,
  SUCCESS_RESULTS,
  GET_RESULTS,
  SET_QUERY,
  NO_RESULTS,
  CLEAR_STATE
} from "../types";

const initialState = {
  query: "",
  questions: [],
  answers: [],
  user: null,
  loading: false,
  error: false
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };

    case NO_RESULTS:
      return {
        ...state,
        loading: false
      };

    case SET_QUERY:
      return {
        ...state,
        query: action.payload.query,
        loading: false
      };

    case GET_RESULTS:
      return {
        ...state,
        loading: true
      };

    case SUCCESS_RESULTS:
      return {
        ...state,
        questions: action.payload.data.map(question => {
          return {
            ...question,
            User: {
              id: question.id,
              username: question.username,
              avatar: question.avatar
            }
          };
        }),
        answers: action.payload.data.map(question => {
          return {
            id: question.QuestionId,
            data: question.Answers
          };
        }),
        loading: false
      };

    case CLEAR_STATE:
      return {
        ...initialState
      };

    default:
      return state;
  }
};

export default searchReducer;
