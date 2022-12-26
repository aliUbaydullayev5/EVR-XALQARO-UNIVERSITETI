import React, { useState } from 'react'
import DataAriza from '../../Mock/adminAriza/data.js'
import Container, { ConHero, ConTable } from './style.js'
import { Input } from "../../generic"
import PeoupleGroup from "../../../assets/icons/peoplegroup.svg"
import Exel from "../../../assets/icons/Exel.svg"
import Sms from "../../../assets/icons/Sms.svg"


export const ArizalarCom = () => {
  const [data, setData] = useState(DataAriza);
  console.log(data,'xasa')
  return (
    <Container>
      <div className='scrollCon' style={{overflowY: 'scroll', maxHeight: '550px'}}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px',}}>
          {data.map((value) => {
            const Img = value.img
            return(
              <ConTable key={value.id}>
              <ConTable.ChecBox>
                <Img className={'checbox'} />
              </ConTable.ChecBox>
              <div className='row'>
                <div >{value.id}</div>
                <div className='colum'>{value.ismi}</div>
                <div className='colum'>{value.phone}</div>
                <div className='colum'>{value.data}</div>
              </div>
            </ConTable>
          )})}
        </div>
      </div>
      <ConHero>
        <ConHero.Date>
            <Input height={'55px'} size={'23px'} width={'240px'} type="date" id="start" name="trip-start" />
            <Input height={'55px'} size={'23px'} width={'240px'} type="date" id="start" name="trip-start" />
        </ConHero.Date>
        <div className='TextCenter'>
          <p className='TextPsamal'>Sana orqali tartiblash</p>
        </div>
        <ConHero.Exel>
          <div>
            <PeoupleGroup/>  <p className='TextPsamal'>Arizalar soni: {data.length }</p>
          </div>
          <div>
           
            <Sms /> <p className='TextPsamal'>Excelga chiqarish</p>
          </div>
          <div>
            <Exel />  <p className='TextPsamal'>SMS yuborish</p> 
          </div>
        </ConHero.Exel>
      </ConHero>
    </Container>
  )
}
export default ArizalarCom
