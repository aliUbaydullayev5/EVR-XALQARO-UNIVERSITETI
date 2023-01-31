import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getAdminArizalarFetch = createAsyncThunk('getAdminArizalar', async (payload) => {
    return await fetch(`http://localhost:8080/api/users`).then((res)=>res.json()).then((res)=>console.log(res))
})


export const getAdminArizalar = createSlice({
    name: 'getAdminArizalar',
    initialState: {
        data: {},
        status: null,
    },
    extraReducers: {
        [getAdminArizalarFetch.pending]: (state) => {
            state.status='loading'
        },
        [getAdminArizalarFetch.fulfilled]: (state, action) => {
            state.state = 'success'   
            if (action?.payload?.success==true) {
               state.data =  action?.payload?.data 
            }
        },
        [getAdminArizalarFetch.rejected]: (state) => {
            state.status = 'error'
        }

    }

})

export default getAdminArizalar.reducer