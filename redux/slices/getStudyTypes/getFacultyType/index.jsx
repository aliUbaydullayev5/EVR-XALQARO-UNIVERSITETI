import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getFacultyTypeFetch = createAsyncThunk('getFacultyTypeFetch', async (payload)=> {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://185.196.213.87:8088/api/'}v1/faculty-type/get-education-type?facultyId=${payload.id}&studyLanguage=${payload.lang}`)
        .then((res)=> res.json())
        .then((json)=> {
            if(json.data.length){
                return {
                    data: ['OQISH TURINI TANLANG', ...json.data],
                    success: json.success
                }
            }else return json
        })
})


const getFacultyType = createSlice({
    name: 'getFacultyType',
    initialState: {
        data: [],
        status: null
    },
    extraReducers: {
        [getFacultyTypeFetch.pending]: (state)=> {
            state.status = 'loading'
        },
        [getFacultyTypeFetch.fulfilled]: (state, action)=> {
            state.status = 'success'
            if(action?.payload?.success == true) state.data = action?.payload?.data
        },
        [getFacultyTypeFetch.rejected]: (state)=> {
            state.status = 'error'
        }
    },
    reducers: {
        resetData(state){
            if(state.data.length){
                state.data = ['OQISH TURINI TANLANG']
                state.status = null
            }
        }
    }
})



export const {resetData} =  getFacultyType.actions
export default getFacultyType.reducer