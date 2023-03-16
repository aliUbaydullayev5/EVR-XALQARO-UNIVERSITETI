import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {API_GLOBAL} from "../../../globalApi";

export const getTestQuestionFetch = createAsyncThunk('agentAuthFetch', async ({subjectId = '', score = ''})=> {
    return await fetch(`${API_GLOBAL}v1/exam/get-user/exam-questions?examSubjectId=${subjectId}&score=${score}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('access-token')}`
        },
    }).then((res)=> res.json())
})

const getTestQuestion = createSlice({
    name: 'agentAuth',
    initialState: {
        message: '',
        status: null,
        data: []
    },
    extraReducers: {
        [getTestQuestionFetch.pending]: (state)=> {
            state.status = 'loading'
        },
        [getTestQuestionFetch.fulfilled]: (state, action)=> {
            state.status = 'success'
            console.log(action.payload, 'payload')
            if(action?.payload?.success){
                state.pushAnswer = true
                state.data = action.payload.data
            }
            if(action?.payload?.success === false){
                state.status = 'error'
                state.message = action?.payload?.errors[0]?.errorMsg
            }
        },
        [getTestQuestionFetch.rejected]: (state)=> {
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



export const {resetData} = getTestQuestion.actions
export default getTestQuestion.reducer