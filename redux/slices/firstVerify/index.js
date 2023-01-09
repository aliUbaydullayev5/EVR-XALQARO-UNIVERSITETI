
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
export const firstVerifyFetch = createAsyncThunk('postFirstVerify', async (payload)=> {
    return await fetch('http://192.168.20.61:1010/api/v1/auth/check-phone', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: payload.firstName,
            phoneNumber: payload.phoneNumber
        }),
    }).then((res) => res.json())
})

const firstVerify = createSlice({
    name: 'postVerify',
    initialState: {
        verifyCode: false,
        status: null,
    },
    extraReducers: {
        [firstVerifyFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [firstVerifyFetch.fulfilled]: (state, action) => {
            state.status = 'success'
            if (action.payload.success) {
                state.verifyCode = true
            }
        },
        [firstVerifyFetch.rejected]: (state) => {
            state.status = 'error'
        }
    },
    reducers: {
        resetTimerVerify(state) {
            state.verifyCode = false
        }
    }
})



export const { resetTimerVerify } = firstVerify.actions
export default firstVerify.reducer