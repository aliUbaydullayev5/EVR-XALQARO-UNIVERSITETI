import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API_GLOBAL} from "../../../../globalApi";

export const getKutubxonaMualifFetch = createAsyncThunk('getKutubxonaMualifFetch', async (payload) => {
    await fetch(`${API_GLOBAL}v1/book/author/get`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
        }
    })
        .then(res => res.json())
})

const getKutubxonaMuallifData = createSlice({
    name: 'getKutubxonaMuallifData',
    initialState: {
        data: [],
        status: null
    },
    extraReducers: {
        [getKutubxonaMualifFetch.pending]: state => {
            state.status = 'Loading'
        },
        [getKutubxonaMualifFetch.fulfilled]: (state, { payload }) => {
            console.log(payload)
            if (payload?.success) {
                state.status = 'Success'
                state.data = payload.data
            } else {
                state.status = 'No response'
            }
        },
        [getKutubxonaMualifFetch.rejected]: state => {
            state.status = 'Error'
        }
    }
})

export default getKutubxonaMuallifData.reducer