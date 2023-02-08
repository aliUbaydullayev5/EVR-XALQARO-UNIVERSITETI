import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const deleteAbuturentFetch = createAsyncThunk('postLoginformFetch', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}v1/auth/personal-cabinet/admin${payload.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({  }),
    }).then((res) => res.json())
})

const initialState = {
    status: null,
    message: '',
}
const deleteAbuturentId = createSlice({
    name: 'allTransFromPush',
    initialState,
    extraReducers: {
        [deleteAbuturentFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [deleteAbuturentFetch.fulfilled]: (state, { payload }) => {
            if (payload.success === true) {
                state.status = 'success'
                state.message = `Facultet Turi ${id}`

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