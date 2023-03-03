import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getExcelfetch = createAsyncThunk('getExcelfetch', async (payload) => {
    return await fetch(`${ process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/' }v1/application/download-excel`, {
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