import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API_GLOBAL} from "../../../../globalApi";

export const getAdmissionFetch = createAsyncThunk('getAdmissionFetch', async (payload, {
    page = payload.page,
    search = payload.search
}) => {
    return await fetch(`${API_GLOBAL}v1/admission/passed?page=${page}&size=20&q=${search}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
        },
        body: JSON.stringify({
            courseLevel: payload.courseLevel,
            facultyTypeId: payload.facultyTypeId,
            facultyId: payload.facultyId,
            agentId: payload.agentId,
            lang: payload.lang,
            paymentType: payload.paymentType,
            fromDate: payload.fromDate,
            toDate: payload.toDate
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