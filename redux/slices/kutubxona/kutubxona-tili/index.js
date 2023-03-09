import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API_GLOBAL} from "../../../../globalApi";


export const getLibraryLangFetch = createAsyncThunk('getLibraryLangFetch', async (payload)=> {
    return await fetch(`${API_GLOBAL}v1/book/language/get`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then((res)=> res.json())
})

const getLibraryLangData = createSlice({
    name: 'getLibraryLangData',
    initialState: {
        status: null,
        data: []
    },
    extraReducers: {
        [getLibraryLangFetch.pending]: (state)=> {
            state.status = 'loading'
        },
        [getLibraryLangFetch.fulfilled]: (state, {payload})=> {
            if (payload?.success) {
                state.status = 'Success'
                state.data = payload
            } else {
                state.status = 'No payload'
            }
        },
        [getLibraryLangFetch.rejected]: (state)=> {
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



export const { resetAuthLogin } = getLibraryLangData.actions
export default getLibraryLangData.reducer