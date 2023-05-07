import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {API_GLOBAL} from "../../../globalApi"

export const fetchChatSlice = createAsyncThunk('fetchChatSlice', async ()=> {
    return await fetch(`${API_GLOBAL}v1/private-chat/update-directs`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('access-token')}`
        }
    })
        .then((res)=> res.json())
})

const chatSlice = createSlice({
    name: 'chatSlice',
    initialState: {
        status: null,
        message: '',
        data: {}
    },
    extraReducers: {
        [fetchChatSlice.pending]: (state)=> {
            state.status = 'loading'
        },
        [fetchChatSlice.fulfilled]: (state, action)=> {
            console.log(action, "action payload")
            if(action.payload.success === true){
                state.data = action.payload.data
                state.status = 'success'
            }
            else if(action?.payload?.success === false){
                state.status = 'error'
                state.message = action?.payload?.errors[0]?.errorMsg
            }
        },
        [fetchChatSlice.rejected]: (state)=> {
            state.status = 'error'
        }
    },

})

export default chatSlice.reducer