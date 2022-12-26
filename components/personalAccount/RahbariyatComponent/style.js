import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 84px 1fr;
  background: #221F51;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.81);
  border-radius: 30px;
  @media only screen and (max-width: 1000px) {
    box-shadow: none;
    grid-template-rows: 31px 1fr;
  }
`
Container.Top = styled.div`
  background: #221F51;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 30px 30px 0px 0px;
  font-weight: 500;
  font-size: 40px;
  line-height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  position: relative;
  .closeIcon{
    position: absolute;
    top: 18px;
    right: 23px;
    cursor: pointer;
  }
  @media only screen and (max-width: 1000px) {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    background: none;
    .closeIcon{
      display: none;
    }
  }
`


Container.Bottom = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 96px;
  padding: 20px 85px;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: 106px 1fr;
    grid-gap: 50px;
    padding: 20px 25px;
  }

`

Container.Left = styled.div`
  display: grid;
  grid-template-rows: 189px 1fr;
  justify-content: center;
  align-items: center;
  >div{
    display: flex;
    justify-content: center;
  }
  @media only screen and (max-width: 1000px) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    .personIcon{
      width: 106px;
      height: 106px;
    }
  }
`
Container.LeftMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  >div{
    position: relative;
  }
  .icon{
    position: absolute;
    z-index: 999;
    top: 5px;
    left: 39px;
  }
  .mobileIcon{
    display: none;
  }
  @media only screen and (max-width: 1000px) {
    .icon{
      position: absolute;
      z-index: 999;
      top: 3px;
      left: 10px;
    }
    .laptopIcon{
      display: none;
    }
    .mobileIcon{
      display: block;
    }
  }

`

Container.Right = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 30px;
  padding: 44px 0 0 0;
  @media only screen and (max-width: 1000px) {
    padding: 0;
    grid-gap: 16px;
  }
`
Container.Row = styled.div`
  display: grid;
  grid-template-columns: ${({columns})=> columns ? columns : '1fr'};
  grid-gap: ${({gap})=> gap ? gap : '0px'};
  align-items: center;
  >div{
    position: relative;
  }
  div>p{
    font-weight: 300;
    font-size: 14px;
    line-height: 105.9%;
    letter-spacing: -0.025em;
    color: #FFFFFF;
  }
  .icon{
    position: absolute;
    bottom: 5px;
    right: 31px;
  }
  @media only screen and (max-width: 1000px) {
    grid-gap: ${({mgap})=> mgap ? mgap : '0px'};
  }
`

Container.InputCustom1 = styled.input`
  width: 100%;
  height: 33px;
  padding: 0px 0px 0px 40px;
  font-size: 24px;
  background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
  border-bottom: 0px;
  border-radius: 5px;
  outline: none;
  box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.25);
  color: transparent;
  transition: .2s ;
  :active{transform: scale(${({ scale }) => (scale ? `${scale}` : '1.02')})}
  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
  ::-webkit-file-upload-button {
    visibility: hidden;
  }
  ::before {
    content: 'Yuklab olish';
    display: inline-block;
    outline: none;
    -webkit-user-select: none;
    margin: 8px 0 0 0;
    white-space: nowrap;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 105.9%;
    letter-spacing: -0.025em;
    color: rgb(211, 211, 211);
  }
  cursor: pointer;
`


export default Container