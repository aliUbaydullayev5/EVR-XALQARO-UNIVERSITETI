import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStudyTypesFetch } from '../../../../../redux/slices/getStudyTypes'
import Button from '../../../../generic/Button/index.jsx'
import Input from '../../../../generic/Input/index.jsx'
import Container, { AntSelect, ConTable } from './style.js'
import facultyTypeUz, { facultySirtqi } from "../../../../Mock/facultyType/index.js"
import { editAbuturentFetch } from '../../../../../redux/sliceAdmin/talimyunlishAdd/editPutAbuturent'
import getStudyTypesAbuturent from "../../../../../redux/sliceAdmin/talimyunlishAdd/getStudyTypesAdmin/index.jsx"
import { getfacultyIdfetch } from '../../../../../redux/sliceAdmin/talimYunalishTurlari/postFacultet/index.js'
import facultytypesId from "../../../../../redux/sliceAdmin/talimYunalishTurlari/postFacultet/index.js"
import { useRef } from 'react'
import { postaFacultyTypeAdd } from '../../../../../redux/sliceAdmin/talimYunalishTurlari/postFacultyTypeAdd/index.js'
import { startMessage } from '../../../../../redux/slices/message/index.js'
import { reset } from '../../../../../redux/sliceAdmin/talimyunlishAdd/index.js'


