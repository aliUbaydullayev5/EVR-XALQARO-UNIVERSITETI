import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {API_GLOBAL} from "../../../globalApi";

export const aboutGetFetch = createAsyncThunk('aboutGetFetch', async (payload) => {
    return await fetch(`${API_GLOBAL}v1/about-us/get`,
    {
     method: 'GET',
     headers: {
         'Content-Type': 'application/json',
         Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
     }
    }).then((res) => res.json())
})

const aboutGetData = createSlice({
    name: 'aboutGetData',
    initialState: {
        data: {},
        status: null,
    },
    extraReducers: {
        [aboutGetFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [aboutGetFetch.fulfilled]: (state, {payload}) => {
            if (payload.success) {
                state.status = 'success'
                state.data = payload?.data
            }
            else if (!payload.success) {
                state.status = 'error'
                state.message = payload?.errors[0]?.errorMsg
            }

        },
        [aboutGetFetch.rejected]: (state) => {
            state.status = 'error'
            state.message = 'Back-end ishlamayapti hapa bomes ☹️'
        }
    },
})

export default aboutGetData.reducer