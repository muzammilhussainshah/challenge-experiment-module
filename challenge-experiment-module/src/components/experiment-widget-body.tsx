import React from 'react'

import { GenerateModuleTitle } from './generate-module-title.tsx'

export const ModuleWidgetBody = ({ moduleWidgetBodyProps }) => {
    const {
        handleGenerate,
        isLock,
        addIteration,
        setgenerateOne,
        setaddIteration,
        footerButtonWithIteration,
        footerButtonWithoutIteration,
    } = moduleWidgetBodyProps

    return (
        <>
            {addIteration &&
                <GenerateModuleTitle
                    handleGenerate={() => {
                        handleGenerate(addIteration, setgenerateOne, setaddIteration)
                    }} />}
            <div className='footer_buttons_container'>
                {addIteration ? footerButtonWithIteration.map((item, index) => (
                    <p
                        key={index.toString()}
                        className='input_title footer_buttons'
                        onClick={item.callback}>{item.title}</p>
                )) :
                    (!isLock && footerButtonWithoutIteration.map((item, index) => (
                        <p
                            key={index.toString()}
                            className='input_title footer_buttons'
                            onClick={item.callback}>{item.title}</p>
                    )))}
            </div>
        </>
    )
}

