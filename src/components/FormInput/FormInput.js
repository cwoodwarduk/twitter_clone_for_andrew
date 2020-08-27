import React, { useState } from 'react';
import './FormInput.css';


function FormInput({fieldName, fieldType, charLimit, setInput}) {

    const [charCount, setCharCount] = useState(0);

    const setStates = (e) => {

        setCharCount(e.target.value.length);
        
        setInput(e.target.value);

        e.preventDefault();
    }
    
    if (charLimit !== 0) {
        return (
            <div>
                <div className="formInput">
                    <h2>{fieldName}</h2>
                    <input type={fieldType} onKeyUp={(e) => setStates(e)} />
                </div>
                <div className="formInput__charCount">{charCount}/{charLimit}</div>
            </div>
        )
    } else {
        return (
            <div>
                <div className="formInput formInput__noCount">
                    <h2>{fieldName}</h2>
                    <input type={fieldType} onKeyUp={(e) => setStates(e)} />
                </div>
            </div>
        )
       
    }
    
}

export default FormInput;
