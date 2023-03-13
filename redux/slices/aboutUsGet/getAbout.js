import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const aboutGetUser = createAsyncThunk('aboutGetUser', async (payload) => {
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

const aboutGetUserData = createSlice({
    name: 'aboutGetUserData',
    initialState: {
        data: {},
        status: null,
    },
    extraReducers: {
        [aboutGetUser.pending]: (state) => {
            state.status = 'loading'
        },
        [aboutGetUser.fulfilled]: (state, {payload}) => {
            state.status = 'success'
            if (payload?.success == true)
                state.data = payload?.data
        },
        [aboutGetUser.rejected]: (state) => {
            state.status = 'error'
        }
    },
})

export default aboutGetUserData.reducer