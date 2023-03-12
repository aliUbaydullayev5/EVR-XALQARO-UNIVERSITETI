import React, { useEffect,useState } from 'react'
import Container, { DeleteModal,Conpul,FilterModal,AddModal} from './style.js'
import Edit from "../../../../../assets/icons/edit.svg"
import Delete from "../../../../../assets/icons/delete.svg"
import Dollar from "../../../../../assets/icons/admin/dollar.svg"
import Search from "../../../../../assets/icon/search.svg"
import {useDispatch} from "react-redux";
import {Input,Button} from "../../../../generic"
import dataMoliya from "../../../../Mock/moliyaData";
import {deleteAbuturentFetch} from "../../../../../redux/sliceAdmin/talimyunlishAdd/deleteAbuturent";
import Plyus from "../../../../../assets/icons/plus.svg";

export const Expenses = () => {

  const dispatch = useDispatch()

    // add Modal
    const [openAdd, setOpenAdd] = useState(false);
    const AdModal = () => {
        setOpenAdd(true);
    };

    // classification
    const [opens, setOpens] = useState(false);

    // function classification
    const Classification = () => {
        setOpens(true);
    };

    // delete
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [onDeleteId, setOnDeleteId] = useState("");

    // function delete
    const DeleteID = (deleteId) => {
        setOpen(true);
        setOnDeleteId(deleteId);

    };

    const handleOk = () => {
        dispatch(deleteAbuturentFetch({ id: onDeleteId }));
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 1000);
    };
    const handleCancel = () => {
        setOpen(false);
    };

  // search
  const [ search, setSearch ] = useState(dataMoliya);

  const onSearch=({ target: { value } })=>{
    let res= dataMoliya.filter((val)=>val.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
    setSearch(res)
  }


  return (
    <Container>
      <Container.Top>
         <h1>Xarajatlar</h1>
         <Button onclick={AdModal} width={"180px"} height={"45px"} size={"20px"} radius={"10px"}><Plyus/> &nbsp;&nbsp; Qo’shish</Button>
      </Container.Top>

      <Container.Bottom>
          <Container.Filter>
              <Search className="search" />
              <Input onchange={onSearch} padding="0 15px 0 50px" width="542px" height="45px" size="20px" placeholder="search" />

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
                  <p>Jami : {"222 222 222"}</p>
               </div>
          </Conpul>
          <Container.Footer>
             <div className={"wrap"}>
              <Container.Input>
                  <input type="checkbox" />
              </Container.Input>
              <Container.Info>
                  <h1 className='id nocopy'>№</h1>
                  <h1 className='fio nocopy'>Nomi</h1>
                  <h1 className='tel nocopy'>To’lov turi</h1>
                  <h1 className='kun nocopy'>Xarajat</h1>
                  <h1 className='kun nocopy'>Tasnif</h1>
                  <h1 className='kun nocopy'>Fayllar</h1>
                  <h1 className='kun nocopy'>Sana</h1>
                  <h1 className='kun nocopy'>Tahrirlash</h1>
                  <h1 className='kun nocopy'>O’chirish</h1>
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
                                  <Button onclick={Classification}>{"salom "}</Button>
                                  <h1 className='kun'>{value.turi}</h1>
                                  <h1 className='kun'>{value.berilgan}</h1>
                                  <Button><Edit /></Button>
                                  <Button onclick={() => DeleteID(value.id)}><Delete /></Button>
                              </Container.Info>
                          </Container.Nav>
                      )
                  })}
              </Container.Map>
          </Container.Scrool>

          {/* Add Modal*/}
          <AddModal open={openAdd}>
              <Container.FilterModal>
                  <h1>Maosh berish</h1>
                  <Container.FIlterInput>
                      <p>ID raqami yoki FIO</p>
                      <Search className="search" />
                      <Input padding={"0 10px 0 45px"} width="100%" height="40px" size="14px" placeholder="ID raqami yoki FIO" />
                  </Container.FIlterInput>
                  <Container.FIlterInput pro>
                      <div className={"div"}>
                          <p>Maoshi</p>
                          <Input padding={"0 10px 0 20px"} width="100%" height="40px" size="14px" placeholder="Maoshi" />
                      </div>
                      <div className={"div"}>
                          <p>Tafsif</p>
                          <Input padding={"0 10px 0 20px"} width="100%" height="40px" size="14px" placeholder="Tafsif" />
                      </div>

                  </Container.FIlterInput>
                  <div className={'but'}>
                      <Button width={"157px"} height={"48px"}>Saqlash</Button>
                  </div>
              </Container.FilterModal>
          </AddModal>

          {/* Tasnif Modal*/}
          <FilterModal open={opens}>
              <h1 className={"nocopy"} >Tasnif</h1>
              <p>Hurmatli talaba, agar naqd pul  ko'rinishida to'lovni amalga oshirmoqchi bo'lsangiz institutimizga borgan holda to'lovni amalga oshirishingiz kerak bo'ladi. Shunda xodimlarimiz pul qabul qilinganligini tasdiqlashadi. Agarda bu sizga noqulaylik tug'dirsa ortga qaytib ilovalar orqali to'lashingiz mumkin.Hurmatli talaba, agar naqd pul  ko'rinishida to'lovni amalga oshirmoqchi bo'lsangiz institutimizga borgan holda to'lovni amalga oshirishingiz kerak bo'ladi. Shunda xodimlarimiz pul qabul qilinganligini tasdiqlashadi. Agarda bu sizga noqulaylik tug'dirsa ortga qaytib ilovalar orqali to'lashingiz mumkin.</p>
          </FilterModal>
          {/*Delete Modal*/}
          <DeleteModal open={open} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
              <h1 >O’chirish</h1>
              <p>O’chirsangiz buni qayta tiklash iloji yo’q.</p>
          </DeleteModal>
      </Container.Bottom>
    </Container>

  )
}

export default Expenses