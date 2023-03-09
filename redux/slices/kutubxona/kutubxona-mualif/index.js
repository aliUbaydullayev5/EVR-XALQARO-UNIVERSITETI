import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API_GLOBAL} from "../../../../globalApi";


export const getLibraryAuthorFetch = createAsyncThunk('getLibraryAuthorFetch', async (payload)=> {
    return await fetch(`${API_GLOBAL}v1/book/author/get`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
        }
    })
        .then((res)=> res.json())
})

const getLibraryAuthorData = createSlice({
    name: 'getLibraryAuthorData',
    initialState: {
        status: null,
        data: []
    },
    extraReducers: {
        [getLibraryAuthorFetch.pending]: (state)=> {
            state.status = 'loading'
        },
        [getLibraryAuthorFetch.fulfilled]: (state, {payload})=> {
            if (payload?.success) {
                state.status = 'Success'
                state.data = payload
            } else {
                state.status = 'No payload'
            }
        },
        [getLibraryAuthorFetch.rejected]: (state)=> {
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



export const { resetAuthLogin } = getLibraryAuthorData.actions
export default getLibraryAuthorData.reducer