import { Select } from 'antd';
import styled from 'styled-components';

const AntSelect = styled(Select)`
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
    height: 40px !important;

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

export default AntSelect