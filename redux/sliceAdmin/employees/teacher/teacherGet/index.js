import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const teacherGetFetch = createAsyncThunk('teacherGetFetch', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/'}v1/worker/teacher`,
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

const teacherGet = createSlice({
    name: 'teacherGet',
    initialState: {
        data: {},
        status: null,
    },
    extraReducers: {
        [teacherGetFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [teacherGetFetch.fulfilled]: (state, { payload }) => {
            state.status = 'success'
            if (payload?.success == true)
                console.log(payload, 'payload')
            state.data = payload?.data
        },
        [teacherGetFetch.rejected]: (state) => {
            state.status = 'error'
        }
    },
    reducers: {
        resetteacherGet(state) {
            state.data = {}
            state.status = null
        }
    }
})

export const { resetteacherGet } = teacherGet.actions
export default teacherGet.reducer