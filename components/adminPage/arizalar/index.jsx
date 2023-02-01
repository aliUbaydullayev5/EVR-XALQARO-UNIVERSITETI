import React, { useState } from 'react'
import DataAriza from '../../Mock/adminAriza/data.js'
import Container, { ConHero, ConTable } from './style.js'
import { Input } from "../../generic"
import PeoupleGroup from "../../../assets/icons/peoplegroup.svg"
import Exel from "../../../assets/icons/Exel.svg"
import Sms from "../../../assets/icons/Sms.svg"
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getAdminArizalar, getAdminArizalarFetch, } from '../../../redux/sliceAdmin/arizalar/index.jsx'
export const ArizalarCom = () => {
  const [data, setData] = useState(DataAriza);
  const [checkAll, setCheckAll] = useState(false);

  const selectAll = () => {
    setCheckAll(!checkAll);
  };
  const [arzia, setArizalar]=useState()

  useEffect(() => {
    fetch('http://localhost:8080/api/users')
      .then((res) => res.json()) 
      .then((json) => setArizalar(json.data) )
  }, [])
  const getAdminArizalarFetch = useSelector((store) => store.getAdminArizalarFetch)
  console.log(getAdminArizalarFetch,'zx');
  // console.log(arzia,'asd');
  // const loginAdminThunk = useSelector((store) => store.loginAdminThunk)
  const getAdminArizalar = useSelector((store) => store.getAdminArizalar)
  console.log(getAdminArizalar,'ds');
  return (
    <Container>
      <div className='scrollCon' style={{ overflowY: 'scroll', maxHeight: '550px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px',}}>
          {data.map((value) => {
            return(
              <ConTable key={value.id}>
            <input type="checkbox" onChange={selectAll} checked={checkAll} />
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
