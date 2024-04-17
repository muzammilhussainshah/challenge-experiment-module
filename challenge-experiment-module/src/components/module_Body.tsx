import React from 'react'
import { GenerateModuleTitle } from './GenerateModuleTitle.tsx'

export const Module_Body = ({ module_Body_Props }) => {
    const {
        handleGenerate,
        isLock,
        addIteration,
        setgenerateOne,
        setaddIteration,
        FOOTER_BUTTON_WITH_ITERATION,
        FOOTER_BUTTON_WITHOUT_ITERATION,
    } = module_Body_Props
    return (
        <>
            {addIteration &&
                <GenerateModuleTitle
                    handleGenerate={() => {
                        handleGenerate(addIteration, setgenerateOne, setaddIteration)
                    }} />}
            <div className='footer_buttons_container'>
                {addIteration ? FOOTER_BUTTON_WITH_ITERATION.map((item, index) => (
                    <p
                        key={index.toString()}
                        className='input_title footer_buttons'
                        onClick={item.callback}>{item.title}</p>
                )) :
                    (!isLock && FOOTER_BUTTON_WITHOUT_ITERATION.map((item, index) => (
                        <p
                            key={index.toString()}
                            className='input_title footer_buttons'
                            onClick={item.callback}>{item.title}</p>
                    )))}
            </div>
        </>
    )
}

