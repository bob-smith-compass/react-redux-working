import React from 'react';
import { render } from 'react-dom';
import Form from './components/form/Form.js';


function Hello() {
    return <div>Hello React Redux
        <Form fname='David' />
    </div>
}

render(<Hello />, document.getElementById('root'));