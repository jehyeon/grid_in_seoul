import React from 'react';
import propTypes from 'prop-types';
import './Pages.css';

// import './Pages.css';

const PageButton = ({ activate, onClick, name }) => (
  <input
    type="button"
    activate={`${activate}`}
    onClick={onClick}
    name={name}
  />
);

const Pages = ({
  // pages, cursor, onSelect,
  pageName, onNext, onPrevious,
}) => (
  <div className="pages">
    <div role="button" tabIndex="0" className="previous button" onClick={onPrevious} onKeyDown={onPrevious} />
    <div className="pageName">{pageName}</div>
    <div role="button" tabIndex="0" className="next button" onClick={onNext} onKeyDown={onNext} />
  </div>
);

PageButton.defaultProps = {
  activate: false,
};

PageButton.propTypes = {
  activate: propTypes.bool,
  onClick: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
};

Pages.propTypes = {
  // cursor: propTypes.number.isRequired,
  // pages: propTypes.arrayOf(propTypes.string).isRequired,
  pageName: propTypes.string.isRequired,
  onNext: propTypes.func.isRequired,
  onPrevious: propTypes.func.isRequired,
  // onSelect: propTypes.func.isRequired,
};

export default Pages;
