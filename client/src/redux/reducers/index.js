import { combineReducers } from "redux";
import guildReducer from "./guild.reducer";
import questionsReducer from "./questions.reducer";
import answersReducer from "./answer.reducer";
import searchReducer from "./search.reducer";
import authReducer from "./auth.reducer";
import profileReducer from "./profile.reducer";

// @REFACTOR: GUILD -> OVERVIEW
const rootReducer = combineReducers({
  guild: guildReducer,
  questions: questionsReducer,
  answers: answersReducer,
  search: searchReducer,
  auth: authReducer,
  profile: profileReducer,
});

export default rootReducer;
