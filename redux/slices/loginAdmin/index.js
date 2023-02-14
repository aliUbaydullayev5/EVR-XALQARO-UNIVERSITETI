import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAallLoginFetch = createAsyncThunk('postLoginformFetch', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}v1/auth/personal-cabinet/admin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userName: payload.userName,
            password: payload.password,
        }),
    }).then((res) => res.json())
})

const initialState = {
    status: null,
    message: '',
}
const loginAdminThunk = createSlice({
    name: 'allTransFromPush',
    initialState,
    extraReducers: {
        [getAallLoginFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [getAallLoginFetch.fulfilled]: (state, { payload }) => {
            if (payload.success === true) {
                state.status = 'success'
                state.message = 'Siz muvofiyaqatli kirdingiz'
                localStorage.setItem('accessToken', payload.data.accessToken)
                localStorage.setItem('refreshToken', payload.data.refreshToken)
            } else if (payload.success === false) {
                state.status = 'notFound'
                state.message = 'Not Found'
            }
        },
        [getAallLoginFetch.rejected]: (state) => {
            state.loading = 'Error';
        }
    },
    reducers: {
        resetData({ status, message }) {
            status = null
            message = ''
        },
        foundToken({ status, message }) {
            if (localStorage.getItem('accessToken')) {
                status = 'success'
                message = ''
            } else {
                status = null
                message = ''
            }
        }
    }
})

export const { resetData, foundToken } = loginAdminThunk.actions

export default loginAdminThunk.reducer