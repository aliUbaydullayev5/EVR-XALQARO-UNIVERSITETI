/** @format */

import Container, { BtnCon, IconBox, InputCont, TextCon } from './style.js';
import UploadFiler from '../../../assets/icons/uploadeFile.svg';
import { Button, Input } from '../../generic';
import AntSelect from '../Antd/style';
import { useRouter } from 'next/router.js';
import React, { useEffect, useState } from 'react';
import UploadMobile from '../../../assets/mobile/icon/UploadMobile.svg';

import { useDispatch, useSelector } from 'react-redux';
import { deployFileFetch } from '../../../redux/slices/deployFile';
import {
	receptionPostFetch,
	resetVerify,
} from '../../../redux/slices/receptionPost';
import { startMessage } from '../../../redux/slices/message';
import CustomInput from 'react-phone-number-input/input';
import {getDirectTypeFetch, getStudyTypesFetch} from '../../../redux/slices/getStudyTypes/getDirectType';
import { checkAllInputs2 } from './checkAllInputs';
import { Modal, Spin } from 'antd';
import {
	reseptionSmsCheckSliceFetch,
	resetTimerVerify,
} from '../../../redux/slices/receptionVerifyPhone/index.js';
import {
	receptionSmsVerifyFetch,
	resetSmsVerify,
} from '../../../redux/slices/receptionSmsVerify/index.js';
import {getFacultyLanguageFetch} from "../../../redux/slices/getStudyTypes/getFacultyLanguage";
import {getFacultyTypeFetch, resetData} from "../../../redux/slices/getStudyTypes/getFacultyType";

