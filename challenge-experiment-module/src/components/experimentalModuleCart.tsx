import React, { useState } from 'react'
import { HiLockClosed, HiLockOpen } from 'react-icons/hi2'
import Content from './content.tsx';

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
    return (
        <div className="container" >
            <div
                className="header"
                style={{ borderBottomLeftRadius: !isOpen ? `10px` : 0, borderBottomRightRadius: !isOpen ? `10px` : 0, }}
                onClick={() => setIsOpen(!isOpen)}>
                <h3
                    className='title'
                    style={{ color: isOpen ? `white` : `rgba(117, 117, 117, 1)` }}>
                    {createModule ? 'Create Experiment Module' : `Experiment Module`}
                </h3>
                {isLock ? <HiLockClosed className="flipped-icon" />
                    : isOpen && <HiLockOpen className="flipped-icon" />}
            </div>
            {isOpen && <Content contentProps={contentProps} />}
        </div >
    )
}