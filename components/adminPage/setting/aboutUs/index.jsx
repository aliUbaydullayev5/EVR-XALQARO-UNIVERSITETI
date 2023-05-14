import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../generic/Button'
import Input from '../../../generic/Input'
import Container, { Antmodal, ModalaContainer, ConTable, Wrapper } from './style.js'
import { authorCreatePost } from '../../../../redux/sliceAdmin/libary/author/create.js'
import { startMessage } from '../../../../redux/slices/message'
import Edit from "../../../../assets/icons/edit.svg"
import { deployFileFetch } from '../../../../redux/slices/deployFile'
import AddImg from "../../../../assets/icon/addimg.svg"
import Image from "next/image";
import { aboutGetFetch } from "../../../../redux/sliceAdmin/about-us/getAbout";
import { HiOutlineRefresh } from 'react-icons/hi'
import { aboutreatePostFetch, resetaboutreatePost } from '../../../../redux/sliceAdmin/about-us/create.js'
import { API_GLOBAL } from '../../../../globalApi.js'

export const AboutUsComponents = () => {
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
  const aboutreatePost = useSelector((store) => store.aboutreatePost);
  const aboutGetData = useSelector((store) => store.aboutGetData);


  useEffect(() => {
    if (aboutreatePost?.status === "success")
      dispatch(startMessage({ time: 3, message: "Muvofiyaqatli Yakulandi", type: "success", }),
        setName({
          id: '',
          title: '',
          description: '',
          attachmentId: '',
        }));
    else if (aboutreatePost?.status === "notFound")
      dispatch(startMessage({ time: 3, message: aboutreatePost?.message.split('_').join(' ') }));
    setTimeout(() => {
      dispatch(resetaboutreatePost());
    }, 500);
  }, [aboutreatePost]);


  const addFacultet = () =>
    dispatch(aboutreatePostFetch({
      id: 0,
      textRu: name.title,
      textUz: name.description,
      attachmentId: fileId,

    }));

  const findEditID = (id) => {
    setDataList(dataList?.map((value) => ({
      id: value.id,
      name: value.name,
      rating: value.rating,
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
    if (aboutGetData?.status === "success") setDataList(aboutGetData.data)
  }, [aboutGetData]);

  useEffect(() => {
    if (aboutreatePost.status === 'success') dispatch(aboutGetFetch())
  }, [aboutreatePost])

  useEffect(() => {
    dispatch(aboutGetFetch())
  }, [aboutGetFetch])
  const modalAdd = () => {
    setOpen(true)
  }
  const handleCancel = () => setOpen(false)

  const [refreshButtonLogin, setRefreshButtonLogin] = useState(false)
  const refreshDataFunc = () => {
    dispatch(aboutGetFetch())
    setRefreshButtonLogin(true)
    setTimeout(() => {
      setRefreshButtonLogin(false)
    }, 1000)
  }

  return (
    <Container>
      <Container.Bottom>
        <Container.TextAdd>
          <h1>Biz Haqimizda</h1>
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
                      src={`${API_GLOBAL}v1/attachment/download/${value?.photoId}`}
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
                          <input value={value.name} onChange={(e) => setDataList(dataList.map((val) => ({
                            id: val?.id,
                            name: value.id === val.id ? e.target.value : val?.name,
                            rating: val.rating,
                          })))} />
                          :
                          <>
                            {value.textUz}
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
                            {value?.textRu}
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

export default AboutUsComponents