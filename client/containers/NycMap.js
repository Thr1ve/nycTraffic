import React from 'react';
import { connect } from 'react-redux';

import SVG from '../components/SVG';
import Street from '../components/Street';
import WaterOutline from '../components/WaterOutline';

const NycMap = ({ streetsVisible, waterVisible, streets }) =>
  <SVG>
    {waterVisible && <WaterOutline strokeWidth={0.3} />}
    {
      streetsVisible && streets.map((street, i) =>
        <Street
          key={i}
          streetName={street.get('name')}
          path={`M${street.get('svgCoords')}`}
          speed={street.getIn(['mostRecentUpdate', 'Speed'])}
          travelTime={street.getIn(['mostRecentUpdate', 'TravelTime'])}
        />
      )
    }
  </SVG>;

function mapStateToProps(state) {
  return {
    streetsVisible: state.displayed.get('streets'),
    waterVisible: state.displayed.get('water'),
    streets: state.streets.toList()
  };
}

export default connect(mapStateToProps)(NycMap);
