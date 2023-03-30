
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../generic/Button/index.jsx'
import Input from '../../../generic/Input/index.jsx'
import Container, { Antmodal, AntSelect, ConTable } from './style.js'
import { authorCreatePost } from '../../../../redux/sliceAdmin/libary/author/create.js'
import { authorGetFetch } from '../../../../redux/sliceAdmin/libary/author/getAuthor.js'
import { startMessage } from '../../../../redux/slices/message/index.js'
import { reset } from '../../../../redux/sliceAdmin/talimyunlishAdd/index.js'
import { authorDeletePost } from '../../../../redux/sliceAdmin/libary/author/deleteId.js'
import Edit from "../../../../assets/icons/edit.svg"
import Trash from "../../../../assets/icons/trash.svg"
import Plus from "../../../../assets/icons/plus.svg"
import { HiOutlineRefresh } from 'react-icons/hi'
import { getAbuturentTypeFetch } from '../../../../redux/sliceAdmin/talimyunlishAdd/getStudyTypesAdmin/index.jsx'
import { getAllexamsubjectFetch } from '../../../../redux/sliceAdmin/exam/getAllexamsubject/index.js'
import { groupCreatePost } from '../../../../redux/sliceAdmin/group/create.js'



export const GroupComponet = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState({ name: "", faculId: '', opacity: '' });
  const [dataList, setDataList] = useState([]);
  const [facul, setFacul] = useState([])
  const [open, setOpen] = useState(false)

  const authorDelete = useSelector((store) => store.authorDelete);
  const authorGet = useSelector((store) => store.authorGet);
  const groupCreate = useSelector((store) => store.groupCreate);
  const getStudyTypesAbuturent = useSelector((store) => store.getStudyTypesAbuturent)


  useEffect(() => {
    if (groupCreate?.status === "success")
      dispatch(startMessage({ time: 3, message: "Muvofiyaqatli Yakulandi", type: "success", }),
        setName({ ...name, name: "", faculId: "", opacity: '' }));
    else if (groupCreate?.status === "notFound")
      dispatch(startMessage({ time: 3, message: groupCreate?.message.split('_').join(' ') }));
    setTimeout(() => {
      dispatch(reset());
    }, 500);
  }, [groupCreate]);


  useEffect(() => {
    if (authorDelete.status === 'success' || groupCreate?.status === 'success')
      dispatch(authorGetFetch())
  }, [authorDelete, groupCreate])

  const addFacultet = () => dispatch(groupCreatePost({
    name: name.name,
    facultyId: name.faculId,
    opacity: name.opacity
  }))

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
  useEffect(() => {
    dispatch(getAbuturentTypeFetch({ type: 'BACHELOR' }))
  }, [getAbuturentTypeFetch])


  useEffect(() => {
    if (getStudyTypesAbuturent?.status === 'success') {
      setFacul(getStudyTypesAbuturent?.data)
    }
  }, [getStudyTypesAbuturent])
  console.log(getStudyTypesAbuturent, 'name');
  return (
    <Container>
      <Container.Bottom>
        <h1>Muallif</h1>

        <Antmodal open={open} onOk={addFacultet} onCancel={handleCancel}>
          <Container.Add>
            <Input onchange={(e) => setName(e.target.value)} value={name?.name} mwidth={"340px"} mheight={"40px"} width={"440px"} height={"45px"} padding={"0px 10px"} size={"20px"} radius={"5px"} placeholder={`Name`} />
            <Input onchange={(e) => setName(e.target.value)} value={name?.opacity} mwidth={"340px"} mheight={"40px"} width={"440px"} height={"45px"} padding={"0px 10px"} size={"20px"} radius={"5px"} placeholder={`opacity`} />
            <AntSelect
              style={{ width: '440px', }}
              placeholder='facultyId *'
              optionFilterProp="children"
              options={getStudyTypesAbuturent?.status === 'success' && facul?.map((value) => ({
                value: value.id,
                label: value.name,
              })) || []}
              onChange={(e) => setName({ ...name, faculId: e })}
            />
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



export default GroupComponet;
