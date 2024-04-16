import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
const colors = {
  cardColor: `rgba(25, 25, 25, 1)`,
  cardHeading: `rgba(255, 255, 255, 1)`,
  fontColor: `rgba(117,117,117,1)`

}

function App() {
  const [isOpen, setIsOpen] = React.useState()

  return (
    // <div className="App"
    //   style={{ margin: `20px`, }}>
    //   <div onClick={() => setIsOpen(!isOpen)} style={{ width: `500px`, }}>
    //     <div
    //       style={{ height: `50px`, display: `flex`, alignItems: 'center', justifyContent: 'space-between', padding: `0 20px`, backgroundColor: colors.cardColor, borderRadius: `5px` }}        >
    //       <h3 style={{ color: colors.fontColor }}>Experiment Module</h3>
    //       {/* <LockIcon style={{ color: colors.fontColor }} /> */}
    //       {/* <LockOpenIcon style={{ color: colors.fontColor }} /> */}
    //       {isOpen &&
    //         <LockOpenIcon style={{ color: colors.fontColor, transform: 'scaleX(-1)' }} />
    //       }
    //     </div>
    //     {isOpen &&
    //       <div style={{ height: '200px', backgroundColor: "red" }}></div>
    //     }
    //   </div>
    // </div>
    <div className="App">
      <div className="container" >
        <div className="header"
          style={{
            // border- radius: 10px;
            borderRadius: `10px`,
            // borderTopLeftRadius: `10px`,
            // borderTopRightRadius: `10px`,
            borderBottomLeftRadius: !isOpen ? `10px` : 0,
            borderBottomRightRadius: !isOpen ? `10px` : 0,
          }}
          onClick={() => setIsOpen(!isOpen)}>
          <h3 className='title'>Experiment Module</h3>
          <LockOpenIcon className="flipped-icon" />
        </div>
        {isOpen && <div className="content">
          <div className='input_container'>
            <p className='input_title'>EM-1</p>
            <input type="text"
              placeholder="Adding iteration" className="custom-input"
            />
          </div>
          <div className='prompt_container'>
            <p className='input_title'>To add a new iteration, start typing a<br /> prompt or <span className='under_line'>generate</span> one.</p>
          </div>
          <div className='footer_buttons_container'>
            <p className='input_title footer_buttons'>Cancel</p>
            <p className='input_title footer_buttons'>Done</p>
          </div>


        </div>}
      </div>
    </div >
  );
}

export default App;
