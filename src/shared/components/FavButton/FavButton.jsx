import React from 'react';
import PropTypes from 'prop-types';
import './FavButton.scss';
import Paper from '../../components/Paper/Paper';
import emptyHeartIcon from '../../icons/empty-heart.png';
import filledHeartIcon from '../../icons/filled-heart.png';

const FavButton = ({ isFav, elevation }) => {
  return (
    <Paper elevation={elevation}>
      <button className='button button--fav'>
        <span className='text'>Fav</span>
        <div className="imgContainer">
          <img src={isFav ? filledHeartIcon : emptyHeartIcon}/>
        </div>
      </button>
    </Paper>
  );
}

FavButton.propTypes = {
  isFav: PropTypes.bool,
  elevation: PropTypes.number,
}

FavButton.defaultProps = {
  isFav: false,
  elevation: 0,
}

export default FavButton;