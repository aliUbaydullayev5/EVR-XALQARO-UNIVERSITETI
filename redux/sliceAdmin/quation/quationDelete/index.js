import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const quationDeleteIdFetch = createAsyncThunk('quationDeleteIdFetch', async ({ id }) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/' }v1/exam-question/delete/${id}`, {
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
const quationDeleteId = createSlice({
    name: 'examdeleteId',
    initialState,
    extraReducers: {
        [quationDeleteIdFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [quationDeleteIdFetch.fulfilled]: (state, { payload }) => {
            if (payload.success === true) {
                state.status = 'success'
            } else if (payload.success === false) {
                state.status = 'notFound'
                state.message = 'Not Found'
            }
        },
        [quationDeleteIdFetch.rejected]: (state) => {
            state.loading = 'error';
        }
    },
})


export default quationDeleteId.reducer