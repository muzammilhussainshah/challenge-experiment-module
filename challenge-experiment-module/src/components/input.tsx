import React from 'react'
import GenerateModule from './generate-module.tsx'

function Input({ moduleInputProps, }) {

    const { generateOne,
        experimentalModules,
        moduleName,
        setgenerateOne,
        handleInputChange,
        handleGenerateModule,
    } = moduleInputProps

    return (
        <div
            className='input_container'
            style={{ alignItems: !generateOne ? 'center' : 'flex-start' }}>
            <p
                className='input_title input_title_adjustment'>EM-{experimentalModules.length + 1}
            </p>
            {!generateOne ?
                <input
                    value={moduleName}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Adding iteration"
                    className="custom-input"
                />
                :
                <GenerateModule
                    callBack={handleGenerateModule}
                    removeCallBack={() => setgenerateOne(false)} />
            }
        </div>
    )
}

export default Input