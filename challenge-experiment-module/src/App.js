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
  const [isOpen, setIsOpen] = React.useState()
  const [moduleName, setmoduleName] = React.useState('')
  const [experimentalModules, setexperimentalModules] = React.useState([])
  const handleInputChange = (event) => {
    setmoduleName(event.target.value);
  };
  console.log(experimentalModules, 'experimentalModules')
  return (
    <div className="App">
      <ExperimentalModuleCart />
    </div >
  );
}

export default App;
