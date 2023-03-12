import styled from "styled-components"
import {Modal, Select, Upload} from "antd";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1440px;
  padding: 0 50px ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 1000px) {
    padding: 0 20px;
  }
`
const Wrapper=styled.div`
  background: #221F51;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  height: 600px !important;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 20px;
`
Container.Scrool = styled.div`
  width: 900px;
  overflow-y: scroll;
  padding: 0 15px 0 0;
  display: grid;
  gap:10px;
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-track {
    width: 10px !important;
    padding: 0 5px 0 0;
    background: #9a9a9a;
    opacity: 0.5;
    border-radius: 30px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }

  ::-webkit-scrollbar-thumb {
    background: #FFFFFF;
    border-radius: 30px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
  @media only screen and (max-width: 1000px) {

  }
`

Container.Nav = styled.div`
  display: grid;
  >div{
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    gap: 10px;
  }
  .row{
    display: grid;
    grid-template-columns:  50px 10fr  100px 100px ;
    padding-left: 15px;
    height: 50px;
  }

  .colum{
    border-left:  2px solid white;
    padding-left: 10px;
  }

`
const ConTable = styled.div`
  display: grid;
  grid-template-columns:  1fr;
  gap:10px;
  background: #241F69;

  >div{
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
    grid-template-columns: 50px 10fr  10fr  100px 100px ;
    padding-left: 15px;
    box-shadow: 0 2px 17px rgba(0, 0, 0, 0.54);
    border-radius: 8px;
  }

  .colum{
    border-left:  2px solid white;
    padding-left: 10px;
    >button{
      background: #241F69;
    }
  }
`
Container.Bottom = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  gap: 10px;

`

const ModalaContainer = styled.div`
 display: grid;
 grid-template-columns: 5fr 5fr  5fr;
  margin-bottom: 15px;
 >div{
  display: flex;
  flex-direction: column;
gap: 5px;
  >p{
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
   display: flex;
   align-items: center;
   color: #FFFFFF;
  }
 }
`

const AntSelect = styled(Select)`
 .ant-select-dropdown, .css-dev-only-do-not-override-1s3dcof, .ant-select-dropdown-placement-topLeft{
   background-color: transparent !important;
  }
  .ant-select-selection-item{
    color: #fff !important;
    display: flex;
    align-items: center;
    padding: 0 10px !important;
    font-size: 18px !important;
    font-weight: 400 !important;
    @media only screen and (max-width: 1000px) {
      font-size: 16px !important;
      padding: 0 12px !important;
    }
  }
  .ant-select-arrow{
    color: white !important;
    font-size: 20px;
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
    padding: 0 0 !important;
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
 .ant-select-selector {
  border-radius: 0 !important;
}
`
Container.Upload = styled(Upload)`
  .ant-upload-list.ant-upload-list-picture-card
  {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
Container.Add = styled.div`
  >div{
    display: flex ;
    align-items: center;
    gap: 20px;
    >h1{
      font-style: normal;
      font-weight: 400;
      font-size: 28px;
      line-height: 34px;
      display: flex;
      align-items: center;
      color: #FFFFFF;
    }
    >p{
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      display: flex;
      align-items: center;
      color: #FFFFFF;
    }
  }
`
const Antmodal = styled(Modal)`
  width: 700px!important;
  display: flex;
  padding: 0 20px;
  @media only screen and (max-width: 1000px) {
    width: 700px!important;
  }
`
Container.BtnAdd =styled.div`
  >button{
    background: #221F51;
    border-radius: 10px;
  }
`
Container.TextAdd =styled.div`
  
  >h1{
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
  }  
    
`
export { ConTable,Wrapper ,ModalaContainer,Antmodal ,AntSelect}
export default Container