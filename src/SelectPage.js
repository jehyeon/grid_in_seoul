import React, { Component } from 'react'
import './SelectPage.css'

class SelectPage extends Component {
    // state 초기화
    state = {
        pages: [],
        years: [],
        year: '',
        index: 0
    }

    // state를 props로 초기화
    constructor (props) {
        super (props);
        this.state = {
            pages: props.page_list,
            years: props.year_list,
            index: 0
        };
    }

    // Page view 전환
    handlePageSelect = (e) => {
        e.preventDefault();

        let {pages, index} = this.state;
        let category, type, year = 2018;
        // Arrow
        if (e.target.getAttribute('type') === 'left' && index > 0) {
            this.setState({
                'index': --index
            });
        }
        else if (e.target.getAttribute('type') === 'right' && index < pages.length-1) {
            this.setState({
                'index': ++index
            });
        }
        else if (e.target.getAttribute('type') === 'year') {
            console.log(e.target.getAttribute('data'));
            this.setState({
                'year': e.target.getAttribute('data')
            });
            year = e.target.getAttribute('data');
        }
        // State 변화 시에만 modeChange 되도록 수정해야 할듯

        if (index == 0) {
            type = pages[index];
            category = '';
        } else {
            type = pages[index].split('(')[0];
            category = pages[index].split('(')[1].split(')')[0];
        }
        
        this.props.modeChange(category, type, year);
    }

    render() {
        const { pages, years, index } = this.state;
        const now_page = pages[index];

        const year_select = years.map((element) => {
            return (
                <li data={element} className='year' type='year' onClick={this.handlePageSelect}>
                    {element}
                    <p></p>
                </li>
            )
        });
        return(
            <div class="ok">
                <div className='select_view'>
                    <div className='left' type='left' onClick={this.handlePageSelect}></div>
                    <div className='text'>{ now_page }</div>
                    <div className='right' type='right' onClick={this.handlePageSelect}></div>
                </div>
                <ul>
                    { year_select }
                </ul>
            </div>
        )
    }
}

export default SelectPage;