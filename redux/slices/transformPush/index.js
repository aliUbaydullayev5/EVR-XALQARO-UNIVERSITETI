import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllTransformFetch = createAsyncThunk('postTransformFetch', async (payload) => {
    return await fetch('', {
        method :'POST',
        headers: {
         'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        
        }),
    }).then((res) => res.json())
})

const initialState = {
    state: null,
    data: [],
    loading: null
}
const transformPushThunk = createSlice({
    name: 'allTransFromPush',
    initialState,
    extraReducers: {
        [getAllTransformFetch.pending]: (state) => {
            state.loading = 'loading'
        },
        [getAllTransformFetch.fulfilled]: (state, action) => {
            state.loading = 'Success'
            if (state?.data) {
              state.data = [...action.payload]
            }
        },
        [getAllTransformFetch.rejected]: (state) => {
            state.loading = 'Error';
        }
    }
})
export default transformPushThunk.reducer