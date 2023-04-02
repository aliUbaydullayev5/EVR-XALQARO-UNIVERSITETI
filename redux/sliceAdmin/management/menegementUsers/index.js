import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {API_GLOBAL} from "../../../../globalApi";


export const getManagementUsersFetch = createAsyncThunk('getManagementUsersFetch', async (payload)=> {
    return await fetch(`${API_GLOBAL}v1/management/users`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
        }
    })
        .then((res) => res.json())
})

const getManagementUsers = createSlice({
    name: 'getManagementUsers',
    initialState: {
        status: null,
        data: []
    },
    extraReducers: {
        [getManagementUsersFetch.pending]: state => {
            state.status = 'loading'
        },
        [getManagementUsersFetch.fulfilled]: (state, { payload }) => {
            if (payload.success) {
                state.data = payload.data
                state.status = 'success'
            }
        },
        [getManagementUsersFetch.rejected]: state => {
            state.status = 'error'
        }
    },
    reducers: {
        reset(state){
            state.status = null
        }
    }
})



export const { reset } = getManagementUsers.actions
export default getManagementUsers.reducer