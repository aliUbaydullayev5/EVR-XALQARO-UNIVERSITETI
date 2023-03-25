import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {API_GLOBAL} from "../../../../globalApi"

export const premiumAddFetch = createAsyncThunk('premiumAddFetch', async (payload) => {
    return await fetch(`${API_GLOBAL}v1/premium/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
        },
        body:JSON.stringify({
            name: payload.name,
            amount: payload.amount
        })
    }).then((res)=> res.json())
})


const premiumAdd = createSlice({
    name: 'premiumAdd',
    initialState: {
        status: null,
        message: '',
    },
    extraReducers: {
        [premiumAddFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [premiumAddFetch.fulfilled]: (state, action) => {
            if (action.payload.success === true) {
                state.status = 'success'
            }
            else if (action.payload.success === false) {
                state.status = 'notFound'
                state.message = action?.payload?.errors[0]?.errorMsg
            }
        },
        [premiumAddFetch.rejected]: (state) => {
            state.loading = 'error'
        }
    }
})



export default premiumAdd.reducer