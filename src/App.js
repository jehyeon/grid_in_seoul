import React from 'react';
import './App.css';
import PagesContainer from './containers/PagesContainer';
import PeriodContainer from './containers/PeriodContainer';
import MapContainer from './containers/MapContainer';

function App() {
  return (
    <div className="App">
      <PagesContainer />
      <PeriodContainer />
      <MapContainer />
    </div>
  );
}

export default App;
