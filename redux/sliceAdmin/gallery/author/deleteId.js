import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const authorDeletePost = createAsyncThunk('authorDelete', async ({ id }) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/'}v1/book/author/delete/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
        },
    }).then((res) => res.json())
})

const initialState = {
    status: null,
    message: '',
}
const authorDelete = createSlice({
    name: 'authorDelete',
    initialState,
    extraReducers: {
        [authorDeletePost.pending]: (state) => {
            state.status = 'loading'
        },
        [authorDeletePost.fulfilled]: (state, { payload }) => {
            if (payload.success === true) {
                state.status = 'success'
            } else if (payload.success === false) {
                state.status = 'notFound'
                state.message = 'Not Found'
            }
        },
        [authorDeletePost.rejected]: (state) => {
            state.loading = 'error';
        }
    },
})


export default authorDelete.reducer