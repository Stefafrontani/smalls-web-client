import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const FavButton = ({ text, icon }) => {
  let ret, textElement, iconElement;
  
  if (icon) {
    iconElement = <div className="imgContainer">
      <img src={icon}/>
    </div>
  }
  if (text) {
    textElement = <span className='text'>{text}</span>
  }

  return (
    <button className='button'>
      {textElement}
      {iconElement}
    </button>
  );
}

FavButton.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
}

FavButton.defaultProps = {
  text: '',
  icon: '',
}

export default FavButton;