import React, { useState } from "react";

export const EMInput = ({ item, index }: any) => {
    const [addIteration, setAddIteration] = useState(false)
    const [moduleName, setmoduleName] = React.useState<string>('')
    const handleInputChange = (event) => {
        setmoduleName(event.target.value);
    };

    return (
        <>
            <div key={index.toString()} className='input_container'>
                <p className='input_title'>EM-{index + 1}</p>
                <p className='input_title'>{item}</p>
            </div>
        </>
    )
}
