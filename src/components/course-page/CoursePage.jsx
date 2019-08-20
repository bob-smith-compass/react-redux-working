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
    handleChange = (e) => {
        console.log(e.target.value);
        console.log(this.state);
        const course = {...this.state.course, title: e.target.value}
        this.setState({course: course})
        
    }
    render() {
        return (
            <div>
                <form action="">
                    <h1>Course</h1>
                    <h2>Add</h2>
                    <input type="text" onChange={this.handleChange} value={this.state.course.title}/>
                    <input type="submit" value="Save" className="btn btn-warning btn-lg"/>

                </form>
            </div>
        )
    }
}
