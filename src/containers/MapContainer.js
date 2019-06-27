import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import BlockBox from '../components/Map';
import { getMapData } from '../store/modules/map';

class MapContainer extends Component {
  static propTypes = {
    getMapData: propTypes.func.isRequired,
    mapID: propTypes.arrayOf(propTypes.string).isRequired,
    mapData: propTypes.arrayOf(propTypes.arrayOf(propTypes.number)).isRequired,
  }

  handleGetMapData = () => {
    const { getMapData } = this.props;
    console.log(getMapData());
  }

  render() {
    const { mapID, mapData } = this.props;
    return (
      <div>
        <input type="button" onClick={this.handleGetMapData} />
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
});

// modules/map/getMapData -> this.props
const mapDispatchProps = dispatch => ({
  getMapData: () => dispatch(getMapData()),
});

export default connect(
  mapStateToProps,
  mapDispatchProps,
)(MapContainer);
