import React from 'react';
import PropTypes from 'prop-types';
import './PostDetails.scss';
import FilledHeartIcon from 'shared/icons/filled-heart.png';
import EmptyHeartIcon from 'shared/icons/empty-heart.png';
import { getTimePassedFromDate } from 'shared/utils/dates';

const PostDetails = ({ post }) => {
  const { id, title, author, body, createdUtc, isFav } = post; 

  const { formatTimePassed } = getTimePassedFromDate(createdUtc);

  return (
    <div className='postDetails'>
      <header className='postDetails__header'>
        <p className='postDetails__date'>{formatTimePassed}</p>
        <div className='postDetails__imgContainer'>
          <img src={isFav ? FilledHeartIcon : EmptyHeartIcon}/>
        </div>
      </header>
      <section className='postDetails__body'>
        <h1 className='postDetails__title'>{title}</h1>
        <h2 className='postDetails__author'><span>by: </span>{author}</h2>
        <p className='postDetails__text' dangerouslySetInnerHTML={{ __html: body }}></p>
      </section>
    </div>
  )
}


PostDetails.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    author: PropTypes.string,
    numComments: PropTypes.number,
    createdUtc: PropTypes.number,
    image: PropTypes.string,
    isFav: PropTypes.bool
  })
}

export default PostDetails;