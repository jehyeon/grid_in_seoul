import React from 'react';
import './App.css';
import PagesContainer from './containers/PagesContainer';
import MapContainer from './containers/MapContainer';

function App() {
  return (
    <div className="App">
      <PagesContainer />
      <MapContainer />
    </div>
  );
}

export default App;
