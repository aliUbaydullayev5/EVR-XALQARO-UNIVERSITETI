import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {API_GLOBAL} from "../../../globalApi";
export const solveTestFetch = createAsyncThunk('createAsyncThunk', async ()=> {
    return await fetch(`${API_GLOBAL}v1/exam/get-user/-exam-subjects`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('access-token')}`
        },
    }).then((res)=> res.json())
})

const solveTest = createSlice({
    name: 'solveTest',
    initialState: {
        message: '',
        status: null,
        data: {}
    },
    extraReducers: {
        [solveTestFetch.pending]: (state)=> {
            state.status = 'loading'
        },
        [solveTestFetch.fulfilled]: (state, action)=> {
            state.status = 'success'
            if(action?.payload?.success){
                state.data = action.payload.data
            }
            if(!action?.payload?.success){
                state.status = 'error'
                state.message = action?.payload?.errors[0]?.errorMsg.split('_').join(' ')
            }
        },
        [solveTestFetch.rejected]: (state)=> {
            state.status = 'error'
        }
    },
    reducers:{
        resetData(state){
            state.message = ''
            state.status = null
            state.data = {}
        }
    }
})


export const {resetData} = solveTest.actions
export default solveTest.reducer