import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../../generic/Button/index.jsx'
import Input from '../../../../generic/Input/index.jsx'
import Container, {Antmodal, ModalaContainer, ConTable, Wrapper, AntSelect} from './style.js'
import { authorCreatePost } from '../../../../../redux/sliceAdmin/libary/author/create.js'
import { authorGetFetch } from '../../../../../redux/sliceAdmin/libary/author/getAuthor.js'
import { startMessage } from '../../../../../redux/slices/message/index.js'
import { reset } from '../../../../../redux/sliceAdmin/talimyunlishAdd/index.js'
import { authorDeletePost } from '../../../../../redux/sliceAdmin/libary/author/deleteId.js'
import Edit from "../../../../../assets/icons/edit.svg"
import Trash from "../../../../../assets/icons/trash.svg"
import Plus from "../../../../../assets/icons/plus.svg"
import { deployFileFetch } from '../../../../../redux/slices/deployFile/index.js'
import AddImg from "../../../../../assets/icon/addimg.svg"
import { bookCreatePost } from '../../../../../redux/sliceAdmin/libary/book/create.js'
import { bookLaunguageGetFetch } from '../../../../../redux/sliceAdmin/libary/bookLaunguage/getbooksLaunguage.js'
import { bookTypesGetFetch } from '../../../../../redux/sliceAdmin/libary/booksTypes/getbooksType.js'
import {bookGetFetch,resetBookGet} from "../../../../../redux/sliceAdmin/libary/book/getbook";
import Image from "next/image";
import {bookDeleteIdDel} from "../../../../../redux/sliceAdmin/libary/book/deleteId";
import {subjectMandatoryFetch} from "../../../../../redux/sliceAdmin/majburiy-fanlar/majburiy-fanlar-fetch";


