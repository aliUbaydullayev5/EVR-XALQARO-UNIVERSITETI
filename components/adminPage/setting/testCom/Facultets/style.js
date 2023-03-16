import styled from "styled-components";
import { Modal, Select } from 'antd';

const Container = styled.div`
  width: 100%;
  max-width: 1050px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  justify-content: center;
  @media only screen and (max-width: 1000px) {}
`

const AntSelect = styled(Select)`
.ant-select-selector{
  border-radius: 0px !important;
}
  .ant-select-dropdown, .css-dev-only-do-not-override-1s3dcof, .ant-select-dropdown-placement-topLeft{
      background-color: transparent !important;
      border-radius: 0px;
  }
  .ant-select-selection-item{
    color: #fff !important;
    display: flex;
    align-items: center;
    padding: 0 20px !important;
    font-size: 16px !important;
    font-weight: 400 !important;
    font-family: 'Montserrat' !important;
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

Container.Scrool = styled.div`
   width: 100%;
   height: 600px !important;
   overflow-y: scroll;
   padding: 0 10px 0 0;
   height: 100%;
   display: grid;
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    width: 10px !important;
    padding: 0 5px 0 0;
    background: #9a9a9a;
    opacity: 0.5;
    border-radius: 30px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    transform: matrix(-1, 0, 0, 1, 0, 0);
    padding: 10px !important;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #FFFFFF;
    border-radius: 30px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`

const ConTable = styled.div`
  display: grid;
  grid-template-columns:  1fr;
  gap:10px;
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
        grid-template-columns: 300px 200px 200px 120px 120px ;
    padding-left: 15px;
    background: #241F69;
    border-radius: 5px;
  }
    box-shadow: 0 2px 17px rgba(0, 0, 0, 0.54);
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
    } }
`
Container.Nav = styled.div`
  display: grid;
  gap: 10px;
  margin-bottom: 10px;
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
    grid-template-columns: 300px 200px 200px 120px 120px ;
    padding-left: 15px;
    background: #221F51;
    border-radius: 5px;
    height: 50px;
  }
  box-shadow: 0 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 5px;
  .colum{
    border-left:  2px solid white;
    padding-left: 10px;
  }

`

Container.Table = styled.div`
  padding: 30px 30px;
  background: #221F51;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  margin: 30px 0;
`
Container.Btn = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
`
Container.Text = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
 >h1{
 font-family: 'Montserrat';
 font-style: normal;
 font-weight: 500;
 font-size: 36px;
 line-height: 44px;
 display: flex;
 align-items: center;
 color: #FFFFFF;
 }
 >div{
    display: flex;
    align-items: center;
    justify-content:  space-around;
    width: 150px;
    height: 50px;
    background: #221F51;
    box-shadow: 0 3.09677px 11.6129px rgba(0, 0, 0, 0.54);
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    cursor: pointer;
    color: #FFFFFF;
 }

`
const Antmodal = styled(Modal)`
  width: 700px!important;
  left: 150px;
  top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  @media only screen and (max-width: 1000px) {
    width: 700px!important;
  }
`

Container.Add = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
  >div{
    display: flex ;
    align-items: center;
    gap: 10px;
    >div{
  
    }
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
export { AntSelect, ConTable, Antmodal }
export default Container