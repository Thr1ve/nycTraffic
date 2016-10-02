import React from 'react';
import { connect } from 'react-redux';

import { getSpeedColor } from '../lib/color.js'

import SVG from '../components/SVG';
import Street from '../components/Street';
import WaterOutline from '../components/WaterOutline';

//                  Y           X
// Top:         40.92
// Bottom:      40.49
// Left:                   -74.26
// Right:                  -73.69

// Height:      0.43
// Length:                  0.57

const Map = React.createClass({
  render() {
    const { displayed: { water, streets }, paths } = this.props;
    console.log(this.props);
    console.log(getSpeedColor(3.3));
    return (
      <SVG>
        {streets && paths.paths.map((path, i) => <Street key={i} path={`M${path}`} />)}
        {water && <WaterOutline strokeWidth={0.3} stroke="#50E3C2"/>}
      </SVG>
    );
  }
});

function mapStateToProps(state) {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(Map);
