import React, { useEffect } from 'react'
import Container, { Agent, ConExel, Conpul, ConTable, ContainerRith, ConW, SelectSms, SendModal, TalimSh, TalimT, TalimTu, TalimY } from './style.js'
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



export const QabuldanOtganCom = () => {

  const dispatch = useDispatch()

  const [data, setData] = useState([])


  // sms
  const sendSmsData = useSelector(store => store.sendSmsData)
  const getAdmissionData = useSelector((store) => store.getAdmissionData)


  // search
  const [ search, setSearch ] = useState(data);
  const onSearch=({ target: { value } })=>{
    let res= data.filter((val)=>val.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
    setSearch(res)
  }

  useEffect(() => {
      setData(getAdmissionData.data.map((value) => (
          {
              ...value,
              checked: false
          }
      )))
  }, [getAdmissionData])


    // all data select
    const [selectAllState, setSelectAllState] = useState(false)
    const selectAllStates = () => {
        if (selectAllState) {
            setData(data.map(value => (
                {
                    ...value,
                    checked: false
                }
            )))
        } else {
            setData(data.map(value => (
                {
                    ...value,
                    checked: true
                }
            )))
        }
    }


  // select one
  const selectOne = (id, bool) => {
    setData(data.map((value) => (
      {
        ...value,
        checked: value.checked === id ? !value.checked : value.checked
      }
    )))
  }
    console.log(data, 'data')


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


    // get faculty types
    const getStudyTypesAbuturent = useSelector(store => store.getStudyTypesAbuturent)
    const [facultyTypes, setFacultyTypes] = useState([])
    useEffect(() => {
        dispatch(getAbuturentTypeFetch({
            type: 'BACHELOR'
        }))
    }, [])
    useEffect(() => setFacultyTypes(getStudyTypesAbuturent.data), [getStudyTypesAbuturent])
    // handler
    const [facultyTypeId, setFacultyTypeId] = useState(null)
    const facultyTypeHandler = (e) => setFacultyTypeId(e)


    // get admission

    useEffect(() => {
        dispatch(getAdmissionFetch({
            courseLevelId: courseLevelId,
            facultyTypeId: facultyTypeId
        }))
    }, [courseLevelId, facultyTypeId])



    // download
    const downloadExel = () => {
        dispatch(getAdmissionExcelfetch())
    }


    // setting
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const Settings = () => {
      setOpen(true);
    }
    const handleOk = () => {
      dispatch(sendSmsFetch())
      
      setConfirmLoading(true);
      setTimeout(() => {
        setOpen(false);
        setConfirmLoading(false);
      }, 1000);
    };
    const handleCancel = () => {
      setOpen(false);
    }

  return (
    <Container.Wrapper>
      <Container>
  
        <Container.Filter>
          
          <Search className="search"/>
          <Input onchange={onSearch} padding="0 128px 0 50px" width="711px" height="60px" size="25px" placeholder="search" />
          <Container.Button>
           <Button onclick={Settings} shadow="0 0 0 0" width={"100%"} height={"30px"} radius="0" size={"18px"} ><div><Setting /> <p>Filter</p> </div></Button>
          </Container.Button>
          <Container.Date className="nocopy"> 
            <Input value="2023-01-01" shadowOff="0 0 0 0" width="100%" height="100%" type="date" size="14px" bc="none" />
          </Container.Date>
          <Container.Date className="nocopy"> 
            <Input value="2023-01-01" shadowOff="0 0 0 0" width="100%" height="100%" type="date" size="14px" bc="none" />
          </Container.Date>

          <Button width={"175px"} height="48px" radius={"10px"} size={"18px"} >Tartiblash</Button>

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
          <SelectSms>
            <Sms className={'Sms'} />
            <p> SMS yuborish</p>
          </SelectSms>
          
        </ContainerRith>

        <SendModal open={open} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
         <div>
          <Agent>
            <select name="pets" id="pet-select">
              <option value="">Agent</option>
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
                  facultyTypes?.length > 0 &&
                    facultyTypes.map(i => (
                        <option value={i.id} key={i.id}>{i.name}</option>
                    ))
              }
            </select>
            <Down className={'Down'} />
          </TalimY>
          <TalimSh>
            <select name="pets" id="pet-select">
              <option value="">Ta'lim shakli</option>
            </select>
            <Down className={'Down'} />
          </TalimSh>

          <TalimT>
            <select name="pets" id="pet-select">
              <option value="">Ta'lim tili</option>
            </select>
            <Down className={'Down'} />
          </TalimT>
          <TalimTu>
            <select name="pets" id="pet-select">
              <option value="">To'lov turi</option>
            </select>
            <Down className={'Down'} />
          </TalimTu>
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
                            <input className='chcxboxInput' type="checkbox" checked={value.checked} onChange={() => selectOne(value.user.idNumber, value.checked)} />
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
