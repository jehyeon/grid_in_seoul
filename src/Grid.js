import React, { Component } from 'react';
import './Grid.css';

import sort_by from './utils/SortBy'

class Grid extends Component {
    render() {
        const { type, areas, prices, highlight } = this.props;
        const area_list = [
            '0','강남구','강동구','강북구','강서구','관악구',
            '광진구','구로구','금천구','노원구','도봉구',
            '동대문구','동작구','마포구','서대문구','송파구',
            '성동구','성북구','서초구','양천구','영등포구',
            '용산구','은평구','종로구','중구','중랑구'
        ];
        const rank_array = Object.keys(prices).map((key) => {
            return {'area_name': key, 'price': prices[key]}
        });

        const color = 135;
        if (rank_array.length !== 0) {
            rank_array.sort(sort_by('price',true,parseInt))
            var average = parseInt(rank_array.map(element => element['price']).reduce(((a,b) => a + b), 0)/rank_array.length);
        } else {
            var on = {'opacity': '1'};
        }

        const grid = areas.map( line => (                    
            <ul className="block_line">
                {line.map(block => {
                    // 기본 color
                    let style = {'backgroundColor': '#EEE'};
                    if (block !== 0 && rank_array.length > 0) {
                        let ratio = average / rank_array.find(element => element['area_name'] === area_list[block]).price * 1.1;
                        style['backgroundColor'] = 'rgb(' + parseInt(color * ratio) + ',' + parseInt(color * ratio) + ',255)';
                    }
                    
                    // highlight가 select 시 다른 block을 작게 
                    if ((area_list[block] !== highlight) && highlight !== '') {
                        style['border'] = '1px solid white';
                        style['box-sizing'] = 'border-box';
                    } 
                    // 해당 block을 크게
                    else if ((area_list[block] === highlight) && highlight !== '') {
                        style['margin'] = '0.5px';
                        style['margin-right'] = '3px';
                        style['width'] = '12px';
                        style['height'] = '12px';
                    }

                    return (
                        <li 
                            area={area_list[block]}
                            className={type}
                            style={style}
                        >
                            <span>{area_list[block]}</span>
                        </li>
                    )
                })}
            </ul>
        ));
        
        return (
            <div className='grid'>
                { grid }
                <h1 style={on}>No data</h1>
            </div>
        );
    }
}

export default Grid;