import * as actionType from "./actionType";
import { fromJS} from "immutable"; // 可以查阅immutable的官网

const defaultState = fromJS({
    focused: false,
    list: [],
})

export default (state = defaultState, action) => {
    if(action.type === actionType.HANDLE_INPUT_BLUR) {
        // immutable对象set方法会结合之前immutable对象的值和设置的值，返回一个全新的对象
        return state.set('focused', false)
    }
    if(action.type === actionType.HANDLE_INPUT_FOCUSED) {
        return state.set('focused', true)
    }
    if(action.type === actionType.HANDLE_GET_LIST) {
        return state.set('list', action.data)
    }
    return state
}