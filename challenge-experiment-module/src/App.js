import React, { useState } from 'react';
import './App.css';
import { ExperimentalModuleCart } from './components/experimentalModuleCart.tsx';

function App() {
  const [experiments, setExperiments] = useState([]);

  {/* HANDLE CREATE EXPERITMENT LIST MODULE  */ }
  const handleExperiment = (value) => {
    const key = Object.keys(value)[0];
    const experimentsCopy = experiments.slice();
    const existingIndex = experimentsCopy.findIndex((item) => Object.keys(item)[0] === key);
    if (existingIndex === -1) setExperiments([...experimentsCopy, value]);
    else {
      experimentsCopy[existingIndex] = value;
      setExperiments(experimentsCopy);
    }
  };

  {/* HANDLE CREATE EXPERITMENT MODULE  */ }
  const handleCreateExperiment = (value) => setExperiments([...experiments, value]);

  return (
    <div className="App">

      {/* FOR CREATE EXPERITMENT MODULE  */}
      <ExperimentalModuleCart createModule callback={handleCreateExperiment} />

      {/* EXPERITMENT MODULE LIST */}
      {experiments.map((item) => (<ExperimentalModuleCart id={Object.keys(item)[0]} experiments={item[Object.keys(item)[0]]} callback={handleExperiment} />))}
    </div>
  );
}

export default App;
