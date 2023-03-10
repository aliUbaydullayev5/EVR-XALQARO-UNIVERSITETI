import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {API_GLOBAL} from "../../../globalApi";

export const getAallLoginFetch = createAsyncThunk('postLoginformFetch', async (payload) => {
    return await fetch(`${API_GLOBAL}v1/auth/login`, {
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
                localStorage.setItem('admin_AccessToken', payload.data.accessToken)
                localStorage.setItem('admin_RefreshToken', payload.data.refreshToken)
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
            if (localStorage.getItem('admin_AccessToken')) {
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