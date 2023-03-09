import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getApplications = createAsyncThunk('getApplications', async ({
      page = 0,
      size = 20,
      fromDate = 1672531200000,
      toDate = new Date().getTime()
    }) => {
    return await fetch(`${API_GLOBAL}v1/application?page=${page}&size=${size}&fromDate=${fromDate}&toDate=${toDate}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
        }
    })
        .then(res => res.json())
})

const getApplicationData = createSlice({
    name: 'getApplicationData',
    initialState: {
        status: null,
        data: [],
        message: '',
        loading: null
    },
    extraReducers: {
        [getApplications.pending]: (state) => {
            state.status = 'Loading'
        },
        [getApplications.fulfilled]: (state, { payload }) => {
            console.log(payload.data)
            if (payload.success === true) {
                state.data = payload.data
                state.status = 'Success'
            } else if (payload.success === false) {
                state.status = 'Not found, try again please'
            }
        },
        [getApplications.rejected]: (state) => {
            state.loading = 'error'
        }
    }
})

export default getApplicationData.reducer