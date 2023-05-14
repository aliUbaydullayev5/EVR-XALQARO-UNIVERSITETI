import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {API_GLOBAL} from "../../../../globalApi"

export const tolovlarFetch = createAsyncThunk('tolovlarFetch', async (payload) => {
    return await fetch(`${API_GLOBAL}v1/payment?paymentType=CLICK&payType=CONTRACT&q=&page=${payload.page}&size=20`, {
        // `${API_GLOBAL}v1/payment?paymentType=CLICK&payType=CONTRACT&q=nimadur&page=${payload.page}&size=20`
        // `${API_GLOBAL}v1/cost/cost?page=${payload.page}&size=20`
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
        }
    }).then((res)=> res.json())
        .then((json)=> {
            return{
                ...json,
                search: payload.search
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
                if(action.payload.search){
                    if(action.payload.success === true && action.payload.data.length) {
                        state.status = 'success'
                        state.data = action.payload.data
                    }
                    else if(action.payload?.success === false) state.status = 'warning'
                }else{
                    if(action.payload.success === true && action.payload.data.length) {
                        state.status = 'success'
                        state.data = [...state.data, ...action.payload.data]
                    }
                    else if(action.payload?.success === false) state.status = 'warning'
                }
                console.log(action.payload, 'payload')
            }
            else if (action.payload.success === false) {
                state.status = 'notFound'
                state.message = action.payload.errors[0].errorMsg
            }
        },
        [tolovlarFetch.rejected]: (state) => {
            state.loading = 'error'
        }
    },
    reducers: {
        addPageCount(state) {
            state.pageCount = state.pageCount + 1
        },
        resetPageToZero(state) {
            state.status = null
            state.message = ''
            state.data = []
            state.pageCount = 0
        }
    }
})



export const { addPageCount, resetPageToZero } = tolovlar.actions
export default tolovlar.reducer