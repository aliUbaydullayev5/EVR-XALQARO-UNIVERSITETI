import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const editTalimYunalishiTypePut = createAsyncThunk('editTalimYunalishiTypePut', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}v1/faculty-type/create`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({
            facultyId: payload.facultyId,
            contractPrice: payload.contractPrice,
            admissionStudentCount: payload.admissionStudentCount,
            educationType: payload.educationType,
            studyLanguage: payload.studyLanguage
        })
    })
})

const initialState = {
    status: null,
    message: '',
    data :[]
}

const editTalimYunalishType = createSlice({
    name: 'editTalimYunalishType',
    initialState,

    extraReducers: {
        [editTalimYunalishiTypePut.pending]: (state) => {
            state.status = 'loading'
        },
        [editTalimYunalishiTypePut.fulfilled]: (state, { payload }) => {
            if (payload.success === true) {
                state.status = 'success'

            } else if (payload.success === false) {
                state.status = 'notFound'
                state.message = 'Not Found'
            }
        },
        [editTalimYunalishiTypePut.rejected]: (state) => {
            state.loading = 'error';
        }
    
    },
})

export default editTalimYunalishType.reducer