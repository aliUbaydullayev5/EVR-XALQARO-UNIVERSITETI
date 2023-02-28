import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getDirectTypeFetch = createAsyncThunk('getDirectTypeFetch', async (payload)=> {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/'}v1/faculty/get-with-faculty-type?studyType=${payload.type}`)
        .then((res)=> res.json())
        .then((json)=> {
            return {
                success: json.success,
                data: [{
                    id: 0,
                    name: 'OQISH FAKULTETINI TALLANG',
                },
                    ...json.data
                ]
            }
        })
})


const getDirectType = createSlice({
    name: 'getDirectType',
    initialState: {
        data: [],
        status: null,
    },
    extraReducers: {
        [getDirectTypeFetch.pending]: (state)=> {
            state.status = 'loading'
        },
        [getDirectTypeFetch.fulfilled]: (state, action)=> {
            state.status = 'success'
            if(action?.payload?.success == true) state.data = action?.payload?.data
        },
        [getDirectTypeFetch.rejected]: (state)=> {
            state.status = 'error'
        }
    },
})

export default getDirectType.reducer