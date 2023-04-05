
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../generic/Button/index.jsx'
import Input from '../../../generic/Input/index.jsx'
import Container, { Antmodal, AntSelect, ConTable, ContainerDel } from './style.js'
import { authorGetFetch } from '../../../../redux/sliceAdmin/libary/author/getAuthor.js'
import { startMessage } from '../../../../redux/slices/message/index.js'
import Edit from "../../../../assets/icons/edit.svg"
import Trash from "../../../../assets/icons/trash.svg"
import { HiOutlineRefresh } from 'react-icons/hi'
import { getAbuturentTypeFetch } from '../../../../redux/sliceAdmin/talimyunlishAdd/getStudyTypesAdmin/index.jsx'
import { groupCreatePost, resetgroupCreate } from '../../../../redux/sliceAdmin/group/create.js'
import { groupGetFetch } from '../../../../redux/sliceAdmin/group/getbook.js'
import { groupDeleteIdDel } from '../../../../redux/sliceAdmin/group/deleteId.js'



export const GroupMasterComponet = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState({ name: "", faculId: '', opacity: '' });
  const [dataList, setDataList] = useState([]);
  const [facul, setFacul] = useState([])
  const [open, setOpen] = useState(false)
  const [modal, setModal] = useState(false)
  const groupDeleteId = useSelector((store) => store.groupDeleteId);
  const groupGet = useSelector((store) => store.groupGet);
  const groupCreate = useSelector((store) => store.groupCreate);
  const getStudyTypesAbuturent = useSelector((store) => store.getStudyTypesAbuturent)


  useEffect(() => {
    if (groupCreate?.status === "success" || groupDeleteId.status === 'success')
      dispatch(startMessage({ time: 3, message: "Muvofiyaqatli Yakulandi", type: "success", }),
        setName({ ...name, name: "", faculId: "", opacity: '' }));
    else if (groupCreate?.status === "notFound" || groupDeleteId.status === 'success')
      dispatch(startMessage({ time: 3, message: groupCreate?.message.split('_').join(' ') }));
    setTimeout(() => {
      dispatch(resetgroupCreate());
    }, 500);
  }, [groupCreate, groupDeleteId]);


  useEffect(() => {
    if (groupDeleteId.status === 'success' || groupCreate?.status === 'success')
      dispatch(groupGetFetch())
  }, [groupDeleteId, groupCreate])

  const addFacultet = () => dispatch(groupCreatePost({
    name: name.name,
    facultyId: name.faculId,
    opacity: name.opacity
  }))


  const findDeleteID = (deleteId) => {
    dispatch(groupDeleteIdDel({ id: deleteId }));
  };



  const findEditID = (id) => {
    setDataList(dataList?.map((value) => ({
      id: value.id,
      name: value.name,
      opacity: value.opacity,
      faculId: value.faculId,
      status: id === value.id ? (!value.id || true) : false
    })))
  }

  const editPush = (id, i) => dispatch(
    groupCreatePost({
      id: id,
      name: dataList[i].name,
      opacity: dataList[i].opacity,
      facultyId: name.faculId,
    }));


  const modalAdd = () => {
    setOpen(true)
  }
  const handleCancel = () => {
    setOpen(false);
  };
  const modalDelete = () => {
    setModal(true)
  }
  const modalDeletCancel = () => {
    setModal(false)
  }

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

  useEffect(() => {
    dispatch(groupGetFetch())
  }, [groupGetFetch])


  useEffect(() => {
    if (groupGet?.status === "success") setDataList(groupGet?.data);
  }, [groupGet]);

  return (
    <Container>
      
      <Container.Bottom>
        <h1>Gruhlar</h1>
        <Antmodal open={open} onOk={addFacultet} onCancel={handleCancel}>
          <Container.Add>
            <h1>Gruh Abuturent Qo`shish</h1>
            <Input onchange={(e) => setName({ ...name, name: e.target.value })} value={name?.name} mwidth={"340px"} mheight={"40px"} width={"440px"} height={"45px"} padding={"0px 10px"} size={"20px"} radius={"5px"} placeholder={`Name`} />
            <Input onchange={(e) => setName({ ...name, opacity: e.target.value })} value={name?.opacity} mwidth={"340px"} mheight={"40px"} width={"440px"} height={"45px"} padding={"0px 10px"} size={"20px"} radius={"5px"} placeholder={`opacity`} />
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
                  <div className="colum nocopy">Gruh</div>
                  <div className="colum nocopy">Opacity</div>
                  <div className="colum nocopy">Faculty</div>
                  <div className="colum nocopy">StudyType</div>
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
                            opacity: val.opacity,
                            faculId: val.faculId,
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
                          <input value={value.opacity} onChange={(e) => setDataList(dataList.map((val) => ({
                            id: val.id,
                            name: val.name,
                            opacity: value.id === val.id ? e.target.value : val.opacity,
                            faculId: val.faculId,
                            status: val.status
                          })))} />
                          :
                          <>
                            {value.opacity}
                          </>
                      }
                    </div>

                    <div className='colum'>
                      {
                        value?.status ?
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
                          :
                          <>
                            {value.faculty?.name}
                          </>
                      }
                    </div>

                    <div className='colum'>
                      {value?.faculty?.studyType}
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
                        <Button onclick={() => findEditID(value.id)} width={"70px"} height={"40px"} size={"12px"} radius={"5px"} border={"1px solid red"}> <Edit /> </Button>
                      )}
                      {
                        modal ? <ContainerDel onClick={modalDeletCancel} >
                          <div>
                            <h3>Malumot uchirishlikka rozimisz</h3>
                            <div>
                              <Button onClick={modalDeletCancel} width={"70px"} height={"40px"} size={"12px"} radius={"5px"} border={"1px solid red"}>y'oq</Button>
                              <Button onclick={() => findDeleteID(value.id)} width={"70px"} height={"40px"} size={"12px"} radius={"5px"} border={"1px solid red"}>xa</Button>
                            </div>
                          </div>
                        </ContainerDel>
                          :
                          <Button onclick={modalDelete} width={"70px"} height={"40px"} size={"13px"} radius={"5px"} border={"1px solid red"}> <Trash /></Button>

                      }
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



export default GroupMasterComponet;