export const TalimYunalishTypeAddCom = () => {

  const dispatch = useDispatch()

  const [checked, setChecked] = useState(true)
  const [dataList, setDataList] = useState([])
  const [data, setData] = useState([])

  const [select, setSelect] = useState({
    studyLanguage: '',
    educationType: ''
  })

  const [datapush, setDatapush] = useState({
    contractPrice: '',
    admissionStudentCount: '',
    studyLanguage: '',
    educationType: ''
  })

  const facultytypesId = useSelector((store) => store.facultytypesId)
  const getStudyTypesAbuturent = useSelector((store) => store.getStudyTypesAbuturent)
  const facultyTypeAdd = useSelector((store) => store.facultyTypeAdd)


  useEffect(() => {
    if ((getStudyTypesAbuturent.status === 'success')) setDataList(getStudyTypesAbuturent.data)
  }, [getStudyTypesAbuturent])

  useEffect(() => {
    setData(facultytypesId.data)
  }, [facultytypesId.data])


  const handelChangeId = (e) => {
    dispatch(getfacultyIdfetch({ id: e }))
 
  }

  useEffect(() => {
    dispatch(getfacultyIdfetch({ id: 1 }))
  }, [getfacultyIdfetch])


  const pushFunc = () => {
    dispatch(postaFacultyTypeAdd({
      id: 0,
      facultytypesId: facultytypesId.id,
      contractPrice: datapush.contractPrice,
      admissionStudentCount: datapush.admissionStudentCount,
      studyLanguage: datapush.studyLanguage,
      educationType: datapush.educationType,
    }))
  }

  const findEditID = (id) => {
    setData(
      data?.map((value) => ({
        id: value.id,
        contractPrice: value.contractPrice,
        admissionStudentCount: value.admissionStudentCount,
        studyLanguage: value.studyLanguage,
        educationType: value.educationType,
        checkInput: id === value.id ? (!value.id || true) : false
      })))
  }

  const editPush = (id) => dispatch(postaFacultyTypeAdd({
    id: id,
    facultytypesId: facultytypesId.id,
    contractPrice: data[0]?.contractPrice,
    admissionStudentCount: data[0]?.admissionStudentCount,
    studyLanguage: select.studyLanguage,
    educationType: select.educationType,
  }));

  useEffect(() => {
    if (facultyTypeAdd.status === 'success') {
      setData(
        data?.map((value) => ({
          id: value.id,
          contractPrice: value.contractPrice,
          admissionStudentCount: value.admissionStudentCount,
          studyLanguage: value.studyLanguage,
          educationType: value.educationType,
          checkInput: false
        })))}
  }, [facultyTypeAdd])
  


  useEffect(() => {
    if (facultyTypeAdd.status === 'success') dispatch(startMessage({ time: 3, message: 'Muvofiyaqatli Yakunlandi', type: 'success' }))
    else if (facultyTypeAdd.status === 'notFound') dispatch(startMessage({ time: 3, message: 'Hatolik Bor Qayta tekshirib ko`ring !!!' }))
    setTimeout(() => { dispatch(reset()) }, 500);
  }, [facultyTypeAdd])

  useEffect(() => { dispatch(getStudyTypesFetch({ type: 'BACHELOR' })) }, [])

  return (
    <Container>
      <AntSelect
        style={{ width: '500px', marginBottom: '20px' }}
        placeholder='Facultet Turilar'
        optionFilterProp="children"
        options={dataList?.map((value) => ({
          value: value.id,
          label: value.nameUz,
        })) || []}
        onChange={(e) => handelChangeId(e)}
      />

      <Container.Scrool style={{ overflowY: 'scroll', maxHeight: '450px', overflowX: "scroll", maxWidth: '990px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
          <Container.Nav>
            <div className='row'>
              <div >№</div>
              <div className='colum'>Kantirakt Narxi</div>
              <div className='colum'>Student soni</div>
              <div className='colum'>Talim tili</div>
              <div className='colum'>Ta`lim turi</div>
              <div className='colum'>Tahrirlash</div>
            </div>

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

  
          </Container.Nav>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
          {data?.map((value, index) => {
            return (
              <ConTable key={value.id}>
                <div className='row'>
                  <div >{index + 1}</div>
                  <div className='colum'>
                    {value?.checkInput ?
                      <Input size={'17px'} radius={'5px'} height={'50px'} value={value.contractPrice} onchange={(e) => setData(data.map((v) => ({
                        id: v.id,
                        contractPrice: value.id === v.id ? e.target.value : v.contractPrice,
                        admissionStudentCount: v.admissionStudentCount,
                        studyLanguage: v.studyLanguage,
                        educationType: v.educationType,
                        checkInput: v.checkInput
                      })))} />
                      :
                      <>
                        {value.contractPrice || '9998'}
                      </>
                    }
                  </div>
                  <div className='colum'>

                    {value?.checkInput ?
                      <Input size={'17px'} radius={'5px'} height={'50px'} value={value.admissionStudentCount} onchange={(e) => setData(data.map((v) => ({
                        id: v.id,
                        admissionStudentCount: value.id === v.id ? e.target.value : v.admissionStudentCount,
                        contractPrice: v.contractPrice,
                        studyLanguage: v.studyLanguage,
                        educationType: v.educationType,
                        checkInput: v.checkInput
                      })))} />
                      :
                      <>
                        {value.admissionStudentCount || '0'}
                      </>
                    }

                  </div>
                  <div className='colum'>

                    {
                      value.checkInput ?
                        <AntSelect
                          style={{ width: '167px' }}
                          placeholder='Talim Tili'
                          optionFilterProp="children"
                          options={facultyTypeUz?.map((value) => ({
                            label: value.name,
                            value: value.name,
                          })) || []}
                          onChange={(e) => setSelect({ ...select, studyLanguage: e })}
                        />
                        :
                        <>
                          {value?.studyLanguage}
                        </>
                    }
                  </div>
                  <div className='colum'>
                    {
                      value.checkInput ?


                        <AntSelect
                          style={{ width: '167px' }}
                          placeholder='Talim Turi'
                          optionFilterProp="children"
                          options={facultySirtqi?.map((value) => ({
                            label: value.name,
                            value: value.name,
                          })) || []}
                          onChange={(e) => setSelect({ ...select, educationType: e })}
                        />
                        :
                        <>
                          {value.educationType}

                        </>
                    }
                  </div>
                  <div className='colum'>
                    <div className="action">

                      {
                        value?.checkInput ?

                          <Button onclick={() => editPush(value.id)} width={'70px'} height={'40px'} size={'18px'} radius={'5px'} border={'1px solid red'}>OK</Button>
                          :
                          <Button onclick={() => findEditID(value.id)} width={'70px'} height={'40px'} size={'18px'} radius={'5px'} border={'1px solid red'}>Edit</Button>
                      }
                    </div>
                  </div>
                  <div className='colum'>
                    <Input height={'30px'} padding={'15px'} type="checkbox" defaultChecked={true} onChange={() => setChecked(!checked)} />
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