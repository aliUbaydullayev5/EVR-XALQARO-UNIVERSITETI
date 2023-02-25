import { useRouter } from 'next/router.js'
import React, { useEffect } from 'react'
import { Button, Input } from '../../../../generic/index.jsx'
import data from '../../../../Mock/rahbariyat/data.js'
import Container, { AntSelect, ConTable } from './style.js'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import getStudyTypesAbuturent from "../../../../../redux/sliceAdmin/talimyunlishAdd/getStudyTypesAdmin"
import { getStudyTypesFetch } from '../../../../../redux/slices/getStudyTypes/index.jsx'
import exsamsubjectcreate, { examsubjectCreatePost } from '../../../../../redux/sliceAdmin/exam/exsamsubjectcreate/index.js'
import { getAllexamsubjectFetch } from "../../../../../redux/sliceAdmin/exam/getAllexamsubject"
import { facultetsselectAddPost } from '../../../../../redux/sliceAdmin/facultets/facultetsAdd/index.js'
import { facultetsgetAllFetch } from '../../../../../redux/sliceAdmin/facultets/facultetsgetAll/index.js'
import facultetsdeleteId, { facultetsdeleteIdFetch } from '../../../../../redux/sliceAdmin/facultets/facultetsdeleteId/index.js'


const FacultetsImthonCom = () => {
  const [datalist, setDataList] = useState([])
  const [datafan, setDataFan] = useState([])
  const [data, setData] = useState([])

  const [facul, setFacul] = useState({
    facultet: '',
    firstExamSubjectId: '',
    secondExamSubjectId: '',
    firstExamSubjectBall: '',
    secondExamSubjectBall: '',
  })

  const dispatch = useDispatch()
  const quarey = useRouter()

  const getStudyTypesAbuturent = useSelector((store) => store.getStudyTypesAbuturent)
  const getAllexamsubject = useSelector((store) => store.getAllexamsubject)
  const facultetsselectAdd = useSelector((store) => store.facultetsselectAdd)

  const facultetsgetAll = useSelector((store) => store.facultetsgetAll)
  const facultetsdeleteId = useSelector((store) => store.deleteAbuturentId)




  useEffect(() => { dispatch(getStudyTypesFetch({ type: 'BACHELOR' })) }, [])
  useEffect(() => {
    if (facultetsgetAll.status === 'success')setData(facultetsgetAll.data)
  }, [facultetsgetAll])


  useEffect(() => {
    if ((getStudyTypesAbuturent.status === 'success')) setDataList(getStudyTypesAbuturent.data)
  }, [getStudyTypesAbuturent])

  useEffect(() => {
    dispatch(getAllexamsubjectFetch({ type: 'BACHELOR' }))
  }, [getAllexamsubjectFetch])

  useEffect(() => {
    if ((getAllexamsubject.status === 'success'))
      setDataFan(getAllexamsubject.data)
  }, [getAllexamsubject])

  useEffect(() => {
    dispatch(facultetsgetAllFetch())
  }, [facultetsgetAllFetch])

  const addFunc = () => {
    dispatch(facultetsselectAddPost(
      {
        id: 0,
        facultyId: facul.facultet,
        firstExamSubjectId: facul.firstExamSubjectId,
        secondExamSubjectId: facul.secondExamSubjectId,
        firstExamSubjectBall: facul.firstExamSubjectBall,
        secondExamSubjectBall: facul.secondExamSubjectBall,
      }
    ))
  }


  // edit
  // const findEditID = (id) => {
  //   setData(
  //     data?.map((value) => ({
  //       id: value.id,
  //       faculty: value?.faculty?.name,
  //       firstExamSubject: value.firstExamSubject?.name,
  //       firstExamSubjectBall: value.firstExamSubjectBall,
  //       secondExamSubject: value.secondExamSubject,
  //       secondExamSubjectBall: value.secondExamSubjectBall,
  //       checkInput: id === value.id ? (!value.id || true) : false
  //     })))
  // }

  const editPush = (id) => dispatch(postaFacultyTypeAdd({
    id: id,
    faculty: data?.faculty?.name,
    firstExamSubject: data[0]?.firstExamSubject?.name,
    firstExamSubjectBall: data[0]?.firstExamSubjectBall,
    secondExamSubject: data?.secondExamSubject,
    secondExamSubjectBall: data?.secondExamSubjectBall,
  }));

  const findDeleteID = (deleteId) => dispatch(facultetsdeleteIdFetch({ id: deleteId }))

  return (
    <Container>
      <Container.Scrool style={{ overflowY: 'scroll', maxHeight: '500px', overflowX: 'scroll', maxWidth: '1000px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
          <Container.Nav>
            <div className='row'>
              <div className='colum'>
                <AntSelect
                  style={{ width: '400px', }}
                  placeholder='Facultet Turilar '
                  optionFilterProp="children"
                  options={datalist?.map((value) => ({
                    value: value.id,
                    label: value.nameUz,
                  })) || []}
                  onChange={(e) => setFacul({ ...facul, facultet: e })}
                />
              </div>
              <div className='colum'>
                <AntSelect
                  style={{ width: '300px', }}
                  placeholder='Birinchi Blog uchun '
                  optionFilterProp="children"
                  options={datafan?.map((value) => ({
                    value: value.id,
                    label: value.nameUz,
                  })) || []}
                  onChange={(e) => setFacul({ ...facul, firstExamSubjectId: e })}
                />
              </div>
              <div className='colum'>
                <AntSelect
                  style={{ width: '300px', }}
                  placeholder='Ikkinchi Blog Uchun'
                  optionFilterProp="children"
                  options={datafan?.map((value) => ({
                    value: value.id,
                    label: value.nameUz,
                  })) || []}
                  onChange={(e) => setFacul({ ...facul, secondExamSubjectId: e })}
                />
              </div>
              <div className='colum'>
                <Input onchange={(e) => setFacul({ ...facul, firstExamSubjectBall: e.target.value })} padding={'0px 5px'} width={'200px'} height={'50px'} radius={'5px'} size={'16px'} placeholder={'birinchi blog uchun ball'} />
              </div>
              <div className='colum'>
                <Input onchange={(e) => setFacul({ ...facul, secondExamSubjectBall: e.target.value })} padding={'0px 5px'} width={'200px'} height={'50px'} radius={'5px'} size={'16px'} placeholder={'ikkinchi blog uchun ball'} />
              </div>
              <div className='colum'>
                <Button onclick={() => addFunc()} width={'100px'} height={'50px'} radius={'5px'} size={'19px'}>Add</Button>
              </div>
              <div></div>
            </div>
          </Container.Nav>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
          {data?.map((value) => {
            return (
              <ConTable key={value.id}>

                <div className='row'>
                  <div>
                    {value?.checkInput ?
                      <Input size={'17px'} radius={'5px'} height={'50px'} />
                      :
                      <>
                        {value?.faculty?.nameUz}
                      </>}
                  </div>
                  <div>
                    {value?.checkInput ?
                      <Input size={'17px'} radius={'5px'} height={'50px'} />
                      :
                      <>
                        {value?.firstExamSubject?.nameUz}
                      </>}
                  </div>

                  <div>
                    {value?.checkInput ?
                      <Input size={'17px'} radius={'5px'} height={'50px'} />
                      :
                      <>
                        {value?.secondExamSubject?.nameUz}
                      </>}
                  </div>
                  <div>
                    {value?.checkInput ?
                      <Input size={'17px'} radius={'5px'} height={'50px'} />
                      :
                      <>
                        {value?.firstExamSubjectBall}
                      </>}
                  </div>

                  <div>
                    {value?.checkInput ?
                      <Input size={'17px'} radius={'5px'} height={'50px'} />
                      :
                      <>
                        {value?.secondExamSubjectBall}
                      </>}
                  </div>
                 
 
                  <div className='action'>
                    {
                      value?.checkInput ?

                        <Button onclick={() => editPush(value.id)} width={'70px'} height={'40px'} size={'18px'} radius={'5px'} border={'1px solid red'}>OK</Button>
                        :
                        <Button onclick={() => findEditID(value.id)} width={'70px'} height={'40px'} size={'18px'} radius={'5px'} border={'1px solid red'}>Edit</Button>
                    }
                  </div>
                  <div>
                    <Button onclick={() => findDeleteID(value.id)} width={'70px'} height={'40px'} size={'18px'} radius={'5px'} border={'1px solid red'}>Delete</Button>
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
export default FacultetsImthonCom