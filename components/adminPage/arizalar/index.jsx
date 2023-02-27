import React, { useState } from 'react'
import Container, { ConHero, ConTable } from './style.js'
import { Button, Input } from "../../generic"
import PeoupleGroup from "../../../assets/icons/peoplegroup.svg"
import Exel from "../../../assets/icons/Exel.svg"
import Sms from "../../../assets/icons/Sms.svg"
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getApplications} from "../../../redux/sliceAdmin/arizalar/applications";
import {getExcelfetch} from "../../../redux/sliceAdmin/arizalar/downloadExel";
import {sendSmsFetch} from "../../../redux/sliceAdmin/arizalar-qabul-sms";

export const ArizalarCom = () => {

    const dispatch = useDispatch()

  const [selectAllState, setSelectAllState] = useState(false)

  const [inView, setInView] = useState(false);

  const getAllData = useSelector((store) => store.getAllData)



  // get applications - arizalar
  const getApplicationData = useSelector((store) => store.getApplicationData)

  const [data, setData] = useState([])

  let defaultDate = new Date()
  const [fromDate, setFromDate] = useState(defaultDate)
  const [toDate, setToDate] = useState(defaultDate)
  const onSetFromDate = (e) => {
    setFromDate(new Date(e.target.value))
  }
  const onSetToDate = (e) => {
    setToDate(new Date(e.target.value))
  }
  // console.log(fromDate.getTime(), ' - from')
  // console.log(toDate, ' - to')

  useEffect(() => {
      dispatch(getApplications({
        fromDate: fromDate.getTime(),
        toDate: toDate.getTime()
      }))
  }, [])

  useEffect(() => {
      setData(getApplicationData.data)
  }, [getApplicationData])
  // console.log(data)


  // get excel
  const [excel, setExcel] = useState([])
  const downloadExcel = () => {
      dispatch(getExcelfetch())
  }


  // send sms
  const sendSmsData = useSelector(store => store.sendSmsData)
  const sendSms = () => {
    dispatch(sendSmsFetch({
      // ...
    }))
  }




  // useEffect(() => {
  //   setData(data?.map((value) => (
  //     {
  //       id: value.id,
  //       ismi: value.ismi,
  //       phone: value.phone,
  //       data: value.data,
  //       img: value.img,
  //       checked: selectAllState
  //     }
  //   )))
  // }, [selectAllState])

  useEffect(() => {
    if (inView) {
      if (getAllData.data.length == 20 || getAllData.data.length == 0) {
        dispatch(addPageCount())
        dispatch(getAllDataFetch({ page: getAllData?.pageCount, query: '' }))
      }
    }
  }, [inView])


  const selectOne = (id = false) => {

  }

  const searchFunc = (eventValue) => {
    setTimeout(() => {
      dispatch(getAllDataFetch({ payload: 0, query: eventValue, search: true }))
    }, 1000)
  }

  return (
    <>
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
          {data?.users?.map((value) => {
            return(
              <ConTable key={value.id}>
                <input type="checkbox" onChange={() => selectOne(value.id)} checked={value.checked}  />
              <div className='row'>
                {/*<div >{value.id}</div>*/}
                <div>1</div>
                <div className='colum'>{value.firstName + ' ' + value.lastName}</div>
                <div className='colum'>{value.phoneNumber}</div>
                <div className='colum'>{new Date(value.createdAt).toLocaleDateString()}</div>
              </div>
            </ConTable>
          )})}
        </div>
      </Container.Scrool>
      <ConHero>
        <ConHero.Date>
          <div> <Input mheight={'45px'} msize={'20px'} mwidth={'170px'} mpadding={'0px 18px'} height={'45px'} size={'23px'} width={'215px'} type="date" id="start" name="trip-start" value={fromDate.toLocaleDateString('en-CA')} onchange={onSetFromDate} min="2023-01-01" max="9999-12-31" /></div>
          <div> <Input mheight={'45px'} msize={'20px'} mwidth={'170px'} mpadding={'0px 18px'} height={'45px'} size={'23px'} width={'215px'} type="date" id="start" name="trip-start" value={toDate.toLocaleDateString('en-CA')} onchange={onSetToDate} min="2023-01-01" max="9999-12-31" /></div>
        </ConHero.Date>
        <ConHero.Tartiblash>
          <Button mwidth={'210px'} msize={'18px'} mheight={"45px"} size={'29px'} width={'510px'} height={"90px"} radius={'20px'}  mradius={'10px'}> Sana orqali tartiblash</Button>
        </ConHero.Tartiblash>
        <ConHero.Exel>
          <div>
            <PeoupleGroup className={'UserImg'} />  <p className='TextPsamal'> Arizalar soni: { data?.counts ? data.counts : 0 }</p>
          </div>
          <div onClick={downloadExcel}>
            <Sms className={'UserImg'} /> <p className='TextPsamal'>Excelga chiqarish</p>
          </div>
          <div>
            <Exel className={'UserImg'} />
            <button
                className='TextPsamal'
                onClick={sendSms}
            >
              SMS yuborish
            </button>
          </div>
        </ConHero.Exel>
      </ConHero>
    </Container>
    {getAllData?.status === 'loading' && <div style={{display: 'flex', justifyContent: 'center', padding: '10px'}}><Loading type={'bars'} color={'#000'} /></div>}
    </>
  )
}
export default ArizalarCom
