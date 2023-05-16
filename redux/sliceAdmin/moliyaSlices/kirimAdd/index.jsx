import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {API_GLOBAL} from "../../../../globalApi"

export const kirimAddFetch = createAsyncThunk('kirimAddFetch', async (payload) => {
    return await fetch(`${API_GLOBAL}v1/income`, {
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
            userId: payload.userId,
            courseLevel: payload.courseLevel || 0
        })
    }).then((res)=> res.json())
})

const kirimAdd = createSlice({
    name: 'kirimAdd',
    initialState: {
        status: null,
        message: '',
        data: [],
    },
    extraReducers: {
        [kirimAddFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [kirimAddFetch.fulfilled]: (state, action) => {
            if (action.payload.success === true) {
                state.status = 'success'
            }
            else if (action.payload.success === false) {
                state.status = 'notFound'
                state.message = action?.payload?.errors[0]?.errorMsg
            }
        },
        [kirimAddFetch.rejected]: (state) => {
            state.loading = 'error'
        }
    },
})


export const { reset } = kirimAdd.actions

export default kirimAdd.reducer