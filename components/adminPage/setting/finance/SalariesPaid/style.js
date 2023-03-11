import { Select, Modal } from "antd";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-rows: 50px 1fr;
  max-width:  1440px;
  width: 100%;
  height: 730px;
  padding: 0 40px;
  margin: auto;
`

Container.Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1{
    font-weight: 400;
    font-size: 36px;
    line-height: 30px;
    color: #FFFFFF;
  }
  >button{
    background: #211E51;
    box-shadow: 0 3.09677px 11.6129px rgba(0, 0, 0, 0.54);
  }
`

Container.Bottom=styled.div`
  background: #221F51;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  display: grid;
  grid-gap: 30px;
  grid-template-rows: 50px 50px 30px 1fr;
  padding: 40px 25px 10px 25px;
`

Container.Filter=styled.div`
 position: relative;
 width: 100%;
 height: 60px;
 display: flex;
 align-items: center;
 gap: 40px;

 >input{
  background: #241F69;
 }

 .search{
  position: absolute;
  z-index: 2;
  top: 22px;
  left: 10px;
 }
 >button{
  background: #241F69;
 }
`

Container.Button=styled.div`
 width: 85px;
 height: 40px;
 border-left: 2px solid #ffff;
 background: none;
 display: flex;
 align-items: center;
 justify-content: center;
 padding-left: 10px;
 position: absolute;
 left: 43%;
 top: 15%;
 >button{
  background: #241F69;
  gap: 10px;
  div{
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }
 }
`

Container.Date=styled.div`
 width: 133px;
 height: 36px;
 display: flex;
 gap: 10px;
 justify-content: center;
 align-items: center;
 background: #241F69;
 box-shadow: 0 3.09677px 11.6129px rgba(0, 0, 0, 0.54);
 border-radius: 10px;
  >input{
    padding: 0 15px;
  }
`
const Conpul = styled.div`
  background: #241F69;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.54);   
  border-radius: 10px;
  width: 267px; 
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap:15px;
  p{
    font-weight: 500;
    line-height: 17px;
    font-size: 14px;
    color: #FFFFFF;
  }
`

Container.Footer=styled.div`
  width: 98.5%;
  height: 40px;
 .wrap{
   display: flex;
   gap: 10px;
 }
`
const SendModal=styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  padding: 20px;

  .div{
    display: flex;
    width: 500px;
    justify-content: space-between;
    gap: 72px;
    align-items: center;

  }

  .ant-modal-footer{
   display: none !important;
  }

  .anticon svg{
    display: none;
  }

`
const ConSelect = styled.div`
  display: flex;
  justify-content: space-between;
  gap:10px;
`

Container.Input=styled.div`
  width: 30px;
  height: 30px;
  background: #241F69;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  input{
    width: 18px;
    height: 18px;
    border: 1px solid #ffff;
  }
`

Container.Info=styled.div`
  width: 100%;
  height: 30px;
  background: #241F69;
  box-shadow: 0 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  h1{
    font-family: 'Montserrat';
    font-style: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    height: 24px;
    font-weight: 400;
  }
  .id{
    width: 6%;
    font-size: 12px;
    line-height: 15px;
    font-weight: 400;
  }
  .fio{
    font-size: 13px;
    line-height: 17px;
    font-weight: 400;
    width: 21%;
    border-left: 1px solid #FFFFFF;
  }
  .tel{
    font-size: 13px;
    font-weight: 500;
    line-height: 17px;
    width: 13%;
    border-left: 1px solid #FFFFFF;
  }
  .kun{
    font-size: 13px;
    font-weight: 500;
    line-height: 17px;
    width: 10%;
    border-left: 1px solid #FFFFFF;
  }
`

Container.Scrool = styled.div`
   width: 100%; 
   height: 400px;
   overflow-y: scroll;
   padding: 0 10px 0 0;
   ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      width: 10px !important;
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
`

Container.Map=styled.div`
 display: flex;
 flex-direction: column;
 gap: 12px;
`
const Agent = styled.div`
 position: relative;
 >select{
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.54);
  border-radius: 10px;
  width: 127px;
  height: 27px;
  color: white;
  font-family: 'Montserrat';
  font-style: normal;
  background: #241F69;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  padding:0 0 0 27px;
 }
 .Down{
    position: absolute;
    right: 15px;
    bottom: 10px;
}
`
const FilterModal=styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 2px solid yellow;
  height: 364px;
  
  
  
  .ant-modal-footer{
    display: none !important;
  }
`

Container.FilterModal=styled.div`
  width: 1000px;
  height: 100%;
  
`

const ConTable = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  border: 1px solid red;

`

Container.Nav = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  height: 40px;
`
const AntSelect = styled (Select)`
   .ant-select-dropdown, .css-dev-only-do-not-override-1s3dcof, .ant-select-dropdown-placement-topLeft{
      background-color: transparent !important;
  }
  .ant-select-selection-item{
    color: #fff !important;
    display: flex;
    align-items: center;
    padding: 0 20px !important;
    font-size: 24px !important;
    font-weight: 400 !important;
    font-family: 'Montserrat' !important;
    @media only screen and (max-width: 1000px) {
      font-size: 16px !important;
      padding: 0 12px !important;
    }
  }
  .ant-select-arrow{
   position: absolute;
   right: -20px;
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
export { ConTable,SendModal,Conpul, AntSelect,Agent,ConSelect, FilterModal,}
export default Container