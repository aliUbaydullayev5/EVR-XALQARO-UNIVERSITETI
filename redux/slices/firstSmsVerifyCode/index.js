import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const firstSmsCodeFetch = createAsyncThunk('postSmsCodeFetch', async (payload)=> {
    return await fetch('http://192.168.12.61:1010/api/v1/auth/verify-phone', {
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
        firstToken: null,
        pushToHome: false
    },
    extraReducers: {
        [firstSmsCodeFetch.pending]: (state)=> {
            state.status = 'loading'
        },
        [firstSmsCodeFetch.fulfilled]: (state, action)=> {
            state.status = 'success'
            if(action.payload.message == 'OK' && action.payload.success == true){
                state.firstToken = 'success'
                state.pushToHome = true
                if(localStorage.getItem('firstToken')){
                    state.pushToHome = true
                    state.firstToken = 'success'
                }else{
                    localStorage.setItem('firstToken', 'success')
                }
            }
        },
        [firstSmsCodeFetch.rejected]: (state)=> {
            state.status = 'error'
        }
    },
})

export default firstSmsCode.reducer