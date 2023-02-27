import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getAdmissionFetch = createAsyncThunk('getAdmissionFetch', async ({
}) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}v1/admission/passed`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({
            courseLevel: null,
            facultyTypeId: null,
            facultyId: null,
            lang: null,
            paymentType: null
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