import { combineReducers } from "redux";
import guildReducer from "./guild.reducer";
import questionsReducer from "./questions.reducer";
import answersReducer from "./answer.reducer";

// @REFACTOR: GUILD -> OVERVIEW
const rootReducer = combineReducers({
  guild: guildReducer,
  questions: questionsReducer,
  answers: answersReducer
});

export default rootReducer;
