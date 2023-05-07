
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {API_GLOBAL} from "../../../globalApi";

export const getUserIdFetch = createAsyncThunk('getUserIdFetch', async (payload)=> {
    return await fetch(`${API_GLOBAL}v1/auth/get-id-number?phoneNumber=${payload.userNumber.match(/[0-9]+/g).join('')}`, {
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
        [getUserIdFetch.fulfilled]: (state, { payload }) => {
            if(payload?.success){
                state.status = 'success'
                state.message = payload.message.split('_').join(' ')
            }
            if(!payload?.success){
                state.status = 'error'
                state.message = payload?.errors[0]?.errorMsg.split('_').join(' ')
            }
        },
        [getUserIdFetch.rejected]: (state) => {
            state.loading = 'Error'
            state.message = 'Back-end ishlamayapti hapa bomes ☹'
        }
    },
    reducers: {
        resetData(state) {
            state.status = null
            state.message = ''
            state.data = null
        }
    }
})




export const { resetData } = getUserId.actions
export default getUserId.reducer