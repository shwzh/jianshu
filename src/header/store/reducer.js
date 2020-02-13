import * as actionType from "./actionType";

const defaultState = {
    focused: false
}

export default (state = defaultState, action) => {
    if(action.type === actionType.HANDLE_INPUT_BLUR) {
        return { focused: false }
    }
    if(action.type === actionType.HANDLE_INPUT_FOCUSED) {
        return { focused: true }
    }
    return state
}