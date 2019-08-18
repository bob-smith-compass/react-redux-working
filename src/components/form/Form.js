import React from 'react';

const Form = () => {

    let handleChange = (e) => {
        console.log(e.target.value);
    }
    return (
        <div>
            <input type="text" onChange={handleChange}/>
        </div>
    );
}

export default Form;
