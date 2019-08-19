import React, { Component } from 'react'
import Form from '../form/Form';
// import Link from 'react-router-dom';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Header from '../common/Header';
import { Route } from 'react-router-dom';
import About from '../about/About';


export default class Home extends Component {
    render() {
        return (
            <div className="jumbotron">
                Home
            {/* <Form fname='David' /> */}
            {/* <Link to="/" clasName="btn btn-primary btn-lg"> */}
                About
            {/* </Link> */}
            {/* <Router exact="form" omponent={Form}>

                <Header />

            </Router> */}
            <Header />

            <Link  to="form" > Form</Link>
            <Route exact path="/" compoment={Home} />
            <Route exact path="/about" compoment={About} />

            </div>
        )
    }
}
