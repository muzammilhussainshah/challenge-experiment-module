import React, { useState } from 'react'
import Summary from './Summary.tsx';
import Content from './content.tsx';
import { HiLockClosed, HiLockOpen } from 'react-icons/hi2'

export const ExperimentalModuleCart = ({ callback, createModule, experiments, id }) => {
    const [isLock, setIsLock] = useState(false)
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div className="container" >
            <div
                className="header"
                style={{ borderBottomLeftRadius: !isOpen ? `10px` : 0, borderBottomRightRadius: !isOpen ? `10px` : 0, }}
                onClick={() => setIsOpen(!isOpen)}>
                <h3 className='title' style={{ color: isOpen ? `white` : `rgba(117, 117, 117, 1)` }}>
                    {createModule ? 'Create Experiment Module' : `Experiment Module`}
                </h3>
                {isLock ? <HiLockClosed className="flipped-icon" /> : isOpen && <HiLockOpen className="flipped-icon" />}
            </div>
            {isOpen &&
                <Content
                    experiments={experiments}
                    setIsLock={setIsLock}
                    setIsOpen={setIsOpen}
                    callback={callback}
                    id={id}
                    createModule={createModule}
                    isLock={isLock}
                />
            }
        </div >
    )
}

