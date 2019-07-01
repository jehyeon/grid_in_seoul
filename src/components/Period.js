import React from 'react';
import propTypes from 'prop-types';

const PeriodButton = ({ activate, onClick, name }) => (
  <input
    type="button"
    activate={`${activate}`}
    onClick={onClick}
    name={name}
    value={name}
  />
);

const Period = ({
  // onNext, onPrevious,
  period, cursor, onSelect,
}) => (
  <div className="period">
    {/* <input type="button" className="previous" value="<<" onClick={onPrevious} /> */}
    {/* index is not good */}
    {period.map((peach, index) => (
      <PeriodButton
        activate={cursor === index}
        onClick={() => onSelect(index)}
        name={peach}
        key={peach.toString()}
      />
    ))}
    {/* <input type="button" className="next" value=">>" onClick={onNext} /> */}
  </div>
);

PeriodButton.defaultProps = {
  activate: false,
};

PeriodButton.propTypes = {
  activate: propTypes.bool,
  onClick: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
};

Period.propTypes = {
  cursor: propTypes.number.isRequired,
  period: propTypes.arrayOf(propTypes.string).isRequired,
  // onNext: propTypes.func.isRequired,
  // onPrevious: propTypes.func.isRequired,
  onSelect: propTypes.func.isRequired,
};

export default Period;
