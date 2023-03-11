import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const bookTypesGetFetch = createAsyncThunk('bookTypesGetFetch', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/'}v1/book/direction/get`,
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

const bookTypesGet = createSlice({
    name: 'authorGet',
    initialState: {
        data: {},
        status: null,
    },
    extraReducers: {
        [bookTypesGetFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [bookTypesGetFetch.fulfilled]: (state, { payload }) => {
            state.status = 'success'
            if (payload?.success == true)
                state.data = payload?.data
        },
        [bookTypesGetFetch.rejected]: (state) => {
            state.status = 'error'
        }
    },
})

export default bookTypesGet.reducer