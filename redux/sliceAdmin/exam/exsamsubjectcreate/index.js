import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const examsubjectCreatePost = createAsyncThunk('examsubjectCreatePost', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/' }v1/exam-subject/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
        },
        body: JSON.stringify({
            id: payload.id,
            nameUz: payload.nameUz,
            nameRu: payload.nameRu,
            "studyType": "BACHELOR",
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