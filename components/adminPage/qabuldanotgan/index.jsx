import React from 'react'
import Container, {   Agent, ConDate, ConExel, Conpul, ConSelect, ConSms, ConTable, ContainerRith, ContainerSort, ConW, SelectSms, TalimSh, TalimT, TalimTu, TalimY } from './style.js'
import Down from "../../../assets/icons/admin/selectdown.svg"
import Woomen from "../../../assets/icons/admin/adminWoomen.svg"
import Exel from "../../../assets/icons/admin/adminExel.svg"
import Sms from "../../../assets/icons/admin/adminSms.svg"
import data from "../../Mock/rahbariyat/data.js"


// import { Checkbox, Divider, Radio, Table } from 'antd';
// import { useState } from 'react'



export const QabuldanOtganCom = () => {
  // const [selectionType, setSelectionType] = useState('checkbox');
  // const rowSelection = {
  //   onChange: (selectedRowKeys, selectedRows) => {
  //     console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  //   },
  //   getCheckboxProps: (record) => ({
  //     disabled: record.name === 'Disabled User',
  //     // Column configuration not to be checked
  //     name: record.name,
  //   }),
  // };
  const data = [
    {
    name: '№',
    id: 1,
    },
    {
      serie: 'ID',
      id: 2,
    },
    {
      kurs: 'Kurs',
      id: 3,
    },
    {
      talimtili: 'Ta’lim tili',
      id: 4,
    },
    {
      talimyunalish: 'Ta’lim yo’nalishi',
      id: 5,
    },

    {
      talimshakli: 'Ta’lim shakli',
      id: 6,
    },
    {
      qoshilgansana: 'Qo’shilgan sanasi',
      id: 7,
    },
    {
      status: 'Status',
      id: 8,
    },

    {
      imtihon: 'Imtihon natijasi',
      id: 9,
    },
    {
      kontrakt: 'Kontrakt turi',
      id: 10,
    },

    {
      shartnoma: 'Shartnoma summasi',
      id: 11,
    },
    {
      tolagansum: 'To’lagan summa',
      id: 14,
    },
    {
      qolgansum: 'Qolgan summa',
      id: 15,
    },
    {
      shartnomakod: 'Shartnoma kodi',
      id: 16,
    },

    {
      hujjat: 'Hujjat',
      id: 17,
    },
    {
      shartnomayuk: 'Shartnoma.yuk',
      id: 18,
    },
    {
      malumotnoma: 'Ma’lumotnoma',
      id: 19,
    },
    {
      chaqiruvxati: 'Chaqiruv xati',
      id: 20,
    },
    {
      zapros: '  Zapros',
      id: 21,
    },
    {
      telefon1: 'Telefon raqam 1',
      id: 22,
    },
    {
      telefon2: 'Telefon raqam 2',
      id: 23,
    },
    {
      tahrirlash: 'Tahrirlash',
      id: 24,
    },

    {
      name: '1',
      id: 25,
    },
    {
      serie: '100102',
      id: 26,
    },
    {
      kurs: '3',
      id: 27,
    },
    {
      talimtili: 'O’zbek tili',
      id: 28,
    },
    {
      talimyunalish: 'Iqtisodiyot',
      id: 29,
    },

    {
      talimshakli: 'Kunduzgi',
      id: 30,
    },
    {
      qoshilgansana: '10.12.2022',
      id: 31,
    },
    {
      status: 'qwerty',
      id: 32,
    },

    {
      imtihon: '83%',
      id: 33,
    },
    {
      kontrakt: 'Stipendiyasi',
      id: 34,
    },

    {
      shartnoma: '9 000 000',
      id: 35,
    },
    {
      tolagansum: '6 000 000',
      id: 36,
    },
    {
      qolgansum: '3 000 000',
      id: 37,
    },
    {
      shartnomakod: 'AA 101 000 ',
      id: 38,
    },

    {
      hujjat: 'Elbek Gulomov',
      id: 39,
    },
    {
      shartnomayuk: 'yukalangan',
      id: 40,
    },
    {
      malumotnoma: 'yuklangan',
      id: 41,
    },
    {
      chaqiruvxati: 'yuklangan',
      id: 42,
    },
    {
      zapros: '  yuklangan',
      id: 43,
    },
    {
      telefon1: '+998 99 759 04 80',
      id: 44,
    },
    {
      telefon2: '+998 99 759 04 80',
      id: 45,
    },
    {
      tahrirlash: '🖊',
      id: 46,
    },

  ]


  return (
    <>
    <Container>
      <ContainerRith>
        <ConW>
          <Woomen/>
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
          <Exel/>
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
      {/* <ConTable>
      <Con
        <div>
          <Radio.Group
            onChange={({ target: { value } }) => {
              setSelectionType(value);
            }}
            value={selectionType}
          >
          
          </Radio.Group>

          <Divider />
          <Table
            rowSelection={{
              type: selectionType,
              ...rowSelection,
            }}
            columns={columns}
            dataSource={data}
            scroll={{
              x: 1500,
              y: 400,
            }}
          />
        </div>
   </ConTable> */}
      <div>
      <ConTable>
           <input type="checkbox" />
      <Container.Bottom>
        <Container.BottomInset>
          {
            data?.map((value) => (
              <Container.Section key={value.id}>
  
                <div>{value?.name}</div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
                
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



