import React from "react";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
export const CreatedModuleList = ({ item, index }: any) => {
    return (
        <>
            <div key={index.toString()} className='input_container'>
                <p className='input_title'>EM-{index + 1}</p>
                <p className='input_title'>{item}</p>
                <div className="input" >
                    <p className='input_title'>Selection</p>
                    <FiberManualRecordIcon style={{ color: 'green', fontSize: 14 }} />
                </div>
            </div>
        </>
    )
}
