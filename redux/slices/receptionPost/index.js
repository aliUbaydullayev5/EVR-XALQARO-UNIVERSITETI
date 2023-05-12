import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {API_GLOBAL} from "../../../globalApi";
export const receptionPostFetch = createAsyncThunk('receptionPostFetch', async (payload)=> {
    return await fetch(`${API_GLOBAL}v1/auth/admission-student`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            courseLevel: payload.courseLevel,
            diplomaId: payload.diplomaId,
            educationType: payload.educationType,
            extraPhoneNumber: payload.extraPhoneNumber?.match(/[0-9]+/g).join(''),
            facultyId: payload.facultyId,
            firstName: payload.firstName,
            lastName: payload.lastName,
            passportId: payload.passportId,
            passportSeries: payload.passportSeries,
            password: payload.password,
            patron: payload.patron,
            phoneNumber: payload.phoneNumber?.match(/[0-9]+/g).join(''),
            prePassword: payload.prePassword,
            studyLanguage: payload.studyLanguage,
            studyType: payload.studyType,
            verifyCode: payload.verifyCode
        })
    })
        .then((res)=> res.json)
        .then((json)=> {
            return {...json, info: payload}
        })
})

const receptionPost = createSlice({
    name: 'receptionPost',
    initialState: {
        message: '',
        status: null,
        pushAnswer: false
    },
    extraReducers: {
        [receptionPostFetch.pending]: (state)=> {
            state.status = 'loading'
        },
        [receptionPostFetch.fulfilled]: (state, action)=> {
            state.status = 'success'
            if(action?.payload?.success){
                state.message = action.payload.message.split('_').join(' ')
                state.pushAnswer = true
                // localStorage.setItem('user-info')
            }
            if(action?.payload?.success == false){
                state.status = 'error'
                state.message = action?.payload?.errors[0]?.errorMsg.split('_').join(' ')
            }
            console.log(action.payload, 'payload user info')
            const jsonInfo = JSON.stringify(action.payload.info)
            localStorage.setItem('user-info', jsonInfo)
        },
        [receptionPostFetch.rejected]: (state)=> {
            state.status = 'error'
        }
    },
    reducers:{
        resetVerify(state){
            state.pushAnswer = false
            state.status = null
        }
    }
})


export const {resetVerify} = receptionPost.actions
export default receptionPost.reducer