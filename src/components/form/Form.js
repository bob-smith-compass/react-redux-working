import React from 'react';

const Form = (props) => {

    let handleChange = (e) => {
        console.log(e.target.value);
    }
    return (
        <div>
            <input type="text" onChange={handleChange} defaultValue={props.fname} />
        </div>
    );
}

export default Form;
