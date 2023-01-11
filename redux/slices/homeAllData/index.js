import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const homeAllDataFetch = createAsyncThunk('homeAllData', async (payload)=> {
    return await fetch('https://8baa-213-230-114-52.eu.ngrok.io/api/v1/faculty').then((res)=> res.json())
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
                state.data = action?.payload?.data.faculties

            }
            console.log(action.payload.data.faculties,'dsds')
        },
        [homeAllDataFetch.rejected]: (state)=> {
            state.status = 'error'
        }
    },
})

export default homeAllData.reducer