import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {API_GLOBAL} from "../../../../globalApi"

export const mashNarxlariAddFetch = createAsyncThunk('mashNarxlariAddFetch', async (payload) => {
    return await fetch(`${API_GLOBAL}v1/content-price/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
        },
        body:JSON.stringify({
            name: payload.name,
            amount: payload.amount,
            type: payload.type
        })
    }).then((res)=> res.json())
})


const mashNarxlariAdd = createSlice({
    name: 'mashNarxlariAdd',
    initialState: {
        status: null,
        message: '',
        data: [],
    },
    extraReducers: {
        [mashNarxlariAddFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [mashNarxlariAddFetch.fulfilled]: (state, action) => {
            if (action.payload.success === true) {
                state.status = 'success'
            }
            else if (action.payload.success === false) {
                state.status = 'error'
                state.message = action?.payload?.errors[0]?.errorMsg
            }
        },
        [mashNarxlariAddFetch.rejected]: (state) => {
            state.loading = 'error'
        }
    }
})



export default mashNarxlariAdd.reducer