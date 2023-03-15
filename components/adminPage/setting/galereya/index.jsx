import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../generic/Button/index.jsx'
import Input from '../../../generic/Input/index.jsx'
import Container, { Antmodal, ConTable } from './style.js'
import { authorCreatePost } from '../../../../redux/sliceAdmin/libary/author/create.js'
import { authorGetFetch } from '../../../../redux/sliceAdmin/libary/author/getAuthor.js'
import { startMessage } from '../../../../redux/slices/message/index.js'
import { reset } from '../../../../redux/sliceAdmin/talimyunlishAdd/index.js'
import { authorDeletePost } from '../../../../redux/sliceAdmin/libary/author/deleteId.js'
import Edit from "../../../../assets/icons/edit.svg"
import Trash from "../../../../assets/icons/trash.svg"
import Plus from "../../../../assets/icons/plus.svg"
import AddImg from "../../../../assets/icon/addimg.svg"





export const GaleryaComponet = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState({ id: 0, name: "", });
  const [dataList, setDataList] = useState([]);

  const [open, setOpen] = useState(false)
  const authorDelete = useSelector((store) => store.authorDelete);
  const authorGet = useSelector((store) => store.authorGet);
  const authorCreate = useSelector((store) => store.authorCreate);

  const [fileList, setFileList] = useState([]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
   
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

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
        <h1>Galereya</h1>
        <Antmodal open={open} onOk={addFacultet} onCancel={handleCancel}>
          <Container.Add>
            <div>
              <h1>Galereya yaratish</h1>
            </div>

            <div style={{display:"flex",flexDirection:"column", gap:"20px"}}>
              <div>
               <p>Sarlavha nomi</p>
                <Input weight={"400"} onchange={(e) => setName({ ...name, name: e.target.value })} value={name.name} mwidth={"340px"} mheight={"40px"} width={"886px"} height={"40px"} padding={"0px 13px"} size={"16px"} radius={"5px"} placeholder={`Sarlavha`} />
              </div>
              <div>
                <p>Batafsi ma'lumot</p>
                <Input weight={"400"} mwidth={"340px"} mheight={"40px"} width={"886px"} height={"40px"} padding={"0px 13px"} size={"16px"} radius={"5px"} placeholder={`Batafsil`} />
              </div>
               <Container.Upload listType="picture-card" fileList={fileList} onChange={onChange} onPreview={onPreview} >
                   {fileList.length < 1 && <AddImg/>}
               </Container.Upload>
              <div style={{display:"flex",alignItems:"center",justifyContent:"end",width:"100%", height:"50px"}}>
               <Button onclick={() => addFacultet()} mradius={" 5px"} msize={'15px'} mwidth={"80px"} mheight={"40px"} width={"100px"} height={"45px"} size={"20px"} padding={"0px 10px"} radius={" 5px"}>Qo'shish</Button>
              </div>
            </div>
           
          </Container.Add>
          


        </Antmodal>
        <div onClick={modalAdd}>
          <Plus /> &nbsp;   Qo'shish
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
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../generic/Button'
import Input from '../../../generic/Input'
import Container, { Antmodal, ModalaContainer,ConTable, Wrapper} from './style.js'
import { authorCreatePost } from '../../../../redux/sliceAdmin/libary/author/create.js'
import { startMessage } from '../../../../redux/slices/message'
import { reset } from '../../../../redux/sliceAdmin/talimyunlishAdd'
import Edit from "../../../../assets/icons/edit.svg"
import Trash from "../../../../assets/icons/trash.svg"
import Plus from "../../../../assets/icons/plus.svg"
import { deployFileFetch } from '../../../../redux/slices/deployFile'
import AddImg from "../../../../assets/icon/addimg.svg"
import { bookCreatePost } from '../../../../redux/sliceAdmin/libary/book/create.js'
import Image from "next/image";
import {getGalleryDataFetch} from "../../../../redux/slices/getGalleryData";
import {galleryDeleteIdDel} from "../../../../redux/sliceAdmin/gallerya/galleryDeleteId";
import {galleryCreatePost} from "../../../../redux/sliceAdmin/gallerya/galleryCreate";


export const GalleryaComponet = () => {
  const dispatch = useDispatch();
  const [fileList, setFileList] = useState([]);

  const [name, setName] = useState(
      {
          id:0,
          title: "",
          description: "",
          attachmentId:'',
      });
  const [dataList, setDataList] = useState([]);
  const [open, setOpen] = useState(false)

  const { fileId, by } = useSelector((store) => store.deployFile);
  const galleryCreate = useSelector((store) => store.galleryCreate);
  const getGalleryData = useSelector((store) => store.getGalleryData);
  const galleryDeleteId = useSelector((store) => store.galleryDeleteId);



  useEffect(() => {
    if (galleryCreate.status === "success" ||galleryDeleteId.status==='success' )
      dispatch(startMessage({ time: 3, message: "Muvofiyaqatli Yakulandi", type: "success", }),
          setName({
            id: '',
              title: '',
              description: '',
              attachmentId: '',
          }));
    else if (galleryCreate.status === "notFound")
      dispatch(startMessage({ time: 3, message: 'hatolik bor' }));
       setTimeout(() => {
      dispatch(reset());
    }, 500);
  }, [galleryCreate,galleryDeleteId]);



  const addFacultet = () =>
      dispatch(galleryCreatePost({
         id: 0,
          title: name.title,
          description: name.description,
          attachmentId: fileId,

      }));

  const findDeleteID = (deleteId) => dispatch(galleryDeleteIdDel({ id: deleteId }));

  const findEditID = (id) => {
    setDataList(dataList.map((value) => ({
        id: value.id,
        name: value.name,
        rating:value.rating,
        author: value.author?.name,
        direction: value?.direction?.name,
        language: value?.language?.name,
       status: id === value.id ? (!value.id || true) : false
    })))
  }
  const editPush = (id, i) => dispatch(
      authorCreatePost({
        id: id,
        name: dataList[i].name,
          rating: dataList[i].rating,
          author: dataList[i].author,
          direction: dataList[i].direction,
          language: dataList[i].language,
      }));

    useEffect(() => {
        if (getGalleryData.status === "success") setDataList(getGalleryData.data)
    }, [getGalleryData]);

    useEffect(() => {
        if (galleryDeleteId.status === 'success' || galleryCreate.status === 'success')
            dispatch(getGalleryDataFetch())
    }, [galleryDeleteId, galleryCreate])

    useEffect(()=> {
      dispatch(getGalleryDataFetch())
    },[getGalleryDataFetch])

  const modalAdd = () => {
      setOpen(true)
  }
  const handleCancel = () => setOpen(false)

  return (
      <Container>
        <Container.Bottom>
          <Container.TextAdd>
            <h1>Galereya </h1>
          </Container.TextAdd>
          <Antmodal open={open} onOk={addFacultet} onCancel={handleCancel}>
            <Container.Add>
                 <Container.Texth1>
                     Galereya
                 </Container.Texth1>
                <br/>
              <ModalaContainer>
                <div>
                  <p>Sarlavha nomi</p>
                  <Input onchange={(e) => setName({ ...name, title: e.target.value })} value={name.title} mwidth={"340px"} mheight={"40px"} width={"640px"} height={"45px"} padding={"0px 10px"} size={"20px"} radius={"0px"} placeholder={`Sarlavha nomi`} />
                </div>
              </ModalaContainer>

                <ModalaContainer>
                    <div>
                        <p>Batafsi ma’lumot</p>
                        <Input onchange={(e) => setName({ ...name, description: e.target.value })} value={name.direction} mwidth={"340px"} mheight={"40px"} width={"640px"} height={"45px"} padding={"0px 10px"} size={"20px"} radius={"0px"} placeholder={`Batafsil`} />
                    </div>
                </ModalaContainer>


            </Container.Add>
            <Container.Upload
                listType="picture-card"
                onChange={(e) =>
                    dispatch(deployFileFetch({
                      file: {
                        target: {
                          files: [
                            e.file.originFileObj
                          ]
                        }
                      }, by: 'antdesing'
                    }))
                }
            >
              {fileList.length < 1 && <AddImg />}
            </Container.Upload>
            {/*<Button onclick={() => addFacultet()} mradius={" 5px"} msize={'15px'} mwidth={"80px"} mheight={"40px"} width={"100px"} height={"45px"} size={"20px"} padding={"0px 10px"} radius={" 5px"}>  Qo'shish  </Button>*/}
          </Antmodal>
          <Container.BtnAdd>
            <Button onclick={modalAdd} width={'100px'} height={'50px'} radius={"5px"} size={'12px'}> <Plus /> &nbsp;   Qo’shish</Button>
          </Container.BtnAdd>
        </Container.Bottom>
        <Wrapper>
          <Container.Scrool style={{ overflowY: 'scroll', maxHeight: '550px' }}>
            <Container.Nav>
                <div>
                    Rasm
                </div>
              <div className='row'>
                <div >№</div>
                <div className='colum'>Sarlavha</div>
                <div className='colum'>Batafsil ma’lumot</div>
                <div className='colum' >Tahrirlash</div>
                <div className='colum' >O’chirish</div>
              </div>
            </Container.Nav>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
              {dataList?.map((value, index) => {
                return (
                    <ConTable key={value.id}>
                        <div>
                            <Image
                                alt="img"
                                src={`http://185.217.131.147:8088/api/v1/attachment/download/${value?.attachmentId}`}
                                width={60}
                                height={60}

                                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
                                style={{height: '100%', width: '100%'}}
                                className={"img"}
                            />
                        </div>
                      <div className='row'>
                        <div >{index + 1}</div>
                        <div className='colum'>
                          {
                            value?.status ?
                                <input value={value.name} onChange={(e) => setDataList(dataList.map((val) => ({
                                    id: val?.id,
                                    name: value.id === val.id ? e.target.value : val?.name,
                                    rating: val.rating,
                                    author: val.author?.name,
                                    direction: val?.direction?.name,
                                    language: val?.language?.name,
                                    status: val?.status,
                                })))} />
                                :
                                <>
                                  {value.title}
                                </>}
                        </div>
                          <div className='colum'>
                              {
                                  value?.status ?
                                      <input value={value.direction} onChange={(e) => setDataList(dataList.map((val) => ({
                                          id: val?.id,
                                          name: val?.name,
                                          author: value?.id === val.id ? e.target.value : val?.author?.name,
                                          rating: val?.rating,
                                          direction: val?.direction?.name,
                                          language: val?.language?.name,
                                          status: val?.status,
                                      })))} />
                                      :
                                      <>
                                          {value?.description}
                                      </>
                              }
                          </div>
                        <div className='colum'>
                          {
                            value?.status ?
                                <Button shadow={'0px'}  onclick={() => editPush(value.id, index)} width={'70px'} height={'40px'} size={'18px'} radius={'5px'} border={'1px solid red'}>OK</Button>
                                :
                                <Edit onClick={() => findEditID(value.id)}/>
                          }
                        </div>
                        <div className='colum'>
                          <Button onclick={() => findDeleteID(value.id)} shadow={'0px'}  width={'70px'} height={'40px'} size={'18px'} radius={'5px'} border={'1px solid red'}><Trash /></Button>
                        </div>
                      </div>
                    </ConTable>
                )})}
            </div>
          </Container.Scrool>
        </Wrapper>
      </Container>
  )
}

export default GalleryaComponet
