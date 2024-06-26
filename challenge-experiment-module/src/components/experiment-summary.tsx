import React from 'react'

import { HiLockClosed, HiLockOpen } from 'react-icons/hi2'

function ExperimentSummary({ summaryProps }) {
    const {
        setIsOpen,
        isOpen,
        createModule,
        isLock } = summaryProps
    return (
        <div
            className={`header ${isOpen ? 'plane-border-bottom' : 'rounded-bottom'}`}
            onClick={() => setIsOpen(!isOpen)}>
            <h3 className='title' style={{ color: isOpen ? `white` : `#757575` }}>
                {createModule ? 'Create Experiment Module' : `Experiment Module`}
            </h3>
            {createModule ? <></> : isLock ? <HiLockClosed className="flipped-icon" />
                : <HiLockOpen className="flipped-icon" />}
        </div>
    )
}

export default ExperimentSummary