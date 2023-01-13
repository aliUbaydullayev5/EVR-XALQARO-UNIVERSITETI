import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 84px 1fr;
  background: #221F51;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.81);
  border-radius: 30px;
  @media only screen and (max-width: 800px) {
     grid-template-rows: 35px 1fr;
      box-shadow: none;
  }
`
const TextCon = styled.div`
  width: 100%;
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #221F51;
  box-shadow: 0 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 30px 30px 0 0;
  @media only screen and (max-width: 800px) {
    height: 31px;
    background: #221F51;
    box-shadow: 0 2px 17px rgba(0, 0, 0, 0.54);
    border-radius: 30px 30px 0 0;
  }
  >h1{
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 59px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
    @media only screen and (max-width: 800px) {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      display: flex;
      align-items: center;
      color: #FFFFFF;
    }
  }
`

// Container.Number = styled.div`
//   width: 100% !important;
//   >div{
//     position: relative;
//   }
//   @media only screen and (max-width: 800px){
//     >div{
//       position: relative;
//       width: 100%;
//     }
//   }
// `
Container.Number = styled.div`
  width: 100% !important;
  .customPhoneInput{
    border-radius: 15px !important;
    background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%) !important;
    box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.25) !important;    
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 105.9%;
    letter-spacing: -0.025em;
    color: #fff;
    width: 513px !important;
    padding: 0px 0px 0px 30px !important;
    height: 46px;
 @media only screen and (max-width: 800px) {
  width: 100% !important;
  font-size: 16px;
  height:26px !important;
  border-radius: 5px !important;
 }
 }
`

Container.FormatNumber = styled.div`
  position: absolute;
  top: 15px;
  left: 30px;
  font-size: 22px;
  font-weight: 400;
  line-height: 105.9%;
  letter-spacing: -0.025em;
  color: white;
  @media only screen and (max-width: 800px) {
    position: absolute;
    top: 5px;
    left: 20px;
    font-size: 16px;
    font-weight: 400;
    line-height: 105.9%;
    letter-spacing: -0.025em;
  }
`
const InputCont = styled.div`
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
  padding: 0 10px;
  align-items: center;
  justify-content: center;
  >div{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .row10{
    >div{
      width: 512px;
      display: grid !important;
      grid-template-columns: 1fr 1fr !important;
      grid-gap: 10px !important;
    }
  }
  .row11{
    >div{
      width: 512px;
      display: grid !important;
      grid-template-columns: 1fr 1fr !important;
      grid-gap: 10px !important;
    }
  }
  @media only screen and (max-width: 1000px){
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(1fr, 12);
    >div{
      width: 100%;
      height: 26px;
    }
    .mobileNone{
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
      grid-row: 11/12;
      >div{
        width: 100%;
        display: grid !important;
        grid-template-columns: 1fr 1fr !important;
        grid-gap: 10px !important;
      }
    }
    .row11{
      grid-row: 10/11;
      >div{
        width: 100%;
        display: grid !important;
        grid-template-columns: 1fr 1fr !important;
        grid-gap: 10px !important;
      }
    }
    .row12{
      grid-row: 12/13;
    }
    
  }
  
`
InputCont.Section1 = styled.div``
InputCont.Section2 = styled.div``

const BtnCon = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  >div{
    width: 100%;
  }
  @media only screen and (max-width: 1000px) {
    margin: 0 auto;
  }
`
const IconBox = styled.div`
  position: relative;
  height: 46px;
  padding: 0 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  .ArrowTop {
    position: absolute;
    right: 30px;
    top: 35px;
    cursor: pointer;
  }
  .UploadFile2{
    position: absolute;
    left: 5px;
    top: 6px;
    cursor: pointer;
    @media only screen and (max-width: 800px) {
      height: 26px;
      position: absolute;
      left: 22px ;
      top: 6px;
      cursor: pointer;
      display: none; 
    }
  }
  .UploadFile1{
    position: absolute;
    left: 5px;
    top: 6px;
    cursor: pointer;
    @media only screen and (max-width: 800px) {
      display: none;
    }
}
  .UploadFileMobile2 { 
    position: absolute;
    left: 7px ;
    top: 8px;
    cursor: pointer;
    @media only screen and (min-width: 800px) {
      display: none;
    }
  }
  .UploadFileMobile{
    position: absolute;
    left: 7px ;
    top: 8px;
    bottom: 5px;
    cursor: pointer;
    @media only screen and (min-width: 800px) {
      display: none;
    }
  } 
  @media only screen and (max-width: 1000px) {
    width: 100% !important;
    display:flex ;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    margin: auto;
    height: 26px;
  }
  
`

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
IconBox.Mobile = styled.div`
  @media only screen and (min-width: 1000px) {
      .UploadMobile{
        display: none;
        position: absolute;
        left: 0;
      }
}
`



export { TextCon, InputCont, BtnCon, IconBox }
export default Container