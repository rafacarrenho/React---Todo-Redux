import { combineReducers } from "redux";
import todoReducers from "./reducers/todo";

const reducers = combineReducers({
  todo: todoReducers,
});

export default reducers;
