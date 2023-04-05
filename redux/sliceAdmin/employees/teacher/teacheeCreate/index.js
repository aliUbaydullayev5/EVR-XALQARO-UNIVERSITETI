import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const teacherCreatePost = createAsyncThunk('teacherCreatePost', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/'}v1/worker/teacher`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('admin_AccessToken')}`
        },
        body: JSON.stringify({
            firstName: payload.firstName,
            lastName: payload.lastName,
            patron: payload.patron,
            phoneNumber: payload?.phoneNumber,
            date: payload?.date,
            groupId: payload?.groupId,
            managementId: payload?.managementId,
            password: payload?.password,
            gender: payload?.gender,
            lessonTime: +payload?.lessonTime,
            premiumId: payload?.premiumId,
            logoId: null,
            documents: null,
            contentPriceId: payload.contentPriceId,
            groupId: payload.groupId
        }),

    }).then((res) => res.json())
})

const initialState = {
    status: null,
    message: '',
    data: [],
}

const teacherCreate = createSlice({
    name: 'teacherCreate',
    initialState,
    extraReducers: {
        [teacherCreatePost.pending]: (state) => {
            state.status = 'loading'
        },
        [teacherCreatePost.fulfilled]: (state, action) => {
            if (action.payload.success === true) {
                state.data = action.payload.data
                state.status = 'success'
                state.message = 'Malumot qo`shildi'

            }
            else if (action.payload.success === false) {
                state.status = 'notFound'
                state.message = action.payload.errors[0].errorMsg
            }
        },
        [teacherCreatePost.rejected]: (state) => {
            state.loading = 'error'
        }
    },
    reducers: {
        resetteacher(state) {
            state.status = null
            state.message = ''
        }
    }
})


export const { resetteacher } = teacherCreate.actions
export default teacherCreate.reducer