import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API_GLOBAL} from "../../../globalApi";

export const fetchAuthLogin = createAsyncThunk('fetchAuthLogin', async (payload)=> {
    return await fetch(`${API_GLOBAL}v1/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            userName: payload.userName,
            password: payload.password
        }),
    })
        .then((res)=> res.json())
        .then((json)=> {
            return {...json, tokenName: payload.tokenName}
        })
})

const authLogin = createSlice({
    name: 'authLogin',
    initialState: {
        status: null,
        message: '',
        data: {}
    },
    extraReducers: {
        [fetchAuthLogin.pending]: (state)=> {
            state.status = 'loading'
        },
        [fetchAuthLogin.fulfilled]: (state, action)=> {
            if(action.payload.success === true){
                state.data = action.payload.data
                state.status = 'success'
                localStorage.setItem(action.payload.tokenName, action?.payload?.data?.accessToken)
            }
            else if(action?.payload?.success === false){
                state.status = 'error'
                state.message = action?.payload?.errors[0]?.errorMsg
            }
        },
        [fetchAuthLogin.rejected]: (state, action)=> {
            state.status = 'error'
        }
    },
    reducers:{
        resetAuthLogin(state){
            state.status = null
            state.message = ''
            state.data = {}
        }
    }
})



export const { resetAuthLogin } = authLogin.actions
export default authLogin.reducer