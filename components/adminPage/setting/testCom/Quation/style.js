import styled from "styled-components";

const Wrapper =styled.div`
  padding: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  >h1{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: #FFFFFF;
    margin-bottom: 20px;
  }
`
const Container = styled.div`
 width: 100%;
 display: grid; 
 padding: 0 40px;
 gap: 10px;
 background: rgba(34, 31, 81, 0.95);
  box-shadow: 0 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 15px;
  height: 530px;
  

 .btneEnd {
  display: flex;
  justify-content: end;
 }
`
Container.Select = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`
const QuationUz = styled.div`
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
  box-shadow: 0 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 15px;
  width: 470px;
  height: 480px;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: space-between;
  padding: 30px 0px;




`

export { QuationUz ,Wrapper}
export default Container