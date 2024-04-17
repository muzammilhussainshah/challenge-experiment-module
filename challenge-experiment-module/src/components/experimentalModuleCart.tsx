import React, { useState } from 'react'
import { HiLockClosed, HiLockOpen } from 'react-icons/hi2'
import Content from './content.tsx';
import Summary from './Summary.tsx';

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
            {isOpen && <Content contentProps={contentProps} />}
        </div >
    )
}