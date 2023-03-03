import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const facultetsgetAllFetch = createAsyncThunk('facultetsgetAllFetch', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/' }v1/faculty-exam-subject/get-all`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }, body: JSON.stringify()
        })
        .then((res) => res.json())
    
})

const facultetsgetAll = createSlice({
    name: 'facultetsgetAll',
    initialState: {
        data: {},
        status: null,
    },
    extraReducers: {
        [facultetsgetAllFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [facultetsgetAllFetch.fulfilled]: (state, action) => {
            state.status = 'success'
            if (action?.payload?.success == true) state.data = action?.payload?.data
        },
        [facultetsgetAllFetch.rejected]: (state) => {
            state.status = 'error'
        }
    },
})

export default facultetsgetAll.reducer