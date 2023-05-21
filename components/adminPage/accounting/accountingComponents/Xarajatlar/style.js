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
  
  .viewTag{
    height: 2px;
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
      font-family: 'Montserrat';
      width: 133.57px;
      height: 36.64px;
      background: #241F69;
      box-shadow: 0 2.36371px 8.86391px rgba(0, 0, 0, 0.54);
      border-radius: 7.63281px;
      font-weight: 500;
      font-size: 13.7391px;
      line-height: 17px;
      font-style: normal;
      color: #FFFFFF;
      ::-webkit-calendar-picker-indicator {
        filter: invert(1);
      }
    }
  }
  
  .dataArea {
    overflow-y: scroll;
    overflow-x: scroll;
    height: 560px;
  }
`

Container.ButtonLoader = styled.div`
  text-align: center;
  border-radius: 4px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
Container.DataAreaInset = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
`
Container.Section = styled.div`
  width: 1300px;
  background: #241F69;
  box-shadow: 0 1.52656px 12.9758px rgba(0, 0, 0, 0.54);
  border-radius: 6.10625px;
  padding: 10px 10px;
  display: grid;
  grid-template-columns: 20px 1fr 2px 1fr 2px 1fr 2px 1fr 2px 1fr;
  align-items: center;
  gap: 10px;
  .line{
    width: 2px;
    height: 80%;
    border-radius: 3px;
    background-color: #fff;
  }
  p{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 17px;
    color: #FFFFFF;
    text-align: center;
  }
  .number{
    background: #241F69;
    box-shadow: 0 1.52656px 12.9758px rgba(0, 0, 0, 0.54);
    border-radius: 6.10625px;
    height: 25px;
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .textWithTitle {
    width: 220px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
Container.ModanInset = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  .title{
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
  }
  .twoInput{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    width: 100%;
  }
  .upload-list-inline .ant-upload-list-item {
    float: left;
    width: 200px;
    margin-inline-end: 8px;
  }
  .ant-upload-rtl.upload-list-inline .ant-upload-list-item {
    float: right;
  }
  .buttonArea{
    display: flex;
    align-items: center;
    justify-content: end;
  }
`

Container.RefreshArea = styled.div`
  background: #221F51;
  box-shadow: 0 3.09677px 11.6129px rgba(0, 0, 0, 0.54);
  border-radius: 5px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  .refreshIcon{
    ${({loading})=> loading && 'animation: 1s infinite anim;'}
  }
  @keyframes anim {
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
  
`

export default Container