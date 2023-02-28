import React, { useEffect } from 'react'
import Container, { Agent, ConDate, ConExel, Conpul, ConSelect, ConSms, ConTable, ContainerRith, ContainerSort, ConW, SelectSms, TalimSh, TalimT, TalimTu, TalimY } from './style.js'
import Down from "../../../assets/icons/admin/selectdown.svg"
import Woomen from "../../../assets/icons/admin/adminWoomen.svg"
import Exel from "../../../assets/icons/admin/adminExel.svg"
import Sms from "../../../assets/icons/admin/adminSms.svg"
import dataQabul from '../../Mock/qabulData/qabulData.js'
import { useState } from 'react'
import {getAdmissionFetch} from "../../../redux/sliceAdmin/qabul/admission";
import {useDispatch, useSelector} from "react-redux";
import {sendSmsFetch} from "../../../redux/sliceAdmin/arizalar-qabul-sms";
import {getFacultyTypeFetch} from "../../../redux/slices/getStudyTypes/getFacultyType";
import {getAbuturentTypeFetch} from "../../../redux/sliceAdmin/talimyunlishAdd/getStudyTypesAdmin";
import {getAdmissionExcelfetch} from "../../../redux/sliceAdmin/qabul/exel";


export const QabuldanOtganCom = () => {

    const dispatch = useDispatch()

  const [data, setData] = useState(dataQabul)
  const [selectAllState, setSelectAllState] = useState(false)

  useEffect(() => {
    setData(data.map((value) => (
      {
        id: value.id,
        num: value.num,
        ismi: value.ismi,
        agent: value.agent,
        pasport: value.pasport,
        kurs: value.kurs,
        tili: value.tili,
        yonalishi: value.yonalishi,
        shakli: value.shakli,
        phone: value.phone,
        qoshimcharaqam: value.qoshimcharaqam,
        pasportnusxasi: value.pasportnusxasi,
        diplomnusxasi: value.diplomnusxasi,
        sana: value.sana,
        tahrirlash: value.tahrirlash,
        checked: selectAllState
      }
    )))
  }, [selectAllState])

  const selectOne = (id = false) => {
    setData(data.map((value) => (
      {
        id: value.id,
        num: value.num,
        ismi: value.ismi,
        agent: value.agent,
        pasport: value.pasport,
        kurs: value.kurs,
        tili: value.tili,
        yonalishi: value.yonalishi,
        shakli: value.shakli,
        phone: value.phone,
        qoshimcharaqam: value.qoshimcharaqam,
        pasportnusxasi: value.pasportnusxasi,
        diplomnusxasi: value.diplomnusxasi,
        sana: value.sana,
        tahrirlash: value.tahrirlash,
        checked: value.id === id ? !value.checked : value.checked
      }
    )))
  }


  // send sms
  const sendSmsData = useSelector(store => store.sendSmsData)
  const sendSms = () => {
      dispatch(sendSmsFetch({
          // ...
      }))
  }


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
    const getAdmissionData = useSelector((store) => store.getAdmissionData)
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



  return (
    <>
      <Container>
        <ContainerRith>
          <ConW>
            <Woomen />
            <p>Arizalar soni: {data?.length}</p>
          </ConW>
          <Conpul>
            <b>＄</b>
            <div>
              <p>Ariza to’lovi</p>
              <p>222 222 222</p>
            </div>
          </Conpul>
          <ConExel onClick={downloadExel}>
            <Exel />
            <p>Excelga chiqarish</p>
          </ConExel>
          <SelectSms onClick={sendSms}>
            <Sms className={'Sms'} />
            <p> SMS yuborish</p>
          </SelectSms>
        </ContainerRith>

        <ConDate>
          <input type="date" id="start" name="trip-start"
            value="2023-01-01"
            min="2023-01-01" max="9999-12-31" />
          <input type="date" id="start" name="trip-start"
            value="2023-01-01"
            min="2023-01-01" max="9999-12-31" />
        </ConDate>

        <ConSelect>
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
                      <option value={i.id}>{ i.name }</option>
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
              <option value=''>Ta’lim yo’nalishi</option>
              {
                  facultyTypes?.length > 0 &&
                    facultyTypes.map(i => (
                        <option value={i.id}>{i.name}</option>
                    ))
              }
            </select>
            <Down className={'Down'} />
          </TalimY>

          <TalimSh>
            <select name="pets" id="pet-select">
              <option value="">Ta’lim shakli</option>
            </select>
            <Down className={'Down'} />
          </TalimSh>

          <TalimT>
            <select name="pets" id="pet-select">
              <option value="">Ta’lim tili</option>
            </select>
            <Down className={'Down'} />
          </TalimT>
          <TalimTu>
            <select name="pets" id="pet-select">
              <option value="">To’lov turi</option>
            </select>
            <Down className={'Down'} />
          </TalimTu>
        </ConSelect>
        <ContainerSort>
          <div>Sana orqali tartiblash</div>
        </ContainerSort>
      </Container>
      <div>
        <ConTable>
          <Container.Bottom>
            <Container.BottomInset>
              <Container.Nav>
                <input type="checkbox" onChange={() => setSelectAllState(!selectAllState)} />
                <Container.Box>
                  <div>№</div>
                  <div>ID</div>
                  <div>FIO</div>
                  <div>Kurs</div>
                  <div>Ta’lim tili</div>
                  <div>Ta’lim yo’nalishi</div>
                  <div>Ta’lim shakli</div>
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
                getAdmissionData.data?.map((value, num) => (
                  <Container.Section key={value.id}>
                  <input className='chcxboxInput' type="checkbox" onChange={() => selectOne(value.id)} checked={value.checked} />
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
                      <div>{value.diplomaFile.fileOriginalName}</div>
                      <div>+{value.user.phoneNumber}</div>
                      <div>+{value.user.extraPhoneNumber}</div>
                      <div>{value.kurs}</div>
                    </Container.Map>
                  </Container.Section>
                ))
              }
            </Container.BottomInset>
          </Container.Bottom>
        </ConTable>
      </div>
    </>
  )
}

export default QabuldanOtganCom
