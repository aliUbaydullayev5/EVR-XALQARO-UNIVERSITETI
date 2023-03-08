
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../../generic/Button/index.jsx'
import Input from '../../../../generic/Input/index.jsx'
import Container, { Antmodal, ConTable } from './style.js'
import { authorCreatePost } from '../../../../../redux/sliceAdmin/libary/author/create.js'
import { authorGetFetch } from '../../../../../redux/sliceAdmin/libary/author/getAuthor.js'
import { startMessage } from '../../../../../redux/slices/message/index.js'
import { reset } from '../../../../../redux/sliceAdmin/talimyunlishAdd/index.js'
import { authorDeletePost } from '../../../../../redux/sliceAdmin/libary/author/deleteId.js'
import Edit from "../../../../../assets/icons/edit.svg"
import Trash from "../../../../../assets/icons/trash.svg"
import Plus from "../../../../../assets/icons/plus.svg"
import { Modal } from 'antd'




export const GaleryaComponet = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState({ id: 0, name: "", });
  const [dataList, setDataList] = useState([]);

  const [open, setOpen] = useState(false)
  const authorDelete = useSelector((store) => store.authorDelete);
  const authorGet = useSelector((store) => store.authorGet);
  const authorCreate = useSelector((store) => store.authorCreate);



  useEffect(() => {
    if (authorCreate.status === "success")
      dispatch(startMessage({ time: 3, message: "Muvofiyaqatli Yakulandi", type: "success", }),
        setName({ ...name, nameUz: "", ...name, nameRu: "", }));
    else if (authorCreate.status === "notFound")
      dispatch(startMessage({ time: 3, message: 'hatolik bor' }));
    setTimeout(() => {
      dispatch(reset());
    }, 500);
  }, [authorGet]);


  useEffect(() => {
    if (authorDelete.status === 'success' || authorCreate.status === 'success')
      dispatch(authorGetFetch())
  }, [authorDelete, authorCreate])

  const addFacultet = () =>
    dispatch(authorCreatePost({
      id: 0,
      name: name.name,
    }));

  const findDeleteID = (deleteId) => {
    dispatch(authorDeletePost({ id: deleteId }));
  };



  const findEditID = (id) => {
    setDataList(dataList.map((value) => ({
      id: value.id,
      name: value.name,
      status: id === value.id ? (!value.id || true) : false
    })))
  }

  const editPush = (id, i) => dispatch(
    authorCreatePost({
      id: id,
      name: dataList[i].name,
    }));

  useEffect(() => {
    dispatch(authorGetFetch())
  }, [authorGetFetch])


  useEffect(() => {
    if (authorGet.status === "success") setDataList(authorGet.data);
  }, [authorGet]);
  console.log(dataList, 'dataList');

  const modalAdd = () => {
    setOpen(true)
  }
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <Container>
      <Container.Bottom>
        <h1>Mualliflar</h1>
        <Antmodal open={open} onOk={addFacultet} onCancel={handleCancel}>
          <Container.Add>
            <div>
              <h1>Kutubxona yaratish</h1>
            </div>
            <br />
            <div>
              <p>Kitob nomi</p>
            </div> <br />
            <div>
              <Input onchange={(e) => setName({ ...name, name: e.target.value })} value={name.name} mwidth={"340px"} mheight={"40px"} width={"440px"} height={"45px"} padding={"0px 10px"} size={"20px"} radius={"5px"} placeholder={`Nomi`} />
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
                        <Button onClick={() => findEditID(value.id)} width={"70px"} height={"40px"} size={"12px"} radius={"5px"} border={"1px solid red"}  > <Edit /> </Button>
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



export default GaleryaComponet;
