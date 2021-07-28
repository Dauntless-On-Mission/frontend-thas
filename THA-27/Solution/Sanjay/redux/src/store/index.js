import { combineReducers } from "redux";
import todoReducer from "./todos";
import userReducer from "./users";

const rootReducer = combineReducers({
  todos: todoReducer,
  user: userReducer
});

export default rootReducer;
