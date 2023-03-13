import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const newsGetFetch = createAsyncThunk('newsGetFetch', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/'}v1/news/get`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
            },
            body: JSON.stringify(),
        })
        .then((res) => res.json())
})

const newsGet = createSlice({
    name: 'newsGet',
    initialState: {
        data: {},
        status: null,
    },
    extraReducers: {
        [newsGetFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [newsGetFetch.fulfilled]: (state, { payload }) => {
            state.status = 'success'
            if (payload?.success == true)
                state.data = payload?.data
        },
        [newsGetFetch.rejected]: (state) => {
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

export const { resetBookGet } = newsGet.actions
export default newsGet.reducer