import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const galleryDeleteIdDel = createAsyncThunk('galleryDeleteIdDel', async ({ id }) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/'}v1/gallery/delete/${id}`, {
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
const galleryDeleteId = createSlice({
    name: 'galleryDeleteId',
    initialState,
    extraReducers: {
        [galleryDeleteIdDel.pending]: (state) => {
            state.status = 'loading'
        },
        [galleryDeleteIdDel.fulfilled]: (state, { payload }) => {
            if (payload.success === true) {
                state.status = 'success'
            } else if (payload.success === false) {
                state.status = 'notFound'
                state.message = 'Not Found'
            }
        },
        [galleryDeleteIdDel.rejected]: (state) => {
            state.loading = 'error';
        }
    },
})


export default galleryDeleteId.reducer