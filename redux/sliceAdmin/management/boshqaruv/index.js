import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetch} from "next/dist/compiled/@edge-runtime/primitives/fetch";

export const getManagementFetch = createAsyncThunk('getManagementFetch', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/' }...`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json())
})

const getManagementData = createSlice({
    name: 'getManagementData',
    initialState: {
        status: '',
        data: []
    },
    extraReducers: {
        [getManagementFetch.pending]: state => {
            state.status = 'Loading'
        },
        [getManagementFetch.fulfilled]: (state, { payload }) => {
            if (payload.success) {
                state.data = payload.data
                state.status = 'Success'
            }
        },
        [getManagementFetch]: state => {
            state.status = 'Error'
        }
    }
})