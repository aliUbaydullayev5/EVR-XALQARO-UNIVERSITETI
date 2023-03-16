import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API_GLOBAL} from "../../../../globalApi";

export const getAdmissionPaymentFetch = createAsyncThunk('getAdmissionPaymentFetch', async (payload) => {
    return await fetch(`${API_GLOBAL}v1/payment/types`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
        }
    })
        .then(res => res.json())
})

const getAdmissionPaymentData = createSlice({
    name: 'getAdmissionPaymentData',
    initialState: {
        status: null,
        data: [],
    },
    extraReducers: {
        [getAdmissionPaymentFetch.pending]: (state) => {
            state.status = 'Loading'
        },
        [getAdmissionPaymentFetch.fulfilled]: (state, { payload }) => {
            if (payload.success) {
                state.data = payload.data
                state.status = 'Success'
            } else {
                state.status = 'Not found, try again please'
            }
        },
        [getAdmissionPaymentFetch.rejected]: (state) => {
            state.status = 'Error'
        }
    }
})

export default getAdmissionPaymentData.reducer