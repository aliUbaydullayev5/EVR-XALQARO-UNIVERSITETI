import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const groupGetFetch = createAsyncThunk('groupGetFetch', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/'}v1/group`,
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

const groupGet = createSlice({
    name: 'groupGetFetch',
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
            state.data = payload?.data
        },
        [groupGetFetch.rejected]: (state) => {
            state.status = 'error'
        }
    },
    reducers: {
        resetgroupGetFetch(state) {
            state.data = {}
            state.status = null
        }
    }
})

export const { resetgroupGetFetch } = groupGet.actions
export default groupGet.reducer