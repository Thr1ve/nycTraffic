import React, { PropTypes } from 'react';
import { getTravelTimeColor } from '../lib';

const Street = ({ path, travelTime, streetName }) =>
  <path
    id={streetName}
    d={path}
    fill="none"
    strokeWidth={0.4}
    stroke={getTravelTimeColor(travelTime)}
  />;

Street.propTypes = {
  path: PropTypes.string.isRequired,
  travelTime: PropTypes.number.isRequired
};

export default Street;
