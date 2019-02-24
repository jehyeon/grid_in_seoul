import React, { Component } from 'react';
import './Grid.css';
import get_color from './utils/Color'

class Grid extends Component {
    render() {
        const { type, areas, prices, highlight } = this.props;
        const average = prices.reduce((a,b) => a+b, 0) / prices.length - 1;
        
        const grid = areas.map( line => (                    
            <ul className="block_line">
                {line.map(block => {
                    const bg = { 'backgroundColor': '#EEE'};

                    if (highlight == -1) {                        
                        bg['backgroundColor'] = get_color(block, average, prices[block])
                    } else if (highlight == block) {
                        bg['background-color'] = get_color(block, average, prices[block])
                    }
                    else {
                        bg['backgroudn-color'] = '#EEE';
                    }
                    
                    return (
                        <li 
                            area={block} 
                            className={type}
                            style={bg}
                        />
                    )
                })}
            </ul>
        ));

        return (
            <div className='grid'>
                { grid }
            </div>
        );
    }
}

export default Grid;