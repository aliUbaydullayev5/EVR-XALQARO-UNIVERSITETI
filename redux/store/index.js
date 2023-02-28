import { configureStore } from '@reduxjs/toolkit'
import firstVerify from '../slices/firstVerify/index'
import firstSmsCodeFetch from "../slices/firstSmsVerifyCode"
import homeAllData from '../slices/homeAllData'
import deployFile from '../slices/deployFile'
import receptionPost from '../slices/receptionPost'
import messageSlice from '../slices/message'
import getDirectType from '../slices/getStudyTypes/getDirectType'
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

import agentAuth from '../slices/agentAuth'
import authLogin from '../slices/authLogin'
import getFacultyLanguage from '../slices/getStudyTypes/getFacultyLanguage'
import getFacultyType from '../slices/getStudyTypes/getFacultyType'
import getInfoUserCabinet from '../slices/getInfoUserCabinet'
import quationCreate from '../sliceAdmin/quation/quationadd/index.js'
import quationget from '../sliceAdmin/quation/quationgett/index.js'


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
        loginAdminThunk,
        getAllDataAriza,
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
        agentAuth,
        authLogin,
        getFacultyLanguage,
        getFacultyType,
        getInfoUserCabinet,
        quationCreate,
        quationget,
    },
})