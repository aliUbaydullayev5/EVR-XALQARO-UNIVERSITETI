import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const facultetsdeleteIdFetch = createAsyncThunk('facultetsdeleteIdFetch', async ({ id }) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/' }v1/faculty-exam-subject/delete/${id}`, {
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
const facultetsdeleteId = createSlice({
    name: 'examdeleteId',
    initialState,
    extraReducers: {
        [facultetsdeleteIdFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [facultetsdeleteIdFetch.fulfilled]: (state, { payload }) => {
            if (payload.success === true) {
                state.status = 'success'
            } else if (payload.success === false) {
                state.status = 'notFound'
                state.message = 'Not Found'
            }
        },
        [facultetsdeleteIdFetch.rejected]: (state) => {
            state.loading = 'error';
        }
    },
})


export default facultetsdeleteId.reducer