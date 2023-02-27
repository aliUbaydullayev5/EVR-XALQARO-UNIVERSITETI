import styled from "styled-components";
const Container = styled.div`
 width: 100%;
 display: grid; 
 padding: 0px 40px;
 gap: 10px;
 .btneEnd {
  display: flex;
  justify-content: end;
 }
`

const QuationUz = styled.div`
  background: rgba(34, 31, 81, 0.95);
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 15px;
  width: 100%;
  height: 530px;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;

  >div{
    display: flex;
    flex-direction: column;
    align-items: center;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-between;
    padding: 20px 0px;
    >form{
      display: flex;
      flex-direction: column;
      gap: 10px;
      >div{
        display: flex;
        gap: 10px;
        >input{
          height: 40px;
          width: 30px;
        }
      }

    }
  }
 
`
const QuationRu = styled.div`
  background: rgba(34, 31, 81, 0.95);
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 15px;
  width: 470px;
  height: 480px;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: space-between;
  padding: 30px 0px;




`

export { QuationUz }
export default Container