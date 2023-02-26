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
import getAllDataAriza from '../sliceAdmin/arizalar'
import talimYunalishAdmin from "../sliceAdmin/talimyunlishAdd"
import getStudyTypesAbuturent from "../sliceAdmin/talimyunlishAdd/getStudyTypesAdmin"
import deleteAbuturentId from "../sliceAdmin/talimyunlishAdd/deleteAbuturent"
import facultytypesId from "../sliceAdmin/talimYunalishTurlari/postFacultet/index.js"
import facultyTypeAdd from "../sliceAdmin/talimYunalishTurlari/postFacultyTypeAdd"
import editTalimYunalishType from "../sliceAdmin/talimYunalishTurlari/editTalimYunalishType"
import examsubjectcreate from "../sliceAdmin/exam/exsamsubjectcreate"
import getAllexamsubject from "../sliceAdmin/exam/getAllexamsubject"
import examdeleteId from "../sliceAdmin/exam/examdeleteId"
import facultetsselectAdd from "../sliceAdmin/facultets/facultetsAdd"
import facultetsgetAll from "../sliceAdmin/facultets/facultetsgetAll"
import facultetsdeleteId from "../sliceAdmin/facultets/facultetsdeleteId"
import editAbuturentId from "../sliceAdmin/talimyunlishAdd/editPutAbuturent" 
import getTalimYunalish from "../sliceAdmin/talimyunlishAdd/index.js"

import getApplicationData from "../sliceAdmin/arizalar/applications/index.js"
import getExcelData from "../sliceAdmin/arizalar/downloadExel/index"

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
        talimYunalishAdmin,
        getStudyTypesAbuturent,
        deleteAbuturentId,
        facultytypesId,
        facultyTypeAdd,
        editTalimYunalishType,
        examsubjectcreate,
        getAllexamsubject,
        examdeleteId,
        facultetsselectAdd,
        facultetsgetAll,
        facultetsdeleteId,
        editAbuturentId,
        getAllDataAriza,
        getTalimYunalish,

        getApplicationData,
        getExcelData
    },
})