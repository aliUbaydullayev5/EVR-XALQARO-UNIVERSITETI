import {configureStore} from '@reduxjs/toolkit'
import firstVerify from '../slices/firstVerify/index'

import firstSmsCodeFetch from "../slices/firstSmsVerifyCode"
import homeAllData from '../slices/homeAllData'
import deployFile from '../slices/deployFile'
import receptionPost from '../slices/receptionPost'
import messageSlice from '../slices/message'


export default configureStore({
    reducer: {
        firstVerify,
        firstSmsCodeFetch,
        homeAllData,
        deployFile,
        receptionPost,
        messageSlice
    },

})