import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const bookGetFetch = createAsyncThunk('bookGetFetch', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/'}v1/book/get`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
            },
            body: JSON.stringify({}),
        })
        .then((res) => res.json())
})

const bookGet = createSlice({
    name: 'bookGet',
    initialState: {
        data: {},
        status: null,
    },
    extraReducers: {
        [bookGetFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [bookGetFetch.fulfilled]: (state, { payload }) => {
            state.status = 'success'
            if (payload?.success == true)
                state.data = payload?.data
        },
        [bookGetFetch.rejected]: (state) => {
            state.status = 'error'
        }
    },
    reducers: {
        resetBookGet(state) {
            state.data = {}
            state.status = null
        }
    }
})

export const { resetBookGet } = bookGet.actions
export default bookGet.reducer