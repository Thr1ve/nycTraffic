import chroma from 'chroma-js';

export const green = '#27C93F';
export const yellow = '#FFBD2E';
export const red = '#FF5F56';
export const blue = '#50E3C2';

const speedScale = chroma.scale([green, yellow, red]).domain([1, 10]);

export const getSpeedColor = n => speedScale(n).hex();
