import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const exsamManegemntFetch = createAsyncThunk('quationCreatePost', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/'}v1/exam-question/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({
            id: payload.id,
            textUz: payload.textUz,
            textRu: payload.textRu,
            examSubjectId: payload.examSubjectId,
            answers: [
                {
                    id: payload.id,
                    nameUz: payload.answers1NameUz,
                    nameRu: payload.answers1NameRu,
                    correct: payload.check1,
                },
                {
                    id: payload.id,
                    nameUz: payload.answers2NameUz,
                    nameRu: payload.answers2NameRu,
                    correct: payload.check2,
                },
                {
                    id: payload.id,
                    nameUz: payload.answers3NameUz,
                    nameRu: payload.answers3NameRu,
                    correct: payload.check3,
                },
                {
                    id: payload.id,
                    nameUz: payload.answers4NameUz,
                    nameRu: payload.answers3NameRu,
                    correct: payload.check4,
                }
            ],
        }),


    }).then((res) => res.json())
})

const initialState = {
    status: null,
    message: '',
    data: [],
}

const exsamManegemnt = createSlice({
    name: 'quationManegemnt',
    initialState,
    extraReducers: {
        [exsamManegemntFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [exsamManegemntFetch.fulfilled]: (state, action) => {
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
        [exsamManegemntFetch.rejected]: (state) => {
            state.loading = 'error'
        }
    },
})


export default exsamManegemnt.reducer