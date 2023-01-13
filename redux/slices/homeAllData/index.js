import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const homeAllDataFetch = createAsyncThunk('homeAllData', async (payload)=> {
    return await fetch('http://192.168.122.61:1010/api/v1/home').then((res)=> res.json())
})

const homeAllData = createSlice({
    name: 'getAllData',
    initialState: {
        data: {},
        status: null,
    },
    extraReducers: {
        [homeAllDataFetch.pending]: (state)=> {
            state.status = 'loading'
        },
        [homeAllDataFetch.fulfilled]: (state, action)=> {
            state.status = 'success'
            if(action?.payload?.success == true){
                state.data = action?.payload?.data
            }
        },
        [homeAllDataFetch.rejected]: (state)=> {
            state.status = 'error'
        }
    },
})

export default homeAllData.reducer