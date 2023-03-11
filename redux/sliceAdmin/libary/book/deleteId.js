import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const bookDeleteIdDel = createAsyncThunk('bookDeleteIdDel', async ({ id }) => {
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
const bookDeleteId = createSlice({
    name: 'bookDeleteId',
    initialState,
    extraReducers: {
        [bookDeleteIdDel.pending]: (state) => {
            state.status = 'loading'
        },
        [bookDeleteIdDel.fulfilled]: (state, { payload }) => {
            if (payload.success === true) {
                state.status = 'success'
            } else if (payload.success === false) {
                state.status = 'notFound'
                state.message = 'Not Found'
            }
        },
        [bookDeleteIdDel.rejected]: (state) => {
            state.loading = 'error';
        }
    },
})


export default bookDeleteId.reducer