import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API_GLOBAL} from "../../../../globalApi";

export const getAdmissionFetch = createAsyncThunk('getAdmissionFetch', async (payload) => {
    return await fetch(`${API_GLOBAL}v1/admission/passed`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
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
            if (payload.success) {
                state.data = payload.data
                state.status = 'Success'
            } else {
                state.status = 'Not found, try again please'
            }
        },
        [getAdmissionFetch.rejected]: (state) => {
            state.status = 'Error'
        }
    }
})

export default getAdmissionData.reducer