import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PostCard from 'posts/ui/PostCard/PostCard';
import Paper from 'shared/components/Paper/Paper';
import Button from 'shared/components/Button/Button';
import './PostsList.scss';

const postsPerPage = 3;

const PostsList = ({ posts, postBeenFavvedId, handlePostClick }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [postsToShow, setPostsToShow] = useState([]);

  useEffect(() => {
    const prevPosts = posts.slice(0, currentPage*postsPerPage)
    const postsToShow = posts.slice(currentPage*postsPerPage, currentPage*postsPerPage + postsPerPage)
    const nextPosts = posts.slice(currentPage*postsPerPage + postsPerPage)
    setPostsToShow(postsToShow)
  }, [posts, currentPage])

  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const minPage = 0;
  const maxPage = Math.floor((posts && posts.length) / postsPerPage);

  return (
    posts.length > 0
      ? <React.Fragment>
          <div className='pagination'>
            <div className={`pagination__button pagination__button--prev ${currentPage === 0 ? 'pagination__button--disabled' : ''}`}>
              <Button
                onClick={() => setCurrentPage(currentPage - 1)}
                text='<<'/>
            </div>
            <div className='pagination__pages'>
              <p className='pages__number pages__number--prev'>{!(prevPage < minPage) && prevPage}</p>
              <p className='pages__number pages__number--current'>{currentPage}</p>
              <p className='pages__number pages__number--next'>{!(nextPage > maxPage) && nextPage}</p>
            </div>
            <div className={`pagination__button pagination__button--next ${currentPage === maxPage ? 'pagination__button--disabled' : ''}`}>
              <Button
                onClick={() => setCurrentPage(currentPage + 1)}
                text='>>'/>
            </div>    
          </div>
        <ul className='postsList'>
          {postsToShow.map((post) => {
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
          }
        </ul>
        </React.Fragment>
      : <p className='postsList__noPosts'>No hay posts para mostrar</p>
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