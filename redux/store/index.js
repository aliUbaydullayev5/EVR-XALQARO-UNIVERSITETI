import {configureStore} from '@reduxjs/toolkit'
import firstVerify from '../slices/firstVerify/index'
import firstSmsCodeFetch from '../slices/firstSmsVerifyCode'



export default configureStore({
    reducer: {
        firstVerify,
        firstSmsCodeFetch,
    }
})