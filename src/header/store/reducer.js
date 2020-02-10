import { HANDLE_INPUT_FOCUSED, HANDLE_INPUT_BLUR} from "./actionType";

const defaultState = {
    focused: false
}

export default (state = defaultState, action) => {
    if(action.type === HANDLE_INPUT_BLUR) {
        return { focused: false }
    }
    if(action.type === HANDLE_INPUT_FOCUSED) {
        return { focused: true }
    }
    return state
}