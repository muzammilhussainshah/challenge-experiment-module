import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { ExperimentalModuleCart } from './components/experimentalModuleCart.tsx';

const colors = {
  cardColor: `rgba(25, 25, 25, 1)`,
  cardHeading: `rgba(255, 255, 255, 1)`,
  fontColor: `rgba(117,117,117,1)`

}

function App() {

  const [experiments, setexperiments] = React.useState([])
  // React.useEffect(() => {
  //   localStorage.setItem('experiments', JSON.stringify(experiments));
  //   console.log(experiments, 'experiments')
  // }, [experiments])
  // React.useEffect(() => {
  //   const data = localStorage.getItem('experiments');
  //   console.log(data, 'data')
  // }, [])
  return (
    <div className="App">

      <ExperimentalModuleCart
        createModule
        callback={(value) => {
          const key = Object.keys(value)[0]; // Extracting the key from the object
          let experimentsCopy = JSON.parse(JSON.stringify(experiments))
          experimentsCopy.push(value)
          setexperiments(experimentsCopy);
        }}
      />
      {experiments.length > 0 && experiments.map((item) => {
        return (
          <>
            <ExperimentalModuleCart
              id={Object.keys(item)[0]}
              experiments={item[Object.keys(item)[0]]}
              callback={(value) => {
                const key = Object.keys(value)[0]; // Extracting the key from the object
                let experimentsCopy = JSON.parse(JSON.stringify(experiments))
                let isAlreadyHaveIndex = experimentsCopy.findIndex((value) => Object.keys(value)[0] == key)
                if (isAlreadyHaveIndex == -1) {
                  experimentsCopy.push(value)
                  setexperiments(experimentsCopy);
                } else {
                  experimentsCopy.splice(isAlreadyHaveIndex, 1, value)
                  setexperiments(experimentsCopy);
                }
              }}
            />
          </>

        )
      })
      }

    </div >
  );
}

export default App;
