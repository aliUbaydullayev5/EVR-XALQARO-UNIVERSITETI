import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const postaFacultyTypeAdd = createAsyncThunk('postaFacultyTypeAdd', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/' }v1/faculty-type/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`

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

const facultyTypeAdd = createSlice({
    name: 'facultyTypeAdd',
    initialState,
    extraReducers: {
        [postaFacultyTypeAdd.pending]: (state) => {
            state.status === 'loading'
        },

        [postaFacultyTypeAdd.fulfilled]: (state, { payload }) => {
            if (payload.success === true) {
                state.status = 'success'
                state.data = payload.data
            }
            else if (payload.success === false) {
                state.status = 'notFound'
                state.message = payload.errors[0].errorMsg

            }
        },
        [postaFacultyTypeAdd.rejected]: (state) => {
            state.status === 'erorr'
        },
    }
})

export default facultyTypeAdd.reducer