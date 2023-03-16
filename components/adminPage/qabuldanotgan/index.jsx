import React, {useEffect, useRef} from 'react'
import Container, { Agent, ConExel, Conpul, SendModalSms, ConTable, ContainerRith, ConW, SelectSms, SendModal, TalimSh, TalimT, TalimTu, TalimY } from './style.js'
import Down from "../../../assets/icons/admin/selectdown.svg"
import Woomen from "../../../assets/icons/admin/peoples.svg"
import Exel from "../../../assets/icons/admin/exelSetting.svg"
import Sms from "../../../assets/icons/admin/smsSet.svg"
import Dollar from "../../../assets/icons/admin/dollar.svg"
import Setting from "../../../assets/icon/setting.svg"
import Search from "../../../assets/icon/search.svg"
import { useState } from 'react'
import {getAdmissionFetch} from "../../../redux/sliceAdmin/qabul/admission";
import {useDispatch, useSelector} from "react-redux";
import {Input,Button} from "../../generic"
import {sendSmsFetch} from "../../../redux/sliceAdmin/arizalar-qabul-sms";
import {getAbuturentTypeFetch} from "../../../redux/sliceAdmin/talimyunlishAdd/getStudyTypesAdmin";
import {getAdmissionExcelfetch} from "../../../redux/sliceAdmin/qabul/exel";
import SendSmss from "../../../assets/icons/admin/send.svg";
import {getAdmissionAgentFetch} from "../../../redux/sliceAdmin/qabul/getAgent";
import {facultySirtqi} from "../../Mock/facultyType";
import {getAdmissionPaymentFetch} from "../../../redux/sliceAdmin/qabul/payment";



