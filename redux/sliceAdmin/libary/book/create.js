import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const bookCreatePost = createAsyncThunk('bookCreatePost', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/'}v1/book/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
        },
        body: JSON.stringify({
            id: payload.id,
            name: payload.name,
            rating: payload.rating,
            attachmentId: payload.attachmentId,
            authorId: payload.authorId,
            languageId: payload.languageId,
            directionId: payload.directionId,

        }),
    }).then((res) => res.json())
})

const initialState = {
    status: null,
    message: '',
    data: [],
}

const bookCreate = createSlice({
    name: 'bookCreate',
    initialState,
    extraReducers: {
        [bookCreatePost.pending]: (state) => {
            state.status = 'loading'
        },
        [bookCreatePost.fulfilled]: (state, action) => {
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
        [bookCreatePost.rejected]: (state) => {
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


export const { reset } = bookCreate.actions
export default bookCreate.reducer