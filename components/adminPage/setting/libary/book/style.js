import { Modal, Select, Upload } from "antd"
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
  width: 700px!important;
  display: flex;
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
 >h1{
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
    }
    >div {
    display: flex;
    align-items: center;
    justify-content:  space-around;
    width: 150px;
    height: 50px;
    background: #221F51;
    box-shadow: 0 3.09677px 11.6129px rgba(0, 0, 0, 0.54);
    border-radius: 10px;
    font-style: normal; 
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    cursor: pointer;
  color: #FFFFFF;
    }`

Container.Scrool = styled.div`
  width: 100%;
  overflow-y: scroll;
  height: 100%;
  display: grid;
  border-radius: 10px;
  padding: 0px 10px;
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
const ModalaContainer = styled.div`
 display: grid;
 grid-template-columns: 5fr 5fr  5fr;
 gap: 20px;
 >div{
  display: flex;
  flex-direction: column;
  gap: 10px;

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
    padding: 0 0px !important;
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






export { Antmodal, ModalaContainer }
export default Container