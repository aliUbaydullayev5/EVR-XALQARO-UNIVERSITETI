import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {API_GLOBAL} from "../../../../globalApi"

export const tolovAddFetch = createAsyncThunk('tolovAddFetch', async (payload) => {
    return await fetch(`${API_GLOBAL}v1/payment`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
        },
        body:JSON.stringify({
            amount: payload.amount,
            paymentType: payload.paymentType,
            payType: payload.payType,
            courseLevel: payload.courseLevel,
            idNumber: payload.idNumber
        })
    }).then((res)=> res.json())
})


const tolovAdd = createSlice({
    name: 'tolovAdd',
    initialState: {
        status: null,
        message: '',
        data: [],
    },
    extraReducers: {
        [tolovAddFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [tolovAddFetch.fulfilled]: (state, action) => {
            if (action.payload.success === true) {
                state.status = 'success'
            }
            else if (action.payload.success === false) {
                state.status = 'notFound'
                state.message = action?.payload?.errors[0]?.errorMsg
            }
        },
        [tolovAddFetch.rejected]: (state) => {
            state.loading = 'error'
        }
    }
})



export default tolovAdd.reducer