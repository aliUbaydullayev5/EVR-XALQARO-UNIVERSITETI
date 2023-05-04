import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {API_GLOBAL} from "../../../globalApi"

export const newsGetFetch = createAsyncThunk('newsGetFetch', async (payload) => {
    console.log(payload.page, 'page')
    return await fetch(`${API_GLOBAL}v1/news/get?page=${payload.page}`, {
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


const newsGet = createSlice({
    name: 'newsGet',
    initialState: {
        status: null,
        message: '',
        data: [],
        pageCount: 0
    },
    extraReducers: {
        [newsGetFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [newsGetFetch.fulfilled]: (state, action) => {
            if (action.payload.success === true) {
                state.status = 'success'

                if(action.payload.search){
                    if(action.payload.success === true && action.payload.data.length) {
                        state.status = 'success'
                        state.data = action.payload.data
                    }
                    else if(action.payload?.success === false){
                        state.status = 'warning'
                    }
                }else{
                    if(action.payload.success === true && action.payload.data.length) {
                        state.status = 'success'
                        state.data = [...state.data, ...action.payload.data]
                    }
                    else if(action.payload?.success === false){
                        state.status = 'warning'
                    }
                }
            }
            else if (action.payload.success === false) {
                state.status = 'notFound'
                state.message = action.payload.errors[0].errorMsg
            }
        },
        [newsGetFetch.rejected]: (state) => {
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



export const { addPageCount, resetPageToZero } = newsGet.actions
export default newsGet.reducer