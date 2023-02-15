import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStudyTypesFetch } from '../../../../../redux/slices/getStudyTypes'
import Button from '../../../../generic/Button/index.jsx'
import Input from '../../../../generic/Input/index.jsx'
import Container, { AntSelect, ConTable } from './style.js'
import facultyTypeUz, { facultySirtqi } from "../../../../Mock/facultyType/index.js"

import getStudyTypesAbuturent from "../../../../../redux/sliceAdmin/talimyunlishAdd/getStudyTypesAdmin/index.jsx"
import { getfacultyIdfetch } from '../../../../../redux/sliceAdmin/talimYunalishTurlari/postFacultet/index.js'
import facultytypesId from "../../../../../redux/sliceAdmin/talimYunalishTurlari/postFacultet/index.js"
import { useRef } from 'react'
import { postaFacultyTypeAdd } from '../../../../../redux/sliceAdmin/talimYunalishTurlari/postFacultyTypeAdd/index.js'

export const TalimYunalishTypeAddCom = () => {

  const dispatch = useDispatch()

  const [checked, setChecked] = useState(true)
  const [dataList, setDataList] = useState([])
  const [data, setData] = useState([])


  const [datapush, setDatapush] = useState({
    contractPrice: '',
    admissionStudentCount: '',
    studyLanguage: '',
    educationType: ''

  })

  const facultytypesId = useSelector((store) => store.facultytypesId)
  const getStudyTypesAbuturent = useSelector((store) => store.getStudyTypesAbuturent)



  useEffect(() => { dispatch(getStudyTypesFetch({ type: 'BACHELOR' })) }, [])
  useEffect(() => {
    if ((getStudyTypesAbuturent.status === 'success')) setDataList(getStudyTypesAbuturent.data)
  }, [getStudyTypesAbuturent])

  useEffect(() => {
    setData(facultytypesId.data)
  }
    , [facultytypesId.data])


  const handelChangeId = (e) => {
    dispatch(getfacultyIdfetch({ id: e }))

  }
  useEffect(() => {
    dispatch(getfacultyIdfetch({ id: 1 }))
  }, [getfacultyIdfetch])



  const pushFunc = () => {
    dispatch(postaFacultyTypeAdd({
      id: facultytypesId.id,
      contractPrice: datapush.contractPrice,
      admissionStudentCount: datapush.admissionStudentCount,
      studyLanguage: datapush.studyLanguage,
      educationType: datapush.educationType,
    }))

  }
  return (
    <Container>
      <AntSelect
        style={{ width: '500px', marginBottom: '20px' }}
        placeholder='Facultet Turilar'
        optionFilterProp="children"
        options={dataList?.map((value) => ({
          value: value.id,
          label: value.name,
        })) || []}
        onChange={(e) => handelChangeId(e)}
      />

      <Container.Scrool style={{ overflowY: 'scroll', maxHeight: '450px', overflowX: "scroll", maxWidth: '990px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
          <Container.Nav>
            <div className='row'>
              <div > {facultytypesId.id}</div>
              <div className='columAdd'>  <Input className="inputFaculty" onchange={(e) => (setDatapush({ ...datapush, contractPrice: e.target.value }))} type={'Number'} width={'200px'} height={'50px'} radius={'0px'} size={'14px'} padding={'0px 5px'} placeholder={'Contract summasi qo`shish'} /></div>
              <div className='columAdd'>  <Input className="inputFaculty" onchange={(e) => (setDatapush({ ...datapush, admissionStudentCount: e.target.value }))} type={'Number'} width={'150px'} height={'50px'} radius={'0px'} size={'14px'} padding={'0px 5px'} placeholder={'Qabul qilish soni'} /></div>
              <div className='columAdd'>
                <AntSelect
                  style={{ width: '167px' }}
                  placeholder='Talim Tili'
                  optionFilterProp="children"
                  options={facultyTypeUz?.map((value) => ({
                    label: value.name,
                    value: value.name,
                  })) || []}
                  onChange={(e) => setDatapush({ ...datapush, studyLanguage: e })} />
              </div>
              <div className='columAdd'>
                <AntSelect
                  style={{ width: '200px' }}
                  placeholder='Talim Turi'
                  optionFilterProp="children"
                  options={facultySirtqi?.map((value) => ({
                    value: value.name,
                    label: value.name,
                  })) || []}
                  onChange={(e) => setDatapush({ ...datapush, educationType: e })}
                />
              </div>
              <div className='columAdd'><Button onclick={() => pushFunc()} width={'100px'} height={'50px'} radius={'5px'} size={'16px'} >Add</Button></div>
              <div className='columAdd'></div>
            </div>

            <div className='row'>
              <div >№</div>
              <div className='colum'>Kantirakt Narxi</div>
              <div className='colum'>Student soni</div>
              <div className='colum'>Talim tili</div>
              <div className='colum'>Ta`lim turi</div>
              <div className='colum'>Action</div>
              <div className='colum'>Status</div>
            </div>
          </Container.Nav>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
          {data?.map((value, index) => {
            return (
              <ConTable key={value.id}>
                <div className='row'>
                  <div >{index + 1}</div>
                  <div className='colum'>{value?.contractPrice || '970$'}</div>
                  <div className='colum'>{value.admissionStudentCount || 0}</div>
                  <div className='colum'>{value.studyLanguage}</div>
                  <div className='colum'>{value.educationType}</div>
                  <div className='colum'>
                    <div className="action">
                      <Button width={'70px'} height={'40px'} size={'18px'} radius={'5px'} border={'1px solid red'}> Edit</Button>
                    </div>
                  </div>
                  <div className='colum'>
                    <Input type="checkbox" defaultChecked={true}
                      onChange={() => setChecked(!checked)} />
                  </div>
                </div>
              </ConTable>
            )
          })}
        </div>
      </Container.Scrool>
    </Container>
  )
}
export default TalimYunalishTypeAddCom