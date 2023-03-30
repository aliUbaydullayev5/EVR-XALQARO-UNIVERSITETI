import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const groupGetFetch = createAsyncThunk('groupGetFetch', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/'}v1/group`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
            },
            body: JSON.stringify({}),
        })
        .then((res) => res.json())
})

const groupGet = createSlice({
    name: 'groupGet',
    initialState: {
        data: {},
        status: null,
    },
    extraReducers: {
        [groupGetFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [groupGetFetch.fulfilled]: (state, { payload }) => {
            state.status = 'success'
            if (payload?.success == true)
                state.data = payload?.data
        },
        [groupGetFetch.rejected]: (state) => {
            state.status = 'error'
        }
    },
    reducers: {
        resetGroupGet(state) {
            state.data = {}
            state.status = null
        }
    }
})

export const { resetGroupGet } = groupGet.actions
export default groupGet.reducer