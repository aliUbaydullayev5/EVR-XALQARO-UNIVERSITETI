import { Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStudyTypesFetch } from '../../../../../redux/slices/getStudyTypes'
import Button from '../../../../generic/Button/index.jsx'
import Input from '../../../../generic/Input/index.jsx'
import Container, { AntSelect, ConTable } from './style.js'
import getStudyTypesAbuturent from "../../../../../redux/sliceAdmin/talimyunlishAdd/getStudyTypesAdmin/index.jsx"
import { getfacultyIdfetch, postTalimYunalishTurlariFetch } from '../../../../../redux/sliceAdmin/talimYunalishTurlari/postFacultet/index.js'
import facultytypesId from "../../../../../redux/sliceAdmin/talimYunalishTurlari/postFacultet/index.js"


export const TalimYunalishTypeAddCom = () => {

  const dispatch = useDispatch()

  const [checked, setChecked] = useState(true)
  const [dataList, setDataList] = useState([])

  const [data, setData] = useState([])

  const [getId, setgetId] = useState()

  const facultytypesId = useSelector((store) => store.facultytypesId)
  const getStudyTypesAbuturent = useSelector((store) => store.getStudyTypesAbuturent)


  useEffect(() => { dispatch(getStudyTypesFetch({ type: 'BACHELOR' })) }, [])

  useEffect(() => {
    if ((getStudyTypesAbuturent.status === 'success')) setDataList(getStudyTypesAbuturent.data)
  }, [getStudyTypesAbuturent])

  const handelChangeId = (e) => dispatch(getfacultyIdfetch({ id: e }))

  useEffect(() => {
    setData(facultytypesId.data)
  }, [facultytypesId.data])

  console.log(data, 'data');
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
              <Input width={'200px'} height={'45px'} size={'19px'} radius={'5px'} padding={'0px 10px'} />
            <div className='row'>
              <div >№</div>
              <div className='colum'>Kantirakt Narxi</div>
              <div className='colum'>Student soni</div>
              <div className='colum'>O`qish tili</div>
              <div className='colum'>Ta`lim turi</div>
              <div className='colum'>Action</div>
              <div className='colum'>Status</div>

            </div>
          </Container.Nav>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
          {data?.map((value,index) => {
            return (
              <ConTable key={value.id}>
                <div className='row'>
                  <div >{index +1}</div>
                  <div className='colum'>{value?.contractPrice || '970$' }</div>
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