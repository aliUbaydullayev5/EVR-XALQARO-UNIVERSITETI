import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
export const subjectMandatoryFetch = createAsyncThunk('subjectMandatoryFetch', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}v1/exam-subject/get-important-exam-subject`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
        }
    })
        .then(res => res.json())
})

const subjectMandatoryData = createSlice({
    name: 'subjectMandatoryData',
    initialState: {
        status: null,
        data: []
    },
    extraReducers: {
        [subjectMandatoryFetch.pending]: (state) => {
            state.status = 'Loading'
        },
        [subjectMandatoryFetch.fulfilled]: (state, { payload }) => {
            if (payload.success) {
                state.data = payload.data
                state.status = 'Success'
            } else {
                state.status = 'Not found, try again please'
            }
        },
        [subjectMandatoryFetch.rejected]: (state) => {
            state.loading = 'error'
        }
    }
})

export default subjectMandatoryData.reducer