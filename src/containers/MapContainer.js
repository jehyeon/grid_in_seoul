import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import BlockBox from '../components/Map';
import { getValues } from '../store/modules/values';

class MapContainer extends Component {
  static propTypes = {
    getValues: propTypes.func.isRequired,
    mapID: propTypes.arrayOf(propTypes.string).isRequired,
    mapData: propTypes.arrayOf(propTypes.arrayOf(propTypes.number)).isRequired,
    // Options for get house value
    page: propTypes.number.isRequired,
    period: propTypes.number.isRequired,
    // values: propTypes.arrayOf(propTypes.number).isRequired,
  }

  handleGetValues = (options) => {
    const { getValues } = this.props;
    getValues(options);
  }

  render() {
    const {
      mapID, mapData, page, period,
    } = this.props;
    const values = this.handleGetValues({ page, period });
    return (
      <div>
        {/* <input type="button" value="Get" onClick={this.handleGetValues} /> */}
        { values }
        <BlockBox
          mapID={mapID}
          mapData={mapData}
        />
      </div>
    );
  }
}

// modules/map/store -> this.props
const mapStateToProps = state => ({
  mapID: state.map.mapID,
  mapData: state.map.mapData,
  page: state.pages.cursor,
  period: state.period.cursor,
  // values: state.values.values,
});

// modules/map/getMapData -> this.props
const mapDispatchProps = dispatch => ({
  getValues: options => dispatch(getValues(options)),
});

export default connect(
  mapStateToProps,
  mapDispatchProps,
)(MapContainer);
