import React, { useEffect, useState } from 'react'
import Container, { ConExel, Conpul, ConTable, ConW, Header } from './style.js'
import { useRouter } from 'next/router.js'
import Search from "../../../assets/icon/search.svg"
import Woomen from "../../../assets/icons/admin/peoples.svg"
import Exel from "../../../assets/icons/admin/exelSetting.svg"
import Sms from "../../../assets/icons/admin/smsSet.svg"
import Dollar from "../../../assets/icons/admin/dollar.svg"
import Setting from "../../../assets/icon/setting.svg"
import {Button,Input} from "../../generic"
import Select from "../../../assets/icons/admin/selectdown.svg"
import Down from "../../../assets/icons/admin/selectdown.svg"


import dataQabul from '../../Mock/qabulData/qabulData.js'
import { FilterModal, SelectSms } from '../qabuldanotgan/style.js'



export const ImhonotganlarComp = () => {
  const query = useRouter()

  const [dataImt, setDataImt]=useState(dataQabul)
  const [selectAllState, setSelectAllState] = useState(false)

  // search
  const [ search, setSearch ] = useState(dataImt);

  const onSearch=({ target: { value } })=>{
    let res= dataImt.filter((val)=>val.ismi.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
    setSearch(res)
  }

   // setting
   const [open, setOpen] = useState(false);
   const [confirmLoading, setConfirmLoading] = useState(false);

   const Settings = () => {
     setOpen(true);
   };
   const handleOk = () => {
     dispatch(sendSmsFetch())
     
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
    setDataImt(dataImt.map((value) => (
      {
        id: value.id,
        num: value.num,
        ismi: value.ismi,
        agent: value.agent,
        pasport: value.pasport,
        kurs: value.kurs,
        tili: value.tili,
        yonalishi: value.yonalishi,
        shakli: value.shakli,
        phone: value.phone,
        qoshimcharaqam: value.qoshimcharaqam,
        pasportnusxasi: value.pasportnusxasi,
        diplomnusxasi: value.diplomnusxasi,
        sana: value.sana,
        tahrirlash: value.tahrirlash,
        checked: selectAllState
      }
    )))
  }, [selectAllState])

  const selectOne = (id = false) => {
    setDataImt(dataImt.map((value) => (
      {
        id: value.id,
        num: value.num,
        ismi: value.ismi,
        agent: value.agent,
        pasport: value.pasport,
        kurs: value.kurs,
        tili: value.tili,
        yonalishi: value.yonalishi,
        shakli: value.shakli,
        phone: value.phone,
        qoshimcharaqam: value.qoshimcharaqam,
        pasportnusxasi: value.pasportnusxasi,
        diplomnusxasi: value.diplomnusxasi,
        sana: value.sana,
        tahrirlash: value.tahrirlash,
        checked: value.id === id ? !value.checked : value.checked
      }
    )))
  }

  return (
    <Container.Wrapper>
    <Container>
      <Header>
          <Search className="search"/>
          <Input onchange={onSearch} padding="0 128px 0 50px" width="711px" height="55px" size="20px" weight="500" placeholder="search" />
          <Container.Button>
           <Button  onclick={Settings} shadow="0 0 0 0" width={"90%"} height={"30px"} radius="0" size={"18px"} ><div><Setting /> <p>Filter</p> </div></Button>
          </Container.Button>
          <Container.Date className="nocopy"> 
            <Input value="2023-01-01" shadowOff="0 0 0 0" width="100%" height="100%" type="date" size="14px" bc="none" />
          </Container.Date>
          <Container.Date className="nocopy"> 
            <Input value="2023-01-01" shadowOff="0 0 0 0" width="100%" height="100%" type="date" size="14px" bc="none" />
          </Container.Date>
           {/* <ConDate>
          <input type="date" id="start" name="trip-start"
            value="2023-01-01"
            min="2023-01-01" max="9999-12-31" />
          <input type="date" id="start" name="trip-start"
            value="2023-01-01"
            min="2023-01-01" max="9999-12-31" />
        </ConDate> */}
          <Button width={"175px"} height="48px" radius={"10px"} size={"18px"} >Tartiblash</Button>
      </Header>
      <Container.Header>
          <ConW>
          <Woomen />
            <p>Imthondan o'tgan: {3007}</p>
          </ConW>
          <Conpul summa>
            <Dollar/>
            <div>
              <p>Shartnoma suma: {"200 000 000"}</p>
            </div>
          </Conpul>
          <Conpul>
            <Dollar/>
            <div>
              <p>To'lagan: {"200 000 000"}</p>
            </div>
          </Conpul>
          <Conpul>
            <Dollar/>
            <div>
              <p>Qarzdor: {"200 000 000"}</p>
            </div>
          </Conpul>
          <ConExel>
            <Exel />
            <p>Excelga chiqarish</p>
          </ConExel>
          <SelectSms>
            <Sms className={'Sms'} />
            <p> SMS yuborish</p>
          </SelectSms>
      </Container.Header>
    </Container>
    
    <div>
        <ConTable>
          <Container.Bottom>
            <Container.BottomInset>
              <Container.Nav>
                <input type="checkbox" onChange={() => setSelectAllState(!selectAllState)} />
                <Container.Box>
                  <div>№</div>
                  <div>ID</div>
                  <div>FIO</div>
                  <div>Kurs</div>
                  <div>Ta’lim tili</div>
                  <div>Ta’lim yo’nalishi</div>
                  <div>Ta’lim shakli</div>
                  <div>Qo’shilgan sanasi</div>
                  <div>Status</div>
                  <div>Imtihon natijasi</div>
                  <div>Kontrakt turi</div>
                  <div>Shartnoma summasi</div>
                  <div>To’lagan summa</div>
                  <div>Qolgan summa</div>
                  <div>Shartnoma kodi</div>
                  <div>Agent</div>
                  <div>Hujjat</div>
                  <div>Shartnoma.yuk</div>
                  <div>Ma’lumotnoma</div>
                  <div>Chaqiruv xati</div>
                  <div>Zapros</div>
                  <div>Telefon raqam 1</div>
                  <div>Telefon raqam 2</div>
                  <div>Tahrirlash </div>
                </Container.Box>
              </Container.Nav>
              {
                search?.map((value) => (
                  <Container.Section key={value.id}>
                    <input className='chcxboxInput' type="checkbox" onChange={() => selectOne(value.id)} checked={value.checked} />
                    <Container.Map>
                      <div>{value.num}</div>
                      <div>{value.id}</div>
                      <div>{value.ismi}</div>
                      <div>{value.kurs}</div>
                      <div>{value.tili}</div>
                      <div>{value.num}</div>
                      <div>{value.id}</div>
                      <div>{value.ismi}</div>
                      <div>{value.kurs}</div>
                      <div>{value.tili}</div>
                      <div>{value.num}</div>
                      <div>{value.id}</div>
                      <div>{value.ismi}</div>
                      <div>{value.kurs}</div>
                      <div>{value.tili}</div>
                      <div>{value.num}</div>
                      <div>{value.id}</div>
                      <div>{value.ismi}</div>
                      <div>{value.kurs}</div>
                      <div>{value.tili}</div>
                      <div>{value.num}</div>
                      <div>{value.id}</div>
                      <div>{value.ismi}</div>
                      <div>{value.kurs}</div>
                    </Container.Map>
                  </Container.Section>
                ))
              }
            </Container.BottomInset>
          </Container.Bottom>
        </ConTable>
    
    </div>

    <FilterModal imtihon open={open} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
      <Container.Option>
        <div>
          <Container.Select>
            <select style={{width:"161px"}} name="pets" id="pet-select">
              <option value="">Ma'lumotlar</option>
            </select>
            <Down className={'Down'} />
          </Container.Select>
          <Container.Select>
            <select style={{width:"191px"}} name="pets" id="pet-select" >
              <option value="">Ta'lim yo'nalishi</option>
            </select>
            <Down className={'Down'} />
          </Container.Select>
          <Container.Select>
            <select style={{width:"164px"}} name="pets" id="pet-select"  >
              <option value=''>Ta'lim shakli</option>
            </select>
            <Down className={'Down'} />
          </Container.Select>
          <Container.Select>
            <select style={{width:"165px"}} name="pets" id="pet-select">
              <option value="">Kontrakt turi</option>
            </select>
            <Down className={'Down'} />
          </Container.Select>

          <Container.Select>
            <select style={{width:"192px"}} name="pets" id="pet-select">
              <option value="">Uch tomonlama</option>
            </select>
            <Down className={'Down'} />
          </Container.Select>
          <Container.Select>
            <select style={{width:"187px"}} name="pets" id="pet-select">
              <option value="">Shartnoma yuk</option>
            </select>
            <Down className={'Down'} />
          </Container.Select>
        </div>

        <div>
          <Container.Select tt>
            <select name="pets" id="pet-select">
              <option value="">Ta'lim tili</option>
            </select>
            <Down className={'Down'} />
          </Container.Select>
          <Container.Select kurs>
            <select
                name="pets"
                id="pet-select"
                onChange={(e) => courseLevelHandler(e.target.value)}
            >
              <option value="">Kurs</option>
            </select>
            <Down className={'Down'} />
          </Container.Select>
          <Container.Select stat>
            <select name="pets" id="pet-select">
              <option value="">Status</option>
            </select>
            <Down className={'Down'} />
          </Container.Select>
       
          <Container.Select zap>
            <select
                name="pets"
                id="pet-select"
            >
              <option value=''>Zapros</option>
            </select>
            <Down className={'Down'} />
          </Container.Select>
          <Container.Select ag>
            <select name="pets" id="pet-select">
              <option value="">Agent</option>
            </select>
            <Down className={'Down'} />
          </Container.Select>

          <Container.Select huj>
            <select name="pets" id="pet-select">
              <option value="">Hujjat</option>
            </select>
            <Down className={'Down'} />
          </Container.Select>
          <Button width={"200px"} height="48px" size={"18px"} radius="10px" >Filtrni tartiblash</Button>
       </div>
        </Container.Option>
        </FilterModal>
    </Container.Wrapper>
  )
}
export default ImhonotganlarComp