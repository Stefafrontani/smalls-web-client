import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { postsStore } from 'posts/store';
import Button from 'shared/components/Button/Button';
import LikeIcon from 'shared/icons/like.png';
import FilledHeartIcon from 'shared/icons/filled-heart.png';
import EmptyHeartIcon from 'shared/icons/empty-heart.png';
import CommentIcon from 'shared/icons/comment.png';
import TrashcanIcon from 'shared/icons/trashcan.png';
import { getTimePassedFromDate } from 'shared/utils/dates';
import { translateObject } from 'shared/utils/translations';
import './PostCard.scss';


const PostCard = ({ post, handlePostClick, postBeenFavvedId }) => {
  const { id, title, author, numComments, createdUtc, hasImage, isFav } = post || {};
  const [isRead, setIsRead] = useState()

  const onPostClick = () => {
    handlePostClick(post)
    setIsRead(true)
  }

  const handleAddFav = (event) => {
    event.stopPropagation();
    const translatedObject = translateObject(post, 'toBE');
    postsStore.addToFavs(translatedObject);
  }
  
  const handleRemoveFav = (event) => {
    event.stopPropagation();
    postsStore.removeFromFavs(post.id);
  }

  const handleDismissPost = (event) => {
    event.stopPropagation();
    handlePostClick({})
    postsStore.dismissPost(post.id)
  }

  const { formatTimePassed } = getTimePassedFromDate(createdUtc);

  return (
    <article data-postid={id} onClick={onPostClick} className={`postCard ${isRead ? 'postCard--read' : ''}`}>
      <div className='readReminder'><p className='readReminder__text'>READ</p></div>
      <header className='postCard__header'>
        <p className='postCard__date'>{formatTimePassed}</p>
        <Button
          onClick={isFav ? handleRemoveFav : handleAddFav}
          text={postBeenFavvedId === id ? 'Updating...' : ''}
          icon={isFav ? FilledHeartIcon : EmptyHeartIcon}
        />
      </header>
      <section className='postCard__body'>
        <div className='postCard__likeImgContainer'>
          <img className={`postCard__img ${hasImage ? null : 'postCard__img--no-like'}`} src={LikeIcon}/>
        </div>
        <div>
          <p className='postCard__title'>{title}</p>
          <p className='postCard__subtitle'>{author}</p>
        </div>
      </section>
      <footer className="postCard__footer">
        <div className='postCard__comments'>
        <span>({numComments})</span>
          <div className='postCard__commentImgContainer'>
            <img src={CommentIcon}/>
          </div>
        </div>
        <Button onClick={handleDismissPost} icon={TrashcanIcon}/>
      </footer>
    </article>
  )
}

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    author: PropTypes.string,
    numComments: PropTypes.number,
    createdUtc: PropTypes.number,
    image: PropTypes.string,
    isFav: PropTypes.bool
  }),
  handlePostClick: PropTypes.func,
  postBeenFavvedId: PropTypes.string
}


export default PostCard;