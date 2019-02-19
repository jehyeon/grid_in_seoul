import React, { Component } from 'react'
import './Ranking.css';

import seoul_id from './json/seoul_id.json'
import sort_by from './utils/SortBy'

class Ranking extends Component {
    state = {
        prices: []
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
        const rank_array = [];
        const { prices } = this.state;
        for (let id in Object.keys(seoul_id)) {
            rank_array.push({'id':id, 'area_name':seoul_id[id], 'price':prices[id]});
        }

        // price 기준으로 정렬
        rank_array.sort(sort_by('price',true,parseInt))
        const rank = rank_array.map(data => {
            if (data['area_name'] === undefined || data['price'] ===  -1) { return null; }
            return (
            <li area_id={data['id']} onClick={this.UpdateHighlight}><div className='area_name'>{data['area_name']}</div><div className='price'>{data['price']}</div></li>
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