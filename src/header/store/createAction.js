import * as actionType from "./actionType";
import axios from 'axios';

// 不向外导出的统一放在上面
const changeListAction = (data) => ({
    type: actionType.HANDLE_GET_LIST,
    data
})

export const inputFocusedAction = () => ({
    type: actionType.HANDLE_INPUT_FOCUSED
})

export const inputBlurAction = () => ({
    type: actionType.HANDLE_INPUT_BLUR
})

export const getListData = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const { data: { data } } = res
            dispatch(changeListAction(data))
        }).catch(() => {
            console.log('error')
        })
    }
}