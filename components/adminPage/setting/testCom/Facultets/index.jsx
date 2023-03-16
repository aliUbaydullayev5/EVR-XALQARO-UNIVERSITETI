import { useRouter } from 'next/router.js'
import React, { useEffect } from 'react'
import { Button, Input } from '../../../../generic/index.jsx'
import Container, { Antmodal, AntSelect, ConTable } from './style.js'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStudyTypesFetch } from '../../../../../redux/slices/getStudyTypes/index.jsx'
import { getAllexamsubjectFetch } from "../../../../../redux/sliceAdmin/exam/getAllexamsubject"
import { facultetsselectAddPost } from '../../../../../redux/sliceAdmin/facultets/facultetsAdd/index.js'
import { facultetsgetAllFetch } from '../../../../../redux/sliceAdmin/facultets/facultetsgetAll/index.js'
import { facultetsdeleteIdFetch } from '../../../../../redux/sliceAdmin/facultets/facultetsdeleteId/index.js'
import { startMessage } from '../../../../../redux/slices/message/index.js'
import { reset } from '../../../../../redux/sliceAdmin/talimyunlishAdd/index.js'
import Edit from "../../../../../assets/icons/edit.svg";
import Trash from "../../../../../assets/icons/trash.svg";
import Plus from "../../../../../assets/icons/plus.svg";

