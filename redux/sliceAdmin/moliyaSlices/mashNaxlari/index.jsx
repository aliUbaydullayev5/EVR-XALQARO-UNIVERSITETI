import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {API_GLOBAL} from "../../../../globalApi"

export const mashNarxlariFetch = createAsyncThunk('mashNarxlariFetch', async () => {
    return await fetch(`${API_GLOBAL}v1/content-price/get`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
        }
    }).then((res)=> res.json())
})


const mashNarxlari = createSlice({
    name: 'mashNarxlari',
    initialState: {
        status: null,
        message: '',
        data: [],
    },
    extraReducers: {
        [mashNarxlariFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [mashNarxlariFetch.fulfilled]: (state, action) => {
            if (action.payload.success === true) {
                state.status = 'success'
                state.data = action.payload.data
            }
            else if (action.payload.success === false) {
                state.status = 'error'
                state.message = action.payload.errors[0].errorMsg
            }
        },
        [mashNarxlariFetch.rejected]: (state) => {
            state.loading = 'error'
        }
    }
})



export default mashNarxlari.reducer