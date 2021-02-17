import React from 'react';
import { useHistory } from "react-router-dom"
import './PostCard.scss';
import Button from '../../../shared/components/Button/Button';
import LikeIcon from '../../../shared/icons/like.png';
import FilledHeartIcon from '../../../shared/icons/filled-heart.png';
import EmptyHeartIcon from '../../../shared/icons/empty-heart.png';
import CommentIcon from '../../../shared/icons/comment.png';
import TrashcanIcon from '../../../shared/icons/trashcan.png';

const PostCard = ({ id, image, isFav }) => {
  const history = useHistory();
  
  const onPostClick = ({ currentTarget }) => {
    const { dataset } = currentTarget;
    const { postid } = dataset;
    const searchParams = `?postId=${postid}`;
    history.push({ search: searchParams });
  }

  return (
    <article data-postid={id} onClick={onPostClick} className='postCard'>
      <header className='postCard__header'>
        <p className='postCard__date'>Published 3 hours ago</p>
          <Button
            text='Fav'
            icon={isFav ? FilledHeartIcon : EmptyHeartIcon}
          />
      </header>
      <section className='postCard__body'>
        <div className='postCard__likeImgContainer'>
          <img className={`postCard__img ${image ? null : 'postCard__img--no-like'}`} src={LikeIcon}/>
        </div>
        <div>
          <p className='postCard__title'>title</p>
          <p className='postCard__subtitle'>author</p>
        </div>
      </section>
      <footer className="postCard__footer">
        <div className='postCard__comments'>
          <span>(3)</span>
          <div className='postCard__commentImgContainer'>
            <img src={CommentIcon}/>
          </div>
        </div>
        <Button icon={TrashcanIcon}/>
      </footer>
    </article>
  )
}



export default PostCard;