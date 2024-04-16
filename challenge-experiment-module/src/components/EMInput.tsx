import React, { useState } from "react";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
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
                <div
                    style={{ display: 'flex', justifyContent: "flex-end", alignItems: "center", flex: 1, marginRight:"16px"}}>

                    <p className='input_title'>Selection</p>
                    <FiberManualRecordIcon style={{ color: 'green', fontSize: 14 }} />
                </div>
            </div>
        </>
    )
}
