import React from 'react';
import './PostsList.scss';
import PostCard from '../PostCard/PostCard';
import Paper from '../../../shared/components/Paper/Paper';

const PostsList = () => {
  return (
    <ul className='postsList'>
      <li className='postsList__post'>
        <Paper>
          <PostCard id={1}/>
        </Paper>
      </li>
      <li className='postsList__post'>
        <Paper>
          <PostCard id={2}/>
        </Paper>
      </li>
      <li className='postsList__post'>
        <Paper>
          <PostCard id={3}/>
        </Paper>
      </li>
    </ul>
  )
}

export default PostsList;