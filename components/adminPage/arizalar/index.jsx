import React, { useState } from 'react'
import DataAriza from '../../Mock/adminAriza/data.js'
import Container, { ConHero, ConTable } from './style.js'
import { Button, Input } from "../../generic"
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
                <input type="checkbox" onChange={() => selectOne(value.id)} checked={value.checked}  />
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
          <div> <Input mheight={'45px'} msize={'20px'} mwidth={'170px'} mpadding={'0px 18px'} height={'55px'} size={'23px'} width={'215px'} type="date" id="start" name="trip-start" value="2023-01-01" min="2023-01-01" max="9999-12-31" /></div>
          <div> <Input mheight={'45px'} msize={'20px'} mwidth={'170px'} mpadding={'0px 18px'} height={'45px'} size={'23px'} width={'215px'} type="date" id="start" name="trip-start" value="2023-01-01" min="2023-01-01" max="9999-12-31" /></div>
        </ConHero.Date>
        <ConHero.Tartiblash>
          <Button mwidth={'210px'} msize={'18px'} mheight={"45px"} size={'29px'} width={'510px'} height={"90px"} radius={'20px'}  mradius={'10px'}> Sana orqali tartiblash</Button>
        </ConHero.Tartiblash>
        <ConHero.Exel>
          <div>
            <PeoupleGroup className={'UserImg'} />  <p className='TextPsamal'> Arizalar soni: {data.length }</p>
          </div>
          <div>
            <Sms className={'UserImg'} /> <p className='TextPsamal'>Excelga chiqarish</p>
          </div>
          <div>
            <Exel className={'UserImg'} />
            <p className='TextPsamal'>SMS yuborish</p> 
          </div>
        </ConHero.Exel>
      </ConHero>
    </Container>
  )
}
export default ArizalarCom
