import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {API_GLOBAL} from "../../../../globalApi"

export const kirimUserInfoFetch = createAsyncThunk('kirimUserInfoFetch', async (payload) => {
    console.log(payload.idOrNumber, 'dasadasd')
    return await fetch(`${API_GLOBAL}v1/user/get-by-id-number?id=${payload.idOrNumber}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
        }
    }).then((res)=> res.json())
})


const kirimUserInfo = createSlice({
    name: 'kirimUserInfo',
    initialState: {
        status: null,
        message: '',
        data: [],
        pageCount: 0
    },
    extraReducers: {
        [kirimUserInfoFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [kirimUserInfoFetch.fulfilled]: (state, action) => {
            if (action.payload.success === true) {
                state.status = 'success'
                state.data = action.payload.data
            }
            else if (action.payload.success === false) {
                state.status = 'notFound'
                state.message = action.payload.errors[0].errorMsg
            }
        },
        [kirimUserInfoFetch.rejected]: (state) => {
            state.loading = 'error'
        }
    }
})

export default kirimUserInfo.reducer