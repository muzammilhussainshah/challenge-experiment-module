import React from 'react'

export const GenerateModuleTitle = ({ handleGenerate }) => {
    return (<div className='prompt_container'>
        <p className='input_title'>To add a new iteration, start typing a<br /> prompt or <span className='under_line generate_button'
            onClick={handleGenerate}>generate</span> one.</p>
    </div>

    )
}
