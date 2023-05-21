import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {API_GLOBAL} from "../../../../globalApi"

export const xarajatlarFetch = createAsyncThunk('xarajatlarFetch', async (payload) => {
    return await fetch(`${API_GLOBAL}v1/cost/cost?page=${payload.pageCount}&size=20`, {
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


const xarajatlar = createSlice({
    name: 'xarajatlar',
    initialState: {
        status: null,
        message: '',
        data: [],
        pageCount: 0
    },
    extraReducers: {
        [xarajatlarFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [xarajatlarFetch.fulfilled]: (state, action) => {
            if (action.payload.success === true) {

                state.status = 'success'

                let newData = action.payload.data.map((value)=> {
                    const date = new Date(value.date)
                    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
                    const dateString = date.toLocaleString('en-US', options);
                    const timeString = date.toLocaleTimeString('en-US');
                    const formattedString = `${dateString.replace(/\//g, '.')} ${timeString.replace(/([\d]+:[\d]{2}):[\d]{2} ([A-Z]{2})/, '$1')}`;
                    return ({
                        ...value,
                        date: formattedString
                    })
                })

                let lastData = 0
                if (lastData % 20 === 0 || !lastData) {
                    if ((state.data.length / 20) === state.pageCount) {
                        state.pageCount++
                        state.data = [...state.data, ...newData]
                    }
                }
            }
            else if (action.payload.success === false) {
                state.status = 'notFound'
                state.message = action.payload.errors[0].errorMsg
            }
        },
        [xarajatlarFetch.rejected]: (state) => {
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



export const { resetPageToZero } = xarajatlar.actions
export default xarajatlar.reducer