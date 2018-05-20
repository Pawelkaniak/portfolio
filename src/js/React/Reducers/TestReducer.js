import * as constants from '../Constants'

const initialState = {
    test: false,
}

function TestReducer(state = initialState, action) {
    switch (action.type) {
        case constants.EVENTS_TEST:
            return { ...state, test: true };
        default:
            return state;
    }
}

export default TestReducer;