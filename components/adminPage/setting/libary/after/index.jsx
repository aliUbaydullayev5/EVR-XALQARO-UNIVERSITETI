
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../../generic/Button/index.jsx'
import Input from '../../../../generic/Input/index.jsx'
import Container, { Antmodal, ConTable } from './style.js'
import { authorCreatePost, resetauthorCreate } from '../../../../../redux/sliceAdmin/libary/author/create.js'
import { authorGetFetch } from '../../../../../redux/sliceAdmin/libary/author/getAuthor.js'
import { startMessage } from '../../../../../redux/slices/message/index.js'
import { authorDeletePost } from '../../../../../redux/sliceAdmin/libary/author/deleteId.js'
import Edit from "../../../../../assets/icons/edit.svg"
import Trash from "../../../../../assets/icons/trash.svg"
import { HiOutlineRefresh } from 'react-icons/hi'



export const AfterComponet = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState({ id: 0, name: "", });
  const [dataList, setDataList] = useState([]);

  const [open, setOpen] = useState(false)
  const authorDelete = useSelector((store) => store.authorDelete);
  const authorGet = useSelector((store) => store.authorGet);
  const authorCreate = useSelector((store) => store.authorCreate);



  useEffect(() => {
    if (authorCreate.status === 'success') dispatch(startMessage({ time: 3, message: 'Muvofiyaqatli Yakulandi', type: 'success' })), setName({ ...name, name: " " });
    else if (authorCreate.status === "notFound")
      dispatch(startMessage({ time: 3, message: authorCreate?.message.split('_').join(' ') }))
    setTimeout(() => {
      dispatch(resetauthorCreate());
    }, 500);
  }, [authorCreate]);


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
  const modalAdd = () => {
    setOpen(true)
  }
  const handleCancel = () => {
    setOpen(false);
  };

  const [refreshButtonLogin, setRefreshButtonLogin] = useState(false)
  const refreshDataFunc = () => {
    dispatch(authorGetFetch())
    setRefreshButtonLogin(true)
    setTimeout(() => {
      setRefreshButtonLogin(false)
    }, 1000)
  }


  return (
    <Container>
      <Container.Bottom>
        <Container.TextAdd>
          <h1>Mualliflar</h1>
        </Container.TextAdd>
        <Antmodal open={open} onOk={addFacultet} onCancel={handleCancel}>
          <Container.Add>
            <div>
              <h1>Kitob Muallifi</h1>
            </div>
            <br />
            <div>
              <p>Kitob Muallifi Yratish</p>
            </div> <br />
            <div>
              <Input onchange={(e) => setName({ ...name, name: e.target.value })} mwidth={"340px"} mheight={"40px"} width={"440px"} height={"45px"} padding={"0px 10px"} size={"20px"} radius={"5px"} placeholder={`Nomi`} />
              <Button onclick={() => addFacultet()} mradius={" 5px"} msize={'15px'} mwidth={"80px"} mheight={"40px"} width={"100px"} height={"45px"} size={"20px"} padding={"0px 10px"} radius={" 5px"}>  Qo'shish  </Button>
            </div>
          </Container.Add>
        </Antmodal>

        <Container.BtnRef>
          <div>
            <Button
              mwidth={'204px'}
              width={'204px'}
              mheight={'48px'}
              height={'48px'}
              msize={'20px'}
              size={'20px'}
              mweight={'400'}
              weight={'400'}
              radius={'10px'}
              mradius={'10px'}
              shadow={'0px 3.09677px 11.6129px rgba(0, 0, 0, 0.54)'}
              bc={'#221F51'}
              onclick={modalAdd}
            >  Q'oshish
            </Button>
          </div>
          <Container.RefreshArea loading={refreshButtonLogin} onClick={() => refreshDataFunc()}>
            <HiOutlineRefresh color={'#fff'} size={'22px'} className={'refreshIcon'} />
          </Container.RefreshArea>
        </Container.BtnRef>
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



export default AfterComponet;
