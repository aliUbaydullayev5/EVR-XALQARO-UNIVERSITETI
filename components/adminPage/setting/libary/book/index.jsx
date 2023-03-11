
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../../generic/Button/index.jsx'
import Input from '../../../../generic/Input/index.jsx'
import Container, { Antmodal, ModalaContainer, ConTable} from './style.js'
import { authorCreatePost } from '../../../../../redux/sliceAdmin/libary/author/create.js'
import { authorGetFetch } from '../../../../../redux/sliceAdmin/libary/author/getAuthor.js'
import { startMessage } from '../../../../../redux/slices/message/index.js'
import { reset } from '../../../../../redux/sliceAdmin/talimyunlishAdd/index.js'
import { authorDeletePost } from '../../../../../redux/sliceAdmin/libary/author/deleteId.js'
import Edit from "../../../../../assets/icons/edit.svg"
import Trash from "../../../../../assets/icons/trash.svg"
import Plus from "../../../../../assets/icons/plus.svg"
import { AntSelect } from '../../talimYunalishType/TalimYunalishTypeAdd/style.js'
import { deployFileFetch } from '../../../../../redux/slices/deployFile/index.js'
import AddImg from "../../../../../assets/icon/addimg.svg"
import { bookCreatePost } from '../../../../../redux/sliceAdmin/libary/book/create.js'
import { bookLaunguageGetFetch } from '../../../../../redux/sliceAdmin/libary/bookLaunguage/getbooksLaunguage.js'
import { bookTypesGetFetch } from '../../../../../redux/sliceAdmin/libary/booksTypes/getbooksType.js'
import {bookGetFetch} from "../../../../../redux/sliceAdmin/libary/book/getbook";




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

  const authorDelete = useSelector((store) => store.authorDelete);
  const authorGet = useSelector((store) => store.authorGet);
  const authorCreate = useSelector((store) => store.authorCreate);
  const bookLaunguageGet = useSelector((store) => store.bookLaunguageGet);
  const bookTypesGet = useSelector((store) => store.bookTypesGet);
  const { fileId, by } = useSelector((store) => store.deployFile);
  const bookCreate = useSelector((store) => store.bookCreate);
  const bookGet = useSelector((store) => store.bookGet);



  useEffect(() => {
    if (bookCreate.status === "success")
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
  }, [bookCreate]);

  useEffect(() => {
    if (authorDelete.status === 'success' || authorCreate.status === 'success')
      dispatch(authorGetFetch())
  }, [authorDelete, authorCreate])

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



  const findDeleteID = (deleteId) => dispatch(authorDeletePost({ id: deleteId }));


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
    if (bookLaunguageGet.status === "success") setDataLaungage(bookLaunguageGet.data);
    if (bookTypesGet.status === "success") setDatabookTypes(bookTypesGet.data)
    if (authorGet.status === "success") setAuthor(authorGet.data)
    if (bookGet.status === "success") setDataList(bookGet.data)
  }, [bookLaunguageGet, bookTypesGet, authorGet]);

   useEffect(()=> {
      dispatch(bookGetFetch())
   },[bookGetFetch])

  useEffect(() => {
    dispatch(authorGetFetch())
  }, [authorGetFetch])

  useEffect(() => {
    dispatch(bookLaunguageGetFetch())
  }, [bookLaunguageGetFetch])


  useEffect(() => {
    dispatch(bookTypesGetFetch())
  }, [bookTypesGetFetch])

  const modalAdd = () => setOpen(true)
  const handleCancel = () => setOpen(false)
    console.log(dataList,'dataList')
  return (
    <Container>
      <Container.Bottom>
        <h1>Elektron kutubxona yaratish</h1>
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
                  style={{ width: '440px', marginBottom: '20px' }}
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
                  style={{ width: '440px', marginBottom: '20px' }}
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
                  style={{ width: '440px', marginBottom: '20px' }}
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

          <Button onclick={() => addFacultet()} mradius={" 5px"} msize={'15px'} mwidth={"80px"} mheight={"40px"} width={"100px"} height={"45px"} size={"20px"} padding={"0px 10px"} radius={" 5px"}>  Qo'shish  </Button>

        </Antmodal>
        <div onClick={modalAdd}>
          <Plus /> &nbsp;   Qo’shish
        </div>
      </Container.Bottom>
    </Container>
  );
};



export default BookComponet;
