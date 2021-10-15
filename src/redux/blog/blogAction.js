import {
  FETCH_BLOGS_REQUEST,
  FETCH_BLOGS_FAILURE,
  FETCH_BLOGS_SUCCESS,
} from './blogTypes';
import axios from 'axios';

const fetchBlogRequest = () => {
  return {
    type: FETCH_BLOGS_REQUEST,
  };
};

const fetchBlogSuccess = data => {
  return {
    type: FETCH_BLOGS_SUCCESS,
    payload: data,
  };
};

const fetchBlogFailure = error => {
  return {
    type: FETCH_BLOGS_FAILURE,
    payload: error,
  };
};

export const fetchBlogs = () => async dispatch => {
  dispatch(fetchBlogRequest);
  try {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    dispatch(fetchBlogSuccess(data));
  } catch (err) {
    const errMsg = err.message;
    dispatch(fetchBlogFailure(errMsg));
  }
};
