import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const quationgetAll = createAsyncThunk('quationgetAll', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/' }v1/exam-question/get-all`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
            }, body: JSON.stringify()
        })
        .then((res) => res.json())
    
})

const quationget = createSlice({
    name: 'quationget',
    initialState: {
        data: {},
        status: null,
    },
    extraReducers: {
        [quationgetAll.pending]: (state) => {
            state.status = 'loading'
        },
        [quationgetAll.fulfilled]: (state, action) => {
            state.status = 'success'
            if (action?.payload?.success == true) state.data = action?.payload?.data
        },
        [quationgetAll.rejected]: (state) => {
            state.status = 'error'
        }
    },
})

export default quationget.reducer