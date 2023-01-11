import { Modal } from "antd";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 84px 1fr;
  @media only screen and (max-width: 1000px) {
    grid-template-rows: 31px 1fr;
  }
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
  >h1{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 59px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
  }

  @media only screen and (max-width: 1000px) {
    height: 31px;
    >h1{
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #FFFFFF;
    }
  }
`

const InputCont = styled.div`
  padding: 23px 0;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  
  >div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .phoNumber{
    position: relative;
    width: 513px;
  }
  .phoNumbers{
    position: absolute;
    left: 30px;
    top: 12px;
    font-size: 16px;
    font-size: 24px;
    font-weight: 400;
    line-height: 105.9%;
    letter-spacing: -0.025em;
    color: white;
  }
  
  @media only screen and (max-width: 1000px) {
    grid-gap: 10px;
    padding: 13px 20px 0 20px;
    box-shadow: none;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(1fr, 13);
    grid-gap: 10px;
    >div{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 26px;
      width: 100% !important;
    }
    .phoNumber{
      width: 100%;
    }
    .phoNumbers{
      left: 20px;
      top: 7px;
      font-size: 16px;
    }
    .mobileDivNone{
      display: none;
    }

    .row1{
      grid-row: 1/2;
    }
    .row2{
      grid-row: 2/3;
    }
    .row3{
      grid-row: 3/4;
    }
    .row4{
      grid-row: 4/5;
    }
    .row5{
      grid-row: 5/6;
    }
    .row6{
      grid-row: 6/7;
    }
    .row7{
      grid-row: 7/8;
    }
    .row8{
      grid-row: 8/9;
    }
    .row9{
      grid-row: 9/10;
    }
    .row10{
      grid-row: 10/11;

    }
    .row11{
      grid-row: 12/13;

    }
    .row12{
      grid-row: 12/13;
    }
  }

`
const BtnCon = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.2fr;
  >div{
    width: 100%;
  }
`

const IconBox = styled.div`
  height: 46px;
  position: relative;
  .ArrowTop {
    position: absolute;
    right: 30px;
    top: 35px;
    cursor: pointer;
  }
  .UploadFile{
    position: absolute;
    left: 0px;
    top: 8px;
    cursor: pointer;
    @media only screen and (max-width: 1000px) {
      left: 20px ;
      top: 8px;
    }
  }
  .UploadFileMobile{
    display: none;
  }
  @media only screen and (max-width: 1000px) {
    height: 26px;
    width: 100% !important;
    display: flex;
    justify-content: center;
    .UploadFileMobile{
      display: block;
      position: absolute;
      left: 10px;
      top: 8px;
      cursor: pointer;
    }
    .UploadFile{
      display: none;
    }
  }
`

const AntModal = styled(Modal)`
box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
border-radius: 15px;
padding:  50px;

.ant-modal-body {
  >p{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 105.9%;
    display: flex;
    align-items: center;
    text-align: justify;
    letter-spacing: -0.085em;
    color: #FFFFFF;
      @media only screen and (max-width: 1000px) {
            font-size: 14px;
      }
  }
}
`

InputCont.Section1 = styled.div``
InputCont.Section2 = styled.div``



Container.InputCustom1 = styled.input`
  width: 251px;
  height: 46px;
  padding: 3px 0 3px 40px;
  background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
  border-bottom: 0;
  border-radius: 15px;
  outline: none;
  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.25);
  
  font-style: normal;
  font-weight: 400;
  line-height: 105.9%;
  letter-spacing: -0.025em;
  font-size: 22px;
  transition: .2s;
  
  :active{transform: scale(${({ scale }) => (scale ? `${scale}` : '1.02')})}
  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
  color: ${({ inputType }) => inputType && 'transparent'};
  ::-webkit-file-upload-button {
    visibility: hidden;
  }
  ::before {
    font-family: 'Montserrat', sans-serif;
    content: 'Pasport nusxasini';
    line-height: 105.9%;
    letter-spacing: -0.025em;
    color: #fff;
    display: inline-block;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    margin: 8px 0 0 0;
    width: 200px;
  }
  cursor: pointer;
  @media only screen and (max-width: 1000px) {
    min-width: 124.72px !important;
    width: 100% !important;
    height: 26px;
    padding: 0px 0px 0px 30px;
    font-size: 16px;
    border-radius: 5px;
  }
`
Container.InputCustom2 = styled.input`
  cursor: pointer;
  min-width: 124.72px;
  width: 251px;
  height: 46px;
  padding: 3px 0 3px 40px;
  font-size: 22px;
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
  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
  color: ${({ inputType }) => inputType && 'transparent'};
  ::-webkit-file-upload-button {
    visibility: hidden;
  }
  ::before {
    font-family: 'Montserrat', sans-serif;
    content: 'Deplom yoki atistat';
    line-height: 105.9%;
    letter-spacing: -0.025em;
    color: #fff;
    display: inline-block;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    margin: 8px 0 0 0;
  }
  @media only screen and (max-width: 1000px) {
    width: 100% !important;
    height: 26px;
    padding: 0px 0px 0px 30px;
    font-size: 16px;
    border-radius: 5px;
  }
  
`




export { TextCon, InputCont, BtnCon, IconBox, AntModal }
export default Container