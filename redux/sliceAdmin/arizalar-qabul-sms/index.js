import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const sendSmsFetch = createAsyncThunk('sendSmsFetch', async ({
}) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}v1/sms`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({
            text: 'Ilhomjon qondaysiz',
            users: ['30bda412-6e51-483d-8019-5386aa2b7615']
        })
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })
})

const sendSmsData = createSlice({
    name: 'getAdmissionData',
    initialState: {
        status: null,
        data: [],
    },
    extraReducers: {
        [sendSmsFetch.pending]: state => {
            state.status = 'Loading'
        },
        [sendSmsFetch.fulfilled]: (state, { payload }) => {
            console.log(payload)
            if (payload.data) {
                state.data = payload.data
                state.status = 'Success'
            } else {
                state.status = 'Not found, try again please'
            }
        },
        [sendSmsFetch]: state => {
            state.status = 'Error'
        }
    }
})

export default sendSmsData.reducer