import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const deployFileFetch = createAsyncThunk('deployFetchData', async (payload)=> {
    let formData = new FormData()
    formData.append('file', payload.file.target.files[0])
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/'}v1/attachment/upload`, {
        headers: {
            Secret: 'eyJhbGciOiJIUzI1NiJ9.e30.ZRrHA1JJJW8opsbCGfG_HACGpVUMN_a9IV7pAx'
        },
        method: 'POST',
        body: formData
    })
        .then((res)=> res.json())
        .then((json)=> {
            return {...json, by: payload.by}
        })
})

const deployFile = createSlice({
    name: 'deployFile',
    initialState: {
        fileId: '',
        status: null,
        by: ''
    },
    extraReducers: {
        [deployFileFetch.pending]: (state)=> {
            state.status = 'loading'
        },
        [deployFileFetch.fulfilled]: (state, {payload})=> {
            const {success, data, by} = payload
            if(success == true){
                state.status = 'success'
                state.fileId = data
                state.by = by
            }
        },
        [deployFileFetch.rejected]: (state)=> {
            state.status = 'error'
        }
    },
})

export default deployFile.reducer