export const BookComponet = () => {
  const dispatch = useDispatch();
  const [fileList, setFileList] = useState([]);

  const [name, setName] = useState(
      {
        name: "",
        rating: "",
        attachmentId: "",
        authorId: "",
        languageId: "",
        directionId: "",
      });
  const [dataList, setDataList] = useState([]);
  const [dataLanguage, setDataLaungage] = useState([]);
  const [databookTypes, setDatabookTypes] = useState([]);
  const [dataAuthor, setAuthor] = useState([]);
  const [open, setOpen] = useState(false)


  const authorGet = useSelector((store) => store.authorGet);
  const bookLaunguageGet = useSelector((store) => store.bookLaunguageGet);
  const bookTypesGet = useSelector((store) => store.bookTypesGet);
  const { fileId, by } = useSelector((store) => store.deployFile);
  const bookCreate = useSelector((store) => store.bookCreate);
  const bookGet = useSelector((store) => store.bookGet);
  const bookDeleteId = useSelector((store) => store.bookDeleteId);



  useEffect(() => {
    if (bookCreate.status === "success" ||bookDeleteId.status==='success' )
      dispatch(startMessage({ time: 3, message: "Muvofiyaqatli Yakulandi", type: "success", }),
          setName({
            id: '',
            name: '',
            rating: '',
            attachmentId: '',
            authorId: '',
            languageId: '',
            directionId: '',
          }));
    else if (bookCreate.status === "notFound")
      dispatch(startMessage({ time: 3, message: 'hatolik bor' }));
    setTimeout(() => {
      dispatch(reset());
    }, 500);
  }, [bookCreate,bookDeleteId]);




  const addFacultet = () =>
      dispatch(bookCreatePost({
        id: 0,
        name: name.name,
        rating: name.rating,
        attachmentId: fileId,
        authorId: name.authorId,
        languageId: name.languageId,
        directionId: name.directionId,

      }));

  const findDeleteID = (deleteId) => dispatch(bookDeleteIdDel({ id: deleteId }));


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
        if (bookLaunguageGet.status === "success") setDataLaungage(bookLaunguageGet.data);
        if (bookTypesGet.status === "success") setDatabookTypes(bookTypesGet.data)
        if (authorGet.status === "success") setAuthor(authorGet.data)
        if (bookGet.status === "success") setDataList(bookGet.data)
    }, [bookLaunguageGet, bookTypesGet, authorGet,bookGet]);

    useEffect(() => {
        if (bookDeleteId.status === 'success' || bookCreate.status === 'success')
            dispatch(bookGetFetch())
    }, [bookDeleteId, bookCreate])

    useEffect(()=> {
      dispatch(bookGetFetch())
    },[bookGetFetch])

    useEffect(() => {
        open===true&&  dispatch(authorGetFetch())
    }, [authorGetFetch,open])

    useEffect(() => {
        open===true &&    dispatch(bookLaunguageGetFetch())
    }, [bookLaunguageGetFetch,open])

    useEffect(() => {
        open===true&&  dispatch(bookTypesGetFetch())
    }, [bookTypesGetFetch,open])

  const modalAdd = () => {
      setOpen(true)
  }
  const handleCancel = () => setOpen(false)

  return (
      <Container>
        <Container.Bottom>
          <Container.TextAdd>
            <h1>Elektron kutubxona yaratish</h1>
          </Container.TextAdd>
          <Antmodal open={open} onOk={addFacultet} onCancel={handleCancel}>
            <Container.Add>
              <ModalaContainer>
                <div>
                  <p>Kitob nomi</p>
                  <Input onchange={(e) => setName({ ...name, name: e.target.value })} value={name.name} mwidth={"340px"} mheight={"40px"} width={"440px"} height={"45px"} padding={"0px 10px"} size={"20px"} radius={"0px"} placeholder={`Nomi`} />
                </div>
                <div>
                  <p>Muallif ismi</p>
                  <AntSelect
                      style={{ width: '440px'}}
                      placeholder='Vikas Svarul '
                      optionFilterProp="children"
                      options={authorGet.data.length && dataAuthor?.map((value) => ({
                        value: value?.id,
                        label: value?.name,
                      })) || []}
                      onChange={(e) => setName({ ...name, authorId: e })}
                  />
                </div>
              </ModalaContainer>
              <ModalaContainer>
                <div>
                  <p>Reyting</p>
                  <Input onchange={(e) => setName({ ...name, rating: e.target.value })} value={name.rating} mwidth={"340px"} mheight={"40px"} width={"440px"} height={"45px"} padding={"0px 10px"} size={"20px"} radius={"0px"} placeholder={`Nomi`} />
                </div>
                <div>
                  <p>Yo’nalish</p>
                  <AntSelect
                      style={{ width: '440px',  }}
                      placeholder='Badiiy adabiyot'
                      optionFilterProp="children"
                      options={bookTypesGet.data.length && databookTypes?.map((value) => ({
                        value: value.id,
                        label: value.name,
                      })) || []}
                      onChange={(e) => setName({ ...name, directionId: e })}
                  />
                </div>
              </ModalaContainer>

              <ModalaContainer>
                <div>
                  <p>Yunalish Tili</p>
                  <AntSelect
                      style={{ width: '440px' }}
                      placeholder='O`zbek'
                      optionFilterProp="children"
                      options={bookLaunguageGet.status === 'success' && dataLanguage?.map((value) => ({
                        value: value.id,
                        label: value.name,
                      })) || []}
                      onChange={(e) => setName({ ...name, languageId: e })}
                  />
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
          <Container.Scrool style={{ overflowY: 'scroll', maxHeight: '850px' }}>
            <Container.Nav>
                <div>
                    Rasm
                </div>
              <div className='row'>
                <div >№</div>
                <div className='colum'>Nomi</div>
                <div className='colum'>Muallif</div>
                <div className='colum'>Til</div>
                <div className='colum'>Reyting</div>
                <div className='colum'>Yo’nalish</div>
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
                                  {value.name}
                                </>}
                        </div>
                        <div className='colum'>
                          {
                            value?.status ?
                                <input value={value.author} onChange={(e) => setDataList(dataList.map((val) => ({
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
                                  {value?.author?.name}
                                </>
                          }
                        </div>

                          <div className='colum'>
                              {
                                  value?.status ?
                                      <input value={value?.language} onChange={(e) => setDataList(dataList.map((val) => ({
                                          id: val?.id,
                                          name: val?.name,
                                          author: val?.author?.name,
                                          language: value?.id === val.id ? e.target.value : val?.language?.name,
                                          rating: val?.rating,
                                          direction: val?.direction?.name,
                                          status: val?.status,
                                      })))} />
                                      :
                                      <>
                                          {value?.language?.name}
                                      </>
                              }
                          </div>
                          <div className='colum'>
                              {
                                  value?.status ?
                                      <input value={value?.rating} onChange={(e) => setDataList(dataList.map((val) => ({
                                          id: val?.id,
                                          name: val?.name,
                                          author: val?.author?.name,
                                          language: val.language,
                                          rating: value.id === val.id ? e.target.value : val?.rating,
                                          direction: val?.direction?.name,
                                          status: val?.status,
                                      })))} />
                                      :
                                      <>
                                          {value?.rating}
                                      </>
                              }
                          </div>

                          <div className='colum'>
                              {
                                  value?.status ?
                                      <input value={value?.direction} onChange={(e) => setDataList(dataList.map((val) => ({
                                          id: val?.id,
                                          name: val?.name,
                                          author: val?.author?.name,
                                          language: val.language,
                                          rating: val?.rating,
                                          direction: value.id === val.id ? e.target.value : val?.direction?.name,
                                          status: val?.status,
                                      })))} />
                                      :
                                      <>
                                          {value?.direction?.name}
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

export default BookComponet