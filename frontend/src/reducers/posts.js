import { FETCH_ALL, CREATE } from '../constants/actionTypes';


export const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return posts;
    default:
      return posts;
  }
}
 