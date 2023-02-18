import styled from "styled-components";
import { Select } from 'antd';

const Container = styled.div`
  width: 100%;
  padding: 0px 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
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
   padding: 0 15px 0 0;
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
    grid-template-columns:  400px  300px 300px 200px 200px 100px 100px;
    background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
    border-radius: 5px;
    >div{
    height: 40px;
    border-left:  2px solid white;
    padding-left: 15px;
    display: flex;
    align-items: center;
    font-size: 15px;
    border: red 2px solid black;
    }
  }
    box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
    border-radius: 5px;
  .colum{
    border-left:  2px solid white;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .action{
    display: flex;
    justify-content: space-between;
    padding-right: 10px;


  }

`
Container.Nav = styled.div`
  gap: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
    grid-template-columns:  400px  300px 300px 200px 200px 100px 100px;
    padding-left: 15px;
    background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
    border-radius: 5px;
    gap: 5px;
  }
    box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
    border-radius: 5px;
  .colum{
    border-left:  2px solid white;
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }}
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

export { AntSelect, ConTable }
export default Container