import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container, { BtnCon, IconBox, InputCont, TextCon } from './style.js';
import { Modal, Spin } from 'antd';
import { Input, Button } from '../../generic';
import UploadFiler from '../../../assets/icons/uploadeFile.svg';
import UploadMobile from '../../../assets/mobile/icon/UploadMobile.svg';
import { useRouter } from 'next/router.js';
import CustomInput from 'react-phone-number-input/input';
import { deployFileFetch } from '../../../redux/slices/deployFile';
import { startMessage } from '../../../redux/slices/message';
import { getDirectTypeFetch } from '../../../redux/slices/getStudyTypes/getDirectType';
import {receptionPostFetch,resetVerify,} from '../../../redux/slices/receptionPost';
import {reseptionSmsCheckSliceFetch,resetTimerVerify,} from '../../../redux/slices/receptionVerifyPhone';
import {receptionSmsVerifyFetch,resetSmsVerify,
} from '../../../redux/slices/receptionSmsVerify';
import { checkAllInputs2 } from './checkAllInputs';
import {getFacultyLanguageFetch} from "../../../redux/slices/getStudyTypes/getFacultyLanguage";
import {getFacultyTypeFetch, resetData} from "../../../redux/slices/getStudyTypes/getFacultyType";

export const AbiturientQabul = () => {

	const router = useRouter();
	const dispatch = useDispatch();
	const [numPasSeriya, setNumPasSeriya] = useState('');
	const [pasSerLength, setPasSerLength] = useState(0);
	const reseptionCheckPhoneSlice = useSelector((store) => store.reseptionCheckPhoneSlice)
	const getDirectType = useSelector((store) => store.getDirectType.data)
	const { fileId, by, status, message } = useSelector((store) => store.deployFile)
	const receptionSmsVerify = useSelector((store) => store.receptionSmsVerify)
	const receptionData = useSelector((store) => store.receptionPost)
	const getFacultyLanguage = useSelector((store)=> store.getFacultyLanguage)
	const getFacultyType = useSelector((store)=> store.getFacultyType)

	const changeMumPass = (event) => {
		if (pasSerLength < event.length) {
			setPasSerLength(event.length - 1);
			if (event.length == 2) return setNumPasSeriya(event.toUpperCase() + ' ');
		} else if (pasSerLength >= event.length) {
			setPasSerLength(event.length);
			setNumPasSeriya(event.toUpperCase());
		}
		changeAllDataFunc({
			type: 'passportSeries',
			value: event.split(' ').join('').toUpperCase(),
		})

		return setNumPasSeriya(event.toUpperCase());
	};

	const [width, setWidth] = useState(null);
	useEffect(() => {
		if (window.innerWidth < 1000) setWidth('100%');
		else setWidth('513px');
	});

	const [allData, setAllData] = useState({
		lastName: '',
		studyType: '',
		firstName: '',
		patron: '',
		password: '',
		prePassword: '',
		passportSeries: '',
		phoneNumber: '',
		extraPhoneNumber: '',
		courseLevel: 0,
		studyLanguage: '',
		educationType: '',
		facultyId: 0,
		diplomaId: '',
		passportId: '',
		verifyCode: ''
	});

	const changeAllDataFunc = ({ type, value }) => {
		const fakeData = allData;
		fakeData[type] = value;
		setAllData(fakeData);
		setAllData({ ...allData, [type]: value });
	};


	const findFileFunc = ({ file, by }) => dispatch(deployFileFetch({ file: file, by }));

	useEffect(() => {
		dispatch(getDirectTypeFetch({ type: 'BACHELOR' }));
	}, []);

	useEffect(() => {
		changeAllDataFunc({type: by, value: fileId})
		if(status === 'success') dispatch(startMessage({time: 2, message, type: 'success'}))
		if(status === 'error') dispatch(startMessage({time: 2, message}))
		console.log(fileId, by, status, '======', message, 'dsadasdas')
	}, [status])


	useEffect(() => changeAllDataFunc({ type: 'studyType', value: 'BACHELOR' }), []);

	const checkAllInputs = () => {
		const result = checkAllInputs2({ allData });
		if (result?.status) return true;
		else {
			dispatch(
				startMessage({
					time: result.message.time,
					message: result.message.message,
				}),
			);
			return false;
		}
	};

	useEffect(() => {
		if (receptionData?.status === 'error') {
			dispatch(
				startMessage({
					time: 5,
					type: 'error',
					message: receptionData.message,
				}),
			);
		}
	}, [receptionData]);

	if (receptionData.pushAnswer) {
		router.push('/receptionPage/application/UsersCardInfo');
		if (receptionData.status === 'success')
			dispatch(
				startMessage({
					time: 5,
					type: 'success',
					message: receptionData.message,
				}),
			);
		setTimeout(() => {
			dispatch(resetVerify());
		}, 2000);
	}

	const [phonePatron, setphonePatron] = useState('+998');
	const [numState, setNumState] = useState('+998');

	const funForPhoneinput = ({ value, type }) => {
		setphonePatron(value);
		changeAllDataFunc({ value: value?.match(/[0-9]+/g).join(''), type });
	};
	const funPhoneNumber = ({ value, type }) => {
		setNumState(value);
		changeAllDataFunc({ value: value?.match(/[0-9]+/g).join(''), type });
	};

	// status, pushToHome, message
	const [modelHidden, setModalHidden] = useState(false);
	const [smsInput, setSmsInput] = useState('');

	const smsFunc = () => {
		if (checkAllInputs())
			dispatch(
				reseptionSmsCheckSliceFetch({
					firstName: allData.firstName,
					phoneNumber: allData.phoneNumber
				}),
			)
	}

	const verifyCodeFunc = () => {
		if (smsInput.length === 6)
			dispatch(
				receptionSmsVerifyFetch({
					verifyCode: allData.verifyCode,
					phoneNumber: allData.phoneNumber,
				}),
			)
		else
			dispatch(
				startMessage({ time: 3, message: 'Sms 6 honali bolishi kerak' }),
			)
	}

	const pushAllInfo = () => {
		if (checkAllInputs()) dispatch(receptionPostFetch(allData))
	}


	useEffect(() => {
		if (reseptionCheckPhoneSlice.status === 'success') setModalHidden(true);
	}, [reseptionCheckPhoneSlice]);

	useEffect(() => {
		receptionSmsVerify?.status === 'success' && setModalHidden(false)
		receptionSmsVerify?.status === 'error' &&
			dispatch(startMessage({ time: 3, message: 'Sms no togri' }))
	}, [receptionSmsVerify])

	useEffect(() => {
		dispatch(resetSmsVerify())
		setSmsInput('')
	}, [allData.phoneNumber])


	// RESET ALL DATA

	useEffect(() => {
		if (receptionData.status === 'success') {
			router.push('/receptionPage/application/UsersCardInfo')
			setTimeout(() => {
				dispatch(resetVerify())
				dispatch(resetTimerVerify())
				dispatch(resetSmsVerify())
			}, 2000)
		}
	})
	const selectDirectFunc = ({type, value}) => {
		dispatch(getFacultyLanguageFetch({id: value}))
		changeAllDataFunc({ type, value})
	}

	useEffect(()=> {
		changeAllDataFunc({ type: 'studyLanguage', value: 'OQISH TILLINI TANLANG'})
		changeAllDataFunc({ type: 'educationType', value: 'OQISH TURINI TANLANG'})
		dispatch(resetData())
	}, [getFacultyLanguage])

	useEffect(()=> {
		dispatch(getFacultyLanguageFetch({id: allData.facultyId}))
	}, [getDirectType])

	const selectLanguageFunc = ({type, value}) => {
		dispatch(getFacultyTypeFetch({id: allData.facultyId, lang: value}))
		changeAllDataFunc({ type, value})
	}

	return (
		<Container>
			<TextCon>
				<h1>Abiturient</h1>
			</TextCon>
			<InputCont>
				<div className='row1'>
					<Input
						placeholder={'Familyangiz'}
						mradius={'5px'}
						mpadding={'0 0 0 19px '}
						mwidth={'290px'}
						mheight={'27px'}
						msize={'16px'}
						width={'513px'}
						height={'46px'}
						size={'24px'}
						onchange={(e) =>
							changeAllDataFunc({ type: 'lastName', value: e.target.value })
						}
					/>
				</div>

				<IconBox className='row9'>
					<select value={allData.educationType} name="cars" id="cars" style={{width}} onChange={(e) => changeAllDataFunc({ type: 'educationType', value: e.target.value })}  >
						{
							getFacultyType?.data?.length && getFacultyType?.data?.map((value) => (
								<option id={value} value={value} selected={value === 'OQISH TURINI TANLANG'} disabled={value === 'OQISH TURINI TANLANG'}>{value}</option>
							))
						}
					</select>
				</IconBox>

				<div className='row2'>
					<Input
						placeholder={'Ismingiz'}
						mradius={'5px'}
						mpadding={'0 0 0 19px '}
						mwidth={'100%'}
						mheight={'27px'}
						msize={'16px'}
						width={'513px'}
						height={'46px'}
						size={'24px'}
						onchange={(e) =>
							changeAllDataFunc({ type: 'firstName', value: e.target.value })
						}
					/>
				</div>

				<div className='row5'>
					<Container.Number>
						<CustomInput
							placeholder='Enter phone number'
							onChange={(value) =>
								funPhoneNumber({ value, type: 'phoneNumber' })
							}
							maxLength={17}
							value={numState}
							className={'customPhoneInput'}
						/>
						<Container.NumberText>Enter phone number</Container.NumberText>
					</Container.Number>
				</div>

				<div className='row3'>
					<Input
						mpadding={'0 0 0 19px '}
						mradius={'5px'}
						mwidth={'100%'}
						mheight={'26px'}
						msize={'16px'}
						width={'513px'}
						height={'46px'}
						placeholder={'Otangizni ismi'}
						padding={'7px 0px 0px 30px'}
						size={'24px'}
						onchange={(e) =>
							changeAllDataFunc({ type: 'patron', value: e.target.value })
						}
					/>
				</div>
				<div className='row6'>
					<Container.Number>
						<CustomInput
							placeholder='Enter phone number'
							onChange={(value) =>
								funForPhoneinput({ value, type: 'extraPhoneNumber' })
							}
							maxLength={17}
							value={phonePatron}
							className={'customPhoneInput'}
						/>
						<Container.NumberText>Enter phone number</Container.NumberText>
					</Container.Number>
				</div>
				<div className='row4'>
					<Input
						placeholder={'Pasport seriyasingiz'}
						mradius={'5px'}
						mpadding={'0 0 0 19px '}
						mwidth={'290px'}
						mheight={'26px'}
						msize={'16px'}
						width={'513px'}
						height={'46px'}
						size={'24px'}
						onchange={(e) => changeMumPass(e.target.value)}
						value={numPasSeriya}
						maxlength={'10'}
					/>
				</div>

				<div className='row11'>
					<div>
						<div>
							<IconBox>
								<Container.InputCustom2
									type={'file'}
									onChange={(e) => findFileFunc({ file: e, by: 'diplomaId' })}
								/>
								<UploadFiler className={'UploadFile2'} />
								<UploadMobile className={'UploadFileMobile'} />
							</IconBox>
						</div>
						<div>
							<IconBox>
								<Input
									type={'password'}
									mpadding={'0 0 0 19px '}
									mradius={'5px'}
									mwidth={'100%'}
									mheight={'26px'}
									msize={'16px'}
									width={'251px'}
									height={'46px'}
									placeholder={'Parol'}
									padding={'0 8px'}
									size={'24px'}
									onchange={(e) =>
										changeAllDataFunc({
											type: 'password',
											value: e.target.value,
										})
									}
								/>
							</IconBox>
						</div>
					</div>
				</div>

				<IconBox className='row7'>
					<select name="cars" id="cars" style={{width}} onChange={(e) => selectDirectFunc({type: 'facultyId', value: e.target.value})} >
						{
							getDirectType.length && getDirectType?.map((value) => (
								<option id={value.id} value={value.id} selected={value.name === 'OQISH FAKULTETINI TALLANG'} disabled={value.name === 'OQISH FAKULTETINI TALLANG'} >{value.name}</option>
							))
						}
					</select>
				</IconBox>

				<div className='row10'>
					<div>
						<div>
							<IconBox>
								<Container.InputCustom1
									type={'file'}
									onChange={(e) => findFileFunc({ file: e, by: 'passportId' })}
								/>
								<UploadFiler className={'UploadFile1'} />
								<UploadMobile className={'UploadFileMobile2'} />
							</IconBox>
						</div>
						<div>
							<IconBox>
								<Input
									type={'password'}
									mpadding={'0 0 0 19px '}
									mradius={'5px'}
									mwidth={'100%'}
									mheight={'26px'}
									msize={'16px'}
									width={'251px'}
									height={'46px'}
									placeholder={'Parol Qayta Kiriting'}
									padding={'0 8px'}
									size={'24px'}
									onchange={(e) =>
										changeAllDataFunc({
											type: 'prePassword',
											value: e.target.value,
										})
									}
								/>
							</IconBox>
						</div>
					</div>
				</div>
				<IconBox className='row8'>
					<select name="cars" id="cars" value={allData.studyLanguage} style={{width}} onChange={(e) => selectLanguageFunc({ type: 'studyLanguage', value: e.target.value })}  >
						{
							getFacultyLanguage?.data.length && getFacultyLanguage?.data?.map((value) => (
								<option selected={value === 'OQISH TILLINI TANLANG'} disabled={value === 'OQISH TILLINI TANLANG'} id={value} value={value} >{value}</option>
							))
						}
					</select>
				</IconBox>
				<BtnCon className='row12'>
					{receptionSmsVerify.status === 'success' ? (
						<>
							{receptionData.status == 'loading' && (
								<Button
									mradius={'5px'}
									mwidth={'177px'}
									mheight={'26px'}
									msize={'16px'}
									width={'250px'}
									height={'43px'}
									size={'21px'}
									cursor={'none'}
									disabled={true}>
									<Container.ButtonLoader>
										<Spin />
									</Container.ButtonLoader>
								</Button>
							)}
							{receptionData.status !== 'loading' && (
								<Button
									mradius={'5px'}
									mwidth={'177px'}
									mheight={'26px'}
									msize={'16px'}
									width={'250px'}
									height={'43px'}
									size={'21px'}
									onclick={() => pushAllInfo()}>
									QOLDIRISH
								</Button>
							)}
						</>
					) : (
						<Button
							mradius={'5px'}
							mwidth={'250px'}
							mheight={'26px'}
							msize={'16px'}
							width={'300px'}
							height={'43px'}
							size={'21px'}
							padding={'0 10px'}
							onclick={() => smsFunc()}>
							Telefon raqamni tastiqlash
						</Button>
					)}
				</BtnCon>
			</InputCont>

			<Modal
				open={modelHidden}
				onOk={() => setModalHidden(!modelHidden)}
				onCancel={() => setModalHidden(!modelHidden)}
				footer={false}>
				<Container.Model>
					<p>Sms ni kiriting</p>
					<Input
						placeholder={'_ _ _ _ _ _'}
						align={'center'}
						malign={'center'}
						maxlength={6}
						onKeyDown={(e) => e.key === 'Enter' && verifyCodeFunc()}
						value={smsInput}
						onchange={(e) => {
							setSmsInput(e.target.value);
							changeAllDataFunc({ type: 'verifyCode', value: e.target.value });
						}}
					/>
					{receptionSmsVerify.status === 'loading' ? (
						<>
							<Button width={'400px'} height={'50px'}>
								<Container.ButtonLoader>
									<Spin />
								</Container.ButtonLoader>
							</Button>
						</>
					) : (
						<>
							<Button
								width={'400px'}
								height={'50px'}
								msize={'24px'}
								mheight={'40px'}
								mwidth={'300px'}
								onclick={() => verifyCodeFunc()}>
								Tastiqlash
							</Button>
						</>
					)}
				</Container.Model>
			</Modal>
		</Container>
	);
};

export default AbiturientQabul;
