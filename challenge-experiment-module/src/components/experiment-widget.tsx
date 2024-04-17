import React, { useState } from 'react'

import ExperimentDetails from './experiment-details.tsx';
import ExperimentSummary from './experiment-summary.tsx';

export const ExperimentWidget = ({
    callback,
    createModule,
    experimentalModuleCartDataProps }) => {
    const [isLock, setIsLock] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    // CONTENT PROPS
    const contentProps = {
        setIsLock,
        setIsOpen,
        isLock,
        createModule,
        callback,
        id: experimentalModuleCartDataProps?.id,
        experiments: experimentalModuleCartDataProps?.experiments,
    }
    const summaryProps = { setIsOpen, isOpen, createModule, isLock, }
    return (
        <div className="container" >
            <ExperimentSummary summaryProps={summaryProps} />
            {isOpen && <ExperimentDetails contentProps={contentProps} />}
        </div >
    )
}