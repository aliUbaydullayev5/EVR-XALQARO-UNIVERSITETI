
import { Spin } from 'antd'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTalimYunalishFetch, reset } from '../../../../../../redux/sliceAdmin/talimyunlishAdd/index.js'
import { getStudyTypesFetch } from '../../../../../../redux/slices/getStudyTypes/index.jsx'
import { startMessage } from '../../../../../../redux/slices/message/index.js'
import Button from '../../../../../generic/Button/index.jsx'
import Input from '../../../../../generic/Input/index.jsx'
import DataAriza from '../../../../../Mock/adminAriza/data.js'
import Container, { ConTable } from './style.js'

export const TalimYunlishAddCom = () => {

    const dispatch = useDispatch()
    const [data, setData] = useState(DataAriza)
    const [name, setName] = useState('')


    const talimYunalishAdmin = useSelector((store) => store.talimYunalishAdmin)

    useEffect(() => {
        if (talimYunalishAdmin.status === 'success') {
            dispatch(startMessage({ time: 3, message: 'Muvofiyaqatli qoshildi', type: 'success' }))
            setName('')
        } else if (talimYunalishAdmin.status === 'notFound') {
            dispatch(startMessage({ time: 3, message: 'Try again'}))
        }
        setTimeout(() => {
            dispatch(reset())
        }, 500);
    }, [talimYunalishAdmin])


    useEffect(() => {
        dispatch(getStudyTypesFetch({ type: 'Abuturent' }));
    }, [])

    const addFacultet = () => {
        dispatch(getTalimYunalishFetch({
            name: name,
        }));
    }

    console.log(talimYunalishAdmin, 'Redux')

    return (
        <Container>
            <Container.Scrool style={{ overflowY: 'scroll', maxHeight: '550px' }}>
                <Container.Add>
                    <Input onchange={(e) => setName(e.target.value)} value={name} width={'330px'} height={'45px'} padding={'0px 10px'} size={'20px'} radius={'15px'} />
              
                    {/* 
                    {talimYunalishAdmin.success === 'loading'?
                        <Container.ButtonLoader>
                            <Button width={'100px'} height={'45px'} size={'20px'} padding={'0px 10px'} disabled={true}>
                                <Spin  />
                            </Button>
                        </Container.ButtonLoader>
                        :
                        <Button onclick={() => addFacultet()} width={'100px'} height={'45px'} size={'20px'} padding={'0px 10px'} > Add</Button>
                    }
                     */}

                    {
                        talimYunalishAdmin.status === 'loading' &&
                        <Container.ButtonLoader>
                            <Button width={'100px'} height={'45px'} size={'20px'} padding={'0px 10px'} disabled={true}>
                                <Spin />
                            </Button>
                        </Container.ButtonLoader>
                    }

                    {
                        talimYunalishAdmin.status !== 'loading' &&
                        <Button onclick={() => addFacultet()} width={'100px'} height={'45px'} size={'20px'} padding={'0px 10px'} > Add</Button>
                    }
                    
                </Container.Add>
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