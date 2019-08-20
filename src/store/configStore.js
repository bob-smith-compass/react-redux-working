/**
 * Redux
 * 1. create store in your app entry point
 * 2. store.dispatch(action)
 * 3. store.subscribe(listener)
 * 4. store.getState()
 * 5. replaceReducer(nextReducer) // useful for hot-reloading
 */
import { createStore } from 'redux';
/**
 * Immutibility - dealing with
 */
import produce from 'immer';
let defaultState = {
    name: 'David',
    score: 5
}
const stateCopy = produce(defaultState, draftState => {
    draftState.score = defaultState.score + 1
})
let mreducer = (state = defaultState, action) => {
    console.log(`state`, state, action.type);
    switch (action.type) {
        case 'INCREASE':
            // store.setState({score: defaultState.score + 1}) // Redux way of dealing with state
            console.log(stateCopy);
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
