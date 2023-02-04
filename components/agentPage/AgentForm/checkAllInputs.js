export const checkAllInputs2 = ({allData}) => {

    if(!(allData.firmaName.length > 3)){
        return {
            status: false,
            message: {
                time: 5,
                message: 'Firma nomini togri kiriting'
            }
        }
    }

    if(!(allData.fio.length > 3)){
        return {
            status: false,
            message: {
                time: 5,
                message: 'FIO no togri kiriting'
            }
        }
    }


    if (!(allData.countFirma)) {
        return {
            status: false,
            message: {
                time: 5,
                message: 'Figmani miqdorini kiriting'
            }
        }
    }

    if (!(allData.passportSeries.length == 9)) {
        return {
            status: false,
            message: {
                time: 5,
                message: 'Pasport seriyasini kiriting'
            }
        }
    }

    if(!(allData.phoneNumber.length == 12)) {
        return {
            status: false,
            message: {
                time: 5,
                message: 'Telefon raqamni togri kiritilganmagan'
            }
        }
    }

    if (!(allData.extraPhoneNumber.length == 12)) {
        return {
            status: false,
            message: {
                time: 5,
                message: 'Telefon raqamini togri kiriting'
            }
        }
    }

    if (!(allData.certificateId.length > 3)) {
        return {
            status: false,
            message: {
                time: 5,
                message: 'Sertifikatingizni yuklang'
            }
        }
    }

    if (!(allData.passportId.length > 3)) {
        return {
            status: false,
            message: {
                time: 5,
                message: 'Figma rahbariyat pasportini yuklang'
            }
        }
    }

    if (!(allData.password.length > 8 && allData.password === allData.prePassword)) {
        return {
            status: false,
            message: {
                time: 5,
                message: 'Parol 8 son dan kop bolishi va parollar bir bolishi shart'
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
                message: 'Parol katta kichik hatiflardan va sonlardan tashkilish kere'
            }
        }
    }

    return {
        status: true
    }
}