export const QabuldanOtganCom = () => {

  const dispatch = useDispatch()

  const [data, setData] = useState([])
  const getAdmissionData = useSelector((store) => store.getAdmissionData)


  useEffect(() => {
      setData(getAdmissionData?.data?.map((value) => (
          {
              ...value,
              checked: false
          }
      )))
  }, [getAdmissionData])


    // all data select
    const [checkedData, setCheckedData] = useState([])
    const [selectAllState, setSelectAllState] = useState(false)
    const selectAllStates = () => {
        if (selectAllState) {
            setData(data.map(value => (
                {
                    ...value,
                    checked: false
                }
            )))
            setCheckedData([])
        } else {
            setData(data.map(value => (
                {
                    ...value,
                    checked: true
                }
            )))
            data.map(i => checkedData.push(i.user.id))
        }
    }

    // select one
    const selectOne = (event, id) => {
        setData(
            data.map(i => ({
                ...i,
                checked: id === i.user.id ? !i.checked : i.checked
            }))
        )
        setCheckedData(event ? [...checkedData, id] : checkedData.filter(idd => idd !== id))
    }


    // time toDate ~ fromDate
    let defaultDate = new Date()
    const [fromDate, setFromDate] = useState(new Date(1672531200000))
    const [toDate, setToDate] = useState(defaultDate)
    const onSetFromDate = (e) => setFromDate(new Date(e.target.value))
    const onSetToDate = (e) => setToDate(new Date(e.target.value))

    const [changeDate, setChangeDate] = useState(false)


    // course level
    const courseLevel = [
      {
          name: '1-kurs',
          id: 1
      },
      {
          name: '2-kurs',
          id: 2
      },
      {
          name: '3-kurs',
          id: 3
      },
      {
          name: '4-kurs',
          id: 4
      },
      {
          name: '5-kurs',
          id: 5
      },
      {
          name: '6-kurs',
          id: 6
      },
    ]
    const [courseLevelId, setCourseLevelId] = useState(null)
    const courseLevelHandler = (e) => setCourseLevelId(e)


    // course language
    const courseLang = [{id: 'UZ'}, {id: 'RU'}]
    const [courseLangId, setCourseLangId] = useState(null)
    const courseLangHandler = (e) => setCourseLangId(e)


    // get faculty types
    const getStudyTypesAbuturent = useSelector(store => store.getStudyTypesAbuturent)
    const [facultyTypes, setFacultyTypes] = useState([])
    useEffect(() => setFacultyTypes(getStudyTypesAbuturent.data))
    // faculty id
    const [facultyTypeId, setFacultyTypeId] = useState(null)
    const facultyTypeHandler = (e) => setFacultyTypeId(e)


    // get agent types
    const [agentTypes, setAgentTypes] = useState([])
    const getAdmissionAgentData = useSelector(store => store.getAdmissionAgentData)
    useEffect(() => setAgentTypes(getAdmissionAgentData.data))
    // agent id
    const [agentId, setAgentId] = useState(null)
    const agentIdHandler = (e) => setAgentId(e)


    // course shakli
    const [facultyId, setFacultyId] = useState(null)
    const courseShaklHandler = (e) => setFacultyId(e)


    // get payments
    const [paymentTypes, setPaymentTypes] = useState([])
    const getAdmissionPaymentData = useSelector(store => store.getAdmissionPaymentData)
    useEffect(() => setPaymentTypes(getAdmissionPaymentData.data))
    console.log(paymentTypes)
    // payment id
    const [paymentId, setPaymentId] = useState(null)
    const paymentIdHandler = (e) => setPaymentId(e)


    // get admission
    const [ filter, setFilter ] = useState(false)
    const [ page, setPage ] = useState(0)
    const [ search, setSearch ] = useState('')
    useEffect(() => {
        dispatch(getAdmissionFetch({
            page: page,
            search: search,
            fromDate: fromDate.getTime(),
            toDate: toDate.getTime(),
            lang: courseLangId,
            courseLevel: courseLevelId,
            facultyTypeId: facultyTypeId,
            facultyId: facultyId,
            paymentType: paymentId,
            agentId: agentId,
        }))
    }, [filter, page, search])


    // download exel
    const downloadExel = () => dispatch(getAdmissionExcelfetch())


    // settings
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const Settings = () => {
        setOpen(true)

        dispatch(getAbuturentTypeFetch({
            type: 'BACHELOR'
        }))

        dispatch(getAdmissionAgentFetch())

        dispatch(getAdmissionPaymentFetch())
    }
    const handleOk = () => {

        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 1000);
    };
    const handleCancel = () => {
        setOpen(false)
    }


    // sms //
    const sendSmsData = useSelector(store => store.sendSmsData)

    const [openSms, setOpenSms] = useState(false)
    const [confirmLoadingSms, setConfirmLoadingSms] = useState(false)
    const smsRef = useRef()

    const SendSms = () => {
        setOpenSms(true)
    }

    const handleOkSms = () => {
        dispatch(sendSmsFetch({
            text: smsRef.current?.value,
            users: checkedData
        }))

        setConfirmLoadingSms(true)
        setTimeout(() => {
            setOpenSms(false)
            setConfirmLoadingSms(false)
        }, 1000)
    }
    const handleCancelSms = () => {
        setOpenSms(false)
    }


  return (
    <Container.Wrapper>
      <Container>

        <Container.Filter>

          <Search className="search"/>
          <Input onchange={(e) => setSearch(e.target.value)} padding="0 128px 0 50px" width="711px" height="60px" size="25px" placeholder="search" />
          <Container.Button>
           <Button onclick={Settings} shadow="0 0 0 0" width={"100%"} height={"30px"} radius="0" size={"18px"} ><div><Setting /> <p>Filter</p> </div></Button>
          </Container.Button>
          <Container.Date className="nocopy">
            <Input value={fromDate.toLocaleDateString('en-CA')} onchange={onSetFromDate} min="2023-01-01" max="9999-12-31" shadowOff="0 0 0 0" width="100%" height="100%" type="date" size="14px" bc="none" />
          </Container.Date>
          <Container.Date className="nocopy">
            <Input value={toDate.toLocaleDateString('en-CA')} onchange={onSetToDate} min="2023-01-01" max="9999-12-31" shadowOff="0 0 0 0" width="100%" height="100%" type="date" size="14px" bc="none" />
          </Container.Date>

          <Button onclick={() => setChangeDate(!changeDate)} width={"175px"} height="48px" radius={"10px"} size={"18px"} >Tartiblash</Button>

        </Container.Filter>

        <ContainerRith className='nocopy'>
          <ConW>
            <Woomen />
            <p>Arizalar soni: {data?.length}</p>
          </ConW>
          <Conpul>
            <Dollar/>
            <div>
              <p>Ariza to'lovi: {"222 222 222"}</p>
            </div>
          </Conpul>
          <ConExel onClick={downloadExel}>
            <Exel />
            <p>Excelga chiqarish</p>
          </ConExel>
          <SelectSms onClick={SendSms}>
            <Sms className={'Sms'} />
            <p> SMS yuborish</p>
          </SelectSms>

        </ContainerRith>

          <SendModalSms open={openSms} onOk={handleOkSms} confirmLoading={confirmLoadingSms} onCancel={handleCancelSms}>
              <h1>SMS yuborish</h1>
              <SendSmss className="sendSms"/>
              <input ref={smsRef} type="text" placeholder='t y p i n g ...' />
          </SendModalSms>

        <SendModal open={open} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
         <div>
          <Agent>
            <select
                name="pets"
                id="pet-select"
                onChange={(e) => agentIdHandler(e.target.value)}
            >
              <option value="">Agent</option>
                {
                    agentTypes.map(i => (
                        <option value={i.id} key={i.id}>{i.fullName}</option>
                    ))
                }
            </select>
            <Down className={'Down'} />
          </Agent>
          <Agent>
            <select
                name="pets"
                id="pet-select"
                onChange={(e) => courseLevelHandler(e.target.value)}
            >
              <option value="">Kurs</option>
              {
                  courseLevel.map(i => (
                      <option value={i.id} key={i.id}>{ i.name }</option>
                  ))
              }
            </select>
            <Down className={'Down'} />
          </Agent>
          <TalimY>
            <select
                name="pets"
                id="pet-select"
                onChange={(e) => facultyTypeHandler(e.target.value)}
            >
              <option value=''>Ta'lim yo'nalishi</option>
              {
                  facultyTypes?.length > 0 ?
                    facultyTypes.map(i => (
                        <option value={i.id} key={i.id}>{i.name}</option>
                    ))
                      : <p>No data !</p>
              }
            </select>
            <Down className={'Down'} />
          </TalimY>
          <TalimSh>
            <select
                name="pets"
                id="pet-select"
                onChange={(e) => courseShaklHandler(e.target.value)}
            >
                <option value="">Ta'lim shakli</option>
                {
                    facultySirtqi.map(i => (
                        <option value={i.id} key={i.id}>{i.name}</option>
                    ))
                }
            </select>
            <Down className={'Down'} />
          </TalimSh>

          <TalimT>
            <select
                name="pets"
                id="pet-select"
                onChange={(e) => courseLangHandler(e.target.value)}
            >
                <option value="">Ta'lim tili</option>
                {
                    courseLang.map(i => (
                        <option value={i.id} key={i.id}>{ i.id }</option>
                    ))
                }
            </select>
            <Down className={'Down'} />
          </TalimT>
          <TalimTu>
            <select
                name="pets"
                id="pet-select"
                onChange={(e) => paymentIdHandler(e.target.value)}
            >
                <option value="">To'lov turi</option>
                {
                    paymentTypes.map(i => (
                        <option value={i.value} key={i.value}>{i.key}</option>
                    ))
                }
            </select>
            <Down className={'Down'} />
          </TalimTu>
        </div>
            <div style={{position: 'absolute', right: '0', top: '100px'}}>
                <Button onclick={() => {
                    setFilter(!filter)
                    setOpen(false)
                }} width={'200px'} height={'50px'} size={'20px'} weight={400}>Filter</Button>
            </div>
        </SendModal>

      </Container>
      <div>
        <ConTable>
          <Container.Bottom>
            <Container.BottomInset>
              <Container.Nav>
                <input type="checkbox" onChange={() => {
                    setSelectAllState(!selectAllState)
                    selectAllStates()
                }} />
                <Container.Box>
                  <div>№</div>
                  <div>ID</div>
                  <div>FIO</div>
                  <div>Kurs</div>
                  <div>Ta'lim tili</div>
                  <div>Ta'lim yo'nalishi</div>
                  <div>Ta'lim shakli</div>
                  <div>Sana</div>
                  <div>Agent</div>
                  <div>Pasport seriya</div>
                  <div>Pasport nusxasi</div>
                  <div>Transcrip/Diplom nusxasi</div>
                  <div>Telefon raqam 1</div>
                  <div>Telefon raqam 2</div>
                  <div>Tahrirlash </div>
                </Container.Box>
              </Container.Nav>
              {
                data?.length ?
                    data?.map((value, num) => (
                        <Container.Section key={value.id}>
                            <input
                                className='chcxboxInput'
                                type="checkbox"
                                onChange={(e) => selectOne(e.target.checked, value.user.id)}
                                checked={value.checked}
                            />
                            <Container.Map>
                                <div>{num+1}</div>
                                <div>{value.user.idNumber}</div>
                                <div>{value.user.fullName}</div>
                                <div>{value.courseLevel}</div>
                                <div>{value.facultyType.studyLanguage === 'UZ' ? 'Ozbek tili' : 'Rus tili'}</div>
                                <div>{value.facultyName}</div>
                                <div>{value.facultyType.educationType}</div>
                                <div>{new Date(value.user.createdAt).toLocaleDateString()}</div>
                                <div>{value?.agent ? value.agent.fullName : 'Yoq'}</div>
                                <div>{value.user.passportSeries}</div>
                                <div>{value.user.idNumber}</div>
                                <div>{value.diplomaFile?.fileOriginalName}</div>
                                <div>+{value.user.phoneNumber}</div>
                                <div>+{value.user.extraPhoneNumber}</div>
                                <div>{value.kurs}</div>
                                <h1>{value.checked}</h1>
                            </Container.Map>
                        </Container.Section>
                    ))
                    : <p style={{color: '#fff', padding: '1rem'}}>No data !</p>
              }
            </Container.BottomInset>
          </Container.Bottom>
        </ConTable>
      </div>
    </Container.Wrapper>
  )
}

export default QabuldanOtganCom
