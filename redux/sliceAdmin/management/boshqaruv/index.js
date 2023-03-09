import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {API_GLOBAL} from "../../../../globalApi";


export const getManagementFetch = createAsyncThunk('getManagementFetch', async (payload)=> {
    return await fetch(`${API_GLOBAL}v1/management`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
        }
    })
        .then((res) => res.json())
})

const getManagementData = createSlice({
    name: 'getManagementData',
    initialState: {
        status: null,
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
        [getManagementFetch.rejected]: state => {
            state.status = 'Error'
        }
    }
})



export default getManagementData.reducer