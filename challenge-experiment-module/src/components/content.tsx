import React, { useEffect, useState } from 'react'
import { EMInput } from './EMInput.tsx'
import Module_input from './module_input.tsx'
import { Module_Body } from './module_Body.tsx'
import {
    handleCancel,
    handleDone,
    handleGenerate,
    handleInputChange,
    handleReset
} from './callback.tsx'

function Content({ contentProps }) {
    const { setIsLock, setIsOpen, isLock, experiments, callback, id, createModule, } = contentProps
    const [moduleName, setmoduleName] = useState<string>('')
    const [addIteration, setaddIteration] = useState<boolean>(createModule ? true : false)
    const [generateOne, setgenerateOne] = useState<boolean>(false)
    const [experimentalModules, setexperimentalModules] = useState<any>([])

    useEffect(() => {
        if (experiments?.length > 0) setexperimentalModules([...experiments])
        else { setaddIteration(true) }
    }, [experiments])
    
    const FOOTER_BUTTON_WITHOUT_ITERATION = [
        { title: 'Lock', callback: () => setIsLock(true) },
        { title: 'Reset', callback: () => handleReset(handleResetProps) },
        { title: '+ ADD iteration ', callback: () => setaddIteration(true) }]
    const FOOTER_BUTTON_WITH_ITERATION = [
        { title: 'Cancel', callback: () => handleCancel(cancelProps) },
        { title: 'Done', callback: () => handleDone(commonLogicProps) }
    ]
    const moduleInputProps = {
        handleInputChange: (e) => handleInputChange(e, setmoduleName),
        handleGenerateModule: (value) => handleDone({ ...commonLogicProps, value }),
        generateOne, experimentalModules, moduleName, setgenerateOne,
    }
    const cancelProps = { experimentalModules, setIsOpen, setaddIteration, setmoduleName }
    const commonLogicProps = {
        experimentalModules, moduleName, setexperimentalModules, setmoduleName,
        setgenerateOne, callback, id, setaddIteration, createModule
    }
    const module_Body_Props = {
        handleGenerate, FOOTER_BUTTON_WITH_ITERATION, FOOTER_BUTTON_WITHOUT_ITERATION,
        addIteration, setgenerateOne, setaddIteration, isLock
    }
    const handleResetProps = { callback, id, setexperimentalModules, setaddIteration }
    
    return (
        <div className="content">
            {experimentalModules.map((item, index) => <EMInput item={item} index={index} />)}
            {addIteration && <Module_input moduleInputProps={moduleInputProps} />}
            {!generateOne && <Module_Body module_Body_Props={module_Body_Props} />}
        </div>
    )
}
export default Content