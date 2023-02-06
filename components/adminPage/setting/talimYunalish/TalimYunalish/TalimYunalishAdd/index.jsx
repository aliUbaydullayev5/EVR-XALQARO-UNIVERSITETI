
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getStudyTypesFetch } from '../../../../../../redux/slices/getStudyTypes/index.jsx'
import Input from '../../../../../generic/Input/index.jsx'
import Container from './style.js'

const data = [
    {
        id: 1,
        name:'Boshlang’ich ta’lim'
    },
    {
        id: 2,
        name: 'Maktabgacha ta’lim'
    },
    {
        id: 3,
        name: 'Iqtisodiyot(Tarmoqlar va sohalar bo’yicha)'
    },
    {
        id: 4,
        name: 'Yo’l harakatini tashkil etish'
    },
    {
        id: 5,
        name: 'Yurisprudensiya(Mehnat huquqi)'
    },
    {
        id: 6,
        name: 'Filologiya va tillarni o’qitish(tillar bo’yicha)'
    },
    {
        id: 7,
        name: 'Ахборот тизимлари ва технологиялари(Тармоқлар ва соҳалар бўйича)'
    },
    {
        id: 8,
        name: 'Тарих(Мамлакатлар ва йўналишлар бўйича)'
    },
    {
        id: 9,
        name: 'Архитектура(турлар бўйича)'
    },
    {
        id: 10,
        name: 'Банк иши'
    },
]


export const TalimYunlishAddCom = () => {
    const dispatch = useDispatch()

    const [datas, Setdatas] = useState(data);
    const [adduser, Setadduser] = useState()
    const [funok, Setfunkok] = useState(adduser)

    const handleDelete = (id) => {
        Setdatas(datas.filter((val) => val.id  !== id));
    }
    useEffect(() => {
        console.log(dispatch(getStudyTypesFetch({ type: 'Talim Yunalish Qoshish Abuturent' })));

    }, [])


    const onChange = (e, id) => {
        const {name,value}= e.target
  
        const editData = () => {
       return datas.map((item) => item.id === id && name ? { ...item, [name]: value } : item)
        }
       Setdatas(editData)
    }
    const addFunc = (e,) => Setadduser(e.target.value)

    const addFuncOk = () => {
        Setfunkok(adduser)
}
    return (
        <Container>
            <Container.BottomDesc>
                <Container.BottomDescInset>
            <Container.Table>
                <Container.Input>
                    <div>
                                <Input onchange={(e) => addFunc(e)} width={'290px'} height={'35px'} radius={'5px'} padding={'0px 10px '} size={'20px'} type="text" placeholder={'Talim Yunalishlar Qoshish'}  /></div>
                            <div><button onClick={addFuncOk } className='buttonAdd'>add</button></div>
                </Container.Input>
                <br/>
                <tbody style={{ width: "100%" }}>
                        <tr>
                        <th className='thid'>Id</th>
                        <th>Ta'lim Yunlishlar Nomi</th>
                        <th>Delte</th>
                        </tr>
                            {datas?.map(({name,id}) => { 
                        return (
                            <tr key={id}>
                                <td className='thid'>{id}</td>
                                <td className='thname'>
                                    <td>{funok}</td>
                                    <Input width={'100%'} height={'40px'} radius={'5px'} size={'20px'} padding={'0px 10px'} name="name" value={name} type="text" placeholder="Type Name" onchange={(e) => onChange(e, id)} />
                                </td>
                                <td><button className='buttonDelete' onClick={()=>handleDelete(id)}>delete</button></td>
                             </tr>   ) })}
                        </tbody>
             
                    </Container.Table>
                </Container.BottomDescInset>
            </Container.BottomDesc>
        </Container>
    )
}

export default TalimYunlishAddCom