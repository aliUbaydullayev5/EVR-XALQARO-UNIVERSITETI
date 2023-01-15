import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const homeAllDataFetch = createAsyncThunk('homeAllData', async (payload)=> {
<<<<<<< HEAD
<<<<<<< HEAD

    return await fetch('http://192.168.122.61:1010/api/v1/home').then((res)=> res.json())

=======
    return await fetch('http://192.168.122.61:1010/api/v1/home').then((res)=> res.json())
>>>>>>> main
=======
    return await fetch('http://192.168.122.61:1010/api/v1/home').then((res)=> res.json())
>>>>>>> main
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
<<<<<<< HEAD
            if(action?.payload?.success == true){

                state.data = action?.payload?.data
<<<<<<< HEAD
                console.log(action?.payload)

=======
>>>>>>> main
            }
=======
            if(action?.payload?.success == true) state.data = action?.payload?.data
>>>>>>> main
        },
        [homeAllDataFetch.rejected]: (state)=> {
            state.status = 'error'
        }
    },
})

export default homeAllData.reducer