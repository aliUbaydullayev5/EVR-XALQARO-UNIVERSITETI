import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const bookLaunguageCreatePost = createAsyncThunk('bookLaunguageCreatePost', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/'}v1/book/language/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
        },
        body: JSON.stringify({
            id: payload.id,
            name: payload.name,
        }),
    }).then((res) => res.json())
})

const initialState = {
    status: null,
    message: '',
    data: [],
}

const bookLaunguageCreate = createSlice({
    name: 'bookLaunguageCreate',
    initialState,
    extraReducers: {
        [bookLaunguageCreatePost.pending]: (state) => {
            state.status = 'loading'
        },
        [bookLaunguageCreatePost.fulfilled]: (state, action) => {
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
        [bookLaunguageCreatePost.rejected]: (state) => {
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


export const { reset } = bookLaunguageCreate.actions
export default bookLaunguageCreate.reducer