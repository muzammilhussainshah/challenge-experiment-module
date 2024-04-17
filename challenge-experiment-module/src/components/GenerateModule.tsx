import React, { useState } from 'react'
import { longNames, mediumNames, shortNames } from './dummyExperimentalName.tsx';

export const GenerateModule = ({ removeCallBack, callBack }) => {
    const [isActive, setisActive] = useState('')
    const [selectedName, setSelectedName] = useState('');

    const handleDoneClick = () => callBack(selectedName);

    return (
        <div style={{ width: `85%`, marginTop: `16px`, marginBottom: `16px` }}>
            <p className='input_title' style={{ color: `white`, }}>{selectedName ? selectedName : `Iteration title`}</p>
            <div className='generate_module_buttons_container'>
                <div className={`generate_module_buttons ${isActive == 'short' && 'activeButton'}`}
                    onClick={() => {
                        setisActive('short')
                        setSelectedName(shortNames[Math.floor(Math.random() * shortNames.length)])

                    }}>short</div>
                <div className={`generate_module_buttons ${isActive == 'medium' && 'activeButton'}`}
                    onClick={() => {
                        setisActive('medium')
                        setSelectedName(mediumNames[Math.floor(Math.random() * mediumNames.length)])

                    }}>medium length</div>
                <div className={`generate_module_buttons ${isActive == 'long' && 'activeButton'}`}
                    onClick={() => {
                        setisActive('long')
                        setSelectedName(longNames[Math.floor(Math.random() * longNames.length)])
                    }}>very very very long (up to 30 char)</div>
            </div>
            <div className='footer_buttons_container' style={{ marginTop: `16px` }}>
                <p className='input_title footer_buttons' onClick={removeCallBack}>Remove</p>
                <p className='input_title footer_buttons' onClick={handleDoneClick}>Done</p>
            </div>
        </div >
    )
}

export default GenerateModule