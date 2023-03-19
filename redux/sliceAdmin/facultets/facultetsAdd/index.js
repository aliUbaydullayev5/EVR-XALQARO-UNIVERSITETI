import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const facultetsselectAddPost = createAsyncThunk('facultetsselectAddPost', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/' }v1/faculty-exam-subject/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
        },
        body: JSON.stringify({
            id: payload.id,
            facultyId: payload.faculty,
            firstExamSubjectId: payload.firstExamSubject,
            secondExamSubjectId: payload.secondExamSubject,

        })
    }).then((res) => res.json())
})

const initialState = {
    status: null,
    message: '',
    data: [],
}

const facultetsselectAdd = createSlice({
    name: 'facultetsselectAdd',
    initialState,
    extraReducers: {
        [facultetsselectAddPost.pending]: (state) => {
            state.status === 'loading'
        },

        [facultetsselectAddPost.fulfilled]: (state, { payload }) => {
            if (payload.success === true) {
                state.status = 'success'
                state.data = payload.data
                state.message = 'Muyofiyaqadli Yakulandi'
            }
            else if (payload.success === false) {
                state.status = 'notFound'
                state.message = payload.errors[0].errorMsg
            }
        },
        [facultetsselectAddPost.rejected]: (state) => {
            state.status === 'erorr'
        },
    }
})

export default facultetsselectAdd.reducer