import { combineReducers } from "redux";
import postReducer from "./postReducer";

const blogApp = combineReducers({
  posts: postReducer,
});

export default blogApp;
