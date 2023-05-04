import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {API_GLOBAL} from "../../../../globalApi"

export const kirimFetch = createAsyncThunk('kirimFetch', async () => {
    return await fetch(`${API_GLOBAL}v1/income`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
        }
    }).then((res)=> res.json())
})


const kirim = createSlice({
    name: 'kirim',
    initialState: {
        status: null,
        message: '',
        data: [],
        pageCount: 0
    },
    extraReducers: {
        [kirimFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [kirimFetch.fulfilled]: (state, action) => {
            if (action.payload.success === true) {
                state.status = 'success'
                state.data = action.payload.data
            }
            else if (action.payload.success === false) {
                state.status = 'notFound'
                state.message = action.payload.errors[0].errorMsg
            }
        },
        [kirimFetch.rejected]: (state) => {
            state.loading = 'error'
        }
    }
})

export default kirim.reducer