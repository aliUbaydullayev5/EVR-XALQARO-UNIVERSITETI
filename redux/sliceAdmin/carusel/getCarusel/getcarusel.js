import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const CaruselGetFetch = createAsyncThunk('CaruselGetFetch', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/'}v1/carousel/get-all`,
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

const caruselGet = createSlice({
    name: 'caruselGet',
    initialState: {
        data: {},
        status: null,
    },
    extraReducers: {
        [CaruselGetFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [CaruselGetFetch.fulfilled]: (state, { payload }) => {
            state.status = 'success'
            if (payload?.success == true)
                state.data = payload?.data
        },
        [CaruselGetFetch.rejected]: (state) => {
            state.status = 'error'
        }
    },
    reducers: {
        resetnacarusel(state) {
            state.data = {}
            state.status = null
        }
    }
})

export const { resetnacarusel } = caruselGet.actions
export default caruselGet.reducer