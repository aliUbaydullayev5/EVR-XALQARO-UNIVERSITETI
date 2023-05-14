import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../generic/Button'
import Input from '../../../generic/Input'
import Container, { Antmodal, ModalaContainer, ConTable, Wrapper } from './style.js'
import { authorCreatePost } from '../../../../redux/sliceAdmin/libary/author/create.js'
import { startMessage } from '../../../../redux/slices/message'
import { reset } from '../../../../redux/sliceAdmin/talimyunlishAdd'
import Edit from "../../../../assets/icons/edit.svg"
import Plus from "../../../../assets/icons/plus.svg"
import { deployFileFetch } from '../../../../redux/slices/deployFile'
import AddImg from "../../../../assets/icon/addimg.svg"
import Image from "next/image";
import { newsGetFetch, resetnewsAdmin } from "../../../../redux/sliceAdmin/news/getnews";
import { API_GLOBAL } from '../../../../globalApi.js'
import { newsDeleteIdFetch } from '../../../../redux/sliceAdmin/news/deleteId.js'
import { newsreatePost } from '../../../../redux/sliceAdmin/news/create.js'


export const NewsComponents = () => {
  const dispatch = useDispatch();
  const [fileList, setFileList] = useState([]);

  const [name, setName] = useState(
    {
      id: 0,
      title: "",
      description: "",
      attachmentId: '',
    });
  const [dataList, setDataList] = useState([]);
  const [open, setOpen] = useState(false)

  const { fileId, by } = useSelector((store) => store.deployFile);
  const newsreate = useSelector((store) => store.newsreate);
  const newsAdminGet = useSelector((store) => store.newsAdminGet);



  useEffect(() => {
    if (newsreate?.status === "success")
      dispatch(startMessage({ time: 3, message: "Muvofiyaqatli Yakulandi", type: "success", }),
        setName({
          id: '',
          title: '',
          description: '',
          attachmentId: '',
        }));
    else if (newsreate?.status === "notFound")
      dispatch(startMessage({ time: 3, message: 'hatolik bor' }));
    setTimeout(() => {
      dispatch(resetnewsAdmin());
    }, 500);
  }, [newsreate]);

  const addFacultet = () =>
    dispatch(newsreatePost({
      id: 0,
      title: name?.title,
      description: name?.description,
      attachmentId: [fileId],

    }));



  const findEditID = (id) => {
    setDataList(dataList?.map((value) => ({
      id: value.id,
      title: value.title,
      description: value?.description,
      status: id === value.id ? (!value.id || true) : false
    })))
  }
  const editPush = (id, i) => dispatch(
    newsreatePost({
      id: id,
      title: dataList[i].title,
      description: dataList[i].description,
      attachmentId: [fileId],
    }));

  useEffect(() => {
    if (newsAdminGet?.status === "success") setDataList(newsAdminGet.data)
  }, [newsAdminGet]);

  useEffect(() => {
    if (newsreate?.status === 'success')
      dispatch(newsGetFetch())
  }, [newsreate])

  useEffect(() => {
    dispatch(newsGetFetch())
  }, [newsGetFetch])
  const modalAdd = () => {
    setOpen(true)
  }
  const handleCancel = () => setOpen(false)
  console.log(dataList,'dataList');
  return (
    <Container>
      <Container.Bottom>
        <Container.TextAdd>
          <h1>Yangliklar  </h1>
        </Container.TextAdd>
        <Antmodal open={open} onOk={addFacultet} onCancel={handleCancel}>
          <Container.Add>
            <Container.Texth1>
              Yangliklar
            </Container.Texth1>
            <br />
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
                      e.file?.originFileObj
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
            </div>
          </Container.Nav>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
            {dataList?.map((value, index) => {
              return (
                <ConTable key={value.id}>
                  <div>
                    <Image
                      alt="img"
                      src={`${API_GLOBAL}v1/attachment/download/${value?.attachment?.id}`}
                      width={60}
                      height={60}

                      sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
                      style={{ height: '100%', width: '100%' }}
                      className={"img"}
                    />
                  </div>
                  <div className='row'>
                    <div >{index + 1}</div>
                    <div className='colum'>
                      {
                        value?.status ?
                          <input value={value.title} onChange={(e) => setDataList(dataList.map((val) => ({
                            id: val?.id,
                            description: val?.description,
                            title: value?.id === val.id ? e.target.value : val?.title,
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
                          <input value={value.description} onChange={(e) => setDataList(dataList.map((val) => ({
                            id: val?.id,
                            description: value?.id === val.id ? e.target.value : val?.description,
                            title: val?.title,
                            status: val?.status,
                          })))} />
                          :
                          <>
                            {value?.description}
                          </>
                      }
                    </div>
                    <div className='colum'>
                      {/* {
                        value?.status ?
                          <Button shadow={'0px'} onclick={() => editPush(value.id, index)} width={'70px'} height={'40px'} size={'18px'} radius={'5px'} border={'1px solid red'}>OK</Button>
                          :
                          <Edit onClick={() => findEditID(value.id)} />
                      } */}
                    </div>
                  </div>
                </ConTable>
              )
            })}
          </div>
        </Container.Scrool>
      </Wrapper>
    </Container>
  )
}

export default NewsComponents