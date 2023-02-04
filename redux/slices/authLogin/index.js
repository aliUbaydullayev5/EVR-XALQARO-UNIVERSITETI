import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchAuthLogin = createAsyncThunk('fetchAuthLogin', async (payload)=> {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/v1/auth/personal-cabinet`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            phoneNumber: payload.phoneNumber,
            password: payload.password
        }),
    }).then((res)=> res.json())
})

const authLogin = createSlice({
    name: 'authLogin',
    initialState: {
        status: null,
        message: ''
    },
    extraReducers: {
        [fetchAuthLogin.pending]: (state)=> {
            state.status = 'loading'
        },
        [fetchAuthLogin.fulfilled]: (state, action)=> {
            state.status = 'success'
            console.log(action)
        },
        [fetchAuthLogin.rejected]: (state)=> {
            state.status = 'error'
        }
    },
    reducers:{
        resetAuthLogin(state){
            state.status = null
            state.message = ''
        }
    }
})



export const { resetAuthLogin } = authLogin.actions
export default authLogin.reducer