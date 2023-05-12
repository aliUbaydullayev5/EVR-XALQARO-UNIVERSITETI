import {createSlice} from '@reduxjs/toolkit'

const userInfo = createSlice({
    name: 'forgotPassword',
    initialState: {
        data: {}
    },
    reducers: {
        addInfo(state, action) {
            console.log(action)
        },
        clearInfo(state){

        }
    }
})



export const { addInfo, clearInfo } = userInfo.actions
export default userInfo.reducer