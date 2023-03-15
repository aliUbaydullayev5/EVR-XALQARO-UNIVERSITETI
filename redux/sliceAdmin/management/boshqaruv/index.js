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
            state.status = 'loading'
        },
        [getManagementFetch.fulfilled]: (state, { payload }) => {
            if (payload.success) {
                state.data = payload.data
                state.status = 'success'
            }
        },
        [getManagementFetch.rejected]: state => {
            state.status = 'error'
        }
    },
    reducers: {
        reset(state){
            state.status = null
        }
    }
})



export const {reset} = getManagementData.actions
export default getManagementData.reducer