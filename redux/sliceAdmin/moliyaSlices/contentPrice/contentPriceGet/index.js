import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const contentPriceGetFetch = createAsyncThunk('contentPriceGetFetch', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/'}v1/content-price/get`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
            },
            body: JSON.stringify()
        })
        .then((res) => res.json())
})

const contentPriceGet = createSlice({
    name: 'contentPriceGet',
    initialState: {
        data: {},
        status: null,
    },
    extraReducers: {
        [contentPriceGetFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [contentPriceGetFetch.fulfilled]: (state, { payload }) => {
            state.status = 'success'
            if (payload?.success == true)
                state.data = payload?.data
        },
        [contentPriceGetFetch.rejected]: (state) => {
            state.status = 'error'
        }
    },
})

export default contentPriceGet.reducer