import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getfacultyIdfetch = createAsyncThunk('getfacultyIdfetch', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/' }v1/faculty-type/get-all?facultyId=${payload.id}`, {

        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
        }
    })
        .then((res) => res.json())
        .then((json) => {
            return { ...json, sectionId: payload.id }
        })
})

const facultytypesId = createSlice({
    name: 'facultytypesId',
    initialState: {
        status: null,
        data: {},
        message: '',
        id: null,
    },
    extraReducers: {
        [getfacultyIdfetch.pending]: (state) => {
            state.status = 'loading'
        },
        [getfacultyIdfetch.fulfilled]: (state, { payload }) => {
            if (payload.success === true) {
                state.data = payload.data
                state.status = 'success'
                state.id =payload.sectionId
            } else if (payload.success === true) {
                state.status = 'not found, try again please'
            }
        },
        [getfacultyIdfetch]: (state) => {
            state.loading = 'error'
        }
    }
})

export default facultytypesId.reducer