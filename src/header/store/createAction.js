import { HANDLE_INPUT_BLUR, HANDLE_INPUT_FOCUSED } from "./actionType";

export const inputFocusedAction = () => ({
    type: HANDLE_INPUT_FOCUSED
})


export const inputBlurAction = () => ({
    type: HANDLE_INPUT_BLUR
})