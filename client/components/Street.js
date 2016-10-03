import React, { PropTypes } from 'react';
import { getTravelTimeColor } from '../lib'

const Street = ({ path, travelTime }) =>
  <path
    d={path}
    fill="none"
    strokeWidth={0.3}
    stroke={getTravelTimeColor(travelTime)}
  />;

Street.propTypes = {
  path: PropTypes.string.isRequired
};

export default Street;
