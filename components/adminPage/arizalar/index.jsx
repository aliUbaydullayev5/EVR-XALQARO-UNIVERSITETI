import React, { useState, useEffect, useRef } from 'react'
import Container, { ConHero, SendModal } from './style.js'
import { Button, Input } from "../../generic"
import PeoupleGroup from "../../../assets/icons/admin/people.svg"
import Exel from "../../../assets/icons/admin/exel.svg"
import Sms from "../../../assets/icons/admin/sms.svg"
import SendSmss from "../../../assets/icons/admin/send.svg"
import { useDispatch, useSelector } from 'react-redux'
import {getApplicationsFetch} from "../../../redux/sliceAdmin/arizalar/applications";
import { getExcelfetch } from "../../../redux/sliceAdmin/arizalar/downloadExel";
import { sendSmsFetch } from "../../../redux/sliceAdmin/arizalar-qabul-sms";
import Search from "../../../assets/icon/search.svg"

export const ArizalarCom = () => {

  const dispatch = useDispatch()

  const [inView, setInView] = useState(false)
  const getAllData = useSelector((store) => store.getAllData)

  // get applications - arizalar
  const getApplicationData = useSelector((store) => store.getApplicationData)
  const [data, setData] = useState([])
  const [counts, setCounts] = useState(0)

  // time toDate ~ fromDate
  let defaultDate = new Date()
  const [fromDate, setFromDate] = useState(new Date(1672531200000))
  const [toDate, setToDate] = useState(defaultDate)
  const onSetFromDate = (e) => setFromDate(new Date(e.target.value))
  const onSetToDate = (e) => setToDate(new Date(e.target.value))

  const [changeDate, setChangeDate] = useState(false)

  // get applications
  const [ page, setPage ] = useState(0)
  const [ search, setSearch ] = useState('')
  useEffect(() => {
    dispatch(getApplicationsFetch({
      fromDate: fromDate.getTime(),
      toDate: toDate.getTime(),
      page: page,
      search: search
    }))
  }, [changeDate, page, search])

  useEffect(() => {
    setData(getApplicationData.data?.users?.map((value) => (
        {
          ...value,
          checked: false
        }
    )))
    setCounts(getApplicationData.data?.counts)
  }, [getApplicationData])


  // all data select
  const [checkedData, setCheckedData] = useState([])
  const [selectAllState, setSelectAllState] = useState(false)
  const selectAllStates = () => {
    if (selectAllState) {
      setData(data?.map(value => (
          {
            ...value,
            checked: false
          }
      )))
      setCheckedData([])
    } else {
      setData(data?.map(value => (
          {
            ...value,
            checked: true
          }
      )))
      data?.map(i => checkedData.push(i.id))
    }
  }

  // select one
  const selectOne = (event, id) => {
    setData(
        data.map(i => ({
          ...i,
          checked: id === i.id ? !i.checked : i.checked
        }))
    )
    setCheckedData(event ? [...checkedData, id] : checkedData.filter(idd => idd !== id))
  }


  // sms //
  const sendSmsData = useSelector(store => store.sendSmsData)

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const smsRef=useRef()

  const SendSms = () => {
    setOpen(true);
  }

  const handleOk = () => {
    dispatch(sendSmsFetch({
      text: smsRef.current?.value
    }))

    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 1000);
  }
  const handleCancel = () => {
    setOpen(false)
  }


  // get excel
  const downloadExcel = () => {
    dispatch(getExcelfetch());
  }


  useEffect(() => {
    if (inView) {
      if (getAllData.data.length == 20 || getAllData.data.length == 0) {
        dispatch(addPageCount())
        dispatch(getAllDataFetch({ page: getAllData?.pageCount, query: '' }))
      }
    }
  }, [inView])


  return (
    <>
      <Container>

        {/* body */}
        
      <Container.Top>
        <Container.Search className="nocopy">
            <Search className="search" />
            <Input radius="8px" bc={"#241F69"} padding={"0 10px 0 50px"} width={"651px"} height={"40px"} size={"20px"} type={"text"} placeholder="search" />
        </Container.Search>
        <Container.Nav>
            <Container.Input>
              <input type="checkbox" onChange={() => setSelectAllState(!selectAllState)} />
            </Container.Input>
            <Container.Info>
              <h1 className='id nocopy'>№</h1>
              <h1 className='fio nocopy'>FIO</h1>
              <h1 className='tel nocopy'>Telefon raqam</h1>
              <h1 className='kun nocopy'>Kun</h1>
            </Container.Info>
        </Container.Nav>
            
        <Container.Scrool style={{ overflowY: 'scroll', maxHeight: '550px' }}>
          <Container.Map className="nocopy">
            {
              data?.length ?
                  data?.map((value, num) => {
                    return (
                        <Container.Nav mapp key={value.id}>
                          <Container.Input>
                            <input
                                type="checkbox"
                                onChange={(e) => selectOne(e.target.checked, value.id)}
                                checked={value.checked}
                            />
                          </Container.Input>
                          <Container.Info>
                            <h1 className='id'>{num + 1}</h1>
                            <h1 className='fio'>{value.firstName + ' ' + value.lastName}</h1>
                            <h1 className='tel'>+{value.phoneNumber}</h1>
                            <h1 className='kun'>{new Date(value.createdAt).toLocaleDateString()}</h1>
                          </Container.Info>
                        </Container.Nav>
                    )
                  })
                  : <p style={{color: '#fff'}}>No data !</p>
            }
          </Container.Map>
         </Container.Scrool>
        </Container.Top>

        {/* bottom  */}

        <ConHero className='nocopy'>
          <ConHero.Date>
             <Input value={fromDate.toLocaleDateString('en-CA')} onchange={onSetFromDate} min="2023-01-01" max="9999-12-31" bc={"#241F69"} mheight={'48px'} msize={'20px'} mwidth={'175px'} mpadding={'0px 18px'} height={'45px'} size={'23px'} width={'250px'} type="date" id="start" name="trip-start" />
             <Input value={toDate.toLocaleDateString('en-CA')} onchange={onSetToDate} min="2023-01-01" max="9999-12-31" bc={"#241F69"} mheight={'48px'} msize={'20px'} mwidth={'175px'} mpadding={'0px 18px'} height={'45px'} size={'23px'} width={'250px'} type="date" id="start" name="trip-start" />
          </ConHero.Date>

          <Button onclick={() => setChangeDate(!changeDate)} mline={"22px"} mwidth={'210px'} msize={'10px'} mheight={"45px"} size={'28px'} width={'511px'} height={"48px"} radius={'10px'} mradius={'10px'} weight="500">Tartiblash</Button>

          <ConHero.Exel>
            <Button radius={"20px"} width={"511px"} height={"80px"}><PeoupleGroup/><h1>Arizalar soni: <span>{counts}</span></h1></Button>
            <Button onclick={downloadExcel} radius={"20px"} width={"511px"} height={"80px"}><Exel/><h1 className='exel'>Excelga chiqarish</h1></Button>
            <Button onclick={SendSms} radius={"20px"} width={"511px"} height={"80px"}><Sms/><h1 className='sms'>SMS yuborish</h1></Button>
          </ConHero.Exel>
        </ConHero>
      </Container>
      <SendModal open={open} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
        <h1>SMS yuborish</h1>
        <SendSmss className="sendSms"/>
        <input ref={smsRef} type="text" placeholder='t y p i n g ...' />
      </SendModal>
    </>
  )
}
export default ArizalarCom