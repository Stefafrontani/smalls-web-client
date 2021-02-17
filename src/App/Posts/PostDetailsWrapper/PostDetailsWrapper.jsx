import React from 'react';
import PropTypes from 'prop-types';
import './PostDetailsWrapper.scss';
import PostDetails from '../PostDetails/PostDetails';


const PostDetailsWrapper = ({ postId }) => {
  const posts = [{ id: 1 }]
  const post = posts.find(post => post.id === postId);

  return (
    <div className='postDetails'>
      {
        post
        ? <PostDetails
            id={post.id}
            title={post.title}
            author={post.author}
            timeSincePublished={post.timeSincePublished}
            isFav={post.isFav}
          />
        : null
      }
    </div>
  )
}

PostDetailsWrapper.propTypes = {
  postId: PropTypes.number,
}

PostDetailsWrapper.defaultProps = {
  postId: 0
}

export default PostDetails;