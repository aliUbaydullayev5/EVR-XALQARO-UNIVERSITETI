import Container from "./style";
import Button from "../generic/Button";
import data from "../Mock/examResult"

const ExamResultsComponent = () => {

  return (
    <Container>
      <Container.Top className="nocopy"> Test natijalari </Container.Top>
      <Container.Bottom>
        <Container.BottomSelect>
          <select defaultValue='dsa' name="" id="">
            <option value="dsa" disabled={true}>Ta'lim shakli</option>
            <option value="">Barchasi</option>
            <option value="">Kunduzgi</option>
            <option value="">Sirtqi</option>
            <option value="">Kechgi</option>
          </select>
          <select defaultValue='dsa' name="" id="">
            <option value="dsa" disabled={true}>Ta'lim turi</option>
            <option value="">Barchasi</option>
            <option value="">Bakalavr</option>
            <option value="">Magistratura</option>
          </select>
          <select defaultValue='dsa' name="" id="">
            <option value="dsa" disabled={true}>Kurs</option>
            <option value="">Barchasi</option>
            <option value="">1-kurs</option>
            <option value="">2-kurs</option>
            <option value="">3-kurs</option>
            <option value="">4-kurs</option>
            <option value="">5-kurs</option>
          </select>
          <select defaultValue='dsa' name="" id="">
            <option value="dsa" disabled={true}>Ta'lim yo'nalishi</option>
            <option value="">Barchasi</option>
            <option value="">Kunduzgi</option>
            <option value="">Sirtqi</option>
            <option value="">Kechgi</option>
          </select>
        </Container.BottomSelect>
        <Container.Button>
          <Container.BottomDesc>
            {
              data.map((val)=>{
                return(
                  <Button key={val.id} msize="14px" mwidth="142px" mheight="34px" size="24px" width="353px" height="57px" >
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


// import { Space, Select } from "antd";

  // const formOfEducation = ["Barchasi", "Kunduzgi", "Sirtqi", "Kechgi"];
  // const typeOfEducation = ["Barchasi", "Bakalavr", "Magistratura"];
  // const course = ["Barchasi", "1-kurs", "2-kurs", "3-kurs", "4-kurs", "5-kurs"];
  // const courseOfStudy = [
  //   "Barchasi",
  //   "Iqtisodiyot",
  //   "Logistika",
  //   "Geologiya",
  //   "Marketing",
  //   "Jaxon Siyosati",
  //   "Jismoniy Madaniyat",
  //   "Biologiya",
  //   "Tarix",
  // ];

{/* <Space direction="vertical" style={{ width: "100%" }}>
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
          </Space> */}