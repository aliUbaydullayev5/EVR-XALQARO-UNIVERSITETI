import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const groupCreatePost = createAsyncThunk('groupCreatePost', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/'}v1/group`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
        },
        body: JSON.stringify({
            facultyId: payload.facultyId,
            name: payload.name,
            opacity: payload.opacity,

        }),
    }).then((res) => res.json())
})

const initialState = {
    status: null,
    message: '',
    data: [],
}

const groupCreate = createSlice({
    name: 'groupCreatePost',
    initialState,
    extraReducers: {
        [groupCreatePost.pending]: (state) => {
            state.status = 'loading'
        },
        [groupCreatePost.fulfilled]: (state, action) => {
            if (action.payload.success === true) {
                state.data = action.payload.data
                state.status = 'success'
            }
            else if (action.payload.success === false) {
                state.status = 'notFound'
                state.message = action.payload.errors[0].errorMsg
            }
        },
        [groupCreatePost.rejected]: (state) => {
            state.loading = 'error'
        }
    },
    reducers: {
        reset(state) {
            state.status = null
            state.message = ''
        }
    }
})


export const { reset } = groupCreate.actions
export default groupCreate.reducer