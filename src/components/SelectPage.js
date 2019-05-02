import React from 'react';
// import './SelectPage.scss';

const pages = ['2000', '2001', '2002']; // for test

const SelectPage = ({ pageId, onNextPage, onPreviousPage }) => (
  <div className="wrapper">
    <button type="button" onClick={onPreviousPage}>previous</button>
    {pages[pageId]}
    <button type="button" onClick={onNextPage}>next</button>
  </div>
);

export default SelectPage;
