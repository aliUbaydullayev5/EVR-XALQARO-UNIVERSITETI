
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
export const forgonPasswordFetch = createAsyncThunk('postFirstVerify', async (payload)=> {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/'}v1/auth/change-password`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            phoneNumber: payload.phoneNumber,
            idNumber: payload.idNumber,
            verifyDode: payload.verifyDode,
            password: payload.password,
            prePassword: payload.prePassword
        }),
    }).then((res) => res.json())
})

const forgonPassword = createSlice({
    name: 'postVerify',
    initialState: {
        status: null,
        message: ''
    },
    extraReducers: {
        [forgonPasswordFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [forgonPasswordFetch.fulfilled]: (state, action) => {
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
        [forgonPasswordFetch.rejected]: (state) => {
            state.status = 'error'
        }
    },
    reducers: {
        resetData(state) {
            state.status = null
            state.message = ''

        }
    }
})



export const { resetTimerVerify } = forgonPassword.actions
export default forgonPassword.reducer