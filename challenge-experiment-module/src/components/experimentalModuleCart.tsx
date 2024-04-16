import React, { useState } from 'react'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { EMInput } from './EMInput.tsx';

export const ExperimentalModuleCart = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [moduleName, setmoduleName] = React.useState<string>('')
    const [addIteration, setaddIteration] = React.useState<boolean>(true)
    const [experimentalModules, setexperimentalModules] = React.useState<any>([])
    const handleInputChange = (event) => {
        setmoduleName(event.target.value);
    };


    return (
        <div className="container" >
            <div className="header"
                style={{
                    borderRadius: `10px`,
                    borderBottomLeftRadius: !isOpen ? `10px` : 0,
                    borderBottomRightRadius: !isOpen ? `10px` : 0,
                }}
                onClick={() => setIsOpen(!isOpen)}>
                <h3 className='title'>Experiment Module</h3>
                <LockOpenIcon className="flipped-icon" />
            </div>
            {isOpen && <div className="content">
                {experimentalModules.length == 0 ?
                    <div className='input_container'>
                        <p className='input_title'>EM-1</p>
                        <input
                            value={moduleName}
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Adding iteration"
                            className="custom-input"
                        />
                    </div>
                    :
                    <>
                        {experimentalModules.map((item, index) => <EMInput item={item} index={index} />)}
                        {addIteration &&
                            <div className='input_container' style={{ margin: '5px auto' }}>
                                <p className='input_title'>EM-{experimentalModules.length + 1}</p>
                                <input
                                    value={moduleName}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Adding iteration"
                                    className="custom-input"
                                />
                            </div>
                        }
                    </>

                }
                <div className='prompt_container'>
                    <p className='input_title'>To add a new iteration, start typing a<br /> prompt or <span className='under_line'>generate</span> one.</p>
                </div>
                {addIteration ?
                    // {experimentalModules.length > 0 ?
                    <div className='footer_buttons_container'>
                        <p className='input_title footer_buttons' onClick={() => setIsOpen(false)}>Cancel</p>
                        <p className='input_title footer_buttons' onClick={() => {
                            experimentalModules.push(moduleName)
                            setexperimentalModules(experimentalModules)
                            setmoduleName('')
                            setaddIteration(false)
                        }}>Done</p>
                    </div>
                    :
                    <div className='footer_buttons_container'>
                        <p className='input_title footer_buttons'>Lock</p>
                        <p className='input_title footer_buttons' onClick={() => {
                            setexperimentalModules([])
                            setaddIteration(true)

                        }}>Reset</p>
                        <p className='input_title footer_buttons' onClick={() => setaddIteration(true)}>+ ADD iteration </p>
                    </div>
                }


            </div>}
        </div>
    )
}

