import React, {useEffect, useState} from 'react';
import Container from "../testCom/subjectMandatory/style";
import Input from "../../../generic/Input";
import Button from "../../../generic/Button";
import AddImg from "../../../../assets/icon/addimg.svg"
import {useDispatch, useSelector} from "react-redux";
import {aboutCreateFetch} from "../../../../redux/sliceAdmin/about-us";
import {deployFileFetch} from "../../../../redux/slices/deployFile";
import { aboutGetFetch } from '../../../../redux/sliceAdmin/about-us/getAbout';
import { Upload } from 'antd';

const AboutUss = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(aboutGetFetch())
    },[aboutGetFetch])

    const [data, setData] = useState({
        id: 0,
        textUz: '',
        textRu: '',
        photoId: ''
    })

    const createAboutFile = () => {
        dispatch(aboutCreateFetch(data))
    }

    const changeAllDataFunc = ({ type, value }) => {
        const fakeData = data
        fakeData[type] = value
        setData(fakeData)
        setData({ ...data, [type]: value })
    }

    const { fileId, by } = useSelector((store) => store.deployFile)
    const findFileFunc = ({ file, by }) => dispatch(deployFileFetch({ file: file, by }))

    useEffect(() => changeAllDataFunc({type: by, value: fileId}), [fileId])


    // addimg
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
console.log(fileList,'fileList');


    return (
        <Container>
            <Container.Top>
                <Container.Text>
                  <Input placeholder={'Uzbek Tilidi kiriting'} onchange={(e) => changeAllDataFunc({type: 'textUz', value: e.target.value})} width={'45%'} height={'55px'} padding={'0px 10px'} size={'20px'} radius={'15px'} />
                  <Input placeholder={'Rus Tilidi kiriting'}  onchange={(e) => changeAllDataFunc({type: 'textRu', value: e.target.value})} width={'45%'} height={'55px'} padding={'0px 10px'} size={'20px'} radius={'15px'} />
                </Container.Text>
                <Container.Button>
                  <Container.Upload listType="picture-card" fileList={fileList} onChange={onChange} onPreview={onPreview} >
                   {fileList.length < 1 && <AddImg/>}
                  </Container.Upload>
                  <Button onclick={createAboutFile} width={'157px'} height={'48px'} size={'20px'} radius="10px" > Saqlash</Button>
                </Container.Button>
            </Container.Top>
            <Container.Scrool style={{ overflowY: 'scroll', maxHeight: '370px' }}>
             
            
            </Container.Scrool>
               
                    {/* <Input accept placeholder={'Rasm kiriting'} type={'file'}  onchange={(e) => findFileFunc({ file: e, by: 'photoId' })} width={'45%'} height={'55px'} padding={'0px 10px'} margin={'0 0 1rem 0'} size={'20px'} radius={'15px'} /> */}
            
        </Container>
    );
};

export default AboutUss;
