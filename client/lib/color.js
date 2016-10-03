import chroma from 'chroma-js';

export const green = '#27C93F';
export const yellow = '#FFBD2E';
export const red = '#FF5F56';
export const blue = '#50E3C2';

const travelTimeScale = chroma.scale([red, yellow, green]).domain([10, 1000]);

export const getTravelTimeColor = n => travelTimeScale(n).hex();
