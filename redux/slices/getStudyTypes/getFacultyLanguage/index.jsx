import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {API_GLOBAL} from "../../../../globalApi";

export const getFacultyLanguageFetch = createAsyncThunk('getFacultyLanguageFetch', async (payload)=> {
    return await fetch(`${API_GLOBAL}v1/faculty-type/get-study-language?facultyId=${payload.id}`)
        .then((res)=> res.json())
        .then((json)=> {
            if(json.data.length){
                return {
                    data: ['OQISH TILLINI TANLANG', ...json.data],
                    success: json.success
                }
            }else return json
        })
})


const getFacultyLanguage = createSlice({
    name: 'getFacultyLanguage',
    initialState: {
        data: [],
        status: null,
    },
    extraReducers: {
        [getFacultyLanguageFetch.pending]: (state)=> {
            state.status = 'loading'
        },
        [getFacultyLanguageFetch.fulfilled]: (state, action)=> {
            state.status = 'success'
            if(action?.payload?.success == true) state.data = action?.payload?.data
        },
        [getFacultyLanguageFetch.rejected]: (state)=> {
            state.status = 'error'
        }
    },
})

export default getFacultyLanguage.reducer