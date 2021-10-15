import { combineReducers } from 'redux';
import blogReducer from './blog/blogReducer';
import individualPostReducer from './individualPost/individualPostReducer';
import commentReducer from './comment/commentReducer';
const rootReducer = combineReducers({
  blog: blogReducer,
  individualPost: individualPostReducer,
  comment: commentReducer,
});

export default rootReducer;
