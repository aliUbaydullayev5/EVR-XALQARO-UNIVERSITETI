import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const facultetsselectAddPost = createAsyncThunk('facultetsselectAddPost', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}v1/faculty-type/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({
            id: payload.id,
            facultyId: payload.facultytypesId,
            contractPrice: payload.contractPrice,
            admissionStudentCount: payload.admissionStudentCount,
            studyLanguage: payload.studyLanguage,
            educationType: payload.educationType,

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