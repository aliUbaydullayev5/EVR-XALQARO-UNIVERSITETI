
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {API_GLOBAL} from "../../../globalApi";
export const getGalleryDataFetch = createAsyncThunk('getGalleryDataFetch', async (payload)=> {
    return await fetch(`${API_GLOBAL}v1/gallery/get`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res) => res.json())
})

const getGalleryData = createSlice({
    name: 'getGalleryData',
    initialState: {
        message: '',
        status: null,
        data: []
    },
    extraReducers: {
        [getGalleryDataFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [getGalleryDataFetch.fulfilled]: (state, {payload}) => {
            if(payload.success === true){
                state.status = 'success'
                state.data = payload.data
            }
            else if(payload?.success === false){
                state.status = 'error'
                state.message = action?.payload?.errors[0]?.errorMsg
            }
        },
        [getGalleryDataFetch.rejected]: (state) => {
            state.status = 'error'
        }
    }
})


export default getGalleryData.reducer