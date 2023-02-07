import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTalimYunalishFetch = createAsyncThunk('postTalimYunalish', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/v1/faculty/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI5OTg5OTM4OTA5MjciLCJpYXQiOjE2NzU2ODA3MzMsImV4cCI6MTY3NjI4NTUzM30.0TwgQ_6sKBbDYH5EJEsWGaKCRkxGsNsp93LQGXiwbPNUvWeYoDqp86wh5eiNpDZhHtE6WVnnD99es0RftBIwgg'}`
        },
        body: JSON.stringify({
            name: payload.name,
            studyType: "BACHELOR"
        }),
    }).then((res) => res.json())
})

const initialState = {
    status: null,
    message: '',
    data: {},
}

const talimYunalishAdmin = createSlice({
    name: 'allTalimYunalish',
    initialState,
    extraReducers: {
        [getTalimYunalishFetch.pending]: (state) => {
            state.success = 'loading'
        },
        [getTalimYunalishFetch.fulfilled]: (state, action) => {
            if (action.payload.success === true) {
                state.data = action.data
                state.status = 'success'
                state.message = 'Malumot qo`shildi'
            }
            else if (action.payload.success === false) {
                state.status = 'notFound'
                state.message = action.payload.errors[0].errorMsg
            }
        },
        [getTalimYunalishFetch.rejected]: (state) => {
            state.loading = 'Error';
        }
    },
    reducers: {
        reset(state) {
            state.status = null
            state.message = ''
        }
    }
})


export const { reset } = talimYunalishAdmin.actions
export default talimYunalishAdmin.reducer