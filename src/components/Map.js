import React from 'react';
import propTypes from 'prop-types';
import './Map.css';

const Block = ({ name, id }) => (
  <div className="block" id={id.toString()} name={name} />
);

const BlockBox = ({ mapID, mapData }) => (
  <div className="blockBox">
    {mapData.map(line => (
      line.map(item => (
        <Block
          id={item}
          name={mapID[item]}
        />
      ))
    ))}
  </div>
);

Block.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
};

BlockBox.propTypes = {
  mapID: propTypes.arrayOf(propTypes.string).isRequired,
  mapData: propTypes.arrayOf(propTypes.arrayOf(propTypes.number)).isRequired,
};

export default BlockBox;
