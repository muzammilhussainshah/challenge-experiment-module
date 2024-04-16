import React, { useState } from 'react'
import { longNames, mediumNames, shortNames } from './dummyExperimentalName.tsx';

export const GenerateModule = ({ removeCallBack, callBack }) => {
    const [isActive, setisActive] = useState('')
    const [selectedName, setSelectedName] = useState('');


    const handleDoneClick = () => {
        let randomIndex;
        if (isActive === 'short') {
            randomIndex = Math.floor(Math.random() * shortNames.length);

            callBack(shortNames[randomIndex]);
        } else if (isActive === 'medium') {
            randomIndex = Math.floor(Math.random() * mediumNames.length);
            callBack(mediumNames[randomIndex]);
        } else if (isActive === 'long') {
            randomIndex = Math.floor(Math.random() * longNames.length);
            callBack(longNames[randomIndex]);
        }
    };

    return (
        <div style={{ width: `80%`, marginTop: `16px`, marginBottom: `16px` }}>
            <p className='input_title' style={{ color: `white`, }}>Iteration title</p>
            <div className='generate_module_buttons_container'>
                <div className={`generate_module_buttons ${isActive == 'short' && 'activeButton'}`}
                    onClick={() => setisActive('short')}>short</div>
                <div className={`generate_module_buttons ${isActive == 'medium' && 'activeButton'}`}
                    onClick={() => setisActive('medium')}>medium length</div>
                <div className={`generate_module_buttons ${isActive == 'long' && 'activeButton'}`}
                    onClick={() => setisActive('long')}>very very very long (up to 30 char)</div>
            </div>
            <div className='footer_buttons_container' style={{ marginTop: `16px` }}>
                <p className='input_title footer_buttons' onClick={removeCallBack}>Remove</p>
                <p className='input_title footer_buttons' onClick={handleDoneClick}>Done</p>
            </div>
        </div>
    )
}

export default GenerateModule