import {configureStore} from '@reduxjs/toolkit'
import firstVerify from '../slices/firstVerify/index'

import firstSmsCodeFetch from "../slices/firstSmsVerifyCode"
import homeAllData from '../slices/homeAllData'
import deployFile from '../slices/deployFile'
import receptionPost from '../slices/receptionPost'
import messageSlice from '../slices/message'
import getStudyTypes from '../slices/getStudyTypes'
import reseptionCheckPhoneSlice from '../slices/receptionVerifyPhone'
import receptionSmsVerify from '../slices/receptionSmsVerify'
import loginAdminThunk from "../slices/loginAdmin"
import getAdminArizalar from '../sliceAdmin/arizalar'
import talimYunalishAdmin from "../sliceAdmin/talimyunlishAdd"
import getStudyTypesAbuturent from "../sliceAdmin/talimyunlishAdd/getStudyTypesAdmin"
import deleteAbuturentId from "../sliceAdmin/talimyunlishAdd/deleteAbuturent"
import editAbuturentId from "../sliceAdmin/talimyunlishAdd/editPutAbuturent"
import facultytypesId from "../sliceAdmin/talimYunalishTurlari/postFacultet/index.js"

export default configureStore({
    reducer: {
        firstVerify,
        firstSmsCodeFetch,
        homeAllData,
        deployFile,
        receptionPost,
        messageSlice,
        getStudyTypes,
        reseptionCheckPhoneSlice,
        receptionSmsVerify,
        loginAdminThunk,
        getAdminArizalar,
        talimYunalishAdmin,
        getStudyTypesAbuturent,
        deleteAbuturentId,
        editAbuturentId,
        facultytypesId,
    },
})