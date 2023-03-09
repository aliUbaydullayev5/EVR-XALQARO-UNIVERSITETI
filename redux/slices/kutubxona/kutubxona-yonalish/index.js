import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API_GLOBAL} from "../../../../globalApi";


export const getLibraryWayFetch = createAsyncThunk('getLibraryWayFetch', async (payload)=> {
    return await fetch(`${API_GLOBAL}v1/book/direction/get`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then((res)=> res.json())
})

const getLibraryWayData = createSlice({
    name: 'getLibraryWayData',
    initialState: {
        status: null,
        data: []
    },
    extraReducers: {
        [getLibraryWayFetch.pending]: (state)=> {
            state.status = 'loading'
        },
        [getLibraryWayFetch.fulfilled]: (state, {payload})=> {
            if (payload?.success) {
                state.status = 'Success'
                state.data = payload
            } else {
                state.status = 'No payload'
            }
        },
        [getLibraryWayFetch.rejected]: (state)=> {
            state.status = 'error'
        }
    },
    reducers:{
        resetAuthLogin(state){
            state.status = null
            state.message = ''
            state.data = {}
        }
    }
})



export const { resetAuthLogin } = getLibraryWayData.actions
export default getLibraryWayData.reducer