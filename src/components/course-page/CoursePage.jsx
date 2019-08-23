import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import PropTypes from 'prop-types';


class CoursePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
            courses: [{
                title: ""
            }]
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
        console.log(this.state);
        /**
         * connect() automatically passes `dispatch` if we ommit mapDispatchToProps()
         */
        this.props.dispatch(courseActions.createCourse()); // Uncaught TypeError: _this.props.dispatch is not a function - need `PropTypes`
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* <h1>Course: <span style={this.elStyle}></span>{this.state.course.title}</h1> */}
                    <h2>Add</h2>
                    <input type="text" onChange={this.handleChange} value={this.state.course.title}/>
                    <input type="submit" value="Save" className="btn btn-warning btn-lg"/>
                    {this.props.courses.map( e => (<div key={e}>{e}</div>))}

                </form>
            </div>
        )
    }
}

CoursePage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired
}
/**
 * Connect CoursePage component to redux
 */
// function mapStateToProps(state, ownProps){
function mapStateToProps(state){
    return {
        // courses: state.courses
        courses: [{title: 'JS'}]
    }
}

// function mapDispatchToProps(){
//     // TODO: mapDispatchToProps is optional
// }
// export default ConnectedCoursePage = connect(mapStateToProps, mapDispatchToProps)(CoursePage);
// export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
export default connect(mapStateToProps)(CoursePage);
