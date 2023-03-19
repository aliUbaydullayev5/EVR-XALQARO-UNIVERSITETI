import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStudyTypesFetch } from '../../../../../redux/slices/getStudyTypes'
import Button from '../../../../generic/Button/index.jsx'
import Input from '../../../../generic/Input/index.jsx'
import Container, {Antmodal, AntSelect, ConTable, TextStart} from './style.js'
import facultyTypeUz, { facultySirtqi } from "../../../../Mock/facultyType/index.js"
import { getfacultyIdfetch } from '../../../../../redux/sliceAdmin/talimYunalishTurlari/postFacultet/index.js'
import { postaFacultyTypeAdd } from '../../../../../redux/sliceAdmin/talimYunalishTurlari/postFacultyTypeAdd/index.js'
import { startMessage } from '../../../../../redux/slices/message/index.js'
import { reset } from '../../../../../redux/sliceAdmin/talimyunlishAdd/index.js'
import Plus from "../../../../../assets/icons/plus.svg";


export const TalimYunalishTypeAddCom = () => {
  const dispatch = useDispatch()

    const [open, setOpen] = useState(false);
    const [dataList, setDataList] = useState([])
    const [data, setData] = useState([])
    const [select, setSelect] = useState({
    studyLanguage: '',
    educationType: '',
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


  useEffect(() => {
    dispatch(getfacultyIdfetch({ id: 105 }))
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
    setData(data?.map((value) => ({
          id: value.id,
          contractPrice: value.contractPrice,
          admissionStudentCount: value.admissionStudentCount,
          studyLanguage: value.studyLanguage,
          educationType: value.educationType,
          checkInput: id === value.id ? (!value.id || true) : false
        })))
  }
  const editPush = (id,i) => dispatch(postaFacultyTypeAdd({
    id: id,
    facultytypesId: facultytypesId.id,
    contractPrice: data[i]?.contractPrice,
    admissionStudentCount: data[i]?.admissionStudentCount,
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
    if (facultyTypeAdd.status === 'success') dispatch(startMessage({ time: 3, message: 'Muvofiyaqatli Yakunlandi', type: 'success' })) && setDatapush({ ...datapush, contractPrice: '', admissionStudentCount: '', studyLanguage: '', educationType :''})
    else if (facultyTypeAdd.status === 'notFound') dispatch(startMessage({ time: 3, message: 'Hatolik Bor Qayta tekshirib ko`ring !!!' }))
    setTimeout(() => { dispatch(reset()) }, 500);
  }, [facultyTypeAdd])

  useEffect(() => { dispatch(getStudyTypesFetch({ type: 'BACHELOR' })) }, [])
  const modalAdd = () => setOpen(true)
  const handleCancel = () => setOpen(false);
  return (
      <>
      <Container>
        <Container.Bottom>
            <TextStart>
                <h1>Facultet Turlari </h1>
                <br/>
                <div>
                    <AntSelect
                        style={{ width: '500px', marginBottom: '20px' }}
                        placeholder='Facultet Turilar'
                        optionFilterProp="children"
                        options={dataList?.map((value) => ({
                            value: value.id,
                            label: value.nameUz,
                        })) || []}
                        onChange={(e) =>  dispatch(getfacultyIdfetch({ id: e }))}
                    />
                </div>
            </TextStart>
          <Antmodal open={open} onOk={pushFunc} onCancel={handleCancel}>
              <AntSelect
                  style={{ width: '500px', marginBottom: '20px' }}
                  placeholder='Facultet Turilar'
                  optionFilterProp="children"
                  options={dataList?.map((value) => ({
                      value: value.id,
                      label: value.nameUz,
                  })) || []}
                  onChange={(e) =>  dispatch(getfacultyIdfetch({ id: e }))}
              />
            <Container.Add>
              <div className='row'>
                <div className='columAdd'>
                    <Input className="inputFaculty" onchange={(e) => (setDatapush({ ...datapush, contractPrice: e.target.value }))} type={'Number'} width={'150px'} height={'50px'} radius={'0px'} size={'14px'} padding={'0px 5px'} placeholder={'Qabul qilish soni'} />
                </div>
                <div className='columAdd'>
                    <Input className="inputFaculty" onchange={(e) => (setDatapush({ ...datapush, admissionStudentCount: e.target.value }))} type={'Number'} width={'150px'} height={'50px'} radius={'0px'} size={'14px'} padding={'0px 5px'} placeholder={'Qabul qilish soni'} />
                </div>
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
              </div>

            </Container.Add>
          </Antmodal>
          <Container.AddFaculTypeBtn onClick={modalAdd}>
            <Plus /> &nbsp;   Qo’shish
          </Container.AddFaculTypeBtn>
        </Container.Bottom>
        <Container.Table>
          <Container.Scrool style={{ overflowY: "scroll" }}>
            <Container.Top>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <Container.Nav>
                  <div className="row">
                    <div >№</div>
                    <div className='colum'>Kantirakt Narxi</div>
                    <div className='colum'>Student soni</div>
                    <div className='colum'>Talim tili</div>
                    <div className='colum'>Ta`lim turi</div>
                    <div className='colum'>Tahrirlash</div>
                  </div>
                </Container.Nav>
              </div>
            </Container.Top>
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
                                {value?.admissionStudentCount || '0'}
                              </>}
                        </div>

                        <div className='colum'>
                          {value.checkInput ?
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
                                </>}
                        </div>
                        <div className='colum'>
                          {value.checkInput ?
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
                                {value?.educationType}
                              </>
                          }
                        </div>

                        <div className='colum'>
                          <div className="action">
                            {value?.checkInput ?
                                  <Button onclick={() => editPush(value.id)} width={'70px'} height={'40px'} size={'18px'} radius={'5px'} border={'1px solid red'}>OK</Button>
                                  :
                                  <Button onclick={() => findEditID(value.id)} width={'70px'} height={'40px'} size={'18px'} radius={'5px'} border={'1px solid red'}>Edit</Button>
                            }
                          </div>
                        </div>
                      </div>
                    </ConTable>
                );
              })}
            </div>
          </Container.Scrool>
        </Container.Table>
      </Container>
      </>
  )}
export default TalimYunalishTypeAddCom



