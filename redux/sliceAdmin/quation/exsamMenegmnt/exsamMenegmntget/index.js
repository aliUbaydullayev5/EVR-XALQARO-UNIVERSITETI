import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const exsamMenegmntgetFetch = createAsyncThunk('exsamMenegmntgetFetch', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/'}v1/exam-question/get-all`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
            }, body: JSON.stringify()
        })
        .then((res) => res.json())

})

const exsamMenegmntget = createSlice({
    name: 'exsamMenegmntget',
    initialState: {
        data: {},
        status: null,
    },
    extraReducers: {
        [exsamMenegmntgetFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [exsamMenegmntgetFetch.fulfilled]: (state, action) => {
            state.status = 'success'
            if (action?.payload?.success == true) state.data = action?.payload?.data
        },
        [exsamMenegmntgetFetch.rejected]: (state) => {
            state.status = 'error'
        }
    },
})

export default exsamMenegmntget.reducer