
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../../generic/Button/index.jsx'
import Input from '../../../../generic/Input/index.jsx'
import Container, { Antmodal, ConTable } from './style.js'
import { startMessage } from '../../../../../redux/slices/message/index.js'
import { reset } from '../../../../../redux/sliceAdmin/talimyunlishAdd/index.js'
import Edit from "../../../../../assets/icons/edit.svg"
import Trash from "../../../../../assets/icons/trash.svg"
import Plus from "../../../../../assets/icons/plus.svg"
import { Modal } from 'antd'
import { bookTypesGetFetch } from '../../../../../redux/sliceAdmin/libary/booksTypes/getbooksType.js'
import { bookTypesCreatePost } from '../../../../../redux/sliceAdmin/libary/booksTypes/create.js'
import { bookTypesDeleteIdDel } from '../../../../../redux/sliceAdmin/libary/booksTypes/deleteId.js'




export const BookTypesComponet = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [dataList, setDataList] = useState([]);
  const [open, setOpen] = useState(false)

  const bookTypesDeleteId = useSelector((store) => store.bookTypesDeleteId);
  const bookTypesGet = useSelector((store) => store.bookTypesGet);
  const bookTypesCreate = useSelector((store) => store.bookTypesCreate);



  useEffect(() => {
    if (bookTypesCreate.status === "success")
      dispatch(startMessage({ time: 3, message: "Muvofiyaqatli Yakulandi", type: "success", }),
        setName(''));
    else if (bookTypesCreate.status === "notFound")
      dispatch(startMessage({ time: 3, message: 'hatolik bor' }));
    setTimeout(() => {
      dispatch(reset());
    }, 500);
  }, [bookTypesCreate]);


  useEffect(() => {
    if (bookTypesDeleteId.status === 'success' || bookTypesCreate.status === 'success')
      dispatch(bookTypesGetFetch())
  }, [bookTypesDeleteId, bookTypesCreate])

  const addFacultet = () =>
    dispatch(bookTypesCreatePost({
      id: 0,
      name: name,
    }));

  const findDeleteID = (deleteId) => {
    dispatch(bookTypesDeleteIdDel({ id: deleteId }));
  };



  const findEditID = (id) => {
    setDataList(dataList.map((value) => ({
      id: value.id,
      name: value.name,
      status: id === value.id ? (!value.id || true) : false
    })))
  }

  const editPush = (id, i) => dispatch(
    bookTypesCreatePost({
      id: id,
      name: dataList[i].name,
    }));

  useEffect(() => {
    dispatch(bookTypesGetFetch())
  }, [bookTypesGetFetch])


  useEffect(() => {
    if (bookTypesGet.status === "success") setDataList(bookTypesGet.data);
  }, [bookTypesGet]);

  const modalAdd = () => {
    setOpen(true)
  }
  const handleCancel = () => {
    setOpen(false);
  };
  return (
      <Container>
        <Container.Bottom>
          <h1>Tillar</h1>
          <Antmodal open={open} onOk={addFacultet} onCancel={handleCancel}>
            <Container.Add>
              <div>
                <h1>Yunalish yaratish</h1>
              </div>
              <br />
              <div>
                <p>Yunalish nomi</p>
              </div> <br />
              <div>
                <Input onchange={(e) => setName(e.target.value )} value={name} mwidth={"340px"} mheight={"40px"} width={"440px"} height={"45px"} padding={"0px 10px"} size={"20px"} radius={"5px"} placeholder={`Nomi`} />
                <Button onclick={() => addFacultet()} mradius={" 5px"} msize={'15px'} mwidth={"80px"} mheight={"40px"} width={"100px"} height={"45px"} size={"20px"} padding={"0px 10px"} radius={" 5px"}>  Qo'shish  </Button>
              </div>
            </Container.Add>

          </Antmodal>
          <div onClick={modalAdd}>
            <Plus /> &nbsp;   Qo’shish
          </div>
        </Container.Bottom>
        <Container.Table>
          <Container.Scrool style={{ overflowY: "scroll" }}>
            <Container.Top>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <Container.Nav>
                  <div className="row">
                    <div>№</div>
                    <div className="colum nocopy">Nomi</div>
                    <div className="colum nocopy">Vaqt</div>

                    <div className="colum">Action</div>
                  </div>
                </Container.Nav>
              </div>
            </Container.Top>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {dataList?.map((value, index) => {
                return (
                    <ConTable key={value.id}>
                      <div className="row">
                        <div>{index + 1}</div>
                        <div className='colum'>
                          {
                            value?.status ?
                                <input value={value.name} onChange={(e) => setDataList(dataList.map((val) => ({
                                  id: val.id,
                                  name: value.id === val.id ? e.target.value : val.name,
                                  status: val.status
                                })))} />
                                :
                                <>
                                  {value.name}
                                </>
                          }
                        </div>
                        <div className='colum'>
                          {
                            value?.status ?
                                <input value={value.date} onChange={(e) => setDataList(dataList.map((val) => ({
                                  id: val.id,
                                  date: value.id === val.id ? e.target.value : val.date,
                                  name: value.name,
                                  status: val.status
                                })))} />
                                :
                                <>
                                  {value.date || 'date'}
                                </>
                          }
                        </div>
                        <div className="action">
                          {value?.status ? (
                              <Button
                                  onclick={() => editPush(value.id, index)}
                                  width={"70px"}
                                  height={"40px"}
                                  size={"18px"}
                                  radius={"5px"}
                                  border={"1px solid red"}
                              >
                                OK
                              </Button>
                          ) : (
                              <Button onclick={() => findEditID(value.id)} width={"70px"} height={"40px"} size={"12px"} radius={"5px"} border={"1px solid red"}  > <Edit /> </Button>
                          )}

                          <Button onclick={() => findDeleteID(value.id)} width={"70px"} height={"40px"} size={"13px"} radius={"5px"} border={"1px solid red"}> <Trash /></Button>
                        </div>
                      </div>
                    </ConTable>
                );
              })}
            </div>
          </Container.Scrool>
        </Container.Table>
      </Container>
  );
};



export default BookTypesComponet;
