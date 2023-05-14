import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API_GLOBAL} from "../../../globalApi";

export const sendSmsFetch = createAsyncThunk('sendSmsFetch', async (payload) => {
    return await fetch(`${API_GLOBAL}v1/sms`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
        },
        body: JSON.stringify({
            text: payload.text,
            users: payload.users
        })
    })
        .then(res => res.json())
})

const sendSmsData = createSlice({
    name: 'getAdmissionData',
    initialState: {
        status: null,
        data: [],
    },
    extraReducers: {
        [sendSmsFetch.pending]: state => {
            state.status = 'Loading'
        },
        [sendSmsFetch.fulfilled]: (state, { payload }) => {
            console.log(payload)
            if (payload?.data) {
                state.data = payload.data
                state.status = 'Success'
            } else {
                state.status = 'No payload'
            }
        },
        [sendSmsFetch.rejected]: state => {
            state.status = 'Error'
        }
    }
})

export default sendSmsData.reducer