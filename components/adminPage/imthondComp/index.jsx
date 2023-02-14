import React, { useEffect, useState } from 'react'
import Container, { ConTable, ConText, Header } from './style.js'
import Logo from "../../../assets/icon/download.svg"
import { useRouter } from 'next/router.js'
import Button from '../../generic/Button/index.jsx'

import Woomen from "../../../assets/icons/admin/adminWoomen.svg"
import Money from "../../../assets/icons/admin/admin$.svg"
import Exel from "../../../assets/icons/admin/adminExel.svg"
import Sms from "../../../assets/icons/admin/adminSms.svg"
import Select from "../../../assets/icons/admin/selectdown.svg"

import dataQabul from '../../Mock/qabulData/qabulData.js'


const data = [
  {
    id: 1,
    img: Woomen,
    title: 'Imtihondan o’tganlar',
    sena: '3455'
  },
  {
    id: 2,
    img: Money,
    title: 'Shartnoma summasi',
    sena: '222 222 222'
  },
  {
    id: 3,
    img: Money,
    title: 'To’langan',
    sena: '222 222 222'
  },
  {
    id: 4,
    img: Money,
    title: 'Qarzdorlik',
    sena: '222 222 222'
  },
  {
    id: 5,
    img: Exel,
    title: 'Excelga chiqarish',
    sena: ''
  },
  {
    id: 6,
    img: Sms,
    title: 'SMS yuborish',
    sena: ''
  },
  {
    id: 7,
    img: Select,
    title: 'Ma’lumotnoma',
    sena: '3455'
  },
  {
    id: 8,
    img: Select,
    title: 'Ta’lim yo’nalishi',
    sena: ''
  },
  {
    id: 9,
    img: Select,
    title: 'Ta’lim shakli',
    sena: ''
  },
  {
    id: 11,
    img: Select,
    title: 'Kontrakt turi',
    sena: ''
  },
  {
    id: 12,
    img: Select,
    title: 'Uch tomonlama',
    sena: ''
  },
  {
    id: 13,
    img: Select,
    title: 'Shartnoma yuk',
    sena: ''
  },
  {
    id: 13,
    img: Select,
    title: 'Chaqiruv hati',
    sena: ''
  },
  {
    id: 14,
    img: Select,
    title: 'Ta’lim tili',
    sena: ''
  },
  {
    id: 15,
    img: Select,
    title: 'Kurs',
    sena: ''
  },
  {
    id: 16,
    img: Select,
    title: 'Status',
    sena: ''
  },
  {
    id: 17,
    img: Select,
    title: 'Zapros',
    sena: ''
  },
  {
    id: 18,
    img: Select,
    title: 'Agent',
    sena: ''
  },
  {
    id: 19,
    img: Select,
    title: 'Hujjat',
    sena: ''
  },
]


export const ImhonotganlarComp = () => {
  const query = useRouter()

  const [dataImt, setDataImt]=useState(dataQabul)
  const [selectAllState, setSelectAllState] = useState(false)

  useEffect(() => {
    setDataImt(dataImt.map((value) => (
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
    setDataImt(dataImt.map((value) => (
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
      <Container.Navbar>
        <div>
          <Logo />
          <ConText onClick={() => query.push('/admin/home')}>
            <p>EVR XALQARO</p>
            <p>universiteti</p>
          </ConText >
        </div>
        <Container.Left>
          <div>
            <input type="date" id="start" name="trip-start"
              value="2023-01-01"
              min="2023-01-01" max="9999-12-31" />
            <input type="date" id="start" name="trip-start"
              value="2023-01-01"
              min="2023-01-01" max="9999-12-31" />
          </div>
          <div>
            <Button width={'264px'} height={'55px'} size={'22px'} radius={'20px'}>
              Sana orqali tartiblash
            </Button>
          </div>
        </Container.Left>
      </Container.Navbar>
      <Container.Header>
        <Header>
          {data?.map((value) => {
            var Womeen = value.img
            return (
              <Header.Con key={value.id}>
                <div>
                  <Womeen />
                </div>
                <div>
                  <p>{value.title}</p>
                  <p>{value.sena}</p>
                </div>
              </Header.Con>)})}
        </Header>
      </Container.Header>
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
                dataImt?.map((value) => (
                  <Container.Section key={value.id}>
                    <input className='chcxboxInput' type="checkbox" onChange={() => selectOne(value.id)} checked={value.checked} />
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
export default ImhonotganlarComp