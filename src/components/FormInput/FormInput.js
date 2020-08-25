import React, { useState } from 'react';
import './FormInput.css';

function FormInput({fieldName, charLimit}) {

    const [charCount, setCharCount] = useState(0);

    // let charCount = 0;

    // const setCharCount = (e) => {
    //     e.stopPropogation();
    //     console.log('blah');
    // }
    
    if (charLimit !== 0) {
        return (
            <div>
                <div className="formInput">
                    <h2>{fieldName}</h2>
                    <input type="text" onKeyUp={(e) => setCharCount(e.target.value.length)}/>
                </div>
                <div className="formInput__charCount">{charCount}/{charLimit}</div>
            </div>
        )
    } else {
        return (
            <div>
                <div className="formInput formInput__noCount">
                    <h2>{fieldName}</h2>
                    <input type="text" />
                </div>
            </div>
        )
       
    }
    
}

export default FormInput;
