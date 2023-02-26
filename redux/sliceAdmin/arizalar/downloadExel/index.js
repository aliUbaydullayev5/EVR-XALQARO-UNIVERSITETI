import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getExcelfetch = createAsyncThunk('getExcelfetch', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}v1/application/download-excel`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        responseType: "blob"
    })
        .then(res => res.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = url
            link.download = `excel.xlsx`;
            document.body.appendChild(link)
            link.click()
            link.remove()
        })
})

const getExcelData = createSlice({
    name: 'getExcelData',
    initialState: {
        data: [],
        status: ''
    },
    extraReducers: {
        [getExcelfetch.pending]: (state) => {
            state.status = 'loading'
        },
        [getExcelfetch.fulfilled]: (state, payload) => {
            state.status = 'success'
            state.data = payload.data
        },
        [getExcelfetch]: (state) => {
            console.log('error')
        }
    }
})

export default getExcelData.reducer