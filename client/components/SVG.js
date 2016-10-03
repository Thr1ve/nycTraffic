import React from 'react';

const style = { backgroundColor: '#000' };

const SVG = ({ children }) =>
  <svg
    viewBox="0 0 100 90"
    height={window.innerHeight} width={window.innerWidth}
    style={style}
  >
    {children}
  </svg>;

export default SVG;
