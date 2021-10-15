import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBlogs } from '../redux/blog/blogAction';
const Blogposts = ({ posts }) => {
  const { blogs } = useSelector(state => state.blog);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);
  return (
    <>
      {blogs.map(blog => (
        <div key={blog.id} className="posts-block">
          <h3>{blog.title}</h3>
          <p>{blog.body}</p>
        </div>
      ))}
    </>
  );
};

export default Blogposts;
