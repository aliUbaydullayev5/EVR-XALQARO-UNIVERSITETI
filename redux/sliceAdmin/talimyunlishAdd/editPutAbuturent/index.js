import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const editAbuturentFetch = createAsyncThunk('editAbuturentFetch', async ({ id, value }) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}v1/faculty/edit/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({
            name: payload.nameUz,
            name: payload.nameUz,
            studyType: "BACHELOR"
        }),
    }).then((res) => res.json())
})
const initialState = {
    status: null,
    message: '',
}
const editAbuturentId = createSlice({
    name: 'editAbuturentId',
    initialState,
    extraReducers: {
        [editAbuturentFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [editAbuturentFetch.fulfilled]: (state, { payload }) => {
            if (payload.success === true) {
                state.status = 'success'

            } else if (payload.success === false) {
                state.status = 'notFound'
                state.message = 'Not Found'
            }
        },
        [editAbuturentFetch.rejected]: (state) => {
            state.loading = 'error';
        }
    },
})


export default editAbuturentId.reducer