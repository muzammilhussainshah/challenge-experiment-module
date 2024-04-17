import React from 'react'
import GenerateModule from './GenerateModule.tsx'

function Module_input({ generateOne, experimentalModules, moduleName, handleInputChange, handleGenerateModule, setgenerateOne }) {
    return (
        <div className='input_container' style={{ alignItems: !generateOne ? 'center' : 'flex-start' }}>
            <p className='input_title input_title_adjustment' >EM-{experimentalModules.length + 1}</p>
            {!generateOne ?
                <input
                    value={moduleName}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Adding iteration"
                    className="custom-input"
                />
                :
                <GenerateModule callBack={handleGenerateModule} removeCallBack={() => setgenerateOne(false)} />
            }
        </div>
    )
}

export default Module_input