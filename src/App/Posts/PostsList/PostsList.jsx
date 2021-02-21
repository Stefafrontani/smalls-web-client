import React from 'react';
import PropTypes from 'prop-types';
import PostCard from '../PostCard/PostCard';
import Paper from '../../../shared/components/Paper/Paper';
import './PostsList.scss';

const PostsList = ({ posts, postBeenFavvedId, handlePostClick }) => {
  return (
    <ul className='postsList'>
        {posts.length > 0
            ? posts.map((post) => {
              return (
                <li key={post.id} className='postsList__post'>
                  <Paper>
                    <PostCard
                      post={post}
                      postBeenFavvedId={postBeenFavvedId}
                      handlePostClick={handlePostClick}
                    />
                  </Paper>
                </li>
              )
            })
          : <p className='postsList__noPosts'>No hay posts para mostrar</p>
        }
    </ul>
  )
};

PostsList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string,
      author: PropTypes.string,
      numComments: PropTypes.number,
      createdUtc: PropTypes.number,
      image: PropTypes.string,
      isFav: PropTypes.bool,
    })
  ),
  postBeenFavvedId: PropTypes.string,
  handlePostClick: PropTypes.func
}

export default PostsList;