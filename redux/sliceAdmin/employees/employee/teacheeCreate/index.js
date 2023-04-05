import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const employeeCreatePost = createAsyncThunk('employeeCreatePost', async (payload) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/'}v1/worker`, {
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
            date: payload.date,
            managementId: payload?.managementId,
            password: payload?.password,
            gender: payload?.gender,
            premiumId: payload?.premiumId,
            "type": "CUSTOM",
            logoId: null,
            documents: null,
            contentPriceId: payload.contentPriceId,

        }),

    }).then((res) => res.json())
})

const initialState = {
    status: null,
    message: '',
    data: [],
}

const employeeCreate = createSlice({
    name: 'teacherCreate',
    initialState,
    extraReducers: {
        [employeeCreatePost.pending]: (state) => {
            state.status = 'loading'
        },
        [employeeCreatePost.fulfilled]: (state, action) => {
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
        [employeeCreatePost.rejected]: (state) => {
            state.loading = 'error'
        }
    },
    reducers: {
        resetemployee(state) {
            state.status = null
            state.message = ''
        }
    }
})


export const { resetemployee } = employeeCreate.actions
export default employeeCreate.reducer