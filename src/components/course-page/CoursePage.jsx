import React, { Component } from 'react'

export default class CoursePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            course: {
                title: ""
            }
        }
    }

    elStyle = {
        color: 'red'
    }

    handleChange = (e) => {
        console.log(e.target.value);
        console.log(this.state);
        const course = {...this.state.course, title: e.target.value}
        this.setState({course: course})
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Course: <span style={this.elStyle}></span>{this.state.course.title}</h1>
                    <h2>Add</h2>
                    <input type="text" onChange={this.handleChange} value={this.state.course.title}/>
                    <input type="submit" value="Save" className="btn btn-warning btn-lg"/>

                </form>
            </div>
        )
    }
}
