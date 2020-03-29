import { combineReducers } from "redux";
import guildReducer from "./guild.reducer";

const rootReducer = combineReducers({
  guild: guildReducer
});

export default rootReducer;
