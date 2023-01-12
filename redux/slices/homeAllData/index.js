import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const homeAllDataFetch = createAsyncThunk('homeAllData', async (payload)=> {
<<<<<<< HEAD
    return await fetch('http://192.168.60.61:1010/api/v1/home').then((res)=> res.json())
=======
    return await fetch('https://8baa-213-230-114-52.eu.ngrok.io/api/v1/faculty').then((res)=> res.json())
>>>>>>> origin/magistratura/v1
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
<<<<<<< HEAD
                state.data = action?.payload?.data
                console.log(action?.payload)
=======
                state.data = action?.payload?.data.faculties

>>>>>>> origin/magistratura/v1
            }
            console.log(action.payload.data.faculties,'dsds')
        },
        [homeAllDataFetch.rejected]: (state)=> {
            state.status = 'error'
        }
    },
})

export default homeAllData.reducer