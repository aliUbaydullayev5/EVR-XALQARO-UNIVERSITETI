import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const testGetFetch = createAsyncThunk('testGetFetch', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}v1/faculty/get-study-type?studyType=${payload.type}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }, body: JSON.stringify()
        })
        .then((res) => res.json())
    
})

const testGet = createSlice({
    name: 'testGet',
    initialState: {
        data: {},
        status: null,
    },
    extraReducers: {
        [testGetFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [testGetFetch.fulfilled]: (state, action) => {
            state.status = 'success'
            if (action?.payload?.success == true) state.data = action?.payload?.data
        },
        [testGetFetch.rejected]: (state) => {
            state.status = 'error'
        }
    },
})

export default testGet.reducer