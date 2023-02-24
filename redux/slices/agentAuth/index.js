import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
export const agentAuthFetch = createAsyncThunk('agentAuthFetch', async (payload)=> {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://185.196.213.87:8088/api/'}v1/auth/admission-agent`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(payload),
    }).then((res)=> res.json())
})

const agentAuth = createSlice({
    name: 'agentAuth',
    initialState: {
        message: '',
        status: null,
        pushAnswer: false
    },
    extraReducers: {
        [agentAuthFetch.pending]: (state)=> {
            state.status = 'loading'
        },
        [agentAuthFetch.fulfilled]: (state, action)=> {
            state.status = 'success'
            if(action?.payload?.success){
                state.message = action.payload.message
                state.pushAnswer = true
            }
            if(action?.payload?.success == false){
                state.status = 'error'
                state.message = action?.payload?.errors[0]?.errorMsg
            }
        },
        [agentAuthFetch.rejected]: (state)=> {
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


export const {resetVerify} = agentAuth.actions
export default agentAuth.reducer