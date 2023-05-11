import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const caruselGetFetch = createAsyncThunk('caruselGetFetch', async (payload) => {
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

const caruselAdminGet = createSlice({
    name: 'caruselAdminGet',
    initialState: {
        data:[],
        status: null,
    },
    extraReducers: {
        [caruselGetFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [caruselGetFetch.fulfilled]: (state, { payload }) => {
            state.status = 'success'
            if (payload?.success == true)
                state.data = payload?.data
        },
        [caruselGetFetch.rejected]: (state) => {
            state.status = 'error'
        }
    },
    reducers: {
        resetcaruselAdmin(state) {
            state.data = {}
            state.status = null
        }
    }
})

export const { resetcaruselAdmin } = caruselAdminGet.actions
export default caruselAdminGet.reducer