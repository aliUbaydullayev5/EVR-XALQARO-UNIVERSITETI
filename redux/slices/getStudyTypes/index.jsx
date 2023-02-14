import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getStudyTypesFetch = createAsyncThunk('fetchGetStudyTypes', async (payload)=> {
<<<<<<< HEAD
    console.log(`${process.env.NEXT_PUBLIC_BASE_URL}v1/faculty/get-study-type?studyType=${payload.type}`, 'LINK')
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}v1/faculty/get-study-type?studyType=${payload.type}`).then((res)=> res.json())
=======
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}v1/faculty/get-study-type?studyType=${payload.type}`)
        .then((res) => res.json())
>>>>>>> admin/login
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
<<<<<<< HEAD
            console.log(action.payload)
            if(action?.payload?.success == true) state.data = action?.payload?.data
=======
            if (action?.payload?.success == true) state.data = action?.payload?.data
>>>>>>> admin/login
        },
        [getStudyTypesFetch.rejected]: (state)=> {
            state.status = 'error'
        }
    },
})

export default getStudyTypes.reducer