import { Select } from 'antd';
import styled from 'styled-components';

const AntSelect = styled(Select)`
  .ant-select-dropdown, .css-dev-only-do-not-override-1s3dcof, .ant-select-dropdown-placement-topLeft{
      background-color: none !important;
  }
  .ant-select-selection-item{
    color: white !important;
    padding: 8px 20px !important;
    height: 50px  !important;
    font-size: 24px !important;
    font-weight: 400 !important;
    line-height: 105.9% !important;
    font-family: 'Montserrat' !important;
    @media only screen and (max-width: 1000px) {
      font-size: 16px !important;
      padding: 0px 12px !important;
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
    height: 50px !important;
    display: flex;
    width: 100%;
    padding: 0px 20px !important; 
    margin: 0px 0px  !important;
    font-weight: 400 !important;
    display: none !important;
       
    @media only screen and (max-width: 800px) {
      width: 100%;
    }
  }
  .ant-select-selection-placeholder{
    font-size: 24px !important;
    padding: 10px 20px  !important;
    font-family: 'Montserrat' !important;
    font-size: 22px !important;
    color: #ffff;
    @media only screen and (max-width: 800px) {
      font-size: 16px !important;
      padding: 0px 8px  !important;
    }
  }
`

export default AntSelect