
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getStudyTypesFetch } from '../../../../../../redux/slices/getStudyTypes/index.jsx'
import Input from '../../../../../generic/Input/index.jsx'
import DataAriza from '../../../../../Mock/adminAriza/data.js'
import Container, { ConTable } from './style.js'


export const TalimYunlishAddCom = () => {
    const dispatch = useDispatch()

    const [data, setData] = useState(DataAriza)
    const [selectAllState, setSelectAllState] = useState(false)


    useEffect(() => {
        setData(data.map((value) => (
            {
                id: value.id,
                ismi: value.ismi,
                phone: value.phone,
                data: value.data,
                img: value.img,
                checked: selectAllState
            }
        )))
    }, [selectAllState])


    const selectOne = (id = false) => {
        setData(data.map((value) => (
            {
                id: value.id,
                ismi: value.ismi,
                phone: value.phone,
                data: value.data,
                img: value.img,
                checked: value.id === id ? !value.checked : value.checked
            }
        )))
    }


    useEffect(() => {
       dispatch(getStudyTypesFetch({ type: 'Talim Yunalish Qoshish Abuturent' }));

    }, [])

    return (
        <Container>
            <Container.Scrool style={{ overflowY: 'scroll', maxHeight: '550px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
                    <Container.Nav>
                        <div className='row'>
                            <div >№</div>
                            <div className='colum'>Talim Yunalish Turlari</div>
                            <div className='colum'>Action</div>
                        </div>
                    </Container.Nav>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
                    {data.map((value) => {
                        return (
                            <ConTable key={value.id}>
                                <div className='row'>
                                    <div >{value.id}</div>
                                    <div className='colum'>{value.ismi}</div>
                                    <div className='colum'>{value.phone}</div>
                                </div>
                            </ConTable>
                        )
                    })}
                </div>
            </Container.Scrool>
        </Container>
    )
}

export default TalimYunlishAddCom