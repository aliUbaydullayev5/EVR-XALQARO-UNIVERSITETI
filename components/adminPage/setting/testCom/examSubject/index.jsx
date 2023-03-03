import { Modal, Spin } from "antd";
import { useRouter } from "next/router.js";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { examsubjectCreatePost } from "../../../../../redux/sliceAdmin/exam/exsamsubjectcreate/index.js";
import Button from "../../../../generic/Button/index.jsx";
import Input from "../../../../generic/Input/index.jsx";
import Container, { ConTable } from "./style.js";
import { getAllexamsubjectFetch } from "../.../../../../../../redux/sliceAdmin/exam/getAllexamsubject";
import { examdeleteIdFetch } from "../../../../../redux/sliceAdmin/exam/examdeleteId/index.js";
import { startMessage } from "../../../../../redux/slices/message/index.js";
import { reset } from "../../../../../redux/sliceAdmin/talimyunlishAdd/index.js";
export const ExamSubjectCreate = () => {
  const quary = useRouter();
  const dispatch = useDispatch();

  const [name, setName] = useState({
    createAd: "",
    valueSet: "",
  });
  const [dataList, setDataList] = useState([]);
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
    dispatch(examdeleteIdFetch({ id: deletId }))
    
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 1000);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const getAllexamsubject = useSelector((store) => store.getAllexamsubject);
  const examsubjectcreate = useSelector((store) => store.examsubjectcreate);
  const examdeleteId = useSelector((store) => store.examdeleteId);

  const getStudyTypesAbuturent = useSelector(
    (store) => store.getStudyTypesAbuturent
  );

  useEffect(() => {
    if (examsubjectcreate.status === "success")
      dispatch(
        startMessage({
          time: 3,
          message: "Muvofiyaqatli Yakulandi",
          type: "success",
        })
      ),
        setName("");
    else if (examsubjectcreate.status === "notFound")
      dispatch(
        startMessage({
          time: 3,
          message: examsubjectcreate.message.split("_").join(""),
        })
      );
    setTimeout(() => {
      dispatch(reset());
    }, 500);
  }, [examsubjectcreate]);

  useEffect(() => {
    if (
      examsubjectcreate.status === "success" ||
      examdeleteId.status === "success"
    )
      dispatch(getAllexamsubjectFetch({ type: "BACHELOR" }));
  }, [examsubjectcreate, examdeleteId]);

  useEffect(() => {
    dispatch(getAllexamsubjectFetch({ type: "BACHELOR" }));
  }, [getAllexamsubjectFetch]);

  useEffect(() => {
    if (getAllexamsubject.status === "success")
      setDataList(getAllexamsubject.data);
  }, [getAllexamsubject]);

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

  const editPush = (id, i) =>
    dispatch(
      examsubjectCreatePost({
        id: id,
        nameUz: dataList[i].nameUz,
        nameRu: dataList[i].nameRu,
      })
    );

  const addFacultet = () =>
    dispatch(
      examsubjectCreatePost({
        id: 0,
        nameUz: name?.createAd,
        nameRu: name?.valueSet,
      })
    );

  console.log({ dataList }, "dataList[0].nameUz");
  console.log(dataList.nameRu, "dataList[0].nameRu");

  return (
    <Container>
      <Container.Scrool style={{ overflowY: "scroll", maxHeight: "550px" }}>
        <Container.Nav>
          <div className="row">
            <div>№</div>
            <div className="colum">Talim Yunalish Turlari</div>
            <div className="colum">Action</div>
          </div>
        </Container.Nav>

        <Container.Add>
          <Input
            placeholder={"Uzbek Tilidi kiriting"}
            onchange={(e) => setName({ ...name, createAd: e.target.value })}
            width={"330px"}
            height={"45px"}
            padding={"0px 10px"}
            size={"20px"}
            radius={"15px"}
          />
          <Input
            placeholder={"Rus Tilidi kiriting"}
            onchange={(e) => setName({ ...name, valueSet: e.target.value })}
            width={"330px"}
            height={"45px"}
            padding={"0px 10px"}
            size={"20px"}
            radius={"15px"}
          />
          <Button
            onclick={() => addFacultet()}
            width={"100px"}
            height={"45px"}
            size={"20px"}
            padding={"0px 10px"}
          >
            {" "}
            Add
          </Button>
        </Container.Add>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        ></div>
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
      <Modal style={{
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

export default ExamSubjectCreate;
