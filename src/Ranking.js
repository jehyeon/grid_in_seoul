import React, { Component } from 'react';
import './Ranking.scss';

import seoul_id from './json/seoul_id.json';
import sort_by from './utils/SortBy';

class Ranking extends Component {
  state = {
    prices: {},
    highlight: '',
  };

  constructor(props) {
    super(props);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.prices !== prevState.prices) {
      return { prices: nextProps.prices };
    }
    return null;
  }

  UpdateHighlight = e => {
    if (this.state.highlight !== e.target.getAttribute('area')) {
      this.setState({
        highlight: e.target.getAttribute('area'),
      });
      this.props.handleHighLight(e.target.getAttribute('area'));
    } else {
      this.setState({
        highlight: '',
      });
      this.props.handleHighLight('');
    }
  };

  render() {
    const { prices, highlight } = this.state;
    const rank_array = Object.keys(prices).map(key => {
      return { area_name: key, price: prices[key] };
    });

    // price 기준으로 정렬
    rank_array.sort(sort_by('price', true, parseInt));
    const rank = rank_array.map(data => {
      if (data['area_name'] === undefined || data['price'] === -1) {
        return null;
      }

      if (highlight === data['area_name']) {
        return (
          <li
            area={data['area_name']}
            onClick={this.UpdateHighlight}
            style={{ 'background-color': '#CCC' }}
          >
            {data['area_name']} {data['price']}
          </li>
        );
      } else {
        return (
          <li area={data['area_name']} onClick={this.UpdateHighlight}>
            {data['area_name']} {data['price']}
          </li>
        );
      }
    });
    return (
      <div className="ranking-box">
        <ul className="ranking">{rank}</ul>
      </div>
    );
  }
}

export default Ranking;
