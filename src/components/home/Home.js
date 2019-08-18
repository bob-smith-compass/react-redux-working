import React, { Component } from 'react'
import Form from '../form/Form';
import Link from 'react-router-dom';


export default class Home extends Component {
    render() {
        return (
            <div className="jumbotron">
                Home
            <Form fname='David' />
            <Link to="about" clasName="btn btn-primary btn-lg">
                About
            </Link>

            </div>
        )
    }
}
