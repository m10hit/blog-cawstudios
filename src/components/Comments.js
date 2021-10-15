import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchComments } from '../redux/comment/commentAction';
const Comments = ({ postId }) => {
  const { loading, comments } = useSelector(state => state.comment);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments(postId));
  }, []);
  return loading ? (
    <p>Loading...</p>
  ) : (
    <>
      {comments.map(comment => (
        <div key={comment.id} className="comment-block">
          <p>{comment.body}</p>
          <p className="comment-email"> -by {comment.email} </p>
        </div>
      ))}
    </>
  );
};

export default Comments;
