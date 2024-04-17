import React from 'react'
import { HiLockClosed, HiLockOpen } from 'react-icons/hi2'

function Summary({setIsOpen, isOpen, createModule, isLock}) {
    return (
        <div
            className="header"
            style={{ borderBottomLeftRadius: !isOpen ? `10px` : 0, borderBottomRightRadius: !isOpen ? `10px` : 0, }}
            onClick={() => setIsOpen(!isOpen)}>
            <h3 className='title' style={{ color: isOpen ? `white` : `rgba(117, 117, 117, 1)` }}>
                {createModule ? 'Create Experiment Module' : `Experiment Module`}
            </h3>
            {isLock ? <HiLockClosed className="flipped-icon" /> : isOpen && <HiLockOpen className="flipped-icon" />}
        </div>
    )
}

export default Summary