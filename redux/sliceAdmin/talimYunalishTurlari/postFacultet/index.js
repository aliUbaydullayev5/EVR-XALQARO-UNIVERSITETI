import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const postTalimYunalishTurlariFetch = createAsyncThunk('postTalimYunalishTurlariFetch', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}v1/faculty-type/get-all?facultyId=${payload.id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({
            studyType: "BACHELOR"
        }),
    }).then((res) => res.json())
})

const initialState = {
    status: null,
    message: '',
}

const talimYunalishTurlari = createSlice({
    name: 'talimYunalishTurlariPost',
    initialState,
    extraReducers: {
        [postTalimYunalishTurlariFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [postTalimYunalishTurlariFetch.fulfilled]: (state, action) => {
            if (action.payload.success === true) {
                state.status = 'success'
                state.message = '......'
            }
            else if (action.payload.success === false) {
                state.status = 'notFound'
                state.message = action.payload.errors[0].errorMsg
            }
        },
        [postTalimYunalishTurlariFetch.rejected]: (state) => {
            state.loading = 'error'
        }
    },
})



export default talimYunalishTurlari.reducer