const OqishniKochirishComponent = () => {

	const router = useRouter();
	const dispatch = useDispatch();

	const reseptionCheckPhoneSlice = useSelector((store) => store.reseptionCheckPhoneSlice)
	const getDirectType = useSelector((store) => store.getDirectType.data)
	const { fileId, by } = useSelector((store) => store.deployFile)
	const receptionSmsVerify = useSelector((store) => store.receptionSmsVerify)
	const receptionData = useSelector((store) => store.receptionPost)
	const getFacultyLanguage = useSelector((store)=> store.getFacultyLanguage)
	const getFacultyType = useSelector((store)=> store.getFacultyType)




	// Pasport input uchun probel koshadigon funcsiya
	const [numPasSeriya, setNumPasSeriya] = useState('')
	const [pasSerLength, setPasSerLength] = useState(0);
	const changeMumPass = (event) => {
		if (pasSerLength < event.length) {
			setPasSerLength(event.length - 1)
			if (event.length == 2) return setNumPasSeriya(event.toUpperCase() + ' ')
		} else if (pasSerLength >= event.length) {
			setPasSerLength(event.length)
			setNumPasSeriya(event.toUpperCase())
		}
		changeAllDataFunc({
			type: 'passportSeries',
			value: event.split(' ').join('').toUpperCase(),
		});
		return setNumPasSeriya(event.toUpperCase())
	}




	// input selector larni width zi
	const [width, setWidth] = useState(null)
	useEffect(() => {
		if (window.innerWidth < 1000) setWidth('100%')
		else setWidth('513px')
	})


	const [allData, setAllData] = useState({
		lastName: '',
		studyType: '',
		firstName: '',
		patron: '',
		password: '',
		prePassword: '',
		passportSeries: '',
		phoneNumber: '+998',
		extraPhoneNumber: '+998',
		courseLevel: 0,
		studyLanguage: '',
		educationType: '',
		facultyId: 0,
		diplomaId: '',
		passportId: '',
		verifyCode: ''
	})

	const changeAllDataFunc = ({ type, value }) => {
		const fakeData = allData
		fakeData[type] = value
		setAllData(fakeData)
		setAllData({ ...allData, [type]: value })
	}


	const findFileFunc = ({ file, by }) => dispatch(deployFileFetch({ file: file, by }));

	useEffect(() => {
		dispatch(getDirectTypeFetch({ type: 'BACHELOR' }))
	}, [])

	useEffect(() => changeAllDataFunc({ type: by, value: fileId }), [fileId]) // file ni yuklab id sini allData ga yozib koyadi
	useEffect(() => changeAllDataFunc({ type: 'studyType', value: 'BACHELOR' }), []); // kirishiga magister yoki bakalavir uhcunligini allData ga yozib koyadi

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


	const funPhoneNumber = ({ value, type }) => {
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
		if (smsInput.length === 6) dispatch(receptionSmsVerifyFetch({verifyCode: allData.verifyCode, phoneNumber: allData.phoneNumber}))
		else dispatch(startMessage({ time: 3, message: 'Sms 6 honali bolishi kerak' }))
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

	useEffect(()=> {
		dispatch(resetSmsVerify())
		setSmsInput('')
	}, [allData.phoneNumber])

	useEffect(()=> {
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

	// select uchun
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
				<h1>O‘qishni ko‘chirish</h1>
			</TextCon>
			<InputCont>
				<div className={'row1'}>
					<Input
						placeholder={'Familyangiz'}
						msize={'16px'}
						mradius={'5px'}
						mpadding={'0 19px'}
						mwidth={'290px'}
						mheight={'26px'}
						width={'513px'}
						height={'46px'}
						size={'24px'}
						onchange={(e) =>
							changeAllDataFunc({ type: 'lastName', value: e.target.value })
						}
					/>
				</div>

				<div className={'row7'}>
					<IconBox>

						<select value={allData.educationType} style={{width}} onChange={(e) => changeAllDataFunc({ type: 'educationType', value: e.target.value })}  >
							{
								getFacultyType?.data?.length && getFacultyType?.data?.map((value) => (
									<option id={value} value={value} selected={value === 'OQISH TURINI TANLANG'} disabled={value === 'OQISH TURINI TANLANG'}>{value}</option>
								))
							}
						</select>

					</IconBox>
				</div>

				<div className={'row2'}>
					<Input
						placeholder={'Ismingiz'}
						mpadding={'0 19px'}
						msize={'16px'}
						mradius={'5px'}
						mwidth={'290px'}
						mheight={'26px'}
						width={'513px'}
						height={'46px'}
						size={'24px'}
						onchange={(e) => changeAllDataFunc({ type: 'firstName', value: e.target.value })}
					/>
				</div>

				<div className={'row8'}>
					<IconBox>
						<select value={allData.courseLevel} style={{width}} onChange={(e) => changeAllDataFunc({ type: 'courseLevel', value: e.target.value })}  >
							<option disabled={true} selected={true} value={0}>OQISH KURSINI TANLANG</option>
							<option value={1}>1-kurs</option>
							<option value={2}>2-kurs</option>
							<option value={3}>3-kurs</option>
							<option value={4}>4-kurs</option>
						</select>
					</IconBox>
				</div>

				<div className={'row3'}>
					<Input
						placeholder={'Otangizni ismi'}
						mpadding={'0 19px'}
						msize={'16px'}
						mradius={'5px'}
						mwidth={'290px'}
						mheight={'26px'}
						width={'513px'}
						height={'46px'}
						size={'24px'}
						onchange={(e) =>
							changeAllDataFunc({ type: 'patron', value: e.target.value })
						}
					/>
				</div>


				<div className={'row10'}>
					<Container.Number>
						<CustomInput
							placeholder='Enter phone number'
							onChange={(value) => changeAllDataFunc({ type: 'extraPhoneNumber', value})}
							maxLength={17}
							value={allData.extraPhoneNumber}
							className={'phoNumber'}
						/>
						<Container.NumberText>Enter extra phone number</Container.NumberText>
					</Container.Number>
				</div>


				<div className={'row4'}>
					<Input
						placeholder={'Pasport seriyasingiz'}
						mpadding={'0 19px'}
						msize={'16px'}
						mradius={'5px'}
						width={'513px'}
						mwidth={'290px'}
						mheight={'26px'}
						height={'46px'}
						size={'24px'}
						onchange={(e) => changeMumPass(e.target.value)}
						value={numPasSeriya}
						maxlength={'10'}
					/>
				</div>

				<div className={'row9'}>
					<Container.Number>
						<CustomInput
							placeholder='Enter phone number'
							onChange={(value) => changeAllDataFunc({ type: 'phoneNumber', value})}
							maxLength={17}
							value={allData.phoneNumber}
							className={'phoNumber'}
						/>
						<Container.NumberText>Enter phone number</Container.NumberText>
					</Container.Number>
				</div>

				<div className={'row5'}>
					<IconBox>
						<select value={allData.facultyId} style={{width}} onChange={(e) => selectDirectFunc({type: 'facultyId', value: e.target.value})} >
							{
								getDirectType.length && getDirectType?.map((value, index) => (
									<option id={value.id} value={value.id} selected={value.name === 'OQISH FAKULTETINI TALLANG'} disabled={value.name === 'OQISH FAKULTETINI TALLANG'} >{value.name}</option>
								))
							}
						</select>
					</IconBox>
				</div>

				<div className='row11'>
					<div>
						<div>
							<IconBox>
								<Container.InputCustom2
									type={'file'}
									onChange={(e) => findFileFunc({ file: e, by: 'diplomaId' })}
								/>
								<UploadFiler className={'UploadFile'} />
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

				<div className={'row6'}>
					<IconBox>

						<select value={allData.studyLanguage} name="cars" id="cars"style={{width}} onChange={(e) => selectLanguageFunc({type: 'studyLanguage', value: e.target.value})} >
							{
								getFacultyLanguage.data.length && getFacultyLanguage?.data?.map((value, index) => (
									<option id={index} value={value} selected={value === 'OQISH TILLINI TANLANG'} disabled={value === 'OQISH TILLINI TANLANG'} >{value}</option>
								))
							}
						</select>

					</IconBox>
				</div>

				<div className='row12'>
					<div>
						<div>
							<IconBox>
								<Container.InputCustom1
									type={'file'}
									onChange={(e) => findFileFunc({ file: e, by: 'passportId' })}
								/>
								<UploadFiler className={'UploadFile'} />
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
									placeholder={'Parol Qayta Kiriting'}
									padding={'0 8px'}
									size={'24px'}
									onchange={(e) => changeAllDataFunc({type: 'prePassword', value: e.target.value})}
								/>
							</IconBox>
						</div>
					</div>
				</div>

				<div className={'mobileDivNone'}></div>

				<BtnCon className='row13'>
					<div className='mobileNone'></div>

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
									margin={'0 60px 0 0'}
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
									margin={'0 60px 0 0'}
									onclick={() => pushAllInfo()}>
									QOLDIRISH
								</Button>
							)}
						</>
					) : (
						<Button
							mradius={'5px'}
							mheight={'26px'}
							msize={'16px'}
							width={'300px'}
							height={'43px'}
							size={'21px'}
							mpadding={'0px 5px'}
							margin={'0 60px 0 0'}
							wrap={true}
							onclick={() => smsFunc()}>
							Telefon raqamni tastiqlash
						</Button>
					)}
				</BtnCon>


			</InputCont>
			<Modal
				open={modelHidden}
				onOk={() => setModalHidden(!modelHidden)}
				onCancel={() => setModalHidden(!modelHidden)}>
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
							changeAllDataFunc({
								type: 'verifyCode',
								value: e.target.value,
							});
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

export default OqishniKochirishComponent;
