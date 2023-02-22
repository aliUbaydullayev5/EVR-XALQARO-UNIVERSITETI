import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTalimYunalishFetch = createAsyncThunk('getTalimYunalishFetch', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}v1/faculty/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({
            id: payload.id,
            nameUz: payload.nameUz,
            nameRu: payload.nameRu,
            studyType: "BACHELOR"
        }),
    }).then((res) => res.json())
})

const initialState = {
    status: null,
    message: '',
}

const getTalimYunalish = createSlice({
    name: 'getTalimYunalish',
    initialState,
    extraReducers: {
        [getTalimYunalishFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [getTalimYunalishFetch.fulfilled]: (state, action) => {
            if (action.payload.success === true) {
                state.status = 'success'
                state.message = 'Malumot qo`shildi'
            }
            else if (action.payload.success === false) {
                state.status = 'notFound'
                state.message = action.payload.errors[0].errorMsg
            }
        },
        [getTalimYunalishFetch.rejected]: (state) => {
            state.loading = 'error'
        }
    },
    reducers: {
        reset(state) {
            state.status = null
            state.message = ''
        }
    }
})


export const { reset } = getTalimYunalish.actions
export default getTalimYunalish.reducer