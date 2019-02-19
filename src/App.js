import React, { Component } from 'react'
import './App.css'

import { type, values } from './json/seoul_grid.json'
import area_id from './json/seoul_id.json'
import { data } from './json/seoul_price.json'

import SelectPage from './SelectPage'
import Grid from './Grid'
import Ranking from './Ranking'

class App extends Component {
  state = {
    prices: [],
    highlight: -1
  }

  ModeChange = (house_type, order, period) => {
    if (house_type === 'region') {
      this.setState({
        prices: []
      });
    } else {
      this.setState({
        prices: data[house_type][order][period].prices
      });
    }
  }

  HandleHighLight = (area_id) => {
    this.setState({
      highlight: parseInt(area_id)
    });
  }

  render() {
    const page_list = ['region', 'office', 'appartment'];

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
