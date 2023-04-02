import { Modal, Select } from "antd"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  max-width: 1050px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
  @media only screen and (max-width: 1000px) {}
`
const Antmodal = styled(Modal)`
  width: 800px!important;
  left: 100px !important;
  top: 100px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  @media only screen and (max-width: 1000px) {
    width: 700px!important;
  }
`
Container.Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
Container.Table = styled.div`
  padding: 30px 30px;
  background: #221F51;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  margin: 30px 0px;
`

Container.Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h1 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 150px;
    height: 50px;
    background: #221F51;
    box-shadow: 0 3.09677px 11.6129px rgba(0, 0, 0, 0.54);
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    align-items: center;
    cursor: pointer;
    color: #FFFFFF;
  }

`;
Container.Scrool = styled.div`
  width: 100%;
  height: 510px !important;
  overflow-y: scroll;
  display: grid;
  border-radius: 10px;
  padding: 0 10px;
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-track {
    width: 10px !important;
    background: #9a9a9a;
    opacity: 0.5;
    border-radius: 30px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    padding: 10px !important;
  }
  ::-webkit-scrollbar-thumb {
    background: #FFFFFF;
    border-radius: 30px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
`

Container.Add = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px;

  
.inputCon{
>p{
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
}}

`

Container.Grid = styled.div`
  display: grid;
  grid-template-columns: 5fr 5fr;
  gap: 10px;
  >div{
    display: grid;
    gap: 5px;
    margin: 10px 0px;
    >p{
     font-weight: 400;
     font-size: 14px;
     line-height: 17px;
     display: flex;
     align-items: center;
     color: #FFFFFF;
    }
  }

`
const ConTable = styled.div`
  display: grid;
  grid-template-columns:  1fr;
  gap:10px;
  >div{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
  }
  .row{
    display: grid;
    grid-template-columns: 50px    200px  200px  200px 200px  200px 200px  200px 200px  200px 200px  200px 200px  200px 200px;
    padding-left: 15px;
    background: #241F69;
    border-radius: 5px;
  }
    box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
    border-radius: 5px;
  .colum{
    border-left:  2px solid white;
    padding-left: 10px;
  }
  .action{
    display: flex;
    justify-content: space-between;
    padding-right: 10px;
    >button {
      background: #241F69;  ;
    }

  }

`
Container.Nav = styled.div`
  display: grid;
  gap: 10px;
  margin-bottom: 10px;
  >div{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
  }
  .row{
    display: grid;
    grid-template-columns: 50px    200px  200px  200px 200px  200px 200px  200px 200px  200px 200px  200px 200px  200px 200px;
    padding-left: 15px;
    background: #221F51;
    border-radius: 5px;
    height: 50px;
  }
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 5px;
  .colum{
    border-left:  2px solid white;
    padding-left: 10px;
  }

`
Container.ButtonLoader = styled.div`
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
`
const AntSelect = styled(Select)`
.ant-select-selector{
  border-radius: 0 !important;
}
  .ant-select-dropdown, .css-dev-only-do-not-override-1s3dcof, .ant-select-dropdown-placement-topLeft{
      background-color: transparent !important;
      border-radius: 0;
  }
  .ant-select-selection-item{
    color: #fff !important;
    display: flex;
    align-items: center;
    padding: 0 20px !important;
    font-size: 16px !important;
    font-weight: 400 !important;
    @media only screen and (max-width: 1000px) {
      font-size: 16px !important;
      padding: 0 12px !important;
    }
  }
  .ant-select-arrow{
    color: white !important;
    font-size: 30px;
    @media only screen and (max-width: 1000px) {
      font-size: 13px;
    }
  }
  .ant-select-selection-search-input{
    display: none !important;
  }
  .ant-select-selection-placeholder{
    display: flex;
    align-items: center;
    padding: 0 20px !important;
    font-size: 22px !important;
    color: #ffff;
    @media only screen and (max-width: 800px) {
      font-size: 16px !important;
      padding: 0 8px !important;
    }
  }

 .ant-select-item-option-content{
  font-size: 17px !important;
 } 
 .ant-select-item .ant-select-item-option .ant-select-item-option-active{
   font-size: 17px !important;
 }

`

Container.PhoneIn = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
>p{
  margin: 5px 0px;
}
  .customPhoneInput{
    background:  #241F69 !important;
    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.25) !important;    
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 105.9%;
    letter-spacing: -0.025em;
    color: #fff;
    width: 240px !important;
    padding: 0 0 0 20px !important;
    height: 46px;
  } 

`

export { ConTable, Antmodal, AntSelect }
export default Container