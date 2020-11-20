import { combineReducers } from "redux";
//import {posts} from './posts'
import { postsReducer } from "./posts"; //cambie esto al empezar la parte 2

export default combineReducers({
  posts: postsReducer,
});
