import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
export const receptionPostFetch = createAsyncThunk('receptionPostFetch', async (payload)=> {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://185.196.213.87:8088/api/'}v1/auth/admission-student`, {
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
    }).then((res)=> res.json())
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
            }
            if(action?.payload?.success == false){
                state.status = 'error'
                state.message = action?.payload?.errors[0]?.errorMsg.split('_').join(' ')
            }
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