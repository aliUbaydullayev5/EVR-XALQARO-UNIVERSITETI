import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {API_GLOBAL} from "../../../globalApi";

export const agentAddUserFetch = createAsyncThunk('agentAuthFetch', async (payload)=> {
    return await fetch(`${API_GLOBAL}v1/agent/add-student`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('access-token')}`
        },
        body:JSON.stringify({
            lastName: payload.lastName,
            studyType: payload.studyType,
            firstName: payload.firstName,
            patron: payload.patron,
            password: payload.password,
            prePassword: payload.prePassword,
            verifyCode: payload.verifyCode,
            passportSeries: payload.passportSeries,
            phoneNumber: payload.phoneNumber?.match(/[0-9]+/g).join(''),
            extraPhoneNumber: payload.extraPhoneNumber?.match(/[0-9]+/g).join(''),
            courseLevel: payload.courseLevel,
            studyLanguage: payload.studyLanguage,
            educationType: payload.educationType,
            facultyId: payload.facultyId,
            diplomaId: payload.diplomaId,
            passportId: payload.passportId
        }),
    }).then((res)=> res.json())
})

const agentAddUser = createSlice({
    name: 'agentAuth',
    initialState: {
        message: '',
        status: null,
    },
    extraReducers: {
        [agentAddUserFetch.pending]: (state)=> {
            state.status = 'loading'
        },
        [agentAddUserFetch.fulfilled]: (state, action)=> {
            state.status = 'success'
            if(action?.payload?.success){
                state.message = action.payload.message
                state.pushAnswer = true
            }
            if(action?.payload?.success === false){
                state.status = 'error'
                state.message = action?.payload?.errors[0]?.errorMsg
            }
        },
        [agentAddUserFetch.rejected]: (state)=> {
            state.status = 'error'
        }
    },
    reducers:{
        resetPushData(state){
            state.status = null
            state.message = ''
        }
    }
})


export const {resetPushData} = agentAddUser.actions
export default agentAddUser.reducer