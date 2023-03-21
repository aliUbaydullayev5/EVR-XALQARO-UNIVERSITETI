import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API_GLOBAL} from "../../../../globalApi";

export const getApplicationsFetch = createAsyncThunk('getApplicationsFetch', async ({
    page = 0,
    search = '',
    fromDate = 1672531200000,
    toDate = new Date().getTime()
}) => {
    return fetch(`${API_GLOBAL}v1/application?page=${page}&size=20&q=${search}&fromDate=${fromDate}&toDate=${toDate}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
        }
    })
        .then(res => res.json())
})

const getApplicationsData = createSlice({
    name: 'getApplicationData',
    initialState: {
        status: null,
        data: [],
        message: '',
        loading: null
    },
    extraReducers: {
        [getApplicationsFetch.pending]: (state) => {
            state.status = 'Loading'
        },
        [getApplicationsFetch.fulfilled]: (state, { payload }) => {
            if (payload.success === true) {
                state.data = payload.data
                state.status = 'Success'
            } else if (payload.success === false) {
                state.status = 'Not found, try again please'
            }
        },
        [getApplicationsFetch.rejected]: (state) => {
            state.loading = 'error'
        }
    }
})

export default getApplicationsData.reducer