
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
import { bookLaunguageCreatePost } from '../../../../../redux/sliceAdmin/libary/bookLaunguage/create.js'
import { bookLaunguageGetFetch } from '../../../../../redux/sliceAdmin/libary/bookLaunguage/getbooksLaunguage.js'
import { bookLaunguageDeleteIdDel } from '../../../../../redux/sliceAdmin/libary/bookLaunguage/deleteId.js'
import { HiOutlineRefresh } from 'react-icons/hi'

export const BookLaunguage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [dataList, setDataList] = useState([]);
  const [open, setOpen] = useState(false)
  const bookLaunguageDeleteId = useSelector((store) => store.bookLaunguageDeleteId);
  const bookLaunguageGet = useSelector((store) => store.bookLaunguageGet);
  const bookLaunguageCreate = useSelector((store) => store.bookLaunguageCreate);



  useEffect(() => {
    if (bookLaunguageCreate.status === "success")
      dispatch(startMessage({ time: 3, message: "Muvofiyaqatli Yakulandi", type: "success", }),
        setName(''));
    else if (bookLaunguageCreate.status === "notFound")
      dispatch(startMessage({ time: 3, message: 'hatolik bor' }));
    setTimeout(() => {
      dispatch(reset());
    }, 500);
  }, [bookLaunguageGet]);

  useEffect(() => {
    if (bookLaunguageDeleteId.status === 'success' || bookLaunguageCreate.status === 'success')
      dispatch(bookLaunguageGetFetch())
  }, [bookLaunguageDeleteId, bookLaunguageCreate])

  const addFacultet = () =>
    dispatch(bookLaunguageCreatePost({
      id: 0,
      name: name,
    }));

  const findDeleteID = (deleteId) => {
    dispatch(bookLaunguageDeleteIdDel({ id: deleteId }));
  };

  const findEditID = (id) => {
    setDataList(dataList.map((value) => ({
      id: value.id,
      name: value.name,
      status: id === value.id ? (!value.id || true) : false
    })))
  }

  const editPush = (id, i) => dispatch(
    bookLaunguageCreatePost({
      id: id,
      name: dataList[i].name,
    }));

  useEffect(() => {
    dispatch(bookLaunguageGetFetch())
  }, [bookLaunguageGetFetch])


  useEffect(() => {
    if (bookLaunguageGet.status === "success") setDataList(bookLaunguageGet.data);
  }, [bookLaunguageGet]);


  const modalAdd = () => setOpen(true)
  const handleCancel = () => setOpen(false);

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



export default BookLaunguage;
