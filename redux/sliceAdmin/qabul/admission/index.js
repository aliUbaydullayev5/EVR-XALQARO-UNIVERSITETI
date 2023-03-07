import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getAdmissionFetch = createAsyncThunk('getAdmissionFetch', async (payload) => {
    return await fetch(`${API_GLOBAL}v1/admission/passed`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({
            courseLevel: payload.courseLevelId,
            facultyTypeId: payload.facultyTypeId,
            facultyId: payload.facultyId,
            lang: payload.lang,
            paymentType: payload.paymentType
        })
    })
        .then(res => res.json())
        .then(res => {
            return { ...res }
        })
})

const getAdmissionData = createSlice({
    name: 'getAdmissionData',
    initialState: {
        status: null,
        data: [],
    },
    extraReducers: {
        [getAdmissionFetch.pending]: (state) => {
            state.status = 'Loading'
        },
        [getAdmissionFetch.fulfilled]: (state, { payload }) => {
            console.log(payload)
            if (payload.data) {
                state.data = payload.data
                state.status = 'Success'
            } else {
                state.status = 'Not found, try again please'
            }
        },
        [getAdmissionFetch]: (state) => {
            state.status = 'Error'
        }
    }
})

export default getAdmissionData.reducer