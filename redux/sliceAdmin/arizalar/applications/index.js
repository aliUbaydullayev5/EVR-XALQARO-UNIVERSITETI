import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getApplications = createAsyncThunk('getApplications', async ({
      page = 0,
      size = 20,
      fromDate = 1672531200000,
      toDate = new Date().getTime()
    }) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}v1/application?page=${page}&size=${size}&fromDate=${fromDate}&toDate=${toDate}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json())
        .then(json => {
            return {
                ...json
            }
        })
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
            console.log(1)
        },
        [getApplications.fulfilled]: (state, { payload }) => {
            if (payload.success === true) {
                console.log(payload.data)
                state.data = payload.data
                state.status = 'Success'
            } else if (payload.success === false) {
                state.status = 'Not found, try again please'
            }
        },
        [getApplications]: (state) => {
            state.loading = 'error'
        }
    }
})

export default getApplicationData.reducer