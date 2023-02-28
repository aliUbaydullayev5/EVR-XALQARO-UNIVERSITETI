import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllDataArizaFetch = createAsyncThunk('getAllDataFetch', async ({ page = 0, query = '', search = false }) => {
    return await fetch(`https://evrtourback.uz/api/v1/user/get?page`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json',
<<<<<<< HEAD
        }
    }).then((res) => res.json())
        .then((json) => {
            return {
                ...json,
                search
            }
        })
=======
            
        },
        responseType: "blob"

    }).then((res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', 'excel')
        document.body.appendChild(link)
        link.click()
    }
    )
>>>>>>> main
})



const getAllDataAriza = createSlice({
    name: 'getAllData',
    initialState: {
        status: null,
        message: '',
        pageCount: 0,
        data: []
    },
    extraReducers: {
        [getAllDataArizaFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [getAllDataArizaFetch.fulfilled]: (state, { payload }) => {
            if (payload.search) {
                if (payload.success === true && payload.data.length) {
                    state.status = 'success'
                    state.data = payload.data
                }
                else if (payload?.success === false) {
                    state.status = 'warning'
                }
            } else {
                if (payload.success === true && payload.data.length) {
                    state.status = 'success'
                    state.data = [...state.data, ...payload.data]
                }
                else if (payload?.success === false) {
                    state.status = 'warning'
                }
            }
        },
        [getAllDataArizaFetch.rejected]: (state) => {
            state.status = 'error'
        }
    },
    reducers: {
        addPageCount(state, action) {
            state.pageCount = state.pageCount + 1
        }
    }
})



export const { addPageCount } = getAllDataAriza.actions
export default getAllDataAriza.reducer