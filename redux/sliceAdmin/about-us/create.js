import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const aboutreatePostFetch = createAsyncThunk('aboutreatePostFetch', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/'}v1/about-us/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
        },
        body: JSON.stringify({
            id: 0,
            textRu: payload.textRu,
            textUz: payload.textUz,
            photoId: payload.attachmentId,

        }),
    }).then((res) => res.json())
})

const initialState = {
    status: null,
    message: '',
    data: [],
}

const aboutreatePost = createSlice({
    name: 'aboutreatePost',
    initialState,
    extraReducers: {
        [aboutreatePostFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [aboutreatePostFetch.fulfilled]: (state, action) => {
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
        [aboutreatePostFetch.rejected]: (state) => {
            state.loading = 'error'
        }
    },
    reducers: {
        resetaboutreatePost(state) {
            state.status = null
            state.message = ''
        }
    }
})


export const { resetaboutreatePost } = aboutreatePost.actions
export default aboutreatePost.reducer