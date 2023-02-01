import React, { useEffect } from 'react'
import Container, { Agent, ConDate, ConExel, Conpul, ConSelect, ConSms, ConTable, ContainerRith, ContainerSort, ConW, SelectSms, TalimSh, TalimT, TalimTu, TalimY } from './style.js'
import Down from "../../../assets/icons/admin/selectdown.svg"
import Woomen from "../../../assets/icons/admin/adminWoomen.svg"
import Exel from "../../../assets/icons/admin/adminExel.svg"
import Sms from "../../../assets/icons/admin/adminSms.svg"
import dataQabul from '../../Mock/qabulData/qabulData.js'
import { useState } from 'react'


export const QabuldanOtganCom = () => {

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

  return (
    <>
      <Container>
        <ContainerRith>
          <ConW>
            <Woomen />
            <p>Arizalar soni: 3054</p>
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
            <select name="pets" id="pet-select">
              <option value="">Agent</option>
              <option value="Agent">Agent</option>
              <option value="Agent">Agent</option>
              <option value="Agent">Agent</option>
              <option value="Agent">Agent</option>
              <option value="Agent">Agent</option>
            </select>
            <Down className={'Down'} />
            <Sms className={'Sms'} />
          </SelectSms>
        </ContainerRith>

        <ConDate>
          <input type="date" id="start" name="trip-start"
            value="2018-07-22"
            min="2018-01-01" max="2018-12-31" />
          <input type="date" id="start" name="trip-start"
            value="2018-07-22"
            min="2018-01-01" max="2018-12-31" />
        </ConDate>

        <ConSelect>
          <Agent>
            <select name="pets" id="pet-select">
              <option value="">Agent</option>
              <option value="Agent">Agent</option>
              <option value="Agent">Agent</option>
              <option value="Agent">Agent</option>
              <option value="Agent">Agent</option>
              <option value="Agent">Agent</option>
            </select>
            <Down className={'Down'} />
          </Agent>

          <Agent>
            <select name="pets" id="pet-select">
              <option value="">Kurs</option>
              <option value="Agent">Agent</option>
              <option value="Agent">Agent</option>
              <option value="Agent">Agent</option>
              <option value="Agent">Agent</option>
              <option value="Agent">Agent</option>
            </select>
            <Down className={'Down'} />
          </Agent>

          <TalimY>
            <select name="pets" id="pet-select">
              <option value="">Ta’lim yo’nalishi</option>
              <option value="Agent">Agent</option>
              <option value="Agent">Agent</option>
              <option value="Agent">Agent</option>
              <option value="Agent">Agent</option>
              <option value="Agent">Agent</option>
            </select>
            <Down className={'Down'} />
          </TalimY>

          <TalimSh>
            <select name="pets" id="pet-select">
              <option value="">Ta’lim shakli</option>
              <option value="Agent">Agent</option>
              <option value="Agent">Agent</option>
              <option value="Agent">Agent</option>
              <option value="Agent">Agent</option>
              <option value="Agent">Agent</option>
            </select>
            <Down className={'Down'} />
          </TalimSh>

          <TalimT>
            <select name="pets" id="pet-select">
              <option value="">Ta’lim tili</option>
              <option value="Agent">Agent</option>
              <option value="Agent">Agent</option>
              <option value="Agent">Agent</option>
              <option value="Agent">Agent</option>
              <option value="Agent">Agent</option>
            </select>
            <Down className={'Down'} />
          </TalimT>
          <TalimTu>
            <select name="pets" id="pet-select">
              <option value="">To’lov turi</option>
              <option value="Agent">Agent</option>
              <option value="Agent">Agent</option>
              <option value="Agent">Agent</option>
              <option value="Agent">Agent</option>
              <option value="Agent">Agent</option>
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
                data?.map((value) => (
                  <Container.Section key={value.id}>
                    <input type="checkbox" onChange={() => selectOne(value.id)} checked={value.checked} />
                    <Container.Map>
                      <div>{value.num}</div>
                      <div>{value.id}</div>
                      <div>{value.ismi}</div>
                      <div>{value.kurs}</div>
                      <div>{value.tili}</div>
                      <div>{value.num}</div>
                      <div>{value.id}</div>
                      <div>{value.ismi}</div>
                      <div>{value.kurs}</div>
                      <div>{value.tili}</div>
                      <div>{value.num}</div>
                      <div>{value.id}</div>
                      <div>{value.ismi}</div>
                      <div>{value.kurs}</div>
                      <div>{value.tili}</div>
                      <div>{value.num}</div>
                      <div>{value.id}</div>
                      <div>{value.ismi}</div>
                      <div>{value.kurs}</div>
                      <div>{value.tili}</div>
                      <div>{value.num}</div>
                      <div>{value.id}</div>
                      <div>{value.ismi}</div>
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
