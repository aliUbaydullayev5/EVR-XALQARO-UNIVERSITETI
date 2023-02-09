import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const deleteAbuturentFetch = createAsyncThunk('deleteAbuturentFetch', async ({ id }) => {
    console.log(id)
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}v1/faculty/delete/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
    })
        .then((res) => res.json())
})

const initialState = {
    status: null,
    message: '',
}
const deleteAbuturentId = createSlice({
    name: 'deleteAbuturentId',
    initialState,
    extraReducers: {
        [deleteAbuturentFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [deleteAbuturentFetch.fulfilled]: (state, { payload }) => {
            console.log(payload)
            if (payload.success === true) {
                state.status = 'success'
            } else if (payload.success === false) {
                state.status = 'notFound'
                state.message = 'Not Found'
            }
        },
        [deleteAbuturentFetch.rejected]: (state) => {
            state.loading = 'Error';
        }
    },
})


export default deleteAbuturentId.reducer