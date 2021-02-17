import React from 'react';
import PropTypes from 'prop-types';
import './Paper.scss';

const Paper = ({ elevation, children }) => {
  return (
    <div className={`elevation--${elevation}`}>
      {children}
    </div>
  );
}

Paper.propTypes = {
  elevation: PropTypes.number,
  children: PropTypes.object.isRequired,
}

Paper.defaultProps = {
  elevation: 2,
  children: {},
}

export default Paper;