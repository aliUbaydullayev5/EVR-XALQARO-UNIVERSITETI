import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {API_GLOBAL} from "../../../../globalApi"

export const tolovlarFetch = createAsyncThunk('tolovlarFetch', async (payload) => {
    return await fetch(`${API_GLOBAL}v1/payment?paymentType=CLICK&payType=APPLICATION&q=&page=${payload.pageCount}&size=20`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
        }
    }).then((res)=> res.json())
        .then((json)=> {
            return{
                ...json,
                pageCount: payload.pageCount
            }
        })
})


const tolovlar = createSlice({
    name: 'tolovlar',
    initialState: {
        status: null,
        message: '',
        data: [],
        pageCount: 0
    },
    extraReducers: {
        [tolovlarFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [tolovlarFetch.fulfilled]: (state, action) => {
            if (action.payload.success === true) {
                state.status = 'success'
                let lastData = 0
                if (lastData % 20 === 0 || !lastData) {
                    if ((state.data.length / 20) === state.pageCount) {
                        state.pageCount++
                        state.data = [...state.data, ...action.payload.data]
                    }
                }
            } else if (action.payload.success === false) {
                state.status = 'notFound'
                state.message = action.payload.errors[0].errorMsg
            }
        },
        [tolovlarFetch.rejected]: (state) => {
            state.loading = 'error'
        }
    },
    reducers: {
        resetPageToZero(state) {
            state.status = null
            state.message = ''
            state.data = []
            state.pageCount = 0
        }
    }
})


export const { resetPageToZero } = tolovlar.actions
export default tolovlar.reducer