import {configureStore} from '@reduxjs/toolkit'
import firstVerify from '../slices/firstVerify/index'
import firstSmsCodeFetch from '../slices/firstSmsVerifyCode'
import transformPushThunk from "../slices/transformPush"
export default configureStore({
    reducer: {
        firstVerify,
        firstSmsCodeFetch,
        transformPushThunk,
    }
})