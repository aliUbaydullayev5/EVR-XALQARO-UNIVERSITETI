import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const bookLaunguageDeleteIdDel = createAsyncThunk('bookLaunguageDeleteIdDel', async ({ id }) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/'}v1/book/language/delete/${id}`, {
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
const bookLaunguageDeleteId = createSlice({
    name: 'bookLaunguageDeleteId',
    initialState,
    extraReducers: {
        [bookLaunguageDeleteIdDel.pending]: (state) => {
            state.status = 'loading'
        },
        [bookLaunguageDeleteIdDel.fulfilled]: (state, { payload }) => {
            if (payload.success === true) {
                state.status = 'success'
            } else if (payload.success === false) {
                state.status = 'notFound'
                state.message = 'Not Found'
            }
        },
        [bookLaunguageDeleteIdDel.rejected]: (state) => {
            state.loading = 'error';
        }
    },
})


export default bookLaunguageDeleteId.reducer