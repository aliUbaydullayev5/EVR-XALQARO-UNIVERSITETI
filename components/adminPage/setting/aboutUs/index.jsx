import React, {useEffect, useState} from 'react';
import Container from "../testCom/subjectMandatory/style";
import Input from "../../../generic/Input";
import Button from "../../../generic/Button";
import {useDispatch, useSelector} from "react-redux";
import {aboutCreateFetch} from "../../../../redux/sliceAdmin/about-us";
import {deployFileFetch} from "../../../../redux/slices/deployFile";

const AboutUss = () => {

    const dispatch = useDispatch()


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


    return (
        <Container>

            <Container.Scrool style={{ overflowY: 'scroll', maxHeight: '550px' }}>
                <div>
                    <Input placeholder={'Uzbek Tilidi kiriting'} onchange={(e) => changeAllDataFunc({type: 'textUz', value: e.target.value})} width={'45%'} height={'55px'} padding={'0px 10px'} margin={'0 1rem 1rem 0'} size={'20px'} radius={'15px'} />
                    <Input placeholder={'Rus Tilidi kiriting'}  onchange={(e) => changeAllDataFunc({type: 'textRu', value: e.target.value})} width={'45%'} height={'55px'} padding={'0px 10px'} size={'20px'} radius={'15px'} />
                    <Input placeholder={'Rasm kiriting'} type={'file'}  onchange={(e) => findFileFunc({ file: e, by: 'photoId' })} width={'45%'} height={'55px'} padding={'0px 10px'} margin={'0 0 1rem 0'} size={'20px'} radius={'15px'} />
                    <Button onclick={createAboutFile} width={'100px'} height={'55px'} size={'20px'} padding={'0px 10px'} > Add</Button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>

                </div>
            </Container.Scrool>
        </Container>
    );
};

export default AboutUss;