const FacultetsImthonCom = () => {

  const dispatch = useDispatch()
  const quarey = useRouter()

  const [datalist, setDataList] = useState([])
  const [datafan, setDataFan] = useState([])
  const [data, setData] = useState([])
  const [open, setOpen] = useState(false);

  const [facul, setFacul] = useState({
    facultet: '',
    firstExamSubjectId: '',
    secondExamSubjectId: '',
    firstExamSubjectBall: '',
    secondExamSubjectBall: '',
  })
  // function delete
  const findDeleteID = (deleteId) => {
    dispatch(facultetsdeleteIdFetch({ id: deleteId }))
  };
  const handleCancel = () => {
    setOpen(false);
  };


  const getStudyTypesAbuturent = useSelector((store) => store.getStudyTypesAbuturent)
  const getAllexamsubject = useSelector((store) => store.getAllexamsubject)
  const facultetsgetAll = useSelector((store) => store.facultetsgetAll)
  const facultetsdeleteId = useSelector((store) => store.facultetsdeleteId)
  const facultetsselectAdd = useSelector((store) => store.facultetsselectAdd)


  useEffect(() => {
    if (facultetsselectAdd.status === 'success') dispatch(startMessage({ time: 3, message: 'Muvofiyaqatli Yakulandi', type: 'success' }))
    else if (facultetsselectAdd.status === 'notFound') dispatch(startMessage({ time: 3, message: facultetsselectAdd.message.split('_').join(' '), type: 'error' }))

    else if (facultetsdeleteId.status === 'success') dispatch(startMessage({ time: 3, message: 'Muvofiyaqatli `Ochirildi', type: 'success' }))
    setTimeout(() => { dispatch(reset()) }, 500);
  }, [facultetsselectAdd, facultetsdeleteId])

  useEffect(() => { dispatch(getStudyTypesFetch({ type: 'BACHELOR' })) }, [])
  useEffect(() => {
    if (facultetsgetAll.status === 'success') setData(facultetsgetAll.data)
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

  useEffect(() => {
    if ((facultetsselectAdd.status === 'success') || (facultetsdeleteId.status === 'success')) dispatch(facultetsgetAllFetch())
    else if ((facultetsselectAdd.status === 'success')) {
      dispatch(startMessage({ time: 3, message: facultetsselectAdd.message, type: 'success' }))
    }
  }, [facultetsselectAdd, facultetsdeleteId])

  const changeAllDataFunc = ({id, value, type}) => {
    // const fakeData = data;
    // fakeData[type] = value;
    // setData(fakeData);
    // setData({ ...data, [type]: value });
    // console.log({ id, value, type }, 'dsadasdasd')
    // setData(
    //     data?.map((mainValue) => ({
    //       ...value,
    //       [type] : id === mainValue.id ? value : mainValue[type]
    //     }))
    // )
  }


  // value.faculty?.name
  // value?.firstExamSubject?.name
  // value?.secondExamSubject?.name
  const changeEditFuncFaculty = ({id, value}) => {
    setData(data?.map((mainValue)=> ({
      ...value,
      faculty: id === mainValue.id ? {...mainValue.faculty, name: value} : mainValue.faculty
    })))
  }

  const changeEditFuncfirstExamSubject = ({id, value}) => {
    console.log({id, value}, 'dsadassad')
    setData(data?.map((value)=> ({
      ...value,
      checkInput: id === value.id ? !value.checkInput : value.checkInput
    })))
  }
  const changeEditFuncsecondExamSubject = ({id, value}) => {
    console.log({id, value}, 'dsadassad')
    // setData(data?.map((value)=> ({
    //   ...value,
    //   checkInput: id === value.id ? !value.checkInput : value.checkInput
    // })))
  }


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
  const findEditID = (id) => {
    setData(data?.map((value)=> ({
      ...value,
      checkInput: id === value.id ? !value.checkInput : value.checkInput
    })))
  }

  const editPush = (id, i) => dispatch(facultetsselectAddPost({
    id: id,
    faculty: data[i]?.faculty,
    firstExamSubject: data[i]?.firstExamSubject,
    secondExamSubject: data[i]?.secondExamSubject,
  }));
  const modalAdd = () => setOpen(true);
  return (
    <Container>

      <Container.Text>
        <h1>Facultet Imthon Fanlar</h1>
        <Antmodal open={open} onOk={() => addFunc()}  onCancel={handleCancel}>
          <Container.Add>
            <div>
              <h1>Facultet Imthon Fanlar Blog Uchun  </h1>
            </div>
            <div>
              <p>Facultet Nomi</p>
            </div>
            <div>
              <AntSelect
                style={{ width: '280px', }}
                placeholder='Facultet Turilar '
                optionFilterProp="children"
                options={datalist?.map((value) => ({
                  value: value.id,
                  label: value.nameUz,
                })) || []}
                onChange={(e) => setFacul({ ...facul, facultet: e })}
              />
              <AntSelect
                style={{ width: '280px', }}
                placeholder='Birinchi Blog uchun '
                optionFilterProp="children"
                options={getAllexamsubject.status === 'success' && datafan?.map((value) => ({
                  value: value.id,
                  label: value.name,
                })) || []}
                onChange={(e) => setFacul({ ...facul, firstExamSubjectId: e })}
              />
              <AntSelect
                style={{ width: '280px', }}
                placeholder='Ikkinchi Blog Uchun'
                optionFilterProp="children"
                options={getAllexamsubject.status === 'success' && datafan?.map((value) => ({
                  value: value.id,
                  label: value.name,
                })) || []}
                onChange={(e) => setFacul({ ...facul, secondExamSubjectId: e })}
              />
            </div>
          </Container.Add>
        </Antmodal>
        <div onClick={modalAdd}>
          <Plus /> &nbsp;   Qo’shish
        </div>
      </Container.Text>
      <Container.Table>

        <Container.Scrool style={{ overflowY: 'scroll', maxHeight: '500px', overflowX: 'scroll', maxWidth: '1000px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
            <Container.Nav>
              <div className='row'>
                <div>Facultet Nomi</div>
                <div className="colum nocopy">Birinchi Blog Imthoni</div>
                <div className="colum nocopy">Ikkinchi Blog Imthoni</div>
                <div className="colum">Tahrirlash</div>
                <div className="colum">O’chirish</div>
              </div>
            </Container.Nav>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
            {getStudyTypesAbuturent.status === 'success' && data?.map((value, index) => {
              return (
                <ConTable key={value?.id}>
                  <div className='row'>

                    <div className='colum'>
                      {value?.checkInput ?
                        <Input
                            size={'17px'}
                            radius={'5px'}
                            height={'50px'}
                            onchange={(e)=> changeEditFuncFaculty({id: value.id, value: e.target.value})}
                            value={value.faculty.name}
                        />
                        :
                        <>
                          {value.faculty?.name}
                        </>
                      }
                    </div>

                    {/*<div className='colum'>*/}
                    {/*  {value?.checkInput ?*/}
                    {/*    <Input size={'17px'} radius={'5px'} height={'50px'} onchange={(e)=> changeEditFuncfirstExamSubject({id: value.id, value: e.target.value})} />*/}
                    {/*    :*/}
                    {/*    <>*/}
                    {/*      {value?.firstExamSubject?.name}*/}
                    {/*    </>*/}
                    {/*  }*/}
                    {/*</div>*/}
                    {/*<div className='colum'>*/}
                    {/*  {value?.checkInput ?*/}
                    {/*    <Input size={'17px'} radius={'5px'} height={'50px'} onchange={(e)=> changeEditFuncsecondExamSubject({id: value.id, value: e.target.value})} />*/}
                    {/*    :*/}
                    {/*    <>*/}
                    {/*      {value?.secondExamSubject?.name}*/}
                    {/*    </>}*/}
                    {/*</div>*/}
                    <div className='colum'>
                      <div className="action">
                        {value?.checkInput ?
                          <Button onclick={() => editPush(value.id)} width={'70px'} height={'40px'} size={'18px'} radius={'5px'} border={'1px solid red'}>OK</Button>
                          :
                          <Button onclick={() => findEditID(value.id)} width={'70px'} height={'40px'} size={'18px'} radius={'5px'} border={'1px solid red'}><Edit/></Button>
                        }
                      </div>
                    </div>
                    <div className="colum action">
                      <Button onclick={() => findDeleteID(value.id)} width={"70px"} height={"40px"} size={"13px"} radius={"5px"} border={"1px solid red"}> <Trash /> </Button>
                    </div>
                  </div>
                </ConTable>
              )
            })}
          </div>
        </Container.Scrool>
      </Container.Table>
    </Container>
  )
}
export default FacultetsImthonCom