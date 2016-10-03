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
    const { streetsVisible, waterVisible, paths } = this.props;
    return (
      <SVG>
        {streetsVisible && paths.map((path, i) => <Street key={i} path={`M${path}`} />)}
        {waterVisible && <WaterOutline strokeWidth={0.3} stroke="#50E3C2"/>}
      </SVG>
    );
  }
});

function mapStateToProps(state) {
  return {
    streetsVisible: state.displayed.get('streets'),
    waterVisible: state.displayed.get('water'),
    paths: state.streets.get('paths')
  }
}

export default connect(mapStateToProps)(Map);
