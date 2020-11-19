import {combineReducers} from 'redux';
//import {posts} from './posts'
import {postsReducer} from '../reducers/posts'


export default combineReducers ({
    posts: postsReducer,
});