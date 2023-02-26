import {configureStore} from '@reduxjs/toolkit'
import firstVerify from '../slices/firstVerify/index'
import firstSmsCodeFetch from "../slices/firstSmsVerifyCode"
import homeAllData from '../slices/homeAllData'
import deployFile from '../slices/deployFile'
import receptionPost from '../slices/receptionPost'
import messageSlice from '../slices/message'
import getDirectType from '../slices/getStudyTypes/getDirectType'
import reseptionCheckPhoneSlice from '../slices/receptionVerifyPhone'
import receptionSmsVerify from '../slices/receptionSmsVerify'
import agentAuth from '../slices/agentAuth'
import authLogin from '../slices/authLogin'
import getFacultyLanguage from '../slices/getStudyTypes/getFacultyLanguage'
import getFacultyType from '../slices/getStudyTypes/getFacultyType'
import getInfoUserCabinet from '../slices/getInfoUserCabinet'

export default configureStore({
    reducer: {
        firstVerify,
        firstSmsCodeFetch,
        homeAllData,
        deployFile,
        receptionPost,
        messageSlice,
        getDirectType,
        reseptionCheckPhoneSlice,
        receptionSmsVerify,
        agentAuth,
        authLogin,
        getFacultyLanguage,
        getFacultyType,
        getInfoUserCabinet
    },
})