
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
export const getInfoUserCabinetFetch = createAsyncThunk('getInfoUserCabinetFetch', async (payload)=> {
    console.log()
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/'}v1/user/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('talaba-token')}`
        },

    }).then((res) => res.json())
})

const getInfoUserCabinet = createSlice({
    name: 'getInfoUserCabinet',
    initialState: {
        status: null,
        data: {}
    },
    extraReducers: {
        [getInfoUserCabinetFetch.pending]: (state) => {
            state.status = 'loading'
        },
        [getInfoUserCabinetFetch.fulfilled]: (state, action) => {
            if(action.payload.success === true){
                state.data = action.payload.data
                state.status = 'success'
            }
            else if(action?.payload?.success === false){
                state.status = 'error'
                state.message = action?.payload?.errors[0]?.errorMsg.split('_').join(' ')
            }
        },
        [getInfoUserCabinetFetch.rejected]: (state) => {
            state.status = 'error'
        }
    },
    // reducers: {
    //     resetTimerVerify(state) {
    //         state.verifyCode = false
    //         state.status = null
    //     }
    // }
})



// export const { resetTimerVerify } = getInfoUserCabinet.actions
export default getInfoUserCabinet.reducer