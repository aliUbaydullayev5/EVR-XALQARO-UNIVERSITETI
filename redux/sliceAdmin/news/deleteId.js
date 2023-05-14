import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const newsDeleteIdFetch = createAsyncThunk('newsDeleteIdFetch', async ({ id }) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/'}v1/book/delete/${id}`, {
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
const newDeleteId = createSlice({
    name: 'newDeleteId',
    initialState,
    extraReducers: {
        [newsDeleteIdFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [newsDeleteIdFetch.fulfilled]: (state, { payload }) => {
            if (payload.success === true) {
                state.status = 'success'
            } else if (payload.success === false) {
                state.status = 'notFound'
                state.message = 'Not Found'
            }
        },
        [newsDeleteIdFetch.rejected]: (state) => {
            state.loading = 'error';
        }
    },
})


export default newDeleteId.reducer