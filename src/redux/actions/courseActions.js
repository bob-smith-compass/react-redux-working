/**
 * action creator
 * @param {object} course 
 */
export function createCourse(course) {
    return {
        type: 'CREATE_COURSE',
        course
    }
}