import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const aboutGetFetch = createAsyncThunk('aboutGetFetch', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/' }v1/about-us/get`,
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

const aboutGetData = createSlice({
    name: 'aboutGetData',
    initialState: {
        data: {},
        status: null,
    },
    extraReducers: {
        [aboutGetFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [aboutGetFetch.fulfilled]: (state, {payload}) => {
            state.status = 'success'
            if (payload?.success == true)
                state.data = payload?.data
        },
        [aboutGetFetch.rejected]: (state) => {
            state.status = 'error'
        }
    },
})

export default aboutGetData.reducer