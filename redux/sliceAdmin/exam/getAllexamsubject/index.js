import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getAllexamsubjectFetch = createAsyncThunk('getAllexamsubjectFetch', async (payload) => {
    return await fetch(`http://192.168.0.105:8083/api/v1/exam-subject/get-all`,
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
        [getAllexamsubjectFetch.fulfilled]: (state, action) => {
            state.status = 'success'
            if (action?.payload?.success == true) state.data = action?.payload?.data
        },
        [getAllexamsubjectFetch.rejected]: (state) => {
            state.status = 'error'
        }
    },
})

export default getAllexamsubject.reducer