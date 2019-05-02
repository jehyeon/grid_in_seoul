import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import SelectPage from '../components/SelectPage';
import { nextPage, previousPage } from '../store/modules/pages';

class SelectPageContainer extends Component {
  handleNextPage = () => {
    this.props.nextPage();
  };

  handlePreviousPage = () => {
    this.props.previousPage();
  };

  render() {
    const { pageId, lastPageId } = this.props;
    return (
      <SelectPage
        pageId={this.pageId}
        onNextPage={this.handleNextPage}
        onPreviousPage={this.handlePreviousPage}
      />
    );
  }
}

const mapStateToProps = ({ selectPage }) => ({
  pageId: selectPage.pageId,
  lastPageId: selectPage.lastPageId,
});

const mapDispatchProps = dispatch => bindActionCreators({ nextPage, previousPage }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchProps,
)(SelectPageContainer);
