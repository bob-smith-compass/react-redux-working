import React from 'react';
import Home from './components/home/Home';
import { Link, Route } from 'react-router-dom';
import About from './components/about/About';

const App = () => {
    return (
        <div>
            <h3>App</h3>
            <div className="container-fluid">Hello React Redux
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
        </div>
    );
}

export default App;


