import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getFacultyLanguageFetch = createAsyncThunk('getFacultyLanguageFetch', async (payload)=> {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/'}v1/faculty-type/get-study-language?facultyId=${payload.id}`)
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