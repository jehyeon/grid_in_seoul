import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Period from '../components/Period';
import { nextPeriod, previousPeriod, selectPeriod } from '../store/modules/period';

class PeriodContainer extends Component {
  static propTypes = {
    nextPeriod: propTypes.func.isRequired,
    previousPeriod: propTypes.func.isRequired,
    selectPeriod: propTypes.func.isRequired,
    cursor: propTypes.number.isRequired,
    period: propTypes.arrayOf(propTypes.string).isRequired,
  }

  handleNext = () => {
    const { nextPeriod } = this.props;
    nextPeriod();
  }

  handlePrevious = () => {
    const { previousPeriod } = this.props;
    previousPeriod();
  }

  handleSelect = (cursor) => {
    const { selectPeriod } = this.props;
    selectPeriod(cursor);
  }

  render() {
    const { cursor, period } = this.props;
    return (
      <Period
        onNext={this.handleNext}
        onPrevious={this.handlePrevious}
        onSelect={index => this.handleSelect(index)}
        cursor={cursor}
        period={period}
      />
    );
  }
}

// props로 넣어줄 store state
const mapStateToProps = state => ({
  cursor: state.period.cursor,
  period: state.period.period,
});

// props로 넣어줄 action creatores
const mapDispatchToProps = dispatch => ({
  nextPeriod: () => dispatch(nextPeriod()),
  previousPeriod: () => dispatch(previousPeriod()),
  selectPeriod: cursor => dispatch(selectPeriod(cursor)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PeriodContainer);
