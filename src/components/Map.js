import React from 'react';
import propTypes from 'prop-types';
import './Map.css';

const Block = ({ name, id, value }) => (
  <div className="block" id={id.toString()} name={name} value={value} />
);

const BlockBox = ({ mapID, mapData, values }) => (
  <div className="blockBox">
    {mapData.map(line => (
      line.map(item => (
        <Block
          id={item}
          name={mapID[item]}
          value={values[item]}
        />
      ))
    ))}
  </div>
);

Block.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
  value: propTypes.number.isRequired,
};

BlockBox.propTypes = {
  mapID: propTypes.arrayOf(propTypes.string).isRequired,
  mapData: propTypes.arrayOf(propTypes.arrayOf(propTypes.number)).isRequired,
  values: propTypes.arrayOf(propTypes.arrayOf(propTypes.number)).isRequired,
};

export default BlockBox;
