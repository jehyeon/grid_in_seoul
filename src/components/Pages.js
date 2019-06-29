import React from 'react';
import propTypes from 'prop-types';

// import './Pages.css';

import { pages } from '../store/MOCK_DATA.json';

const PageButton = ({ activate, onClick, name }) => (
  <input
    type="button"
    activate={`${activate}`}
    onClick={onClick}
    name={name}
  />
);

// eslint-disable-next-line object-curly-newline
const Pages = ({ cursor, onNext, onPrevious, onSelect }) => (
  <div className="pages">
    <input type="button" className="previous" value="<<" onClick={onPrevious} />
    {/* index is not good */}
    {pages.map((page, index) => (
      <PageButton
        activate={cursor === index}
        onClick={() => onSelect(index)}
        name={page}
        key={page.toString()}
      />
    ))}
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
  cursor: propTypes.number.isRequired,
  onNext: propTypes.func.isRequired,
  onPrevious: propTypes.func.isRequired,
  onSelect: propTypes.func.isRequired,
};

export default Pages;
