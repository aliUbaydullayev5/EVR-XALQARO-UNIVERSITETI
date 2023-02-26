
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
export const getUserIdFetch = createAsyncThunk('getUserIdFetch', async (payload)=> {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://185.196.213.87:8088/api/'}v1/auth/get-id-number?phoneNumber=${payload.userName}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res) => res.json())
})

const getUserId = createSlice({
    name: 'getUserId',
    initialState: {
        status: null,
        message: '',
        data: ''
    },
    extraReducers: {
        [getUserIdFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [getUserIdFetch.fulfilled]: (state, action) => {
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
        [getUserIdFetch.rejected]: (state) => {
            state.status = 'error'
        }
    },
    reducers: {
        resetTimerVerify(state) {
            state.verifyCode = false
            state.status = null
        }
    }
})



export const { resetTimerVerify } = getUserId.actions
export default getUserId.reducer