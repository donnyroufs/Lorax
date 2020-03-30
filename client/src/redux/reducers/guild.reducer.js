import { SUCCESS_GUILDS, SUCCESS_GUILD, GET_GUILD, ERROR } from "../types";

const initialState = {
  guilds: [],
  questions: [],
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

    case SUCCESS_GUILD:
      return {
        ...state,
        questions: action.payload.data.Questions,
        loading: false
      };

    default:
      return state;
  }
};

export default guildReducer;
