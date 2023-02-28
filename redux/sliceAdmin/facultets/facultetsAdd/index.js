import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const facultetsselectAddPost = createAsyncThunk('facultetsselectAddPost', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/' }v1/faculty-exam-subject/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({
            id: payload.id,
            facultyId: payload.facultyId,
            firstExamSubjectId: payload.firstExamSubjectId,
            secondExamSubjectId: payload.secondExamSubjectId,
            firstExamSubjectBall: payload.firstExamSubjectBall,
            secondExamSubjectBall: payload.secondExamSubjectBall

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
                state.message = 'Not Found Edication Type'
            }
        },
        [facultetsselectAddPost.rejected]: (state) => {
            state.status === 'erorr'
        },
    }
})

export default facultetsselectAdd.reducer