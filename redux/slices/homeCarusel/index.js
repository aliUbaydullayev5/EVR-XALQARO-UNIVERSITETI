import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {API_GLOBAL} from "../../../globalApi"

export const homeCarouselFetch = createAsyncThunk('homeCarouselFetch', async ()=> {
    return await fetch(`${API_GLOBAL}v1/carousel/get-all`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((res)=> res.json())
})

const homeCarousel = createSlice({
    name: 'homeCarousel',
    initialState: {
        data: [],
        status: null
    },
    extraReducers: {
        [homeCarouselFetch.pending]: (state)=> {
            state.status = 'loading'

        },
        [homeCarouselFetch.fulfilled]: (state, action) => {
            if (action.payload.success) {
                state.status = 'success'
                state.data = action.payload.data
            } else {
                state.status = 'warning'
            }
        },
        [homeCarouselFetch.rejected]: (state)=> {
            state.status = 'error'
        }
    },
})

export default homeCarousel.reducer