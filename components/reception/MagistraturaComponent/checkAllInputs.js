export const checkAllInputs2 = ({allData}) => {
    //
    if(!(allData.lastName.length > 3)){
        return {
            status: false,
            message: {
                time: 5,
                message: 'Isim no togri kiritilgan'
            }
        }
    }

    if (!(allData.firstName.length > 3)) {
        return {
            status: false,
            message: {
                time: 5,
                message: 'Isim no togri kiritilgan'
            }
        }
    }


    if (!(allData.patron.length > 3)) {
        return {
            status: false,
            message: {
                time: 5,
                message: 'Isim no togri kiritilgan'
            }
        }
    }

    if (!(allData.passportSeries.length === 9)) {
        return {
            status: false,
            message: {
                time: 5,
                message: 'Passport seriya rakami no togri kiritilgan'
            }
        }
    }

    if(!(allData.phoneNumber.length === 13)) {
        return {
            status: false,
            message: {
                time: 5,
                message: 'Telefon raqamni togri kiritilgan'
            }
        }
    }

    if (!(allData.extraPhoneNumber.length === 13)) {
        return {
            status: false,
            message: {
                time: 5,
                message: 'Telefon raqamni togri kiritilganMaGan'
            }
        }
    }


    if (!(allData.facultyId)) {
        return {
            status: false,
            message: {
                time: 5,
                message: 'Oqish turini tallang'
            }
        }
    }

    if (!(allData.studyLanguage !== 'OQISH TILLINI TANLANG')) {
        return {
            status: false,
            message: {
                time: 5,
                message: 'OQISH TILLINI TANLANG'
            }
        }
    }

    if (!(allData.educationType !== 'OQISH TURINI TANLANG')) {
        return {
            status: false,
            message: {
                time: 5,
                message: 'OQISH TURINI TANLANG'
            }
        }
    }

    if (!(allData.diplomaId.length > 3)) {
        return {
            status: false,
            message: {
                time: 5,
                message: 'Diplomingizni yulang'
            }
        }
    }

    if (!(allData.passportId.length > 3)) {
        return {
            status: false,
            message: {
                time: 5,
                message: 'Passportingizni yuklang'
            }
        }
    }

    if (!(allData.password.length > 8 && allData.password === allData.prePassword)) {
        return {
            status: false,
            message: {
                time: 5,
                message: 'Parol 8 son dan kop bolishi va birhil bolishi kere '
            }
        }
    }

    if (!(
        ((allData.password.match(/[1-9]+/g) || []).join('').length)
        &&
        ((allData.password.match(/[a-z]+/g) || []).join('').length)
        &&
        ((allData.password.match(/[A-Z]+/g) || []).join('').length)
    )) {
        return {
            status: false,
            message: {
                time: 5,
                message: 'Parol kichik va kattaharif va son dan iborat bolishi kere'
            }
        }
    }

    return {status: true}
}