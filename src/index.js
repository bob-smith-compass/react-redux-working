import React from 'react';
import { render } from 'react-dom';
import Form from './components/form/Form.js';


function Hello() {
    return <div>Hello React Redux
        <Form />
    </div>
}

render(<Hello />, document.getElementById('root'));