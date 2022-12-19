import React from 'react'
import Container, {   Agent, ConDate, ConExel, Conpul, ConSelect, ConSms, ConTable, ContainerRith, ContainerSort, ConW, SelectSms, TalimSh, TalimT, TalimTu, TalimY } from './style.js'
import Down from "../../../assets/icons/admin/selectdown.svg"
import Woomen from "../../../assets/icons/admin/adminWoomen.svg"
import Exel from "../../../assets/icons/admin/adminExel.svg"
import Sms from "../../../assets/icons/admin/adminSms.svg"

import { Checkbox, Table } from 'antd';
const columns = [
  {
    width: 50,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
    name: <Checkbox/>
  },
  {
    title: '№',
    width: 100,
    dataIndex: 'number',
    key: 'number',
    fixed: 'left',
  },
  {
    title: 'FIO',
    dataIndex: 'address',
    key: '1',
    width: 150,
  },
  {
    title: 'Agent',
    dataIndex: 'address',
    key: '2',
    width: 150,
  },
  {
    title: 'Pasport seriya',
    dataIndex: 'address',
    key: '3',
    width: 150,
  },
  {
    title: 'Kurs',
    dataIndex: 'address',
    key: '4',
    width: 150,
  },
  {
    title: 'Ta’lim tili',
    dataIndex: 'address',
    key: '5',
    width: 150,
  },
  {
    title: 'Ta’lim yo’nalishi',
    dataIndex: 'address',
    key: '6',
    width: 150,
  },
  {
    title: 'Ta’lim shakli',
    dataIndex: 'address',
    key: '7',
    width: 150,
  },
  {
    title: 'Telefon raqam',
    dataIndex: 'address',
    key: '8',
    width: 150,

  },
  {
    title: 'Qo’shimcha raqam',
    dataIndex: 'address',
    key: '9',
    width: 170,

  },
  {
    title: 'Pasport nusxasi',
    dataIndex: 'address',
    key: '10',
    width: 170,

  },
  {
    title: 'Transcrip / Diplom nusxasi',
    dataIndex: 'address',
    key: '11',
    width: 220,
  },
  {
    title: 'Sana',
    dataIndex: 'address',
    key: '12',
    width: 120,
  },
  {
    title: 'Tahrirlash',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>,
  },
];

const data = [];
for (let i = 0; i < 1000; i++) {
  data.push({
    key: i,
    name: <Checkbox/>,
    number: `000${i}`,
    address: `Gulomov Elbek . ${i}`,
  });
}

export const QabuldanOtganCom = () => {
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
      <ConTable>
        <Table
          columns={columns}
          dataSource={data}
          scroll={{
            x: 1500,
            y: 300,
          }}
        />
   </ConTable>
     
    </>
  )
}

export default QabuldanOtganCom



