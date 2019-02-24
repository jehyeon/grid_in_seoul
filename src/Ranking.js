import React, { Component } from 'react'
import './Ranking.css';

import seoul_id from './json/seoul_id.json'
import sort_by from './utils/SortBy'

class Ranking extends Component {
    state = {
        prices: {}
    }

    constructor (props) {
        super(props);
    }

    static getDerivedStateFromProps (nextProps, prevState) {
        if (nextProps.prices !== prevState.prices) {
            // console.log(nextProps.prices);
            return { prices: nextProps.prices };
        }
        return null;
    }

    UpdateHighlight = (e) => {
        // this.setState({
        //     highlight: e.target.getAttribute('area_id')
        // });
        console.log(e.target.getAttribute('area_id'));
        this.props.handleHighLight(e.target.getAttribute('area_id'));
        console.log(this.props);
    }

    render() {
        const { prices } = this.state;
        const rank_array = Object.keys(prices).map((key) => {
            return {'area_name': key, 'price': prices[key]}
        });
    
        // price 기준으로 정렬
        rank_array.sort(sort_by('price',true,parseInt))
        const rank = rank_array.map(data => {
            if (data['area_name'] === undefined || data['price'] ===  -1) { return null; }
            return (
                <li area_id={data['id']} onClick={this.UpdateHighlight}>
                    {data['area_name']} {data['price']}
                </li>
            );
        });
        return (
            <div className='ranking-box'>
                <ul className='ranking'>
                    { rank }
                </ul>
            </div>
        );
    }
}

export default Ranking;