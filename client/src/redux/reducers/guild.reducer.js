import { SUCCESS_GUILDS } from "../types";

const initialState = {
  guilds: []
};

const guildReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_GUILDS:
      return {
        ...state,
        guilds: action.payload.data
      };

    default:
      return state;
  }
};

export default guildReducer;
