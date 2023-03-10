
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {API_GLOBAL} from "../../../globalApi"

export const forgotPasswordFetch = createAsyncThunk('forgotPasswordFetch', async (payload)=> {
    return await fetch(`${API_GLOBAL}v1/auth/change-password`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            phoneNumber: payload.phoneNumber.match(/[0-9]+/g).join(''),
            idNumber: payload.idNumber,
            verifyDode: payload.verifyDode,
            password: payload.password,
            prePassword: payload.prePassword
        }),
    }).then((res) => res.json())
})

const forgotPassword = createSlice({
    name: 'forgotPassword',
    initialState: {
        status: null,
        message: ''
    },
    extraReducers: {
        [forgotPasswordFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [forgotPasswordFetch.fulfilled]: (state, {payload}) => {
            if(payload?.success){
                state.status = 'success'
                state.message = payload?.message.split('_').join(' ')
            }
            if(payload?.success == false){
                state.status = 'error'
                state.message = payload?.errors[0]?.errorMsg.split('_').join(' ')
            }
        },
        [forgotPasswordFetch.rejected]: (state) => {
            state.status = 'error'
        }
    },
    reducers: {
        resetForgotData(state) {
            state.status = null
            state.message = ''
        }
    }
})



export const { resetForgotData } = forgotPassword.actions
export default forgotPassword.reducer