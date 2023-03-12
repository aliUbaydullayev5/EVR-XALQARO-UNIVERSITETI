import { Modal } from "antd";
import { useRouter } from "next/router.js";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAbuturentFetch } from "../../../../../../redux/sliceAdmin/talimyunlishAdd/deleteAbuturent/index.js";
import { editAbuturentFetch } from "../../../../../../redux/sliceAdmin/talimyunlishAdd/editPutAbuturent/index.js";
import {getTalimYunalishFetch,reset,} from "../../../../../../redux/sliceAdmin/talimyunlishAdd/index.js";
import { getStudyTypesFetch } from "../../../../../../redux/slices/getStudyTypes/index.jsx";
import { startMessage } from "../../../../../../redux/slices/message/index.js";
import Button from "../../../../../generic/Button/index.jsx";
import Input from "../../../../../generic/Input/index.jsx";
import Container, { ConTable } from "./style.js";

export const TalimYunlishMaster = () => {
  // delete
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [deletId, setDeletId] = useState("");

  // function delete
  const findDeleteID = (deleteId) => {
    setOpen(true);
    setDeletId(deleteId);
  };

  const handleOk = () => {
    dispatch(deleteAbuturentFetch({ id: deletId }));
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 1000);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const quary = useRouter();
  const dispatch = useDispatch();
  const [name, setName] = useState({
    id: 0,
    nameUz: "",
    nameRu: "",
  });

  const [dataList, setDataList] = useState([]);

  const getStudyTypes = useSelector((store) => store.getStudyTypes);
  const getStudyTypesAbuturent = useSelector(
    (store) => store.getStudyTypesAbuturent
  );
  const deleteAbuturentId = useSelector((store) => store.deleteAbuturentId);
  const getTalimYunalish = useSelector((store) => store.getTalimYunalish);
  const editAbuturentId = useSelector((store) => store.editAbuturentId);

  useEffect(() => {
    if (getTalimYunalish.status === "success")
      dispatch(
        startMessage({
          time: 3,
          message: "Muvofiyaqatli Yakulandi",
          type: "success",
        }),
        setName({
          ...name,
          nameUz: "",
          ...name,
          nameRu: "",
        })
      );
    else if (getTalimYunalish.status === "notFound")
      dispatch(startMessage({ time: 3, message: getStudyTypes.message }));
    setTimeout(() => {
      dispatch(reset());
    }, 500);
  }, [getTalimYunalish || deleteAbuturentId]);

  useEffect(() => {
    dispatch(getStudyTypesFetch({ type: "MASTERS" }));
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
        studyType: "MASTERS",
      })
    );

  const findEditID = (id) => {
    setDataList(
      dataList.map((value) => ({
        id: value.id,
        nameUz: value.nameUz,
        nameRu: value.nameRu,
        studyType: value.studyType,
        status: id === value.id ? !value.id || true : false,
      }))
    );
  };

  const editPush = (id) =>
    dispatch(
      getTalimYunalishFetch({
        id: id,
        nameUz: dataList[0].nameUz,
        nameRu: dataList[0].nameRu,
        studyType: "MASTERS",
      })
    );

  useEffect(() => {
    if (deleteAbuturentId.status === "success")
      dispatch(getStudyTypesFetch({ type: "MASTERS" }));
  }, [deleteAbuturentId]);

  useEffect(() => {
    if (getTalimYunalish.status === "success")
      dispatch(getStudyTypesFetch({ type: "MASTERS" }));
  }, [getTalimYunalish]);

  useEffect(() => {
    if (getStudyTypesAbuturent.status === "success")
      setDataList(getStudyTypesAbuturent.data);
  }, [getStudyTypesAbuturent]);

  useEffect(() => {
    if (editAbuturentId.status === "success")
      dispatch(getStudyTypesFetch({ type: "MASTERS" }));
  }, [editAbuturentId]);

  return (
    <Container>
      <Container.Scrool style={{ overflowY: "scroll", maxHeight: "550px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Container.Nav>
            <div className="row">
              <div>№</div>
              <div className="colum">Talim Yunalish Turlari</div>
              <div className="colum">Action</div>
            </div>
          </Container.Nav>
        </div>

        <Container.Add>
          <Input
            onchange={(e) => setName({ ...name, nameUz: e.target.value })}
            value={name.nameUz}
            width={"330px"}
            height={"45px"}
            padding={"0px 10px"}
            size={"20px"}
            radius={"5px"}
            placeholder={`Uzbek Tilida kiriting`}
          />
          <Input
            onchange={(e) => setName({ ...name, nameRu: e.target.value })}
            value={name.nameRu}
            width={"330px"}
            height={"45px"}
            padding={"0px 10px"}
            size={"20px"}
            radius={"5px"}
            placeholder={` Ruscha kiriting`}
          />

          <Button
            onclick={() => addFacultet()}
            width={"100px"}
            height={"45px"}
            size={"20px"}
            padding={"0px 10px"}
            radius={" 15px"}
          >
            {" "}
            Add
          </Button>
        </Container.Add>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {dataList?.map((value, index) => {
            return (
              <ConTable key={value.id}>
                <div className="row">
                  <div>{index + 1}</div>
                  <div className="colum">
                    {value?.status ? (
                      <input
                        value={value.nameUz}
                        onChange={(e) =>
                          setDataList(
                            dataList.map((val) => ({
                              id: val.id,
                              nameUz:
                                value.id === val.id
                                  ? e.target.value
                                  : val.nameUz,
                              nameRu: val.nameRu,
                              studyType: val.studyType,
                              status: val.status,
                            }))
                          )
                        }
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
                        onclick={() => editPush(value.id)}
                        width={"70px"}
                        height={"40px"}
                        size={"18px"}
                        radius={"5px"}
                        border={"1px solid red"}
                      >
                        OK
                      </Button>
                    ) : (
                      <Button
                        onclick={() => findEditID(value.id)}
                        width={"70px"}
                        height={"40px"}
                        size={"18px"}
                        radius={"5px"}
                        border={"1px solid red"}
                      >
                        Edit
                      </Button>
                    )}

                    <Button
                      onclick={() => findDeleteID(value.id)}
                      width={"70px"}
                      height={"40px"}
                      size={"18px"}
                      radius={"5px"}
                      border={"1px solid red"}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </ConTable>
            );
          })}
        </div>
      </Container.Scrool>
      <Modal
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "100px",
        }}
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p
          style={{
            color: "#ffff",
            width: "300px",
            height: "100px",
            textAlign: "center",
            paddingTop: "35px",
          }}
        >
          Ushbu ma'lumotlar o'chirib yuborilsinmi?
        </p>
      </Modal>
    </Container>
  );
};

export default TalimYunlishMaster;
