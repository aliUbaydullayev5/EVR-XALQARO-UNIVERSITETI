import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../generic/Button'
import Input from '../../../generic/Input'
import Container, { Antmodal, ModalaContainer, ConTable, Wrapper } from './style.js'
import { startMessage } from '../../../../redux/slices/message'
import Plus from "../../../../assets/icons/plus.svg"
import { deployFileFetch } from '../../../../redux/slices/deployFile'
import AddImg from "../../../../assets/icon/addimg.svg"
import Image from "next/image";
import { caruselcreatePost, resetCarusel } from '../../../../redux/sliceAdmin/carusel/caruselCreate/create.js'
import { caruselGetFetch, resetcaruselAdmin } from "../../../../redux/sliceAdmin/carusel/caruselGet/getCarusel.js"


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
  const caruselcreate = useSelector((store) => store.caruselcreate);
  const caruselAdminGet = useSelector((store) => store.caruselAdminGet);

  useEffect(() => {
    if (caruselcreate?.status === "success")
      dispatch(startMessage({ time: 3, message: "Muvofiyaqatli Yakulandi", type: "success", }),
        setName({
          id: '',
          title: '',
          description: '',
          attachmentId: '',
        }));
    else if (caruselcreate?.status === "notFound")
      dispatch(startMessage({ time: 3, message: 'hatolik bor' }));
    setTimeout(() => {
      dispatch(resetCarusel());
    }, 500);
  }, [caruselcreate]);
  const addFacultet = () =>
    dispatch(caruselcreatePost({
      id: 0,
      title: name?.title,
      description: name?.description,
      attachmentIds: [fileId],

    }));


  useEffect(() => {
    if (caruselAdminGet?.status === "success") setDataList(caruselAdminGet.data)
  }, [caruselAdminGet]);

  useEffect(() => {
    if (caruselcreate?.status === 'success')
      dispatch(caruselGetFetch())
  }, [caruselGetFetch])

  useEffect(() => {
    dispatch(caruselGetFetch())
  }, [caruselGetFetch])
  const modalAdd = () => {
    setOpen(true)
  }
  const handleCancel = () => setOpen(false)

  return (
    <Container>
      <Container.Bottom>
        <Container.TextAdd>
          <h1>Carusel Rasm</h1>
        </Container.TextAdd>
        <Antmodal open={open} onOk={addFacultet} onCancel={handleCancel}>
          <Container.Add>
            <Container.Texth1>
             Caruselga rasim qo`shish
            </Container.Texth1>
            <br />
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
            </div>
          </Container.Nav>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
            {dataList?.map((value, index) => {
              return (
                <ConTable key={value?.id}>
                  <div>
                    <Image
                      alt="img"
                      src={`http://evruniversity.uz/api/v1/attachment/download/${value?.id}`}
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
                      {value?.title}
                    </div>
                    <div className='colum'>

                      {value?.description}
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