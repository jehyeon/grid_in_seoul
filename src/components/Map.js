import React from 'react';
import propTypes from 'prop-types';

const Block = ({ name, id }) => (
  <div className="block" id={id.toString()} name={name}>
    { name }
  </div>
);

const BlockBox = ({ mapID, mapData }) => (
  <div>
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
