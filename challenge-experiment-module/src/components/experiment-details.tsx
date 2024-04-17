import React, { useEffect, useState } from 'react'

import {
    handleCancel,
    handleDone,
    handleGenerate,
    handleInputChange,
    handleReset
} from './helper/callback.tsx'
import Input from './input.tsx'
import { ModuleWidgetBody } from './experiment-widget-body.tsx'
import { IterationList } from './iteration-list.tsx'

function ExperimentDetails({ contentProps }) {
    const { setIsLock, setIsOpen, isLock, experiments, callback, id, createModule, } = contentProps
    const [moduleName, setmoduleName] = useState<string>('')
    const [addIteration, setaddIteration] = useState<boolean>(createModule ? true : false)
    const [generateOne, setgenerateOne] = useState<boolean>(false)
    const [experimentalModules, setexperimentalModules] = useState<any>([])

    useEffect(() => {
        if (experiments?.length > 0) setexperimentalModules([...experiments])
        else { setaddIteration(true) }
    }, [experiments])

    const footerButtonWithoutIteration = [
        { title: 'Lock', callback: () => setIsLock(true) },
        { title: 'Reset', callback: () => handleReset(handleResetProps) },
        { title: '+ ADD iteration ', callback: () => setaddIteration(true) }]
    const footerButtonWithIteration = [
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
    const moduleWidgetBodyProps = {
        handleGenerate, footerButtonWithIteration, footerButtonWithoutIteration,
        addIteration, setgenerateOne, setaddIteration, isLock
    }
    const handleResetProps = { callback, id, setexperimentalModules, setaddIteration }

    return (
        <div className="content">
            {experimentalModules.map((item, index) => <IterationList item={item} index={index} />)}
            {addIteration && <Input moduleInputProps={moduleInputProps} />}
            {!generateOne && <ModuleWidgetBody moduleWidgetBodyProps={moduleWidgetBodyProps} />}
        </div>
    )
}
export default ExperimentDetails