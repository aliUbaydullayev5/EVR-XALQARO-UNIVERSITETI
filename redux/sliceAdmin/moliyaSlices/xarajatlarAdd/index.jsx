import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {API_GLOBAL} from "../../../../globalApi"

export const xarajatlarAddFetch = createAsyncThunk('xarajatlarAddFetch', async (payload) => {
    return await fetch(`${API_GLOBAL}v1/cost/cost`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
        },
        body:JSON.stringify({
            name: payload.name,
            paymentType: payload.paymentType,
            amount: payload.amount,
            description: payload.description,
            attachmentIds: payload.attachmentIds
        })
    }).then((res)=> res.json())
})


const xarajatlarAdd = createSlice({
    name: 'xarajatlarAdd',
    initialState: {
        status: null,
        message: '',
        data: [],
    },
    extraReducers: {
        [xarajatlarAddFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [xarajatlarAddFetch.fulfilled]: (state, action) => {
            console.log(action.payload, 'payload')
            if (action.payload.success === true) {
                state.status = 'success'
            }
            else if (action.payload.success === false) {
                state.status = 'notFound'
                state.message = action?.payload?.errors[0]?.errorMsg
            }
        },
        [xarajatlarAddFetch.rejected]: (state) => {
            state.loading = 'error'
        }
    }
})



export default xarajatlarAdd.reducer