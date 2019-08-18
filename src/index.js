import React from 'react';
import { render } from 'react-dom';
import Home from './components/home/Home.js';
import { BrowserRouter as Router } from 'react-router-dom';


function Hello() {
    return <div>Hello React Redux
        <Home />
    </div>
}

render(<Router><Hello /></Router>, document.getElementById('root'));