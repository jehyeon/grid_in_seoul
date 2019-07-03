import React from 'react';
import propTypes from 'prop-types';
import './Period.css';

const PeriodButton = ({ activate, onClick, name }) => (
  <div className="period"
    activate={`${activate}`}
    onClick={onClick}
    name={name}
  >
    {name}
    <span className="circle"></span>
  </div>
);

const Period = ({
  // onNext, onPrevious,
  period, cursor, onSelect,
}) => (
  <div className="periods">
    {/* index is not good */}
    {period.map((peach, index) => (
      <PeriodButton
        activate={cursor === index}
        onClick={() => onSelect(index)}
        name={peach}
        key={peach.toString()}
      />
    ))}
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
