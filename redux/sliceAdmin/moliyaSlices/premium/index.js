import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {API_GLOBAL} from "../../../../globalApi"

export const premiumFetch = createAsyncThunk('premiumFetch', async () => {
    return await fetch(`${API_GLOBAL}v1/premium/get`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
        }
    }).then((res) => res.json())
})


const premium = createSlice({
    name: 'premium',
    initialState: {
        status: null,
        message: '',
        data: [],
    },
    extraReducers: {
        [premiumFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [premiumFetch.fulfilled]: (state, action) => {
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
                        state.data = action.payload.data
                        state.status = 'success'
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
        [premiumFetch.rejected]: (state) => {
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





export const { resetPageToZero } = premium.actions
export default premium.reducer