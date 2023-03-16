import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {API_GLOBAL} from "../../../globalApi";

export const changePasswordFetch = createAsyncThunk('agentAuthFetch', async (payload)=> {
    return await fetch(`${API_GLOBAL}v1/agent/add-student`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('access-token')}`
        },
        body:JSON.stringify({

        }),
    }).then((res)=> res.json())
})

const changePassword = createSlice({
    name: 'agentAuth',
    initialState: {
        message: '',
        status: null,
    },
    extraReducers: {
        [changePasswordFetch.pending]: (state)=> {
            state.status = 'loading'
        },
        [changePasswordFetch.fulfilled]: (state, action)=> {
            state.status = 'success'
            if(action?.payload?.success){
                state.pushAnswer = true
            }
            if(action?.payload?.success === false){
                state.status = 'error'
                state.message = action?.payload?.errors[0]?.errorMsg
            }
        },
        [changePasswordFetch.rejected]: (state)=> {
            state.status = 'error'
        }
    }
})


export default changePassword.reducer