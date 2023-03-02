import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API_GLOBAL} from "../../../globalApi";

export const firstSmsCodeFetch = createAsyncThunk('postSmsCodeFetch', async (payload)=> {
    return await fetch(`${API_GLOBAL}v1/auth/verify-phone`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            verifyCode: payload.verifyCode,
            phoneNumber: payload.phoneNumber
        }),
    }).then((res)=> res.json())
})

const firstSmsCode = createSlice({
    name: 'postSmsCode',
    initialState: {
        status: null,
        pushToHome: false,
        message: ''
    },
    extraReducers: {
        [firstSmsCodeFetch.pending]: (state)=> {
            state.status = 'loading'
        },
        [firstSmsCodeFetch.fulfilled]: (state, action)=> {
            state.status = 'success'
            if(action.payload.success == true){
                state.pushToHome = true
                state.message = 'Siz muvofiyaqatli ottingiz'
                if(localStorage.getItem('firstToken')) state.pushToHome = true
                else localStorage.setItem('firstToken', 'success')
            }
            if(action?.payload?.success == false){
                state.status = 'error'
                state.message = action?.payload?.errors[0]?.errorMsg
            }
        },
        [firstSmsCodeFetch.rejected]: (state)=> {
            state.status = 'error'
        }
    },
})

export default firstSmsCode.reducer