import { configureStore } from '@reduxjs/toolkit'
import firstVerify from '../slices/firstVerify/index'
import firstSmsCodeFetch from "../slices/firstSmsVerifyCode"
import homeAllData from '../slices/homeAllData'
import receptionPost from '../slices/receptionPost'
import deployFile from '../slices/deployFile'
import messageSlice from '../slices/message'
import getDirectType from '../slices/getStudyTypes/getDirectType'
import reseptionCheckPhoneSlice from '../slices/receptionVerifyPhone'
import receptionSmsVerify from '../slices/receptionSmsVerify'
import loginAdminThunk from "../slices/loginAdmin"
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
import getApplicationData from "../sliceAdmin/arizalar/applications/index.js"
import getUserId from '../slices/getId/index'
import getAdmissionData from '../sliceAdmin/qabul/admission/index'
import sendSmsData from '../sliceAdmin/arizalar-qabul-sms/index'
import quationDeleteId from "../sliceAdmin/quation/quationDelete/index.js"
import forgonPassword from '../slices/passwordForgot'
import exsamManegemnt from "../sliceAdmin/quation/exsamMenegmnt/index.js"
import subjectMandatoryData from '../sliceAdmin/majburiy-fanlar/majburiy-fanlar-fetch/index.js'
import getManagementData from '../sliceAdmin/management/boshqaruv'
import getManagementUsers from "../sliceAdmin/management/menegementUsers"
import getLibraryAuthorData from '../slices/kutubxona/kutubxona-mualif'
import getLibraryLangData from '../slices/kutubxona/kutubxona-tili'
import getLibraryWayData from '../slices/kutubxona/kutubxona-yonalish'
import getLibraryData from '../slices/kutubxona/kutubxona-all'
import getGalleryData from '../slices/getGalleryData'
import getKutubxonaMuallifData from '../slices/kutubxona/kutubxona-mualif/index'
import authorCreate from "../sliceAdmin/libary/author/create.js"
import authorGet from "../sliceAdmin/libary/author/getAuthor.js"
import authorDelete from "../sliceAdmin/libary/author/deleteId.js"
import aboutGetData from "../sliceAdmin/about-us/getAbout.js"
import aboutreatePost from "../sliceAdmin/about-us/create.js"
import bookTypesGet from "../sliceAdmin/libary/booksTypes/getbooksType.js"
import bookTypesCreate from "../sliceAdmin/libary/booksTypes/create.js"
import bookTypesDeleteId from "../sliceAdmin/libary/booksTypes/deleteId.js"
import bookLaunguageGet from "../sliceAdmin/libary/bookLaunguage/getbooksLaunguage.js"
import bookLaunguageDeleteId from "../sliceAdmin/libary/bookLaunguage/deleteId.js"
import bookLaunguageCreate from "../sliceAdmin/libary/bookLaunguage/create.js"
import bookCreate from "../sliceAdmin/libary/book/create.js"
import bookDeleteId from "../sliceAdmin/libary/book/deleteId.js"
import bookGet from "../sliceAdmin/libary/book/getbook.js"
import solveTest from '../slices/solveTheTest'
import getTestQuestion from '../slices/getTestQuestion'
import xarajatlar from '../sliceAdmin/moliyaSlices/xarajatlar'
import xarajatlarAdd from '../sliceAdmin/moliyaSlices/xarajatlarAdd'
import premium from '../sliceAdmin/moliyaSlices/premium'
import premiumAdd from '../sliceAdmin/moliyaSlices/premiumAdd'
import newsAdminGet from "../sliceAdmin/news/getnews.js"
import getGalleryAdmin from "../sliceAdmin/gallerya/galleryGet.js"
import groupCreate from "../sliceAdmin/group/create.js"
import groupDeleteId from "../sliceAdmin/group/deleteId.js"
import groupGet from "../sliceAdmin/group/getbook.js"
import contentPriceGet from "../sliceAdmin/moliyaSlices/contentPrice/contentPriceGet"
import teacherCreate from "../sliceAdmin/employees/teacher/teacheeCreate/index.js"
import teacherGet from "../sliceAdmin/employees/teacher/teacherGet/index.js"
import employeeCreate from "../sliceAdmin/employees/employee/teacheeCreate/index.js"
import newsGet from '../slices/news'
import forgotPassword from '../slices/passwordForgot'
import chatSlice from '../slices/chatSlice'
import caruselcreate from "../sliceAdmin/carusel/caruselCreate/create.js"
import caruselAdminGet from "../sliceAdmin/carusel/caruselGet/getCarusel.js"
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
                getTalimYunalish,
                agentAuth,
                authLogin,
                getFacultyLanguage,
                getFacultyType,
                getInfoUserCabinet,
                quationCreate,
                quationget,
                getApplicationData,
                getUserId,
                getAdmissionData,
                sendSmsData,
                quationDeleteId,
                forgonPassword,
                subjectMandatoryData,
                getManagementData,
                getManagementUsers,
                aboutreatePost,
                getLibraryAuthorData,
                getLibraryLangData,
                getLibraryWayData,
                getLibraryData,
                exsamManegemnt,
                getGalleryData,
                getKutubxonaMuallifData,
                authorCreate,
                authorGet,
                authorDelete,
                aboutGetData,
                bookTypesGet,
                bookTypesCreate,
                bookTypesDeleteId,
                bookLaunguageGet,
                bookLaunguageDeleteId,
                bookLaunguageCreate,
                bookCreate,
                bookDeleteId,
                bookGet,
                solveTest,
                getTestQuestion,
                xarajatlar,
                xarajatlarAdd,
                premium,
                premiumAdd,
                newsAdminGet,
                getGalleryAdmin,
                groupCreate,
                groupDeleteId,
                groupGet,
                contentPriceGet,
                teacherCreate,
                teacherGet,
                employeeCreate,
                newsGet,
                forgotPassword,
                chatSlice,
                caruselcreate,
                caruselAdminGet,
        },
});