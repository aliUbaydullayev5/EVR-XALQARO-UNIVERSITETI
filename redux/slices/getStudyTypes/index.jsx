import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {API_GLOBAL} from "../../../globalApi";

export const getStudyTypesFetch = createAsyncThunk('fetchGetStudyTypes', async (payload)=> {
    return await fetch(`${API_GLOBAL}v1/faculty/get-study-type?studyType=${payload.type}`)
        .then((res) => res.json())
})

const getStudyTypes = createSlice({
    name: 'getStudyTypes',
    initialState: {
        data: {},
        status: null,
    },
    extraReducers: {
        [getStudyTypesFetch.pending]: (state)=> {
            state.status = 'loading'
        },
        [getStudyTypesFetch.fulfilled]: (state, action) => {
            state.status = 'success'

            if (action?.payload?.success == true) state.data = action?.payload?.data
        },
        [getStudyTypesFetch.rejected]: (state)=> {
            state.status = 'error'
        }
    },
})

export default getStudyTypes.reducer