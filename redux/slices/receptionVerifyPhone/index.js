/** @format */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const reseptionSmsCheckSliceFetch = createAsyncThunk('receptionCheckPhone', async (payload) => {
		return await fetch(
			`${process.env.NEXT_PUBLIC_BASE_URL || 'https://evredu.uz/api/'}v1/auth/check-phone`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					firstName: payload.firstName,
					phoneNumber: payload.phoneNumber.match(/[0-9]+/g).join(''),
				}),
			},
		).then((res) => res.json());
	},
);

const reseptionCheckPhoneSlice = createSlice({
	name: 'reseptionCheckPhone',
	initialState: {
		status: null,
		message: '',
	},
	extraReducers: {
		[reseptionSmsCheckSliceFetch.pending]: (state) => {
			state.status = 'loading';
		},
		[reseptionSmsCheckSliceFetch.fulfilled]: (state, action) => {
			if (action?.payload?.success === true) {
				state.status = 'success';
				state.message = action.payload.message;
			}
		},
		[reseptionSmsCheckSliceFetch.rejected]: (state) => {
			state.status = 'error';
		},
	},
	reducers: {
		resetTimerVerify(state) {
			state.status = null;
			state.verifySms = false;
			state.message = '';
		},
	},
});

export const { resetTimerVerify } = reseptionCheckPhoneSlice.actions;
export default reseptionCheckPhoneSlice.reducer;
