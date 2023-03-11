import React, { useEffect,useState } from 'react'
import Container, { DeleteModal,Conpul,FilterModal} from './style.js'
import Edit from "../../../../../assets/icons/edit.svg"
import Delete from "../../../../../assets/icons/delete.svg"
import Dollar from "../../../../../assets/icons/admin/dollar.svg"
import Search from "../../../../../assets/icon/search.svg"
import {useDispatch, useSelector} from "react-redux";
import {Input,Button} from "../../../../generic"
import dataMoliya from "../../../../Mock/moliyaData";
import {deleteAbuturentFetch} from "../../../../../redux/sliceAdmin/talimyunlishAdd/deleteAbuturent";
import {Modal} from "antd";

export const Expenses = () => {

  const dispatch = useDispatch()

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
         <h1>Berilgan oyliklar</h1>
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
                                  <Button>soiuyf</Button>
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
          <DeleteModal open={open} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
              <h1 >O’chirish</h1>
              <p>O’chirsangiz buni qayta tiklash iloji yo’q.</p>
          </DeleteModal>
      </Container.Bottom>
    </Container>

  )
}

export default Expenses