import React, { useEffect, useState } from 'react'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { EMInput } from './EMInput.tsx';
import GenerateModule from './GenerateModule.tsx';

export const ExperimentalModuleCart = ({ callback, createModule, experiments, id }) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [moduleName, setmoduleName] = React.useState<string>('')
    const [addIteration, setaddIteration] = React.useState<boolean>(createModule ? true : false)
    const [generateOne, setgenerateOne] = React.useState<boolean>(false)
    const [experimentalModules, setexperimentalModules] = React.useState<any>([])

    const handleInputChange = (event) => {
        setmoduleName(event.target.value);
    };

    useEffect(() => {
        if (experiments?.length > 0) {
            setexperimentalModules([...experiments])
        }
    }, [experiments])

    return (
        <div className="container" >
            {/* <details className=''> */}
            {/* <summary> */}

            <div className="header"
                style={{
                    borderRadius: `10px`,
                    borderBottomLeftRadius: !isOpen ? `10px` : 0,
                    borderBottomRightRadius: !isOpen ? `10px` : 0,
                }}
                onClick={() => setIsOpen(!isOpen)}>
                <h3 className='title' style={{ color: isOpen ? `white` : `rgba(117, 117, 117, 1)` }}>{createModule ? 'Create Experiment Module' : `Experiment Module`}</h3>
                {isOpen && <LockOpenIcon className="flipped-icon" />}
            </div>
            {/* </summary> */}
            {isOpen &&

                <div className="content">
                    {experimentalModules.length == 0 ?
                        <div className='input_container' style={{ margin: '5px auto', alignItems: !generateOne ? 'center' : 'flex-start' }}>
                            <p className='input_title' style={{ marginTop: !generateOne ? `0px` : `16px`, marginBottom: !generateOne ? `0px` : `16px` }}>EM-{experimentalModules.length + 1}</p>
                            {!generateOne ?
                                <input
                                    value={moduleName}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Adding iteration"
                                    className="custom-input"
                                />
                                :
                                <GenerateModule
                                    callBack={(value) => {
                                        experimentalModules.push(value)
                                        setexperimentalModules(experimentalModules)
                                        if (id) {
                                            callback({ [id]: experimentalModules })

                                        } else {

                                            callback({ [Math.random().toString(36).substr(2, 10)]: experimentalModules })
                                        }
                                        setgenerateOne(false)
                                        setmoduleName('')
                                        setaddIteration(false)
                                        if (createModule) {
                                            setaddIteration(true)
                                            setexperimentalModules([])
                                        }
                                    }}
                                    removeCallBack={() => setgenerateOne(false)} />
                            }
                        </div>
                        :
                        <>
                            {experimentalModules.map((item, index) => <EMInput item={item} index={index} />)}
                            {addIteration &&
                                <div className='input_container' style={{ margin: '5px auto', alignItems: !generateOne ? 'center' : 'flex-start' }}>
                                    <p className='input_title' style={{ marginTop: !generateOne ? `0px` : `16px` }}>EM-{experimentalModules.length + 1}</p>
                                    {!generateOne ?
                                        <input
                                            value={moduleName}
                                            onChange={handleInputChange}
                                            type="text"
                                            placeholder="Adding iteration"
                                            className="custom-input"
                                        />
                                        :
                                        // <div style={{ height: `100px`, width: `75%` }}></div>
                                        <GenerateModule
                                            callBack={(value) => {
                                                experimentalModules.push(value)
                                                setexperimentalModules(experimentalModules)
                                                setmoduleName('')
                                                setgenerateOne(false)
                                                if (id) {
                                                    callback({ [id]: experimentalModules })
                                                } else {
                                                    callback({ [Math.random().toString(36).substr(2, 10)]: experimentalModules })
                                                }
                                                setaddIteration(false)
                                                if (createModule) {
                                                    setaddIteration(true)
                                                    setexperimentalModules([])

                                                }
                                            }}
                                            removeCallBack={() => setgenerateOne(false)} />
                                    }
                                </div>
                            }
                        </>

                    }

                    {!generateOne &&
                        <>
                            {addIteration &&
                                <div className='prompt_container'>
                                    <p className='input_title'>To add a new iteration, start typing a<br /> prompt or <span className='under_line generate_button'
                                        onClick={() => {
                                            if (addIteration) {
                                                setgenerateOne(true)
                                            } else {
                                                setaddIteration(true)
                                                setgenerateOne(true)
                                            }
                                        }}>generate</span> one.</p>
                                </div>
                            }
                            {addIteration ?
                                <div className='footer_buttons_container'>
                                    <p className='input_title footer_buttons' onClick={() => {
                                        setaddIteration(false)
                                        setmoduleName('')
                                    }}>Cancel</p>
                                    <p className='input_title footer_buttons' onClick={() => {
                                        experimentalModules.push(moduleName)
                                        setexperimentalModules(experimentalModules)
                                        setmoduleName('')
                                        setaddIteration(false)
                                        if (id) {
                                            callback({ [id]: experimentalModules })
                                        } else {
                                            callback({ [Math.random().toString(36).substr(2, 10)]: experimentalModules })
                                        }
                                        if (createModule) {
                                            setaddIteration(true)
                                            setexperimentalModules([])

                                        }
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
                        </>
                    }

                </div>
            }
        </div>
    )
}

