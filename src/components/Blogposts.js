import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBlogs } from '../redux/blog/blogAction';
import { Link } from 'react-router-dom';

const Blogposts = props => {
  const [searchTerm, setSearchTerm] = useState('');
  const { blogs } = useSelector(state => state.blog);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  console.log(props);
  return (
    <>
      <input
        type="search"
        placeholder="Search..."
        onChange={e => setSearchTerm(e.target.value)}
      />
      {blogs
        .filter(blog => {
          if (searchTerm === '') {
            return blog;
          } else if (
            blog.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return blog;
          }
        })
        .map(blog => (
          <Link
            key={blog.id}
            to={{
              pathname: props.match.url + blog.id,
            }}
          >
            <div className="posts-block">
              <h3>{blog.title}</h3>
              <p>{blog.body}</p>
            </div>
          </Link>
        ))}
    </>
  );
};

export default Blogposts;
