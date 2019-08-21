import { combinedReducers } from 'redux';

import courses from './courseReducer';

const rootReducer = combinedReducers({
    courses // Object shorcut notation courses: courses
});

export default rootReducer;