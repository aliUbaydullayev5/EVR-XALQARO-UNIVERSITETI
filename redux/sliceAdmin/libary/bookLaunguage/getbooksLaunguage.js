import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const bookLaunguageGetFetch = createAsyncThunk('bookLaunguageGetFetch', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/'}v1/book/language/get`,
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

const bookLaunguageGet = createSlice({
    name: 'bookLaunguageGet',
    initialState: {
        data: {},
        status: null,
    },
    extraReducers: {
        [bookLaunguageGetFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [bookLaunguageGetFetch.fulfilled]: (state, { payload }) => {
            state.status = 'success'
            if (payload?.success == true)
                state.data = payload?.data
        },
        [bookLaunguageGetFetch.rejected]: (state) => {
            state.status = 'error'
        }
    },
})

export default bookLaunguageGet.reducer