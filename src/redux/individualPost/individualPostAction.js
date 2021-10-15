import {
  FETCH_INDIVIDUAL_POST_REQUEST,
  FETCH_INDIVIDUAL_POST_FAILURE,
  FETCH_INDIVIDUAL_POST_SUCCESS,
} from './individualPostTypes';
import axios from 'axios';

const fetchIndividualPostRequest = () => {
  return {
    type: FETCH_INDIVIDUAL_POST_REQUEST,
  };
};

const fetchIndividualPostSuccess = data => {
  return {
    type: FETCH_INDIVIDUAL_POST_SUCCESS,
    payload: data,
  };
};

const fetchIndividualPostFailure = error => {
  return {
    type: FETCH_INDIVIDUAL_POST_FAILURE,
    payload: error,
  };
};

export const fetchIndividualPost = userId => async dispatch => {
  dispatch(fetchIndividualPostRequest);
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${userId}`
    );
    dispatch(fetchIndividualPostSuccess(data));
  } catch (err) {
    const errMsg = err.message;
    dispatch(fetchIndividualPostFailure(errMsg));
  }
};
