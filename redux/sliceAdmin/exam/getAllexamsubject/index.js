import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getAllexamsubjectFetch = createAsyncThunk('getAllexamsubjectFetch', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/' }v1/exam-subject/get-all`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify()
    })
        .then((res) => res.json())
})

const getAllexamsubject = createSlice({
    name: 'getAllexamsubject',
    initialState: {
        data: {},
        status: null,
    },
    extraReducers: {
        [getAllexamsubjectFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [getAllexamsubjectFetch.fulfilled]: (state, {payload}) => {
            state.status = 'success'
            if (payload?.success == true)
                state.data = payload?.data
        },
        [getAllexamsubjectFetch.rejected]: (state) => {
            state.status = 'error'
        }
    },
})

export default getAllexamsubject.reducer