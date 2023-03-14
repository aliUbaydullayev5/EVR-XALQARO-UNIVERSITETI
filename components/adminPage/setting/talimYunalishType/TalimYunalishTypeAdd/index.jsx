import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStudyTypesFetch } from '../../../../../redux/slices/getStudyTypes'
import Button from '../../../../generic/Button/index.jsx'
import Input from '../../../../generic/Input/index.jsx'
import Container, { AntSelect, ConTable } from './style.js'
import facultyTypeUz, { facultySirtqi } from "../../../../Mock/facultyType/index.js"
import { getfacultyIdfetch } from '../../../../../redux/sliceAdmin/talimYunalishTurlari/postFacultet/index.js'
import { postaFacultyTypeAdd } from '../../../../../redux/sliceAdmin/talimYunalishTurlari/postFacultyTypeAdd/index.js'
import { startMessage } from '../../../../../redux/slices/message/index.js'
import { reset } from '../../../../../redux/sliceAdmin/talimyunlishAdd/index.js'
import {Antmodal} from "../../libary/bookLaunguage/style";
import Plus from "../../../../../assets/icons/plus.svg";
import Edit from "../../../../../assets/icons/edit.svg";
import Trash from "../../../../../assets/icons/trash.svg";


export const TalimYunalishTypeAddCom = () => {

  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
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
  const modalAdd = () => setOpen(true)
  const handleCancel = () => setOpen(false);
  return (
      <Container>
        <Container.Bottom>
          <h1>Facultet Abuturent </h1>
          <Antmodal open={open} onOk={pushFunc} onCancel={handleCancel}>
            <Container.Add>
              <div>
                <h1>Facultet Qo`shish Abuturent </h1>
              </div>
              <br />
              <div>
                <p>Facultet Nomi</p>
              </div> <br />
              <div>
                <Input onchange={(e) => setName({...name, nameUz: e.target.value} )} value={name.nameUz} mwidth={"340px"} mheight={"40px"} width={"340px"} height={"45px"} padding={"0px 10px"} size={"20px"} radius={"5px"} placeholder={`Nomi uzbek tilida kiriting`} />
                <Input onchange={(e) => setName({...name, nameRu: e.target.value} )} value={name.nameRu} mwidth={"340px"} mheight={"40px"} width={"340px"} height={"45px"} padding={"0px 10px"} size={"20px"} radius={"5px"} placeholder={`Nomi rus tilida kiriting`} />

              </div>

            </Container.Add>

          </Antmodal>
          <div onClick={modalAdd}>
            <Plus /> &nbsp;   Qo’shish
          </div>
        </Container.Bottom>
        <Container.Table>
          <Container.Scrool style={{ overflowY: "scroll" }}>
            <Container.Top>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <Container.Nav>
                  <div className="row">
                    <div>№</div>
                    <div className="colum nocopy">Facultet Uz</div>
                    <div className="colum nocopy">Facultet Ru</div>

                    <div className="colum">Action</div>
                  </div>
                </Container.Nav>
              </div>
            </Container.Top>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {dataList?.map((value, index) => {
                return (
                    <ConTable key={value.id}>
                      <div className="row">
                        <div>{index + 1}</div>
                        <div className="colum">
                          {value?.status ? (
                              <input value={value.nameUz} onChange={(e) => setDataList(dataList.map((val) => ({
                                id: val.id,
                                nameUz: value.id === val.id ? e.target.value : val.nameUz,
                                nameRu: val.nameRu,
                                studyType: val.studyType,
                                status: val.status, })) )}
                              />
                          ) : (
                              <>{value.nameUz}</>
                          )}
                        </div>
                        <div className="colum">
                          {value?.status ? (
                              <input
                                  value={value.nameRu}
                                  onChange={(e) =>
                                      setDataList(
                                          dataList.map((val) => ({
                                            id: val.id,
                                            nameUz: val.nameUz,
                                            nameRu:
                                                value.id === val.id
                                                    ? e.target.value
                                                    : val.nameRu,
                                            studyType: val.studyType,
                                            status: val.status,
                                          }))
                                      )
                                  }
                              />
                          ) : (
                              <>{value.nameRu}</>
                          )}
                        </div>
                        <div className="action">
                          {value?.status ? (
                              <Button
                                  onclick={() => editPush(value.id, index)}
                                  width={"70px"}
                                  height={"40px"}
                                  size={"18px"}
                                  radius={"5px"}
                                  border={"1px solid red"}
                              >
                                OK
                              </Button>
                          ) : (
                              <Button onclick={() => findEditID(value.id)} width={"70px"} height={"40px"} size={"12px"} radius={"5px"} border={"1px solid red"}  > <Edit /> </Button>
                          )}

                          <Button onclick={() => findDeleteID(value.id)} width={"70px"} height={"40px"} size={"13px"} radius={"5px"} border={"1px solid red"}> <Trash /></Button>
                        </div>
                      </div>
                    </ConTable>
                );
              })}
            </div>
          </Container.Scrool>
        </Container.Table>
      </Container>
      )}
export default TalimYunalishTypeAddCom



