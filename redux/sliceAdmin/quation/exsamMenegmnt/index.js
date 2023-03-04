import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const exsamManegemntFetch = createAsyncThunk('exsamManegemntFetch', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/'}v1/exam-info/create
`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
        },
        body: JSON.stringify({
            id: payload.id,
            firstExamSubjectBall: payload.firstExamSubjectBall,
            secondExamSubjectBall: payload.secondExamSubjectBall,
            importantExamSubjectBall: payload.importantExamSubjectBall,
            entranceBall: payload.entranceBall,
            examTime: payload.examTime,
        }),

    }).then((res) => res.json())
})

const initialState = {
    status: null,
    message: '',
    data: [],
}

const exsamManegemnt = createSlice({
    name: 'exsamManegemnt',
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