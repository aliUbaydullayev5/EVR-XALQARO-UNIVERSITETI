import React, { useState } from 'react'
import Container, { ConTable } from './style.js'
import Input from "../../../components/generic/Input/index.jsx"
import dataQabul from "../../Mock/qabulData/qabulData.js"

export const AgentComponent = () => {
  const [serch,setSearch]=useState('')
  
  const hendelChange = (e) => {
    setSearch(e.target.value);
  }
  console.log(serch,'FDS');
  return (
    <>
      <Container>
        <Container.Left>
          <select name="name" id="1">
            <option value="name">Firmalar</option>
            <option value="name">1</option>
            <option value="name">1</option>
            <option value="name">1</option>
          </select>
          <Container.Arzilar>
            <p>Arizalar to’lovi:</p>
            <p>350 000 000</p>
          </Container.Arzilar>

          <Container.shartnoma>
            <p>Shartnoma summasi</p>
            <p>222 222 222</p>
          </Container.shartnoma>
          <Container.Tolangan>
            <p>To’langan</p>
            <p>222 222 222</p>
          </Container.Tolangan>
          <Container.Qarzdorlik>
            <p>Qarzdorlik</p>
            <p>222 222 222</p>
          </Container.Qarzdorlik>
        </Container.Left>
        <div>
          <Input onchange={hendelChange} padding={'0px 15px'} size={'20px'} placeholder={'Qidiruv'} width={'270px'} height={'40px'} radius={'5px'} />
        </div>
        <ConTable>
          <Container.Bottom>
            <Container.BottomInset>
              <Container.Nav>
                <input type="checkbox"  />
                <Container.Box>
                  <div>№</div>
                  <div>ID</div>
                  <div>Firma nomi</div>
                  <div>Firma Rahbari FIO</div>
                  <div>Telefon raqam</div>
                  <div>Ta’lim yo’nalishi</div>
                  <div>Filiallar soni</div>
                  <div>Talabari</div>
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
                dataQabul?.map((value) =>
                  <Container.Section key={value.id}>
                    <input type="checkbox" />
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
                )}
            </Container.BottomInset>
          </Container.Bottom>
        </ConTable>
      </Container>
      <div>
     </div>
    </>
  )
}

export default AgentComponent