import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const bookTypesDeleteIdDel = createAsyncThunk('bookTypesDeleteIdDel', async ({ id }) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/'}v1/book/direction/delete/${id}`, {
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
const bookTypesDeleteId = createSlice({
    name: 'bookTypesDeleteId',
    initialState,
    extraReducers: {
        [bookTypesDeleteIdDel.pending]: (state) => {
            state.status = 'loading'
        },
        [bookTypesDeleteIdDel.fulfilled]: (state, { payload }) => {
            if (payload.success === true) {
                state.status = 'success'
            } else if (payload.success === false) {
                state.status = 'notFound'
                state.message = 'Not Found'
            }
        },
        [bookTypesDeleteIdDel.rejected]: (state) => {
            state.loading = 'error';
        }
    },
})


export default bookTypesDeleteId.reducer