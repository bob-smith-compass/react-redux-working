export default function( state = [], action ){
    switch (action.type) {
        case 'CREATE_COURSE':
            return [...state, { ...action.course }] 
            // break;
    
        default:
            return state
            // break;
    }
}