import React from 'react';
import propTypes from 'prop-types';

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
    <input type="button" className="previous" value="<<" onClick={onPrevious} />
    {/* index is not good */}
    {/* {pages.map((page, index) => (
      <PageButton
        activate={cursor === index}
        onClick={() => onSelect(index)}
        name={page}
        key={page.toString()}
      />
    ))} */}
    {pageName}
    <input type="button" className="next" value=">>" onClick={onNext} />
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
