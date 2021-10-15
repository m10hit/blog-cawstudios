import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchIndividualPost } from '../redux/individualPost/individualPostAction';
import Comments from './Comments';

const IndividualPost = props => {
  const [flag, setFlag] = useState(false);
  const { loading, post } = useSelector(state => state.individualPost);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = post.title;
    dispatch(fetchIndividualPost(props.match.params.id));
  }, []);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div className="post-body">
      <p>{post.body}</p>
      <button onClick={e => setFlag(prevState => !prevState)}>
        Show/Hide Comments
      </button>
      {flag && <Comments postId={post.id} />}
    </div>
  );
};

export default IndividualPost;
