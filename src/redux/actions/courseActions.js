/**
 * action creator
 * @param {object} course 
 */
function createCourse(course) {
    return {
        type: 'CREATE_COURSE',
        course
    }
}