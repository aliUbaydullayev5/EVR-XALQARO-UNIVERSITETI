import Container from "./style";
import { Space, Select } from "antd";
import Button from "../generic/Button";
import data from "../Mock/examResult"

const ExamResultsComponent = () => {
  const formOfEducation = ["Barchasi", "Kunduzgi", "Sirtqi", "Kechgi"];
  const typeOfEducation = ["Barchasi", "Bakalavr", "Magistratura"];
  const course = ["Barchasi", "1-kurs", "2-kurs", "3-kurs", "4-kurs", "5-kurs"];
  const courseOfStudy = [
    "Barchasi",
    "Iqtisodiyot",
    "Logistika",
    "Geologiya",
    "Marketing",
    "Jaxon Siyosati",
    "Jismoniy Madaniyat",
    "Biologiya",
    "Tarix",
  ];
  return (
    <Container>
      <Container.Top> Test natijalari </Container.Top>
      <Container.Bottom>
        <Container.BottomSelect>
          <Space direction="vertical" style={{ width: "100%" }}>
            <Select
              defaultValue="Ta`lim shakli"
              style={{ width: 204, height: 41 }}
              options={formOfEducation.map((province) => ({
                label: province,
                value: province,
              }))}
            />
          </Space>
          <Space className="space" direction="vertical" style={{ width: "100%" }}>
            <Select
              className="select"
              defaultValue="Ta`lim turi"
              style={{ width: 183, height: 41 }}
              options={typeOfEducation.map((province) => ({
                label: province,
                value: province,
              }))}
            />
          </Space>
          <Space direction="vertical" style={{ width: "100%" }}>
            <Select
              defaultValue="Kurs"
              style={{ width: 124, height: 41 }}
              options={course.map((province) => ({
                label: province,
                value: province,
              }))}
            />
          </Space>
          <Space direction="vertical" style={{ width: "100%" }}>
            <Select
              defaultValue="Ta`lim yo`nalishi"
              style={{ width: 200, height: 41 }}
              options={courseOfStudy.map((province) => ({
                label: province,
                value: province,
              }))}
            />
          </Space>
        </Container.BottomSelect>
        <Container.Button>
          <Container.BottomDesc>
            {
              data.map((val)=>{
                return(
                  <Button key={val.id} msize="14px" mwidth="142px" mheight="34px" size="24px" width="253px" height="57px" >
                  {val.faculty} 
                </Button> 
                )
              })
            }
            
          </Container.BottomDesc>
        </Container.Button>
      </Container.Bottom>
    </Container>
  );
};

export default ExamResultsComponent;
