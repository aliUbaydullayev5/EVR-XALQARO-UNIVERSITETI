import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const newsreatePost = createAsyncThunk('newsreatePost', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/'}v1/news/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
        },
        body: JSON.stringify({
            id: payload.id,
            description: payload.description,
            title: payload.title,
            attachmentId: payload.attachmentId,
        }),
    }).then((res) => res.json())
})

const initialState = {
    status: null,
    message: '',
    data: [],
}

const newsreate = createSlice({
    name: 'newsreate',
    initialState,
    extraReducers: {
        [newsreatePost.pending]: (state) => {
            state.status = 'loading'
        },
        [newsreatePost.fulfilled]: (state, action) => {
            if (action.payload.success === true) {
                state.data = action.payload.data
                state.status = 'success'
                state.message = 'Malumot qo`shildi'

            }
            else if (action.payload.success === false) {
                state.status = 'notFound'
                state.message = action.payload.errors[0].errorMsg
            }
        },
        [newsreatePost.rejected]: (state) => {
            state.loading = 'error'
        }
    },
    reducers: {
        reset(state) {
            state.status = null
            state.message = ''
        }
    }
})


export const { reset } = newsreate.actions
export default newsreate.reducer