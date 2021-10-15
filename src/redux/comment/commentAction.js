import {
  FETCH_COMMENT_REQUEST,
  FETCH_COMMENT_FAILURE,
  FETCH_COMMENT_SUCCESS,
} from './commentTypes';
import axios from 'axios';

const fetchCommentRequest = () => {
  return {
    type: FETCH_COMMENT_REQUEST,
  };
};

const fetchCommentSuccess = data => {
  return {
    type: FETCH_COMMENT_SUCCESS,
    payload: data,
  };
};

const fetchCommentFailure = error => {
  return {
    type: FETCH_COMMENT_FAILURE,
    payload: error,
  };
};

export const fetchComments = postId => async dispatch => {
  dispatch(fetchCommentRequest);
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
    dispatch(fetchCommentSuccess(data));
  } catch (err) {
    const errMsg = err.message;
    dispatch(fetchCommentFailure(errMsg));
  }
};
