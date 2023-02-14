import styled from "styled-components";

const Container = styled.div`
 width: 100%;
 max-width: 1440px;
 padding: 10px 50px;
 display: grid; 
 grid-template-columns: auto auto ;
`
Container.Text = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 44px;
  line-height: 78px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
 

`
Container.Uzb = styled.div`
  display: flex;
  background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.54);
  border-radius: 5px;
  width: 144px;
  height: 39px;
  
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 10px;
  gap: 10px;


   .textP{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
  } 
    .input {
    -webkit-appearance: none;
    width: 16px !important;
    height: 12px !important;
    border-radius: 25px !important;
    cursor: pointer;
    background-color: rgba(232, 232, 232, 0);
    border: 2px solid #fff;
  }

  .input:checked {
    background-color: #fff;
    border: 2px solid #fff;
  }
`
Container.Rus = styled.div`
  display: flex;
  background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.54);
  border-radius: 5px;
  width: 144px;
  height: 39px;

  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 10px;
  gap: 10px;


   .textP{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
  } 
    .input {
    -webkit-appearance: none;
    width: 16px !important;
    height: 12px !important;
    border-radius: 25px !important;
    cursor: pointer;
    background-color: rgba(232, 232, 232, 0);
    border: 2px solid #fff;
  }

  .input:checked {
    background-color: #fff;
    border: 2px solid #fff;
  }
`
Container.Language = styled.div`
 display: flex;
 gap: 10px;
 padding: 10px 0px;
`
Container.Quation = styled.div`
  >p{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
  opacity: 0.7;
  }
  >div{
    display: flex;
    gap: 20px;
  }
  >pre{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #FFFFFF;
  margin-top: 10px;
  }
`
Container.Variant = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
margin-top: 10px;
>div{
  display: flex;
  align-items: center;
  gap: 10px;
  >div{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
    width: 30px;
    height: 30px;
    background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.54);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
`
Container.Facul = styled.div`
 
`
const Box = styled.div`
 display: flex;
 flex-direction: column-reverse;
 justify-content: end;
 align-items: flex-end;
`
export { Box }
export default Container