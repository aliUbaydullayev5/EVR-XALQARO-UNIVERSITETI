import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const caruselcreatePost = createAsyncThunk('caruselcreatePost', async (payload) => {
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

const caruselreate = createSlice({
    name: 'caruselreate',
    initialState,
    extraReducers: {
        [caruselcreatePost.pending]: (state) => {
            state.status = 'loading'
        },
        [caruselcreatePost.fulfilled]: (state, action) => {
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
        [caruselcreatePost.rejected]: (state) => {
            state.loading = 'error'
        }
    },
    reducers: {
        resetcarusel(state) {
            state.status = null
            state.message = ''
        }
    }
})


export const { resetcarusel } = caruselreate.actions
export default caruselreate.reducer