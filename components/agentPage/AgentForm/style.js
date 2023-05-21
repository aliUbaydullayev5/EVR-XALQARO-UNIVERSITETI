import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 84px 1fr;
  //background: #221F51;
  background: var(--green);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.81);
  border-radius: 30px;
  @media only screen and (max-width: 1000px) {
    grid-template-rows: 50px 1fr;
    box-shadow: 0 0 0 rgba(0, 0, 0);
  }
`
Container.Number = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  .customPhoneInput {
    border-radius: 15px !important;
    //background: #241F69 !important;
    background: var(--buttonColor) !important;
    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.25) !important;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 105.9%;
    letter-spacing: -0.025em;
    color: #fff;
    width: 513px !important;
    padding: 0 0 0 20px !important;
    height: 46px;
    @media only screen and (max-width: 800px) {

      width: 100% !important;
      font-size: 16px;
      height: 36px !important;
      border-radius: 5px !important;
    }
  }

  @media only screen and (max-width: 800px) {
    width: 100% !important;
  }
`

Container.NumberText = styled.div`
  position: absolute;
  top: -16px;
  left: 90px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 105.9%;
  display: flex;
  align-items: center;
  letter-spacing: -0.025em;
  color: rgba(194, 191, 191, 0.442);
  @media only screen and (max-width: 800px) {
    top: -12px;
    letter-spacing: -0.025em;
    font-weight: 400;
    font-size: 14px;
    line-height: 105.9%;
    left: 60px;
  }
`

const TextCon = styled.div`
  width: 100%;
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
  //background: #221F51;
  background: var(--green);
  box-shadow: 0 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 30px 30px 0 0;
  @media only screen and (max-width: 1000px) {
    height: 31px;
  }

  > h1 {
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
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  grid-gap: 30px;

  > div {
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .row5 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  .row6 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  .row4 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  .row7 {
    > div {
      width: 512px;
      display: grid !important;
      grid-template-columns: 1fr 1fr !important;
    }
  }

  .row8 {
    > div {
      width: 512px;
      display: grid !important;
      grid-template-columns: 1fr 1fr !important;
    }
  }

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    padding: 0 25px;
    display: grid;
    grid-template-columns: 1fr ;
    grid-gap: 13px;
    > div {
      width: 100%;
    }

    .row1 {
      grid-row: 1/2;
    }

    .row2 {
      grid-row: 2/3;
    }

    .row3 {
      grid-row: 3/4;
    }

    .row4 {
      grid-row: 4/5;
    }

    .row5 {
      grid-row: 5/6;
    }

    .row6 {
      grid-row: 6/7;
    }

    .row7 {
      grid-row: 7/8;

      > div {
        width: 100%;
        display: grid !important;
        grid-template-columns: 1fr 1fr !important;
        grid-column-gap: 10px !important;
        height: 36px;
      }
    }

    .row8 {
      grid-row: 8/9;

      > div {
        width: 100%;
        display: grid !important;
        grid-template-columns: 1fr 1fr !important;
        height: 36px;
        grid-column-gap: 10px !important;

      }
    }

    .row9 {
      grid-row: 9/10;
    }

    .row10 {
      grid-row: 11/12;
      margin: 0 auto;
    }
  }

  .mainForm {
    position: relative;

    p {
      position: absolute;
      left: 18px;
      top: 10px;
      font-size: 24px;
      font-weight: 400;
      line-height: 105.9%;
      letter-spacing: -0.025em;
      color: white;

      @media only screen and (max-width: 1000px) {
        font-size: 16px;
        font-weight: 400;
        left: 10px;
        top: 10px;
      }
    }
  }

  @media only screen and (max-width: 1000px) {
    .mainForm {
      width: 100%;
    }

  }

`

InputCont.Section1 = styled.div``
InputCont.Section2 = styled.div``

const BtnCon = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  > div {
    width: 100%;
  }

  @media only screen and (max-width: 1000px) {
    margin: 0 auto;
  }
`

Container.ButtonLoader = styled.div`
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;

`

const IconBox = styled.div`
  position: relative;
  padding: 0 !important;
  display: flex;
  justify-content: center;
  align-items: center;

  //  Icon of Upload File for Desktop
  .uploadFile {
    position: absolute;
    left: 5px;
    top: 6px;
    cursor: pointer;
    @media only screen and (max-width: 800px) {
      display: none;
    }
    @media only screen and (min-width: 800px) {
      display: block;
    }
  }

  //  Icon of Upload File for Mobile
  .uploadFileMobile {
    position: absolute;
    left: 5px;
    top: 12px;
    bottom: 5px;
    cursor: pointer;
    @media only screen and (max-width: 800px) {
      display: block;
    }
    @media only screen and (min-width: 800px) {
      display: none;
    }
  }


  @media only screen and (max-width: 1000px) {
    width: 100% !important;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    margin: auto;
  }

`


Container.InputCustom1 = styled.input`
  cursor: pointer;
  min-width: 124.72px;
  width: 251px;
  height: 46px;
  padding: 3px 0 3px 40px;
  font-size: 22px;
  //background: #241F69;
  background: var(--buttonColor);
  border-bottom: 0;
  border-radius: 15px;
  outline: none;
  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.25);
  font-style: normal;
  font-weight: 400;
  line-height: 105.9%;
  letter-spacing: -0.025em;
  transition: 0.2s;
  color: rgba(255, 255, 255, 0);
  @media only screen and (max-width: 1000px) {
    padding: 0 0 0 25px;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 36px;
    border-radius: 5px;

  }

  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }

  color: ${({inputType}) => inputType && 'transparent'};

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
    @media only screen and (max-width: 1000px) {
      margin: 12px 0 0 0;
    }
  }

`


Container.InputCustom2 = styled.input`
  cursor: pointer;
  min-width: 124.72px;
  width: 251px;
  height: 46px;
  padding: 3px 0 3px 40px;
  font-size: 22px;
  border-bottom: 0;
  //background: #241F69;
  background: var(--buttonColor);
  border-radius: 15px;
  outline: none;
  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.25);
  font-style: normal;
  font-weight: 400;
  line-height: 105.9%;
  letter-spacing: -0.025em;
  transition: 0.2s;
  color: rgba(255, 255, 255, 0);


  @media only screen and (max-width: 1000px) {
    padding: 0 0 0 25px;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 36px;
    border-radius: 5px;

  }

  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }

  color: ${({inputType}) => inputType && 'transparent'};

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
    @media only screen and (max-width: 1000px) {
      margin: 12px 0 0 0;
    }
  }
`

Container.Model = styled.div`
  margin: 0 !important;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  > p {
    font-size: 18px;
    color: #fff;
  }
`


export {TextCon, InputCont, BtnCon, IconBox}
export default Container