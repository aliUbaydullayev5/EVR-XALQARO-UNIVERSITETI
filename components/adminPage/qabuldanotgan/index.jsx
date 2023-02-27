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


  // get admission
  const getAdmissionData = useSelector((store) => store.getAdmissionData)

  useEffect(() => {
      dispatch(getAdmissionFetch({}))
  }, [])


  // send sms
  const sendSmsData = useSelector(store => store.sendSmsData)
  const sendSms = () => {
      dispatch(sendSmsFetch({
          // ...
      }))
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
          <ConExel>
            <Exel />
            <p>Excelga chiqarish</p>
          </ConExel>
          <SelectSms>
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
            <select name="pets" id="pet-select">
              <option value="">Kurs</option>
            </select>
            <Down className={'Down'} />
          </Agent>

          <TalimY>
            <select name="pets" id="pet-select">
              <option value="">Ta’lim yo’nalishi</option>
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
          <div>Sana orqali tartiblash </div>
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
                  <div>Qo’shilgan sanasi</div>
                  <div>Status</div>
                  <div>Imtihon natijasi</div>
                  <div>Kontrakt turi</div>
                  <div>Shartnoma summasi</div>
                  <div>To’lagan summa</div>
                  <div>Qolgan summa</div>
                  <div>Shartnoma kodi</div>
                  <div>Agent</div>
                  <div>Hujjat</div>
                  <div>Shartnoma.yuk</div>
                  <div>Ma’lumotnoma</div>
                  <div>Chaqiruv xati</div>
                  <div>Zapros</div>
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
                      <div>{value.facultyType.id}</div>
                      <div>{value.user.firstName + ' ' + value.user.lastName}</div>
                      <div>{value.courseLevel}</div>
                      <div>{value.facultyType.studyLanguage}</div>
                      <div>{value.facultyName}</div>
                      <div>{value.facultyType.educationType}</div>
                      <div>{new Date(value.user.createdAt).toLocaleDateString()}</div>
                      <div>{value.facultyType.status ? 'true' : 'false'}</div>
                      <div>{value.examResult}</div>
                      <div>{'null'}</div>
                      <div>{'null'}</div>
                      <div>{'null'}</div>
                      <div>{'null'}</div>
                      <div>{'null'}</div>
                      <div>{'null'}</div>
                      <div>{value.user.idNumber}</div>
                      <div>{'null'}</div>
                      <div>{'null'}</div>
                      <div>{'null'}</div>
                      <div>{'null'}</div>
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
