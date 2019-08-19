/**
 * Redux
 * 1. create store in your app entry point
 * 2. store.dispatch(action)
 * 3. store.subscribe(listener)
 * 4. store.getState()
 * 5. replaceReducer(nextReducer)
 */
import { createStore } from 'redux';
let defaultState = {
    name: 'David',
    score: 5
}
let mreducer = (state = defaultState, action) => {
    console.log(`state`, state, action.type);
    switch (action.type) {
        case 'INCREASE':
            return Object.assign({}, state, {score: defaultState.score + 1}) // BUG, state does not update as you wish
            // break;
        case 'DECREASE':
            return Object.assign({}, state, {score: defaultState.score - 1})
            // break;
    
        default:
            return state
            // break;
    }
}
const store = createStore(mreducer);
export default store;
