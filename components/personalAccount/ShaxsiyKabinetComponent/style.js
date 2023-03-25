import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  width: 100%;
  background: #221F51;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.81);
  border-radius: 30px;
  display: grid;
  grid-template-rows: 84px 1fr;
  @media only screen and (max-width: 1000px) {
    grid-template-rows: 31px 1fr;
    box-shadow: none;
  }
`
Container.Top = styled.div`
  background: #221F51;
  box-shadow: 0 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 30px 30px 0 0;
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
    color: #FFFFFF;
    .closeIcon{
      display: none;
      right: 20px;
    }
  }

`
Container.Bottom = styled.div`
  display: grid;
  grid-template-columns: 305px 1fr;
  grid-gap: 96px;
  padding: 20px 85px;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: 100px 1fr;
    grid-gap: 0;
    padding: 10px 23px 0 23px;
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
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 110px 1fr;
    .person{
      width: 20vw;
      height: 20vw;
      max-width: 100px;
      max-height: 100px;
      min-width: 80px;
      min-height: 80px;
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
    display: flex;
    align-items: center;
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
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  
  //border: 1px solid red;
  //>div{
  //  border: 1px solid red;
  //  >div{
  //    border: 1px solid white;
  //  }
  //}

  @media only screen and (max-width: 1000px) {
    grid-gap: 0;
  }
`
Container.Row = styled.div`
  display: grid;
  grid-template-columns: ${({columns})=> columns ? columns : '1fr'};
  @media only screen and (min-width: 1000px) {
    grid-gap: ${({gap})=> gap ? gap : '0px'};
  }
  @media only screen and (max-width: 1000px) {
    grid-gap: ${({mgap})=> mgap ? mgap : '0px'};
  }
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
  
  @media only screen and (max-width: 1000px){
    .icon{
      position: absolute;
      bottom: 7px;
      right: 10px;
    }
  }
`

Container.InputCustom1 = styled.input`
  width: 100%;
  height: 33px;
  padding: 0 0 0 40px;
  font-size: 24px;
  background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
  border-bottom: 0;
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
  @media only screen and (max-width: 1000px){
    height: 33px;
    padding: 0px 0px 0px 20px;
    font-size: 16px;
    ::before {
      content: 'Yuklab olish';
      display: inline-block;
      outline: none;
      -webkit-user-select: none;
      margin: 8px 0 0 0;
      white-space: nowrap;

      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 105.9%;
      letter-spacing: -0.025em;
      color: rgb(211, 211, 211);
    }
  }
  
`

Container.ButtonLoader = styled.div`
  text-align: center;
  background: rgba(0, 0, 0, 0.05);	  
  border-radius: 4px;
  
`;


export default Container