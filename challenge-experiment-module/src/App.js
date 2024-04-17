import React, { useState } from 'react'

import './App.css'
import { ExperimentWidget } from './components/experiment-widget.tsx'

function App () {
  const [experiments, setExperiments] = useState([])

  const handleExperiment = (value) => {
    const key = Object.keys(value)[0]
    const experimentsClone = experiments.slice()
    const existingIndex = experimentsClone.findIndex((item) => Object.keys(item)[0] === key)
    if (existingIndex === -1) setExperiments([...experimentsClone, value])
    else {
      experimentsClone[existingIndex] = value
      setExperiments(experimentsClone)
    }
  }
  const handleCreateExperiment = (value) => setExperiments([...experiments, value])
  return (
    <div className='App'>

      {/* CREATE EXPERIMENT MODULE */}
      <ExperimentWidget createModule callback={handleCreateExperiment} />

      {/* EXPERIMENT MODULE LIST */}
      {experiments?.length > 0 && experiments?.map((item, index) => (
        <ExperimentWidget
          key={index.toString()}
          experimentalModuleCartDataProps={{
            id: Object.keys(item)[0],
            experiments: item[Object.keys(item)[0]]
          }}
          callback={handleExperiment}
        />
      ))}
    </div>
  )
}

export default App
