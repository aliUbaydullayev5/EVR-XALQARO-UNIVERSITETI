import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const authorGetFetch = createAsyncThunk('authorGetFetch', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/'}v1/book/author/get`,
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

const authorGet = createSlice({
    name: 'authorGet',
    initialState: {
        data: {},
        status: null,
    },
    extraReducers: {
        [authorGetFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [authorGetFetch.fulfilled]: (state, { payload }) => {
            state.status = 'success'
            if (payload?.success == true)
                state.data = payload?.data
        },
        [authorGetFetch.rejected]: (state) => {
            state.status = 'error'
        }
    },
})

export default authorGet.reducer