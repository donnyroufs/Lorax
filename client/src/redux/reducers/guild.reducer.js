import {
  SUCCESS_GUILDS,
  SUCCESS_GUILD,
  GET_GUILD,
  ERROR,
  CLEAR_STATE
} from "../types";

const initialState = {
  id: null,
  guilds: [],
  questions: [],
  answers: [],
  loading: true,
  error: false
};

const guildReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };

    case GET_GUILD:
      return {
        ...state,
        loading: true
      };

    case SUCCESS_GUILDS:
      return {
        ...state,
        guilds: action.payload.data,
        loading: false
      };

    // @REFACTOR: DO THIS IN THE ACTION!!
    case SUCCESS_GUILD:
      return {
        ...state,
        id: action.payload.data.id,
        questions: action.payload.data.Questions,
        answers: action.payload.data.Questions.filter(
          q => q.Answers.length >= 1
        ).map(question => {
          return {
            id: question.id,
            data: question.Answers
          };
        }),
        loading: false
      };

    case CLEAR_STATE:
      return {
        ...state,
        id: null
      };

    default:
      return state;
  }
};

export default guildReducer;
