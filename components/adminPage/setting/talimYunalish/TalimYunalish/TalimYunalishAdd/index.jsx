import { getTalimYunalishFetch, reset } from '../../../../../../redux/sliceAdmin/talimyunlishAdd/index.js'
import { getStudyTypesFetch } from '../../../../../../redux/slices/getStudyTypes/index.jsx'
import { startMessage } from '../../../../../../redux/slices/message/index.js'
import Button from '../../../../../generic/Button/index.jsx'
import Input from '../../../../../generic/Input/index.jsx'
import Container, { ConTable } from './style.js'
import {Antmodal} from "../../../libary/bookLaunguage/style";
import Plus from "../../../../../../assets/icons/plus.svg";
import Edit from "../../../../../../assets/icons/edit.svg";
import Trash from "../../../../../../assets/icons/trash.svg";
import {useEffect ,useState} from "react";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {deleteAbuturentFetch} from "../../../../../../redux/sliceAdmin/talimyunlishAdd/deleteAbuturent";
export const TalimYunlishAddCom = () => {

  const quary = useRouter();
  const dispatch = useDispatch();
  const [name, setName] = useState({
    id: 0,
    nameUz: "",
    nameRu: "",
  });

  const [dataList, setDataList] = useState([]);
  const [open, setOpen] = useState(false);

  const getStudyTypes = useSelector((store) => store.getStudyTypes);
  const getStudyTypesAbuturent = useSelector((store) => store.getStudyTypesAbuturent
  );
  const deleteAbuturentId = useSelector((store) => store.deleteAbuturentId);
  const getTalimYunalish = useSelector((store) => store.getTalimYunalish);
  const editAbuturentId = useSelector((store) => store.editAbuturentId);

    useEffect(() => {
        if (getTalimYunalish.status === 'success') dispatch(startMessage({ time: 3, message: 'Muvofiyaqatli Yakulandi', type: 'success' })), setName({...name,nameUz:'',nameRu:''})
        else if (getTalimYunalish.status === 'notFound') dispatch(startMessage({ time: 3, message: getTalimYunalish.message.split('_').join(' ') }))
        setTimeout(() => { dispatch(reset()) }, 500);
    }, [getTalimYunalish])

    useEffect(() => {
        if (deleteAbuturentId.status === 'success') dispatch(startMessage({ time: 3, message: 'Muvofiyaqatli Yakulandi', type: 'success' })), setName({...name,nameUz:'',nameRu:''})
        else if (deleteAbuturentId.status === 'notFound') dispatch(startMessage({ time: 3, message: deleteAbuturentId.message.split('_').join(' ') }))
        setTimeout(() => { dispatch(reset()) }, 500);
    }, [deleteAbuturentId])

  useEffect(() => {
    dispatch(getStudyTypesFetch({ type: "BACHELOR" }));
  }, []);
  useEffect(
    (e) => {
      if (getTalimYunalish.status === true) setName("");
    },
    [getTalimYunalish]
  );

  const addFacultet = () =>
    dispatch(
      getTalimYunalishFetch({
        id: 0,
        nameUz: name.nameUz,
        nameRu: name.nameRu,
        studyType:'BACHELOR' 
      })
    );

  const findDeleteID = (deleteId) => {
      dispatch(deleteAbuturentFetch({ id: deleteId }))
  };




  const findEditID = (id) => {
    setDataList(
      dataList.map((value) => ({
        id: value.id,
        nameUz: value.nameUz,
        nameRu: value.nameRu,
        studyType: value.studyType,
        status: id === value.id ? !value.id || true : false,
      }))
    )};

  const editPush = (id,i) =>
    dispatch(
      getTalimYunalishFetch({
        id: id,
        nameUz: dataList[i].nameUz,
        nameRu: dataList[i].nameRu,
        studyType:'BACHELOR' 
      })
    );

  useEffect(() => {
    if (deleteAbuturentId.status === "success" ||editAbuturentId.status === "success" || getTalimYunalish.status === "success")
      dispatch(getStudyTypesFetch({ type: "BACHELOR" }));
  }, [deleteAbuturentId,editAbuturentId,getTalimYunalish]);


  useEffect(() => {
    if (getStudyTypesAbuturent.status === "success")
      setDataList(getStudyTypesAbuturent.data);
  }, [getStudyTypesAbuturent]);
    const modalAdd = () => setOpen(true)
    const handleCancel = () => setOpen(false);
  return ((
      <Container>
              <Container.Bottom>
                  <h1>Facultet Abuturent </h1>
                  <Antmodal open={open} onOk={addFacultet} onCancel={handleCancel}>
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
  ))
};

export default TalimYunlishAddCom;
