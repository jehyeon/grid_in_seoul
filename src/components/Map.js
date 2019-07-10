import React from 'react';
import propTypes from 'prop-types';
import './Map.css';

// Functions
function getColor(values, item) {
  if (values) {
    const average = values.reduce((a, b) => a + b, 0) / (values.length - 1);
    const css = {};

    if (values[item] > average) {
      const green = 255 - (values[item] - average) * 255 / (0.5 * average);
      css.background = `rgb(255,${parseInt(green, 10)},0)`;
    } else if (values[item] < average) {
      const red = 255 - (average - values[item]) * 255 / (0.5 * average);
      css.background = `rgb(${parseInt(red, 10)},255,0)`;
    } else css.background = 'rgb(255,255,0)';

    return css;
  }
  return {};
}

const Block = ({
  name, id, value, backgroundColor,
}) => (
  <div style={backgroundColor} className="block" id={id.toString()} name={name} value={value} />
);

const BlockBox = ({ mapID, mapData, values }) => (
  <div className="blockBox">
    {mapData.map(line => (
      line.map(item => (
        <Block
          id={item}
          name={mapID[item]}
          value={values[item]}
          backgroundColor={getColor(values, item)}
        />
      ))
    ))}
  </div>
);

Block.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
  value: propTypes.number.isRequired,
  backgroundColor: propTypes.objectOf(propTypes.string).isRequired,
};

BlockBox.propTypes = {
  mapID: propTypes.arrayOf(propTypes.string).isRequired,
  mapData: propTypes.arrayOf(propTypes.arrayOf(propTypes.number)).isRequired,
  values: propTypes.arrayOf(propTypes.arrayOf(propTypes.number)).isRequired,
};

export default BlockBox;
