import React, { useState, useEffect } from 'react'
import Container, { ConHero, SendModal } from './style.js'
import { Button, Input } from "../../generic"
import PeoupleGroup from "../../../assets/icon/people.svg"
import Exel from "../../../assets/icon/exel.svg"
import Sms from "../../../assets/icon/sms.svg"
import SendSmss from "../../../assets/icon/send.svg"
import { useDispatch, useSelector } from 'react-redux'
import { getApplications } from "../../../redux/sliceAdmin/arizalar/applications";
import { getExcelfetch } from "../../../redux/sliceAdmin/arizalar/downloadExel";
import { sendSmsFetch } from "../../../redux/sliceAdmin/arizalar-qabul-sms";
import  datas from "../../Mock/adminAriza/data"
import Search from "../../../assets/icon/search.svg"

export const ArizalarCom = () => {

  const dispatch = useDispatch()
  const [selectAllState, setSelectAllState] = useState(false)
  const [inView, setInView] = useState(false)
  const getAllData = useSelector((store) => store.getAllData)

  // get applications - arizalar
  const getApplicationData = useSelector((store) => store.getApplicationData)
  const [faceData,setFaceData]=useState(datas)
  const [data, setData] = useState([])

  let defaultDate = new Date()
  const [fromDate, setFromDate] = useState(defaultDate)
  const [toDate, setToDate] = useState(defaultDate)
  const onSetFromDate = (e) => setFromDate(new Date(e.target.value))
  const onSetToDate = (e) => setToDate(new Date(e.target.value))

  // sms //
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [sendSms,setSendSms]=useState("")

  const SendSms = ({target:{value}}) => {
    setOpen(true);
    setSendSms(value)
  };
  const handleOk = () => {
    dispatch(sendSmsFetch({sendSms}))
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 1000);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getApplications({
      fromDate: fromDate.getTime(),
      toDate: toDate.getTime()
    }))
  }, [])

  useEffect(() => {
    setData(getApplicationData.data)
  }, [getApplicationData])


  // get excel
  const downloadExcel = () => {
    dispatch(getExcelfetch())
  }


  // send sms
  const sendSmsData = useSelector(store => store.sendSmsData)


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
console.log(data,'data');
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
            {faceData?.map((value, num) => {
              return (
                <Container.Nav mapp key={value.id}>
                  <Container.Input>
                    <input type="checkbox" />
                    {/* <input type="checkbox" onChange={() => selectOne(value.id)} checked={value.checked} /> */}
                  </Container.Input>
                  <Container.Info>
                   <h1 className='id'>{num + 1}</h1>
                   <h1 className='fio'>{value.firstName + ' ' + value.lastName}</h1>
                   <h1 className='tel'>{value.phoneNumber}</h1>
                   <h1 className='kun'>{new Date(value.createdAt).toLocaleDateString()}</h1>
                  </Container.Info>
                </Container.Nav>
              )
            })}
          </Container.Map>
         </Container.Scrool>
        </Container.Top>

        {/* bottom  */}

        <ConHero className='nocopy'>
          <ConHero.Date>
             <Input bc={"#241F69"} mheight={'48px'} msize={'20px'} mwidth={'175px'} mpadding={'0px 18px'} height={'45px'} size={'23px'} width={'250px'} type="date" id="start" name="trip-start" value={fromDate.toLocaleDateString('en-CA')} onchange={onSetFromDate} min="2023-01-01" max="9999-12-31" />
             <Input bc={"#241F69"} mheight={'48px'} msize={'20px'} mwidth={'175px'} mpadding={'0px 18px'} height={'45px'} size={'23px'} width={'250px'} type="date" id="start" name="trip-start" value={toDate.toLocaleDateString('en-CA')} onchange={onSetToDate} min="2023-01-01" max="9999-12-31" />
          </ConHero.Date>
          <Button mline={"22px"} mwidth={'210px'} msize={'10px'} mheight={"45px"} size={'28px'} width={'511px'} height={"48px"} radius={'10px'} mradius={'10px'} weight="500">Tartiblash</Button>

          <ConHero.Exel>
            <Button radius={"20px"} width={"511px"} height={"80px"}><PeoupleGroup/><h1>Arizalar soni: <span>{2054}</span></h1></Button>
            <Button onclick={downloadExcel} radius={"20px"} width={"511px"} height={"80px"}><Exel/><h1 className='exel'>Excelga chiqarish</h1></Button>
            <Button onclick={SendSms} radius={"20px"} width={"511px"} height={"80px"}><Sms/><h1 className='sms'>SMS yuborish</h1></Button>
              {/* <PeoupleGroup className={'UserImg'} />  <p className='TextPsamal'> Arizalar soni: {data?.counts ? data.counts : 0}</p> */}
          </ConHero.Exel>
        </ConHero>
      </Container>
      <SendModal open={open} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
        <h1>SMS yuborish</h1>
        <SendSmss className="sendSms"/>
        <Input width="350px" height="20px" size="15px" placeholder="t y p i n g ..." />
      </SendModal>
      {/* {
        getAllData?.status === 'loading' &&
        <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}><Loading type={'bars'} color={'#000'} /></div>
      } */}
    </>
  )
}
export default ArizalarCom