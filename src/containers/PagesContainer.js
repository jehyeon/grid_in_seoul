import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Pages from '../components/Pages';
import { nextPage, previousPage, selectPage } from '../store/modules/pages';

class PageContainer extends Component {
  static propTypes = {
    nextPage: propTypes.func.isRequired,
    previousPage: propTypes.func.isRequired,
    selectPage: propTypes.func.isRequired,
    cursor: propTypes.number.isRequired,
    pages: propTypes.arrayOf(propTypes.string).isRequired,
    pageName: propTypes.string.isRequired,
  }

  handleNext = () => {
    const { nextPage } = this.props;
    nextPage();
  }

  handlePrevious = () => {
    const { previousPage } = this.props;
    previousPage();
  }

  handleSelect = (cursor) => {
    const { selectPage } = this.props;
    selectPage(cursor);
  }

  render() {
    const { cursor, pages, pageName } = this.props;
    return (
      <Pages
        onNext={this.handleNext}
        onPrevious={this.handlePrevious}
        onSelect={index => this.handleSelect(index)}
        cursor={cursor}
        pages={pages}
        pageName={pageName}
      />
    );
  }
}

// props로 넣어줄 store state
const mapStateToProps = state => ({
  // pages: state.pages.pages,
  cursor: state.pages.cursor,
  pages: state.pages.pages,
  pageName: state.pages.pageName,
});

// props로 넣어줄 action creatores
const mapDispatchToProps = dispatch => ({
  nextPage: () => dispatch(nextPage()),
  previousPage: () => dispatch(previousPage()),
  selectPage: cursor => dispatch(selectPage(cursor)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PageContainer);
