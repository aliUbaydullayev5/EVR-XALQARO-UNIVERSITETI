import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const receptionSmsVerifyFetch = createAsyncThunk('receptionSmsVerifyFetch', async (payload)=> {
    console.log(payload)
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://185.196.213.87:8088/api/'}v1/auth/verify-phone`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            verifyCode: payload.verifyCode,
            phoneNumber: payload.phoneNumber?.match(/[0-9]+/g).join('')
        }),
    }).then((res)=> res.json())
})


const receptionSmsVerify = createSlice({
    name: 'receptionSmsVerify',
    initialState: {
        status: null,
        message: ''
    },
    extraReducers: {
        [receptionSmsVerifyFetch.pending]: (state)=> {
            state.status = 'loading'
        },
        [receptionSmsVerifyFetch.fulfilled]: (state, action)=> {
            if(action.payload.success == true){
                state.status = 'success'
            }
            if(action?.payload?.success == false){
                state.status = 'error'
                state.message = action?.payload?.errors[0]?.errorMsg
            }
        },
        [receptionSmsVerifyFetch.rejected]: (state)=> {
            state.status = 'error'
        }
    },
    reducers:{
        resetSmsVerify(state){
            state.status = null
            state.message = ''
        }
    }
})

export const { resetSmsVerify } = receptionSmsVerify.actions

export default receptionSmsVerify.reducer