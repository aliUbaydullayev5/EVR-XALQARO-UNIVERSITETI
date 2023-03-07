import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API_GLOBAL} from "../../../../globalApi";


export const getLibraryFetch = createAsyncThunk('getLibraryFetch', async (payload)=> {
    return await fetch(`${API_GLOBAL}v1/book/get`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({

        })
    })
        .then((res)=> res.json())
})

const getLibraryData = createSlice({
    name: 'getLibraryAuthorData',
    initialState: {
        status: null,
        data: []
    },
    extraReducers: {
        [getLibraryFetch.pending]: (state)=> {
            state.status = 'loading'
        },
        [getLibraryFetch.fulfilled]: (state, {payload})=> {
            if (payload?.success) {
                state.status = 'Success'
                state.data = payload
            } else {
                state.status = 'No payload'
            }
        },
        [getLibraryFetch.rejected]: (state)=> {
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



export const { resetAuthLogin } = getLibraryData.actions
export default getLibraryData.reducer