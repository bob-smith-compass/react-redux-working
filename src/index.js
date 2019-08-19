import React from 'react';
import { render } from 'react-dom';
import Home from './components/home/Home.js';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Form from './components/form/Form.js';
import About from './components/about/About.js';
import App from './App.js';
/**
 * Redux
 * 1. create store in your app entry point
 */
import { createStore } from 'redux';
let defaultState = {
    name: 'David',
    score: 5
}
let mreducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'INCREASE':
            return Object.assign({}, state, {score: defaultState.score + 1})
            // break;
        case 'DECREASE':
            return Object.assign({}, state, {score: defaultState.score - 1})
            // break;
    
        default:
            return state
            // break;
    }
}


function Hello() {
    return <div className="container-fluid">Hello React Redux
        {/* <Home /> */}
        <Home />
        {/* <Switch> */}
        {/* <Switch> indicates that only 1 route should match */}
        <div className="btn-group" role="group" >
            <Link to="form" className="btn btn-primary btn-larg">Form</Link>
            <Link to="/" className="btn btn-primary btn-larg">Home</Link>
            <Link to="/about" className="btn btn-primary btn-larg">About</Link>
        </div>

        {/* </Switch> */}
        <Route exact path="/" compoment={Home} />
        <Route exact path="/about" compoment={About} />
    </div>
}

// render(<Router exct="form" component={Form}><Hello /></Router>, document.getElementById('root'));
render(<Router><App /></Router>, document.getElementById('root'));