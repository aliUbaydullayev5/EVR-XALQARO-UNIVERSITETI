
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {API_GLOBAL} from "../../../globalApi";
export const firstVerifyFetch = createAsyncThunk('postFirstVerify', async (payload)=> {
    return await fetch(`${API_GLOBAL}v1/auth/check-phone`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: payload.firstName,
            phoneNumber: payload.phoneNumber.match(/[0-9]+/g).join('')
        }),
    }).then((res) => res.json().then((res) => console.log(res, 'phoneNumber')))
})

const firstVerify = createSlice({
    name: 'postVerify',
    initialState: {
        verifyCode: false,
        status: null,
        message: ''
    },
    extraReducers: {
        [firstVerifyFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [firstVerifyFetch.fulfilled]: (state, {payload}) => {
            if(payload?.success){
                state.verifyCode = true
                state.status = 'success'
                state.message = payload?.message.split('_').join(' ')
            }
            if(!payload?.success){
                state.status = 'error'
                state.message = payload?.errors[0]?.errorMsg.split('_').join(' ')
            }
        },
        [firstVerifyFetch.rejected]: (state) => {
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



export const { resetTimerVerify } = firstVerify.actions
export default firstVerify.reducer