import React, { useState } from 'react'
import DataAriza from '../../Mock/adminAriza/data.js'
import Container, { ConHero, ConTable } from './style.js'
import { Button, Input } from "../../generic"
import PeoupleGroup from "../../../assets/icons/peoplegroup.svg"
import Exel from "../../../assets/icons/Exel.svg"
import Sms from "../../../assets/icons/Sms.svg"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AntModal, BtnText } from '../../transferMoney/UsersPayInfo/click/style.js'
import { AntTimeCon } from '../../reception/abiturient/style.js'


export const ArizalarCom = () => {

  const [excel, setexcel] = useState('')

  const dispatch = useDispatch()
  const [data, setData] = useState(DataAriza)
  const [selectAllState, setSelectAllState] = useState(false)

  const [inView, setInView] = useState(false);
  const getAllData = useSelector((store) => store.getAllData)

  const [isModalOpen, setIsModalOpen] = useState(false);

  const changeHidden = () => setIsModalOpen(!isModalOpen)

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
  useEffect(() => {
    if (inView) {
      if (getAllData.data.length == 20 || getAllData.data.length == 0) {
        dispatch(addPageCount())
        dispatch(getAllDataFetch({ page: getAllData?.pageCount, query: '' }))
      }
    }
  }, [inView])


  const selectOne = (id = true) => {
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
            {data.map((value) => {
              return (
                <ConTable key={value.id}>
                  <input type="checkbox" onChange={() => selectOne(value.id)} checked={value.checked} />
                  <div className='row'>
                    <div >{value.id}</div>
                    <div className='colum'>{value.ismi}</div>
                    <div className='colum'>{value.phone}</div>
                    <div className='colum'>{value.data}</div>
                  </div>
                </ConTable>
              )
            })}
          </div>
        </Container.Scrool>
        <ConHero>
          <ConHero.Date>
            <div> <Input mheight={'45px'} msize={'20px'} mwidth={'170px'} mpadding={'0px 18px'} height={'55px'} size={'23px'} width={'215px'} type="date" id="start" name="trip-start" value="2023-01-01" min="2023-01-01" max="9999-12-31" /></div>
            <div> <Input mheight={'45px'} msize={'20px'} mwidth={'170px'} mpadding={'0px 18px'} height={'45px'} size={'23px'} width={'215px'} type="date" id="start" name="trip-start" value="2023-01-01" min="2023-01-01" max="9999-12-31" /></div>
          </ConHero.Date>
          <ConHero.Tartiblash>
            <Button mwidth={'210px'} msize={'18px'} mheight={"45px"} size={'29px'} width={'510px'} height={"90px"} radius={'20px'} mradius={'10px'}> Sana orqali tartiblash</Button>
          </ConHero.Tartiblash>
          <ConHero.Exel>
            <div>
              <PeoupleGroup className={'UserImg'} />  <p className='TextPsamal'> Arizalar soni: {data.length}</p>
            </div>
            <div>
              <Sms className={'UserImg'} /> <p className='TextPsamal'>Excelga chiqarish</p>
            </div>
            <div>
              <Exel className={'UserImg'} />

              <AntModal open={isModalOpen} onOk={changeHidden} onCancel={changeHidden}>
                <Input align={'center'} width='379px' height='100px' padding="0px 0px 0px 25px" placeholder={'sms Kiriting'} maxlength='6'></Input>
                <Button mheight={'25px'} mmargin={'10px 0px 0px 0px'} onclick={() => query.push('/receptionPage/application/UsersCardInfo/click/arizafinaly')} height={'41px'} margin="20px 0px 0px 0px" bc={'#ffff'}>
                  <BtnText>tasdiqlash</BtnText>
                </Button>
                <AntTimeCon>
                  <div>
                    <Input align={'center'} size={'20px'} malign={'center'} mradius={'5px'} width={'160px'} mwidth={'80vw'} msize={'26px'} height={'37px'} mheight={'39px'} placeholder={`${minut} : ${secund}`} maxlength={'12'} mpadding={'3px 0px 0px 0px'} padding={'0 20px 0 20px'} />
                  </div>
                  <div>
                    <Button mradius={'5px'} width={'130px'} mwidth={'74px'} msize={'19px'} mheight={'30px'} height={'40px'} size={'16px'} radius={"5px"} onclick={() => showModal()}>Qayta yuborish</Button>
                  </div>
                </AntTimeCon>
              </AntModal>
              <p className='TextPsamal'>SMS yuborish</p>
            </div>
          </ConHero.Exel>
        </ConHero>
      </Container>
      {getAllData?.status === 'loading' && <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}><Loading type={'bars'} color={'#000'} /></div>}
    </>
  )
}
export default ArizalarCom
