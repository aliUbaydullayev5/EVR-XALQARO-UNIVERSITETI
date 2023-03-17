import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;

  background: #221F51;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  padding: 20px;

  display: grid;
  grid-template-rows: 70px 50px 1fr;

  .title {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #FFFFFF;
    >div{
      display: flex;
      align-items: center;
    }
    .subTitle {
      font-style: normal;
      font-weight: 500;
      font-size: 26px;
      color: rgba(175, 175, 175, 0.71);
      padding: 0;
      margin: 5px 0 0 0;
    }

  }
  
  .filter {
    
    display: flex;
    align-items: center;
    gap: 20px;
    
    
    .iconSection{
      position: relative;
    }
    .icon{
      position: absolute;
      top: 50%;
      left: 10px;
      z-index: 1;
      transform: translate(0, -50%);
    }
    .input{
      position: absolute;
    }
    .dataInput{
      align-items: center;
      padding: 5px 10px 5px 20px;

      width: 133.57px;
      height: 36.64px;
      background: #241F69;
      box-shadow: 0 2.36371px 8.86391px rgba(0, 0, 0, 0.54);
      border-radius: 7.63281px;
      font-weight: 500;
      font-size: 13.7391px;
      line-height: 17px;
      font-family: 'Montserrat';
      font-style: normal;
      color: #FFFFFF;
      ::-webkit-calendar-picker-indicator {
        filter: invert(1);
      }
    }
    
  }
  
  

  .dataArea {
    border: 1px solid red;
  }

`


export default Container