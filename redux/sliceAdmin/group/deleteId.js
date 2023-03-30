import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const groupDeleteIdDel = createAsyncThunk('groupDeleteIdDel', async ({ id }) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/'}v1/group/${id}`, {
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
const groupDeleteId = createSlice({
    name: 'bookDeleteId',
    initialState,
    extraReducers: {
        [groupDeleteIdDel.pending]: (state) => {
            state.status = 'loading'
        },
        [groupDeleteIdDel.fulfilled]: (state, { payload }) => {
            if (payload.success === true) {
                state.status = 'success'
            } else if (payload.success === false) {
                state.status = 'notFound'
                state.message = 'Not Found'
            }
        },
        [groupDeleteIdDel.rejected]: (state) => {
            state.loading = 'error';
        }
    },
})


export default groupDeleteId.reducer