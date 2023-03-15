import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const newsGet = createAsyncThunk('newsGet', async (payload) => {
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

const newsGetData = createSlice({
    name: 'newsGetData',
    initialState: {
        data: {},
        status: null,
    },
    extraReducers: {
        [newsGet.pending]: (state) => {
            state.status = 'loading'
        },
        [newsGet.fulfilled]: (state, { payload }) => {
            state.status = 'success'
            if (payload?.success == true)
                state.data = payload?.data
        },
        [newsGet.rejected]: (state) => {
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

export const { resetBookGet } = newsGetData.actions
export default newsGetData.reducer