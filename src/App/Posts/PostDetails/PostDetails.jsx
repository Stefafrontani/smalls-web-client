import React from 'react';
import PropTypes from 'prop-types';
import './PostDetails.scss';

import Button from '../../../shared/components/Button/Button';
import FilledHeartIcon from '../../../shared/icons/filled-heart.png';
import EmptyHeartIcon from '../../../shared/icons/empty-heart.png';

const PostDetails = ({ title, author, text, timeSincePublished, isFav }) => {
  return (
    <div className='postDetails'>
      <header className='postDetails__header'>
        <p className='postDetails__date'>{timeSincePublished}</p>
        <Button text='Fav' icon={isFav ? FilledHeartIcon : EmptyHeartIcon}/>
      </header>
      <section className='postDetails__body'>
        <h1 className='postDetails__title'>{title}</h1>
        <h2 className='postDetails__author'><span>by: </span>{author}</h2>
        <p className='postDetails__text'>{text}</p>
      </section>
    </div>
  )
}

PostDetails.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  text: PropTypes.string,
  timeSincePublished: PropTypes.string,
  isFav: PropTypes.bool
}

PostDetails.defaultProps = {
  title: 'Título del post',
  author: 'Autor del post',
  text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda consequatur perspiciatis, odio ullam aspernatur illo enim ex aperiam fugit itaque voluptas beatae, perferendis reiciendis amet voluptatibus maxime, laudantium labore quaerat',
  timeSincePublished: 'Published 3 hours ago',
  isFav: false
}

export default PostDetails;