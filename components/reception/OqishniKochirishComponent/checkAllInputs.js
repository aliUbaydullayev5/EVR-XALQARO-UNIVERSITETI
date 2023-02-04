/** @format */

export const checkAllInputs2 = ({ allData }) => {
	if (!(allData.lastName.length > 3)) {
		return {
			status: false,
			message: {
				time: 5,
				message: 'Isim no togri kiritilgan',
			},
		};
	}

	if (!(allData.firstName.length > 3)) {
		return {
			status: false,
			message: {
				time: 5,
				message: 'Isim no togri kiritilgan',
			},
		};
	}

	if (!(allData.patron.length > 3)) {
		return {
			status: false,
			message: {
				time: 5,
				message: 'Isim no togri kiritilgan',
			},
		};
	}

	if (!(allData.passportSeries.length == 9)) {
		return {
			status: false,
			message: {
				time: 5,
				message: 'Passport seriya rakami no togri kiritilgan',
			},
		};
	}

	if (!(allData.phoneNumber.length == 12)) {
		return {
			status: false,
			message: {
				time: 5,
				message: 'Telefon raqamni togri kiritilganmagan',
			},
		};
	}

	if (!(allData.extraPhoneNumber.length == 12)) {
		return {
			status: false,
			message: {
				time: 5,
				message: 'Telefon raqamni togri kiritilganMaGan',
			},
		};
	}

	if (!(allData.diplomaId.length > 3)) {
		return {
			status: false,
			message: {
				time: 5,
				message: 'Diplomingizni yulang',
			},
		};
	}

	if (!(allData.passportId.length > 3)) {
		return {
			status: false,
			message: {
				time: 5,
				message: 'Passportingizni yuklang',
			},
		};
	}

	if (
		!(allData.password.length > 8 && allData.password === allData.prePassword)
	) {
		return {
			status: false,
			message: {
				time: 5,
				message: 'Parol 8 son dan kop bolishi va birhil bolishi kere ',
			},
		};
	}

	if (
		!(
			(allData.password.match(/[1-9]+/g) || []).join('').length &&
			(allData.password.match(/[a-z]+/g) || []).join('').length &&
			(allData.password.match(/[A-Z]+/g) || []).join('').length
		)
	) {
		return {
			status: false,
			message: {
				time: 5,
				message: 'Parol kichik va kattaharif va son dan iborat bolishi kere',
			},
		};
	}

	if (!allData.studyLanguage.length) {
		return {
			status: false,
			message: {
				time: 5,
				message: 'Oqish tilini tallang',
			},
		};
	}

	if (!allData.facultyId) {
		return {
			status: false,
			message: {
				time: 5,
				message: 'Oqish turini tallang',
			},
		};
	}

	if (!allData.educationType.length) {
		return {
			status: false,
			message: {
				time: 5,
				message: 'Oqish shaklini tallang',
			},
		};
	}

	if (allData.courseLevel == 0) {
		return {
			status: false,
			message: {
				time: 5,
				message: 'Oqishni kochirishni toldiring',
			},
		};
	}

	return {
		status: true,
	};
};
