import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTalimYunalishFetch = createAsyncThunk('postTalimYunalish', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}v1/faculty/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('acsesToken')}`
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
            state.status = 'loading'
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