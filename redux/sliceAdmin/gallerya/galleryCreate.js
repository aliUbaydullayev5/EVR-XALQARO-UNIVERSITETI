import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const galleryCreatePost = createAsyncThunk('galleryCreatePost', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/'}v1/gallery/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
        },
        body: JSON.stringify({
            id: payload.id,
            title: payload.title,
            description: payload.description,
            attachmentId: payload.attachmentId

        }),
    }).then((res) => res.json())
})

const initialState = {
    status: null,
    message: '',
    data: [],
}

const galleryCreate = createSlice({
    name: 'galleryaCreate',
    initialState,
    extraReducers: {
        [galleryCreatePost.pending]: (state) => {
            state.status = 'loading'
        },
        [galleryCreatePost.fulfilled]: (state, action) => {
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
        [galleryCreatePost.rejected]: (state) => {
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


export const { reset } = galleryCreate.actions
export default galleryCreate.reducer