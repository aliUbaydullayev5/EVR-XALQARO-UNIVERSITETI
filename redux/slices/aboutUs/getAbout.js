import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const aboutGet = createAsyncThunk('aboutGet', async (payload) => {
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

const AboutGetData = createSlice({
    name: 'aboutGetData',
    initialState: {
        data: {},
        status: null,
    },
    extraReducers: {
        [aboutGet.pending]: (state) => {
            state.status = 'loading'
        },
        [aboutGet.fulfilled]: (state, {payload}) => {
            state.status = 'success'
            if (payload?.success == true)
                state.data = payload?.data
        },
        [aboutGet.rejected]: (state) => {
            state.status = 'error'
        }
    },
})

export default AboutGetData.reducer