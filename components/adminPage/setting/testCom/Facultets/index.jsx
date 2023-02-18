import { useRouter } from 'next/router.js'
import React, { useEffect } from 'react'
import { Button, Input } from '../../../../generic/index.jsx'
import data from '../../../../Mock/rahbariyat/data.js'
import Container, { AntSelect, ConTable } from './style.js'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getStudyTypesAbuturent from "../../../../../redux/sliceAdmin/talimyunlishAdd/getStudyTypesAdmin"
import { getStudyTypesFetch } from '../../../../../redux/slices/getStudyTypes/index.jsx'
import exsamsubjectcreate, { examsubjectCreatePost } from '../../../../../redux/sliceAdmin/exam/exsamsubjectcreate/index.js'
import getAllexamsubject, { getAllexamsubjectFetch } from "../../../../../redux/sliceAdmin/exam/getAllexamsubject"

const FacultetsImthonCom = () => {

  const [datalist, setDataList] = useState([])
  const [datafan, setDatafFan] = useState([])
  const [facul, setFacul] = useState({
    facultet: '',
    firstExamSubjectId: '',
    secondExamSubjectId: '',
    firstExamSubjectBall: '',
    secondExamSubjectId: '',

  })

  const dispatch = useDispatch()
  const quarey = useRouter()

  const getStudyTypesAbuturent = useSelector((store) => store.getStudyTypesAbuturent)
  const getAllexamsubject = useSelector((store) => store.getAllexamsubject)
  const facultytypesId = useSelector((store) => store.facultytypesId)


  useEffect(() => { dispatch(getStudyTypesFetch({ type: 'BACHELOR' })) }, [])
  useEffect(() => {
    dispatch(getAllexamsubjectFetch())
    if ((getAllexamsubject.status === 'success')) setDatafFan(getAllexamsubject.data)
  }, [])

  useEffect(() => {
    if ((getStudyTypesAbuturent.status === 'success')) setDataList(getStudyTypesAbuturent.data)
  }, [getStudyTypesAbuturent])

  const addFunc = () => {
    dispatch(facultetsselectAdd(
      {
        facultet: facul.facultet,
        firstExamSubjectId: facul.firstExamSubjectId,
        secondExamSubjectId: facul.secondExamSubjectId,
        firstExamSubjectBall: facul.firstExamSubjectBall,
        secondExamSubjectId: facul.secondExamSubjectId, }
    ))
  }
  return (
    <Container>
      <Container.Scrool style={{ overflowY: 'scroll', maxHeight: '500px', overflowX: 'scroll', maxWidth: '1000px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
          <Container.Nav>
            <div className='row'>
              <div className='colum'>
                <AntSelect
                  style={{ width: '300px', }}
                  placeholder='Facultet Turilar '
                  optionFilterProp="children"
                  options={datalist?.map((value) => ({
                    value: value.id,
                    label: value.name,
                  })) || []}
                  onChange={(e) => setFacul({ facul, facultet: e })}
                />
              </div>
              <div className='colum'>
                <AntSelect
                  style={{ width: '300px', }}
                  placeholder='Birinchi Blog uchun '
                  optionFilterProp="children"
                  options={datafan?.map((value) => ({
                    value: value.id,
                    label: value.name,
                  })) || []}
                  onChange={(e) => setFacul({ facul, firstExamSubjectId: e })}
                />
              </div>
              <div className='colum'>
                <AntSelect
                  style={{ width: '300px', }}
                  placeholder='Ikkinchi Blog Uchun'
                  optionFilterProp="children"
                  options={datafan?.map((value) => ({
                    value: value.id,
                    label: value.name,
                  })) || []}
                  onChange={(e) => setFacul({ facul, secondExamSubjectId: e })}
                />
              </div>
              <div className='colum'>
                <Input onchange={(e) => setFacul({ facul, firstExamSubjectBall: e.target.value })} padding={'0px 5px'} width={'210px'} height={'50px'} radius={'5px'} size={'17px'} placeholder={'birinchi blog uchun ball'} />
              </div>
              <div className='colum'>
                <Input onchange={(e) => setFacul({ facul, secondExamSubjectBall: e.target.value })} padding={'0px 5px'} width={'210px'} height={'50px'} radius={'5px'} size={'17px'} placeholder={'ikkinchi blog uchun ball'} />
              </div>
              <div className='colum'>
                <Button onclick={() => addFunc()} width={'100px'} height={'50px'} radius={'5px'} size={'19px'}>Add</Button>
              </div>
            </div>
          </Container.Nav>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
          {data.map((value) => {
            return (
              <ConTable key={value.id}>
                <div className='row'>
                  <div >{value.id}</div>
                  <div >{value.id}</div>
                  <div >{value.id}</div>
                  <div >{value.id}</div>
                  <div >{value.id}</div>
                  <div >{value.id}</div>
                </div>
              </ConTable>
            )
          })}
        </div>
      </Container.Scrool>
    </Container>
  )
}
export default FacultetsImthonCom