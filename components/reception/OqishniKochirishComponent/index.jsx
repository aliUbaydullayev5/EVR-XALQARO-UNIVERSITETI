/** @format */

import Container, { BtnCon, IconBox, InputCont, TextCon } from './style.js';
import UploadFiler from '../../../assets/icons/uploadeFile.svg';
import { Button, Input } from '../../generic';
import AntSelect from '../Antd/style';
import { useRouter } from 'next/router.js';
import { useEffect, useState } from 'react';
import UploadMobile from '../../../assets/mobile/icon/UploadMobile.svg';

import { useDispatch, useSelector } from 'react-redux';
import { deployFileFetch } from '../../../redux/slices/deployFile';
import {
	receptionPostFetch,
	resetVerify,
} from '../../../redux/slices/receptionPost';
import { startMessage } from '../../../redux/slices/message';
import CustomInput from 'react-phone-number-input/input';
import { getStudyTypesFetch } from '../../../redux/slices/getStudyTypes';
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

const OqishniKochirishComponent = () => {
	const router = useRouter();
	const dispatch = useDispatch();

	const [numPasSeriya, setNumPasSeriya] = useState('');
	const [pasSerLength, setPasSerLength] = useState(0);

	const [phonePatron, setphonePatron] = useState('+998');
	const [numState, setNumState] = useState('+998');

	const [width, setWidth] = useState(null);
	useEffect(() => {
		if (window.innerWidth < 1000) {
			setWidth('100%');
		} else {
			setWidth('513px');
		}
	});

	const changeMumPass = (event) => {
		if (pasSerLength < event.length) {
			setPasSerLength(event.length - 1);
			if (event.length == 2) {
				return setNumPasSeriya(event.toUpperCase() + ' ');
			}
		}
		if (pasSerLength >= event.length) {
			setPasSerLength(event.length);
			setNumPasSeriya(event);
		}
		changeAllDataFunc({
			type: 'passportSeries',
			value: event.split(' ').join('').toUpperCase(),
		});
		return setNumPasSeriya(event.toUpperCase());
	};

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
	});

	const findFileFunc = ({ file, by }) => {
		dispatch(deployFileFetch({ file: file, by }));
	};

	useEffect(() => {
		dispatch(getStudyTypesFetch({ type: 'BACHELOR' }));
	}, []);
	const { educationTypes, facultyDTOForHomeList, studyLanguages } = useSelector(
		(store) => store.getStudyTypes.data,
	);

	const changeAllDataFunc = ({ type, value }) => {
		const fakeData = allData;
		fakeData[type] = value;
		setAllData(fakeData);
		setAllData({ ...allData, [type]: value });
	};
	const { fileId, status, by } = useSelector((store) => store.deployFile);

	useEffect(() => {
		changeAllDataFunc({ type: by, value: fileId });
	}, [fileId]);
	useEffect(() => {
		changeAllDataFunc({ type: 'studyType', value: 'BACHELOR' });
	}, []);

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

	const pushAllInfo = () => {
		console.log(allData);
		if (checkAllInputs()) dispatch(receptionPostFetch(allData));
	};

	const receptionData = useSelector((store) => store.receptionPost);

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
		if (receptionData.status === 'success') {
			dispatch(
				startMessage({
					time: 5,
					type: 'success',
					message: receptionData.message,
				}),
			);
		}
		setTimeout(() => {
			dispatch(resetVerify());
		}, 2000);
	}

	const funForPhoneinput = ({ value, type }) => {
		setphonePatron(value);
		changeAllDataFunc({ value: value?.match(/[0-9]+/g).join(''), type });
	};

	const funPhoneNumber = ({ value, type }) => {
		setNumState(value);
		changeAllDataFunc({ value: value?.match(/[0-9]+/g).join(''), type });
	};

	const [modelHidden, setModalHidden] = useState(false);
	const [smsInput, setSmsInput] = useState('');

	const reseptionCheckPhoneSlice = useSelector(
		(store) => store.reseptionCheckPhoneSlice,
	);

	const receptionSmsVerify = useSelector((store) => store.receptionSmsVerify);

	const verifyCodeFunc = () => {
		if (smsInput.length === 6)
			dispatch(
				receptionSmsVerifyFetch({
					verifyCode: allData.verifyCode,
					phoneNumber: allData.phoneNumber,
				}),
			);
		else
			dispatch(
				startMessage({ time: 3, message: 'Sms 6 honali bolishi kerak' }),
			);
	};

	useEffect(() => {
		receptionSmsVerify?.status === 'success' && setModalHidden(false);
		receptionSmsVerify?.status === 'error' &&
			dispatch(startMessage({ time: 3, message: 'Sms no togri' }));
		console.log(receptionSmsVerify.status);
	}, [receptionSmsVerify]);

	useEffect(() => {
		if (reseptionCheckPhoneSlice.status === 'success') setModalHidden(true);
	}, [reseptionCheckPhoneSlice]);

	const smsFunc = () => {
		if (checkAllInputs())
			dispatch(
				reseptionSmsCheckSliceFetch({
					firstName: allData.firstName,
					phoneNumber: allData.phoneNumber,
				}),
			);
	};

	useEffect(() => {
		if (receptionData.status === 'success') {
			router.push('/receptionPage/application/UsersCardInfo');
			setTimeout(() => {
				dispatch(resetVerify());
				dispatch(resetTimerVerify());
				dispatch(resetSmsVerify());
			}, 4000);
		}
	});

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
						<AntSelect
							showSearch
							style={{
								width,
								borderRadius: '5px',
							}}
							placeholder='Talim shaklingiz'
							optionFilterProp='children'
							options={
								educationTypes?.map((value) => ({ value, label: value })) || []
							}
							onChange={(e) =>
								changeAllDataFunc({ type: 'educationType', value: e })
							}
						/>
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
						onchange={(e) =>
							changeAllDataFunc({ type: 'firstName', value: e.target.value })
						}
					/>
				</div>

				<div className={'row8'}>
					<IconBox>
						<AntSelect
							showSearch
							style={{
								width,
							}}
							placeholder='Uqishingizni qaysi kursga kuchiryabsiz'
							optionFilterProp='children'
							onChange={(e) =>
								changeAllDataFunc({ type: 'courseLevel', value: e })
							}
							options={[
								{
									value: 1,
									label: '1',
								},
								{
									value: '2',
									label: '2',
								},
								{
									value: '3',
									label: '3',
								},
								{
									value: '4',
									label: '4',
								},
							]}
						/>
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

				<div>
					<Container.Number>
						<CustomInput
							placeholder='Enter phone number'
							onChange={(value) =>
								funForPhoneinput({ value, type: 'extraPhoneNumber' })
							}
							maxLength={17}
							value={phonePatron}
							className={'phoNumber'}
						/>
						<Container.NumberText>Enter phone number</Container.NumberText>
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

				<div className={'row10'}>
					<Container.Number>
						<CustomInput
							placeholder='Enter phone number'
							onChange={(value) =>
								funPhoneNumber({ value, type: 'phoneNumber' })
							}
							maxLength={17}
							value={numState}
							className={'phoNumber'}
						/>
						<Container.NumberText>Enter phone number</Container.NumberText>
					</Container.Number>
				</div>

				<div className={'row5'}>
					<IconBox>
						<AntSelect
							showSearch
							style={{
								width,
							}}
							placeholder='Talim tilingiz'
							optionFilterProp='children'
							filterOption={(input, option) =>
								(option?.label ?? '').includes(input)
							}
							filterSort={(optionA, optionB) =>
								(optionA?.label ?? '')
									.toLowerCase()
									.localeCompare((optionB?.label ?? '').toLowerCase())
							}
							options={
								studyLanguages?.map((value) => ({
									value: value,
									label: value,
								})) || []
							}
							onChange={(e) =>
								changeAllDataFunc({ type: 'studyLanguage', value: e })
							}
						/>
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
						<AntSelect
							showSearch
							style={{
								width,
							}}
							placeholder='Talim yunalishingiz'
							optionFilterProp='children'
							options={
								facultyDTOForHomeList?.map((value) => ({
									value: value.id,
									label: value.name,
								})) || []
							}
							onChange={(e) =>
								changeAllDataFunc({ type: 'facultyId', value: e })
							}
						/>
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

				<div className={'mobileDivNone'}></div>

				<BtnCon className='row12'>
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
							mwidth={'250px'}
							mheight={'26px'}
							msize={'16px'}
							width={'300px'}
							height={'43px'}
							size={'21px'}
							margin={'0 60px 0 0'}
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

export default OqishniKochirishComponent;
