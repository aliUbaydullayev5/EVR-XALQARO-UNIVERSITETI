import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getAdminArizalarFetch = createAsyncThunk('getAdminArizalar', async (payload) => {
    return await fetch(`http://localhost:8080/api/users`)
   , {
        method: 'GET',
            headers: {
            'Content-Type': 'application/json'}
      }.then((res) => res.json())
})


export const getAdminArizalar = createSlice({
    name: 'getAdminArizalar',
    initialState: {
        data: {},
        status: null,
    },
    extraReducers: {
        [getAdminArizalarFetch.pending]: (state) => {
            state.status='loading'
        },
        [getAdminArizalarFetch.fulfilled]: (state, { payload }) => {
            if (payload?.state) {
                state.data = action?.payload
            }
        },
        [getAdminArizalarFetch.rejected]: (state) => {
            state.status = 'error'
        }

    }

})

export default getAdminArizalar.reducer