import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API_GLOBAL} from "../../../globalApi";

<<<<<<< HEAD
export const aboutCreateFetch = createAsyncThunk('aboutCreateFetch', async (payload) => {await fetch(`${API_GLOBAL}v1/about-us/create`, {
=======
export const aboutCreateFetch = createAsyncThunk('aboutCreateFetch', async (payload) => {
    await fetch(`${API_GLOBAL}v1/gallery/create`, {
>>>>>>> main
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
        },
        body: JSON.stringify({
            id: 0,
            textUz: payload.textUz,
            textRu: payload.textRu,
            photoId: payload.attachmentId
        }),
    })
        .then((res) => res.json())
})

const aboutCreateData = createSlice({
    name: 'aboutCreateData',
    initialState: {
        status: null,
        data: []
    },
    extraReducers: {
        [aboutCreateFetch.pending]: (state) => {
            state.status = 'Loading'
        },
        [aboutCreateFetch.fulfilled]: (state, { payload }) => {
            if (payload?.success) {
                state.status = 'Success'
                state.data = payload.data
            }
        },
        [aboutCreateFetch.rejected]: (state) => {
            state.status = 'Error'
        }
    }
})

export default aboutCreateData.reducer