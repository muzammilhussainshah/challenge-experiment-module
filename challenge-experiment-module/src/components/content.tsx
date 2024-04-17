import React, { useEffect, useState } from 'react'
import GenerateModule from './GenerateModule.tsx'
import { EMInput } from './EMInput.tsx'
import Module_input from './module_input.tsx'
import { GenerateModuleTitle } from './GenerateModuleTitle.tsx'
import { handleCancel, handleGenerate, handleReset } from './callback.tsx'

function Content({ experiments, setIsLock, setIsOpen, callback, id, createModule, isLock }) {
    const [moduleName, setmoduleName] = React.useState<string>('')
    const handleDone = (value) => {
        if (value?.length > 0) experimentalModules.push(value)
        else if (moduleName.length > 0) experimentalModules.push(moduleName)
        if (value?.length > 0 || moduleName.length > 0) commonLogic(experimentalModules)
    }
    const handleInputChange = (event) => { setmoduleName(event.target.value); };
    const [addIteration, setaddIteration] = React.useState<boolean>(createModule ? true : false)
    const [generateOne, setgenerateOne] = React.useState<boolean>(false)

    const [experimentalModules, setexperimentalModules] = React.useState<any>([])

    useEffect(() => {
        if (experiments?.length > 0) setexperimentalModules([...experiments])
    }, [experiments])

    const commonLogic = (experimentalModules) => {
        setexperimentalModules(experimentalModules)
        setmoduleName('')
        setgenerateOne(false)
        if (id) callback({ [id]: experimentalModules })
        else callback({ [Math.random().toString(36).substr(2, 10)]: experimentalModules })
        setaddIteration(false)
        if (createModule) {
            setaddIteration(true)
            setexperimentalModules([])
        }
    }
    const FOOTERBUTTONWITHOUTITERATION = [{ title: 'Lock', callback: () => setIsLock(true) }, { title: 'Reset', callback: () => handleReset(setexperimentalModules, setaddIteration) }, { title: '+ ADD iteration ', callback: () => setaddIteration(true) }]
    const FOOTERBUTTONWITHITERATION = [{ title: 'Cancel', callback: () => handleCancel(experimentalModules, setIsOpen, setaddIteration, setmoduleName) }, { title: 'Done', callback: handleDone }]

    return (
        <div className="content">
            {experimentalModules.map((item, index) => <EMInput item={item} index={index} />)}
            {addIteration &&
                <Module_input
                    generateOne={generateOne}
                    experimentalModules={experimentalModules}
                    moduleName={moduleName}
                    handleInputChange={handleInputChange}
                    handleGenerateModule={handleDone}
                    setgenerateOne={setgenerateOne} />
            }
            {!generateOne &&
                <>
                    {addIteration && <GenerateModuleTitle handleGenerate={() => handleGenerate(addIteration, setgenerateOne, setaddIteration)} />}
                    <div className='footer_buttons_container'>
                        {addIteration ? FOOTERBUTTONWITHITERATION.map((item, index) => (
                            <p key={index.toString()} className='input_title footer_buttons' onClick={item.callback}>{item.title}</p>
                        )) :
                            (!isLock && FOOTERBUTTONWITHOUTITERATION.map((item, index) => (
                                <p key={index.toString()} className='input_title footer_buttons' onClick={item.callback}>{item.title}</p>
                            )))}
                    </div>

                </>
            }

        </div>

    )
}

export default Content