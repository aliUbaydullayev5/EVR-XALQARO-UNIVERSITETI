import React from 'react'
import Container, { ConText, Header } from './style.js'
import Logo from "../../../assets/icon/download.svg"
import { useRouter } from 'next/router.js'
import Button from '../../generic/Button/index.jsx'
import Woomen from "../../../assets/icons/admin/adminWoomen.svg"
import Money from "../../../assets/icons/admin/admin$.svg"

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
    img: Woomen,
    title: 'Excelga chiqarish',
    sena: ''
  },
  {
    id: 6,
    img: Woomen,
    title: 'SMS yuborish',
    sena: ''
  },
  {
    id: 7,
    img: Woomen,
    title: 'Ma’lumotnoma',
    sena: '3455'
  },
  {
    id: 8,
    img: Woomen,
    title: 'Ta’lim yo’nalishi',
    sena: ''
  },
  {
    id: 9,
    img: Woomen,
    title: 'Ta’lim shakli',
    sena: ''
  },
  {
    id: 11,
    img: Woomen,
    title: 'Kontrakt turi',
    sena: ''
  },
  {
    id: 12,
    img: Woomen,
    title: 'Uch tomonlama',
    sena: ''
  },
  {
    id: 13,
    img: Woomen,
    title: 'Shartnoma yuk',
    sena: ''
  },
  {
    id: 13,
    img: Woomen,
    title: 'Chaqiruv hati',
    sena: ''
  },
  {
    id: 14,
    img: Woomen,
    title: 'Ta’lim tili',
    sena: ''
  },
  {
    id: 15,
    img: Woomen,
    title: 'Kurs',
    sena: ''
  },
  {
    id: 16,
    img: Woomen,
    title: 'Status',
    sena: ''
  },
  {
    id: 17,
    img: Woomen,
    title: 'Zapros',
    sena: ''
  },
  {
    id: 18,
    img: Woomen,
    title: 'Agent',
    sena: ''
  },
  {
    id: 19,
    img: Woomen,
    title: 'Hujjat',
    sena: ''
  },
]


export const ImhonotganlarComp = () => {
  const query = useRouter()
  return (
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
  )
}
export default ImhonotganlarComp