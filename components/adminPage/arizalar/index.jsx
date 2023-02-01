import React, { useState } from 'react'
import DataAriza from '../../Mock/adminAriza/data.js'
import Container, { ConHero, ConTable } from './style.js'
import { Input } from "../../generic"
import PeoupleGroup from "../../../assets/icons/peoplegroup.svg"
import Exel from "../../../assets/icons/Exel.svg"
import Sms from "../../../assets/icons/Sms.svg"
import { useEffect } from 'react'


export const ArizalarCom = () => {
  const [data, setData] = useState(DataAriza)
  const [selectAllState, setSelectAllState] = useState(false)


  useEffect(() => {
    setData(data.map((value) => (
      {
      id: value.id,
      ismi: value.ismi,
      phone: value.phone,
      data: value.data,
      img: value.img,
      checked: selectAllState
      }
    )))
  }, [selectAllState])


  const selectOne = (id = false) => {
    setData(data.map((value) => (
      {
        id: value.id,
        ismi: value.ismi,
        phone: value.phone,
        data: value.data,
        img: value.img,
        checked: value.id === id ? !value.checked : value.checked
      } 
    )))
  }



  return (
    <Container>
      <Container.Scrool style={{ overflowY: 'scroll', maxHeight: '550px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
              <Container.Nav>
            <input type="checkbox" onChange={() => setSelectAllState(!selectAllState)} />
                <div className='row'>
                  <div >№</div>
              <div className='colum'>FIO</div>
              <div className='colum'>Telefon raqam</div>
              <div className='colum'>Kun</div>
                </div>
           </Container.Nav>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px',}}>
          {data.map((value) => {
            return(
              <ConTable key={value.id}>
                <input type="checkbox" onChange={() => selectOne(value.id)} checked={value.checked} />
              <div className='row'>
                <div >{value.id}</div>
                <div className='colum'>{value.ismi}</div>
                <div className='colum'>{value.phone}</div>
                <div className='colum'>{value.data}</div>
              </div>
            </ConTable>
          )})}
        </div>
      </Container.Scrool>
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
           
            <Sms/> <p className='TextPsamal'>Excelga chiqarish</p>
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
