import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getAbuturentTypeFetch = createAsyncThunk('fetchGetStudyTypes', async (payload)=> {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}v1/faculty/get-study-type?studyType=${payload.type}`)
        .then((res) => res.json())
})

const getStudyTypesAbuturent = createSlice({
    name: 'getStudyTypes',
    initialState: {
        data: {},
        status: null,
    },
    extraReducers: {
        [getAbuturentTypeFetch.pending]: (state)=> {
            state.status = 'loading'
        },
        [getAbuturentTypeFetch.fulfilled]: (state, action)=> {
            state.status = 'success'
            if (action?.payload?.success == true) state.data = action?.payload?.data
        },
        [getAbuturentTypeFetch.rejected]: (state)=> {
            state.status = 'error'
        }
    },
})

export default getStudyTypesAbuturent.reducer