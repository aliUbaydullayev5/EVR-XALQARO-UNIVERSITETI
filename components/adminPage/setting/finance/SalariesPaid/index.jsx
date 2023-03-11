import React, { useEffect } from 'react'
import Container, { Agent, Conpul,SendModal,FilterModal} from './style.js'
import Down from "../../../../../assets/icons/admin/selectdown.svg"
import Plyus from "../../../../../assets/icons/plus.svg"
import Dollar from "../../../../../assets/icons/admin/dollar.svg"
import Setting from "../../../../../assets/icon/setting.svg"
import Search from "../../../../../assets/icon/search.svg"
import { useState } from 'react'
import {getAdmissionFetch} from "../../../../../redux/sliceAdmin/qabul/admission";
import {useDispatch, useSelector} from "react-redux";
import {Input,Button} from "../../../../generic"
import {sendSmsFetch} from "../../../../../redux/sliceAdmin/arizalar-qabul-sms";
import dataMoliya from "../../../../Mock/moliyaData";


export const SalariesPaid = () => {

    const dispatch = useDispatch()

  // pay wages
    const [opens, setOpens] = useState(false);
    const [confirmLoadings, setConfirmLoadings] = useState(false);
    const PayWages = () => {
        setOpens(true);
    };
    const handleOkk = () => {
        dispatch()
        setConfirmLoadings(true);
        setTimeout(() => {
            setOpens(false);
            setConfirmLoadings(false);
        }, 1000);
    };
    const HandleCancel = () => {
        setOpens(false);
    };

  // search
  const [ search, setSearch ] = useState(dataMoliya);

  const onSearch=({ target: { value } })=>{
    let res= dataMoliya.filter((val)=>val.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
    setSearch(res)
  }
    // setting
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const Settings = () => {
      setOpen(true);
    };
    const handleOk = () => {
      dispatch()
      
      setConfirmLoading(true);
      setTimeout(() => {
        setOpen(false);
        setConfirmLoading(false);
      }, 1000);
    };
    const handleCancel = () => {
      setOpen(false);
    };


  return (
    <Container>
      <Container.Top>
         <h1>Berilgan oyliklar</h1>
         <Button onclick={PayWages} width={"204px"} height={"48px"} size={"20px"} radius={"10px"}><Plyus/> &nbsp; Moash berish</Button>
      </Container.Top>

      <Container.Bottom>
          <Container.Filter>
              <Search className="search" />
              <Input onchange={onSearch} padding="0 97px 0 50px" width="542px" height="45px" size="20px" placeholder="search" />
              <Container.Button>
               <Button onclick={Settings} shadow="0 0 0 0" width={"100%"} height={"30px"} radius="0" size={"16px"} ><div><Setting /> <p>Filter</p> </div></Button>
              </Container.Button>
              <Container.Date className="nocopy">
               <Input value="2023-01-01" shadowOff="0 0 0 0" width="100%" height="100%" type="date" size="14px" bc="none" />
              </Container.Date>
              <Container.Date className="nocopy">
               <Input value="2023-01-01" shadowOff="0 0 0 0" width="100%" height="100%" type="date" size="14px" bc="none" />
              </Container.Date>
              <Button width={"92px"} height="36px" radius={"10px"} size={"13px"} >Tartiblash</Button>
          </Container.Filter>
          <Conpul className='nocopy'>
               <Dollar/>
               <div>
                  <p>Berilgan oyliklar : {"222 222 222"}</p>
               </div>
          </Conpul>

          <Container.Footer>
             <div className={"wrap"}>
              <Container.Input>
                  <input type="checkbox" />
              </Container.Input>
              <Container.Info>
                  <h1 className='id nocopy'>№</h1>
                  <h1 className='fio nocopy'>FIO</h1>
                  <h1 className='tel nocopy'>Telefon raqam</h1>
                  <h1 className='kun nocopy'>Id raqam</h1>
                  <h1 className='kun nocopy'>Maoshi</h1>
                  <h1 className='kun nocopy'>Maoshi turi</h1>
                  <h1 className='kun nocopy'>Berildi</h1>
                  <h1 className='kun nocopy'>Sana</h1>
                  <h1 className='kun nocopy'>Tafsif</h1>
              </Container.Info>
             </div>
          </Container.Footer>
          <Container.Scrool>
              <Container.Map className="nocopy">

                  {search?.map((value) => {
                      return (
                          <Container.Nav key={value.id}>
                              <Container.Input>
                                  <input type="checkbox"  />
                              </Container.Input>
                              <Container.Info>
                                  <h1 className='id'>{value.id}</h1>
                                  <h1 className='fio'>{value.firstname + value.name}</h1>
                                  <h1 className='tel'>{value.number}</h1>
                                  <h1 className='kun'>{value.idNumber}</h1>
                                  <h1 className='kun'>{value.maosh}</h1>
                                  <h1 className='kun'>{value.turi}</h1>
                                  <h1 className='kun'>{value.berilgan}</h1>
                                  <h1 className='kun'>{value.sana}</h1>
                                  <h1 className='kun'>{value.tavsif}</h1>
                              </Container.Info>
                          </Container.Nav>
                      )
                  })}
              </Container.Map>
          </Container.Scrool>

      </Container.Bottom>
        <SendModal open={open} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
            <div className={'div'}>
                <Agent>
                    <select name="pets" id="pet-select">
                        <option value="">Boshqaruv</option>
                    </select>
                    <Down className={'Down'} />
                </Agent>
            </div>
        </SendModal>
        <FilterModal open={opens} onOk={handleOkk} confirmLoading={confirmLoadings} onCancel={HandleCancel}>

        </FilterModal>
    </Container>

  )
}

export default SalariesPaid