import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const FavButton = ({ text, icon, onClick }) => {
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
    <button onClick={onClick} className='button'>
      {textElement}
      {iconElement}
    </button>
  );
}

FavButton.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func
}

FavButton.defaultProps = {
  text: '',
  icon: '',
  onClick: () => {}
}

export default FavButton;