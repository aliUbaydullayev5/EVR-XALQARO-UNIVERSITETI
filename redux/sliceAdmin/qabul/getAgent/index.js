import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API_GLOBAL} from "../../../../globalApi";

export const getAdmissionAgentFetch = createAsyncThunk('getAdmissionAgentFetch', async (payload) => {
    return await fetch(`${API_GLOBAL}v1/agent`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
        }
    })
        .then(res => res.json())
})

const getAdmissionAgentData = createSlice({
    name: 'getAdmissionAgentData',
    initialState: {
        status: null,
        data: [],
    },
    extraReducers: {
        [getAdmissionAgentFetch.pending]: (state) => {
            state.status = 'Loading'
        },
        [getAdmissionAgentFetch.fulfilled]: (state, { payload }) => {
            if (payload.success) {
                state.data = payload.data
                state.status = 'Success'
            } else {
                state.status = 'Not found, try again please'
            }
        },
        [getAdmissionAgentFetch.rejected]: (state) => {
            state.status = 'Error'
        }
    }
})

export default getAdmissionAgentData.reducer