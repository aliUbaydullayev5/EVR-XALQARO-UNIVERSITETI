import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const examsubjectCreatePost = createAsyncThunk('examsubjectCreatePost', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}v1/faculty/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
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

const examsubjectcreate = createSlice({
    name: 'examsubjectcreate',
    initialState,
    extraReducers: {
        [examsubjectCreatePost.pending]: (state) => {
            state.status = 'loading'
        },
        [examsubjectCreatePost.fulfilled]: (state, action) => {
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
        [examsubjectCreatePost.rejected]: (state) => {
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


export const { reset } = examsubjectcreate.actions
export default examsubjectcreate.reducer