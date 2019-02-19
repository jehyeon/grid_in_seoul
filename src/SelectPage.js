import React, { Component } from 'react'

import './SelectPage.css'

class SelectPage extends Component {
    // state 초기화
    state = {
        page_list: [],
        index: 0
    }

    // state를 props로 초기화
    constructor (props) {
        super (props);
        this.state = {
            page_list: props.page_list,
            index: 0
        };
    }

    // Page view 전환
    handlePageSelect = (e) => {
        let {page_list, index} = this.state;
        e.preventDefault();
        if (e.target.getAttribute('type') === 'left' && index > 0) {
            this.setState({
                'index': --index
            })
        }
        else if (e.target.getAttribute('type') === 'right' && index < page_list.length-1) {
            this.setState({
                'index': ++index
            })
        }
        this.props.modeChange(page_list[index], 'purchage', 'period');
    }

    render() {
        const { page_list, index } = this.state;
        const now_page = page_list[index];
        return(
            <div className='select_view'>
                {/* 좌우 버튼 이미지로 수정 및 스타일링 필요 */}
                <div className='left' type='left' onClick={this.handlePageSelect}></div>
                <div className='text'>{ now_page }</div>
                <div className='right' type='right' onClick={this.handlePageSelect}></div>
            </div>
        )
    }
}

export default SelectPage;