import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 84px 1fr;
  background: #221F51;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.81);
  border-radius: 30px;
`
const TextCon = styled.div`
  width: 100%;
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #221F51;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 30px 30px 0px 0px;
 @media only screen and (max-width: 1000px) {
   height: 31px;
 }
  >h1{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 59px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
   @media only screen and (max-width: 1000px) {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
   }
  }
`

const InputCont = styled.div`
  
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media only screen and (max-width: 1000px) {
     display: flex;
     flex-direction:column;
     padding: 0px 25px;
 }
  >div{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .mainForm{
    >div{
      position: relative;
    }
    p{
      position: absolute;
      left: 10px;
      top: 10px;
      font-size: 24px;
      font-weight: 400;
      line-height: 105.9%;
      letter-spacing: -0.025em;
      color: white;
    }
  }
  
`
InputCont.Section1 = styled.div``
InputCont.Section2 = styled.div``

const BtnCon = styled.div`
  display: grid !important;
  grid-template-columns: 1fr 0.5fr;
`
const IconBox = styled.div`
  position: relative;
  .ArrowTop {
    position: absolute;
    right: 30px;
    top: 35px;
    cursor: pointer;
  }
  .UploadFile2{
    position: absolute;
    left: 12px ;
    top: 6px;
    cursor: pointer;
  }
  .UploadFile1{
    position: absolute;
    left: 12px ;
    top: 6px;
    cursor: pointer;
  }
  
`


Container.InputCustom1 = styled.input`
  min-width: 124.72px;
  width: 513px;
  height: 46px;
  padding: 0px 0px 0px 70px;
  font-size: 24px;
  background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
  border-bottom: 0px;
  border-radius: 15px;
  outline: none;
  box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.25);
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  line-height: 105.9%;
  letter-spacing: -0.025em;
  color: transparent;
  transition: .2s ;
  :active{transform: scale(${({ scale }) => (scale ? `${scale}` : '1.02')})}

  @media only screen and (max-width: 1000px) {
     padding: 0 0 0 55px;
     font-size:13px;
     display: flex;
     align-items: center;
     justify-content: center;
     width: 100%;
     height: 26px;
     border-radius: 5px;
   }
  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }

  color: ${({ inputType }) => inputType && 'transparent'};
  ::-webkit-file-upload-button {
    visibility: hidden;
  }
  ::before {
    content: 'Firma guvohnomasini yuklang';
    line-height: 105.9%;
    letter-spacing: -0.025em;
    color: #d3d3d3;
    display: inline-block;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    margin: 8px 0 0 0;
  }
  cursor: pointer;
`


Container.InputCustom2 = styled.input`
  cursor: pointer;
  min-width: 124.72px;
  width: 513px;
  height: 46px;
  padding: 0px 0px 0px 70px;
  font-size: 24px;
  background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
  border-bottom: 0px;
  border-radius: 15px;
  outline: none;
  box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.25);
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  line-height: 105.9%;
  letter-spacing: -0.025em;
  color:transparent;
  transition: .2s ;
  :active{transform: scale(${({ scale }) => (scale ? `${scale}` : '1.02')})}

  @media only screen and (max-width: 1000px) {
     padding: 0 0 0 55px;
     font-size:13px;
     display: flex;
     align-items: center;
     justify-content: center;
     width: 100%;
     height: 26px;
     border-radius: 5px;
   }
  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }

  color: ${({ inputType }) => inputType && 'transparent'};
  ::-webkit-file-upload-button {
    visibility: hidden;
  }
  ::before {
    content: 'Firma raxbarining pasportini yuklang';
    line-height: 105.9%;
    letter-spacing: -0.025em;
    color: #d3d3d3;
    display: inline-block;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    margin: 8px 0 0 0;
  }
`




export { TextCon, InputCont, BtnCon, IconBox }
export default Container