import React from 'react';
import { render } from 'react-dom';
import Home from './components/home/Home.js';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Form from './components/form/Form.js';
import About from './components/about/About.js';
import App from './App.js';

// import store  from './store/configStore';
/**
 * readt-redux
 */
import { Provider } from 'react-redux';
/**
 * TODO: move all this redux logic to redux
 */
import {createStore} from 'redux';
import rootReducer from './redux/reducers/courseReducer';

let store = createStore(rootReducer)


function Hello() {

    let handleClick = (e) => {
        console.log('handleClick');
        store.dispatch({ type: 'INCREASE' })
    }
    return <div className="container-fluid">Hello React Redux
        {/* <Home /> */}
        <Home />
        {/* <Switch> */}
        {/* <Switch> indicates that only 1 route should match */}
        <div className="btn-group" role="group" >
            <Link to="form" className="btn btn-primary btn-larg">Form</Link>
            <Link to="/" className="btn btn-primary btn-larg">Home</Link>
            <Link to="/about" className="btn btn-primary btn-larg">About</Link>
            <button onClick={handleClick}>Action</button>
        </div>

        {/* </Switch> */}
        <Route exact path="/" compoment={Home} />
        <Route exact path="/about" compoment={About} />
    </div>
}

// render(<Router exct="form" component={Form}><Hello /></Router>, document.getElementById('root'));
render(<Router><Provider store={store}><App /></Provider></Router>, document.getElementById('root'));