import React, { useState } from 'react'
import { HiLockClosed, HiLockOpen } from 'react-icons/hi2'
import Details from './details.tsx';
import Summary from './summary.tsx';

export const ExperimentalModuleCart = ({
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
            <Summary summaryProps={summaryProps} />
            {isOpen && <Details contentProps={contentProps} />}
        </div >
    )
}