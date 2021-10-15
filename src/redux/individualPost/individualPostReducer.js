import {
  FETCH_INDIVIDUAL_POST_REQUEST,
  FETCH_INDIVIDUAL_POST_FAILURE,
  FETCH_INDIVIDUAL_POST_SUCCESS,
} from './individualPostTypes';

const initialState = {
  loading: false,
  post: {},
  error: '',
};

const individualPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INDIVIDUAL_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_INDIVIDUAL_POST_SUCCESS:
      return {
        loading: false,
        post: action.payload,
        error: '',
      };
    case FETCH_INDIVIDUAL_POST_FAILURE:
      return {
        loading: false,
        post: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default individualPostReducer;
