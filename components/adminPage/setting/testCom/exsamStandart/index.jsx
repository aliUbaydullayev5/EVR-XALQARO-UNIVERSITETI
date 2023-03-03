
import { useRouter } from 'next/router.js'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quationDeleteIdFetch } from '../../../../../redux/sliceAdmin/quation/quationDelete/index.js'
import { quationgetAll } from '../../../../../redux/sliceAdmin/quation/quationgett/index.js'
import { Button } from '../../../../generic/index.jsx'

import Container, { ConTable, ContBtn, TrueBal } from './style.js'


export const ExsamStandart = () => {

    const quary = useRouter()
    const dispatch = useDispatch()
    const [name, setName] = useState({
        id: 0,
        nameUz: '',
        nameRu: '',
    })

    const [dataList, setDataList] = useState([])

    const quationget = useSelector((store) => store.quationget)
    const quationDeleteId = useSelector((store) => store.quationDeleteId)


    useEffect(() => {
        dispatch(quationgetAll())
    }, [quationgetAll])

    useEffect(() => {
        if (quationget.status === 'success') setDataList(quationget.data)
    })



    useEffect(() => {
        if (quationDeleteId.status === 'success') dispatch(quationgetAll())
            
    }, [quationDeleteId])
    const findId = (id) => dispatch(quationDeleteIdFetch({ id: id }))
    return (
        <Container>
            <div>
                <ConTable>
                    <Container.Bottom>
                        <Container.BottomInset>
                            <Container.Nav>
                                <Container.Box>
                                    <div>№</div>
                                    <div>Imthon Fani</div>
                                    <div>Savol Uz</div>
                                    <div><b>A</b> &nbsp; JavobUz </div>
                                    <div><b>B</b> &nbsp;JavobUz </div>
                                    <div><b>C</b>&nbsp;JavobUz </div>
                                    <div><b>D</b>&nbsp;JavobUz </div>
                                    <div>Savol Ru</div>
                                    <div><b>A</b> &nbsp; JavobRu</div>
                                    <div><b>B</b>&nbsp; JavobRu</div>
                                    <div><b>C</b> &nbsp; JavobRu </div>
                                    <div><b>D</b> &nbsp; JavobRu </div>
                                    <div>Tahrirlash </div>
                                </Container.Box>
                            </Container.Nav>
                            {
                                dataList?.map((value, ind) => (
                                    <Container.Section key={value.id}>
                                        <Container.Map>
                                            <div>{ind + 1}</div>
                                            <div>{value?.examSubject?.name}</div>
                                            <div>{value?.textUz}</div>
                                            <div> {value?.answers[0]?.correct === true ? <b>A</b> : <span>A</span>} &nbsp; {value?.answers[0]?.nameUz}    </div>
                                            <div> {value?.answers[1]?.correct === true ? <b>B</b> : <span>B</span>} &nbsp;{value?.answers[1]?.nameUz}  </div>
                                            <div> {value?.answers[2]?.correct === true ? <b>C</b> : <span>C</span>} &nbsp;{value?.answers[2]?.nameUz} </div>
                                            <div> {value?.answers[3]?.correct === true ? <b>D</b> : <span>C</span>} &nbsp;{value?.answers[3]?.nameUz} </div>

                                            <div>{value?.textRu}</div>
                                            <div> {value?.answers[0]?.correct === true ? <b>A</b> : <span>A</span>} &nbsp; {value?.answers[0]?.nameRu}    </div>
                                            <div> {value?.answers[1]?.correct === true ? <b>B</b> : <span>B</span>} &nbsp;{value?.answers[1]?.nameRu}  </div>
                                            <div> {value?.answers[2]?.correct === true ? <b>C</b> : <span>C</span>} &nbsp;{value?.answers[2]?.nameRu} </div>
                                            <div> {value?.answers[3]?.correct === true ? <b>D</b> : <span>C</span>} &nbsp;{value?.answers[3]?.nameRu} </div>
                                            <ContBtn>
                                                <Button width={'100px'} height={'50x'} size={'13px'} radius={'5px'}>
                                                    Tahrirlash
                                                </Button>
                                                <Button onclick={() => findId(value.id)} width={'100px'} height={'50x'} size={'13px'} radius={'5px'}>
                                                    'Ochirish
                                                </Button>
                                            </ContBtn>
                                        </Container.Map>
                                    </Container.Section>
                                ))
                            }
                        </Container.BottomInset>
                    </Container.Bottom>
                </ConTable>
            </div>
        </Container>
    )
}

export default ExsamStandart