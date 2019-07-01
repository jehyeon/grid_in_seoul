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
    values: propTypes.arrayOf(propTypes.number).isRequired,
  }

  handleGetValues = () => {
    const { getValues } = this.props;
    getValues({
      page: 0,
      period: 7,
    });
  }

  render() {
    const { mapID, mapData, values } = this.props;
    return (
      <div>
        <input type="button" value="Get" onClick={this.handleGetValues} />
        <br />
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
  values: state.values.values,
});

// modules/map/getMapData -> this.props
const mapDispatchProps = dispatch => ({
  getValues: options => dispatch(getValues(options)),
});

export default connect(
  mapStateToProps,
  mapDispatchProps,
)(MapContainer);
