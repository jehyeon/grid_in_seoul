import React, { Component } from 'react'
import './App.css'

import { type, values } from './json/seoul_grid.json'
import area_id from './json/seoul_id.json'
// import { data } from './json/seoul_price.json'
import { datas } from './json/datas.json'

import SelectPage from './SelectPage'
import Grid from './Grid'
import Ranking from './Ranking'

class App extends Component {
  state = {
    prices: {},
    category: '',
    year: '',
    highlight: -1
  }

  ModeChange = (category, type, year) => {
    if (type === '지역') {
      this.setState({
        prices: []
      });
    } else {
      let data = datas.find((element) => {
        if (element['period'].indexOf(year) >= 0 && 
            element['category'] == category &&
            element['type'] == type) {
          return element;
        }
      });

      this.setState({
        prices: data['prices']
      });
    }

    // Category, year가 바뀔 때마다 highlight 초기화
    this.setState({
      highlight: -1
    });
  }

  HandleHighLight = (area_id) => {
    this.setState({
      highlight: parseInt(area_id)
    });
  }

  render() {
    const page_list = ['지역', '오피스텔(매매)', '오피스텔(전세)', '아파트(매매)', '아파트(전세)'];

    return (
      <div className="App">
        <h1>Grid in Seoul</h1>
        {/* View 모드 선택 컴포넌트 */}
        <SelectPage page_list={page_list} modeChange={this.ModeChange}/>

        {/* 서울 지도 컴포넌트 */}
        <Grid type={ type } areas={ values } prices={this.state.prices} highlight={this.state.highlight}/>

        {/* 집세 랭킹 컴포넌트 */}
        <Ranking prices={this.state.prices} handleHighLight={this.HandleHighLight}/>

        {/* 기간 및 하우스 타입 설정가능한 form 컴포넌트로 수정 예정 */}
        {/* Select 된 버튼 보여주기 */}
      </div>
    );
  }
}

export default App;
