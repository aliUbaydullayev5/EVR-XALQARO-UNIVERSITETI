import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const examdeleteIdFetch = createAsyncThunk('examdeleteIdFetch', async ({ id }) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/' }v1/exam-subject/delete/${id}`, {
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
const examdeleteId = createSlice({
    name: 'examdeleteId',
    initialState,
    extraReducers: {
        [examdeleteIdFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [examdeleteIdFetch.fulfilled]: (state, { payload }) => {
            if (payload.success === true) {
                state.status = 'success'
            } else if (payload.success === false) {
                state.status = 'notFound'
                state.message = 'Not Found'
            }
        },
        [examdeleteIdFetch.rejected]: (state) => {
            state.loading = 'error';
        }
    },
})


export default examdeleteId.reducer