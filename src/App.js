import React from 'react';
import './App.css';
import BarCharts from './component/BarCharts';
import Loader from './component/Loaders';
import LineCharts from './component/LineCharts';
import DoughnutCharts from './component/PieChart';

function App() {
  return (
    <div className="App">
    <Loader/>
      <div className="charts">
        <LineCharts/>
        <BarCharts/>
        <DoughnutCharts className="App-logo"/>
      </div> 
    </div>
  );
}

export default App;
