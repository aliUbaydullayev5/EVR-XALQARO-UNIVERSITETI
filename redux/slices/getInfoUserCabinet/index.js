
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {API_GLOBAL} from "../../../globalApi";
export const getInfoUserCabinetFetch = createAsyncThunk('getInfoUserCabinetFetch', async (payload)=> {
    return await fetch(`${API_GLOBAL}v1/user/me`, {
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
        message: '',
        errorCode: null,
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
                state.message = 'success'
            }
            else if(action?.payload?.success === false){
                state.status = 'error'
                state.message = action?.payload?.errors[0]?.errorMsg.split('_').join(' ')
                state.errorCode = action?.payload?.errors[0]?.errorCode

            }
        },
        [getInfoUserCabinetFetch.rejected]: (state, action) => {
            state.status = 'error'
        }
    },
    reducers: {
        resetStatusCode(state) {
            state.errorCode = null
            state.message = ''
            state.status = null
        }
    }
})



export const { resetStatusCode } = getInfoUserCabinet.actions
export default getInfoUserCabinet.reducer