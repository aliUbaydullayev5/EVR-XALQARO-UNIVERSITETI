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
import { API_GLOBAL } from '../../../../globalApi.js'
import { caruselcreatePost, caruselreset } from '../../../../redux/sliceAdmin/carusel/caruselCreate/create.js'
import { CaruselGetFetch } from '../../../../redux/sliceAdmin/carusel/getCarusel/getcarusel.js'


export const CaruselComponents = () => {
  const dispatch = useDispatch();
  const [fileList, setFileList] = useState([]);

  const [name, setName] = useState(
    { attachmentId: '', });
  const [dataList, setDataList] = useState([]);
  const [open, setOpen] = useState(false)

  const { fileId, by } = useSelector((store) => store.deployFile);
  const caruselcreate = useSelector((store) => store.caruselcreate);
  const caruselGet = useSelector((store) => store.caruselGet);


  useEffect(() => {
    if (caruselcreate?.status === "success")
      dispatch(startMessage({ time: 3, message: "Muvofiyaqatli Yakulandi", type: "success", }),
        setName({
          attachmentId: '',
        }));
    else if (caruselcreate?.status === "notFound")
      dispatch(startMessage({ time: 3, message: 'hatolik bor' }));
    setTimeout(() => {
      dispatch(caruselreset());
    }, 500);
  }, [caruselcreate]);

  const addFacultet = () =>
    dispatch(caruselcreatePost({
      attachmentId: [fileId],
    }));

  useEffect(() => {
    if (caruselGet?.status === "success") setDataList(caruselGet.data)
  }, [caruselGet]);

  useEffect(() => {
    if (caruselcreate?.status === 'success')
      dispatch(CaruselGetFetch())
  }, [caruselcreate])

  useEffect(() => {
    dispatch(CaruselGetFetch())
  }, [CaruselGetFetch])
  const modalAdd = () => {
    setOpen(true)
  }
  const handleCancel = () => setOpen(false)
  console.log(dataList,'dataList');
  return (
    <Container>
      <Container.Bottom>
        <Container.TextAdd>
          <h1>Bosh sahifaga rasim q'oshish</h1>
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
        </Antmodal>
        <Container.BtnAdd>
          <Button onclick={modalAdd} width={'100px'} height={'50px'} radius={"5px"} size={'12px'}> <Plus /> &nbsp;   Qo’shish</Button>
        </Container.BtnAdd>
      </Container.Bottom>
      <Wrapper>
        <Container.Scrool style={{ overflowY: 'scroll', maxHeight: '550px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
            <ConTable >
              {dataList?.map((value, index) => {
                return (
                  <Image
                    alt="img"
                    src={`${API_GLOBAL}v1/attachment/download/${value?.id}`}
                    width={60}
                    height={60}
                    style={{ height: '100%', width: '100%' }}
                    className={"img"}
                  />
                )
              })}
            </ConTable>
          </div>
        </Container.Scrool>
      </Wrapper>
    </Container>
  )
}



export default CaruselComponents