import styled from "styled-components"
<<<<<<< HEAD
import {Modal, Select, Upload} from "antd";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1440px;
  padding: 0 30px ;
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
  width: 1050px;
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
grid-template-columns: 80px auto;
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
    grid-template-columns:  60px 260px 366px   110px 100px ;
    padding-left: 15px;
    height: 50px;
    font-size: 16px;
  }

  .colum{
    border-left:  2px solid white;
    padding-left: 10px;
  }

`
const ConTable = styled.div`
  display: grid;
  grid-template-columns:90px  1fr;
  gap:20px;

  >div{
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    >img{
      border-radius: 10px;
      cursor: pointer;
    }
  }
  .row{
    display: grid;
    grid-template-columns:  60px 260px 366px   110px 100px ;
    padding-left: 10px;
    box-shadow: 0 2px 17px rgba(0, 0, 0, 0.54);
    border-radius: 8px;
    background: #241F69;
    
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
  left: 150px;
  top:190px;
  bottom: 0;
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
=======
import { Modal,Upload } from "antd"


const   Container = styled.div`
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
  left: 100px;
  top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;

  .ant-modal-footer{
   display: none !important;
  }

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


Container.Upload=styled(Upload)`
  width: 100%;
  :where(.css-dev-only-do-not-override-1km3mtt).ant-upload-wrapper .ant-upload-list {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 170px;
}
`

Container.Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
 >h1{
>>>>>>> main
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
<<<<<<< HEAD
  }  
`
Container.Texth1=styled.h1`
   font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
`

export { ConTable,Wrapper ,ModalaContainer,Antmodal ,AntSelect}
=======
    }
    >div {
    display: flex;
    align-items: center;
    justify-content:  space-around;
    width: 150px;
    height: 50px;
    background: #221F51;
    box-shadow: 0px 3.09677px 11.6129px rgba(0, 0, 0, 0.54);
    border-radius: 10px;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    cursor: pointer;

color: #FFFFFF;
    }

`
Container.Scrool = styled.div`
   width: 100%;
   height: 510px !important;
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
      padding: 0 15px 0 0;
      background: #9a9a9a;
      opacity: 0.5;
      border-radius: 30px;
      transform: matrix(-1, 0, 0, 1, 0, 0);
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
  display: flex;
  flex-direction: column;
  gap: 17px;
  input{
    background: #241F69;
  }
  >div p{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
  }

  >div h1{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
  }
  >p{
    font-family: 'Montserrat';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 20px;
   display: flex;
   align-items: center;
   color: #FFFFFF;
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
    grid-template-columns: 50px 10fr 200px  200px ;
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
    grid-template-columns:  50px 10fr 200px 200px;
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


export { ConTable, Antmodal }
>>>>>>> main
export default Container