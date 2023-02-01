import React, { useState } from 'react'
import DataAriza from '../../Mock/adminAriza/data.js'
import Container, { ConHero, ConTable } from './style.js'
import { Input } from "../../generic"
import PeoupleGroup from "../../../assets/icons/peoplegroup.svg"
import Exel from "../../../assets/icons/Exel.svg"
import Sms from "../../../assets/icons/Sms.svg"


import { useSelector } from 'react-redux'
import { getAdminArizalarFetch, } from '../../../redux/sliceAdmin/arizalar/index.jsx'

export const ArizalarCom = () => {
  const [data, setData] = useState(DataAriza);
  const [checkAll, setCheckAll] = useState(false);


  const [arzia, setArizalar]=useState()



  // const getAdminArizalarFetch = useSelector((store) => store.getAdminArizalarFetch)

  // const loginAdminThunk = useSelector((store) => store.loginAdminThunk)
  const handelId = (id) => {
console.log(id,'ds');
  }
  const selectAll = () => {
    setCheckAll(!checkAll);
  };

  return (
    <Container>
      <Container.Scrool style={{ overflowY: 'scroll', maxHeight: '550px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
              <ConTable>
                <input type="checkbox" checked={checkAll} />
                <div className='row'>
                  <div >1</div>
                  <div className='colum'>2</div>
                  <div className='colum'>3</div>
                  <div className='colum'>4</div>
                </div>
              </ConTable>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px',}}>
          {data.map((value) => {
            return(
              <ConTable key={value.id}>
                <input type="checkbox" checked={checkAll} />
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
