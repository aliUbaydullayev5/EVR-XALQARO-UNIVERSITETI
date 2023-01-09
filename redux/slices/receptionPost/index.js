import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {useDispatch} from "react-redux";
import {startMessage} from "../message";
export const receptionPostFetch = createAsyncThunk('receptionPostFetch', async (payload)=> {
    return await fetch('http://192.168.20.61:1010/api/v1/auth/admission', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(payload),
    }).then((res)=> res.json())
})

const receptionPost = createSlice({
    name: 'receptionPost',
    initialState: {
        message: '',
        status: null,
        pushAnswer: false
    },
    extraReducers: {
        [receptionPostFetch.pending]: (state)=> {
            state.status = 'loading'
        },
        [receptionPostFetch.fulfilled]: (state, action)=> {
            state.status = 'success'
            if(action?.payload?.success){
                state.message = action.payload.message
                state.pushAnswer = true
            }
            if(action?.payload?.success == false){
                state.status = 'error'
                state.message = action?.payload?.errors[0]?.errorMsg
            }
        },
        [receptionPostFetch.rejected]: (state)=> {
            state.status = 'error'
        }
    },
    reducers:{
        resetVerify(state){
            state.pushAnswer = false
        }
    }
})


export const {resetVerify} = receptionPost.actions
export default receptionPost.reducer