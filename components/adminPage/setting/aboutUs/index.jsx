import React, { useEffect, useState } from 'react';
import Container from "../testCom/subjectMandatory/style";
import Input from "../../../generic/Input";
import Button from "../../../generic/Button";
import AddImg from "../../../../assets/icon/addimg.svg"
import { useDispatch, useSelector } from "react-redux";
import { aboutCreateFetch } from "../../../../redux/sliceAdmin/about-us";
import { deployFileFetch } from "../../../../redux/slices/deployFile";
import { aboutGetFetch } from '../../../../redux/sliceAdmin/about-us/getAbout';

const AboutUss = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(aboutGetFetch())
  }, [aboutGetFetch])

  const [data, setData] = useState({
    id: 0,
    textUz: '',
    textRu: '',
    photoId: ''
  })



  const changeAllDataFunc = ({ type, value }) => {
    const fakeData = data
    fakeData[type] = value
    setData(fakeData)
    setData({ ...data, [type]: value })
  }

  const { fileId, by } = useSelector((store) => store.deployFile)

  useEffect(() => changeAllDataFunc({ type: by, value: fileId }), [fileId])

  // addimg
  const [fileList, setFileList] = useState([]);

  const createAboutFile = () => {
    dispatch(aboutCreateFetch({
      textUz: data.textUz,
      textRu: data.textRu,
      photoId: fileId
    }))
  }
  return (
    <Container>
      <Container.Top>
        <Container.Text>
          <Input placeholder={'Uzbek Tilidi kiriting'} onchange={(e) => changeAllDataFunc({ type: 'textUz', value: e.target.value })} width={'45%'} height={'55px'} padding={'0px 10px'} size={'20px'} radius={'15px'} />
          <Input placeholder={'Rus Tilidi kiriting'} onchange={(e) => changeAllDataFunc({ type: 'textRu', value: e.target.value })} width={'45%'} height={'55px'} padding={'0px 10px'} size={'20px'} radius={'15px'} />
        </Container.Text>
        <Container.Button>

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


          <Button onclick={createAboutFile} width={'157px'} height={'48px'} size={'20px'} radius="10px" > Saqlash</Button>
        </Container.Button>

      </Container.Top>
      <Container.Scrool style={{ overflowY: 'scroll', maxHeight: '370px' }}>
      </Container.Scrool>
    </Container >
  );
};

export default AboutUss;
