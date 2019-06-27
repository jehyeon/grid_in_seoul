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
  }

  handleGetValues = () => {
    const { getValues } = this.props;
    console.log(getValues());
  }

  render() {
    const { mapID, mapData } = this.props;
    console.log(this.handleGetValues);
    return (
      <div>
        <input type="button" onClick={this.forcheck} />
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
  getValues: () => dispatch(getValues()),
});

export default connect(
  mapStateToProps,
  mapDispatchProps,
)(MapContainer);
