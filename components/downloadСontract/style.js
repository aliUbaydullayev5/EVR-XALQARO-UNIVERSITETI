import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  width: 100%;
  background: var(--green);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.81);
  border-radius: 30px;  
  display: grid;
  grid-template-rows: 84px 1fr;
  @media only screen and (max-width: 1000px){
    box-shadow: 0 0 0 0;
    grid-template-rows: 40px 1fr;

  }
`
Container.Top = styled.div`
  width: 100%;
  //background: #221F51;
  background: var(--green);
  box-shadow: 0 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 30px 30px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 49px;
  color: #FFFFFF;
  @media only screen and (max-width: 1000px){
    height: 100%;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
  }
`

Container.Bottom = styled.div`
  padding: 15px 102px;  
  display: flex;
  flex-direction: column;
  gap: 20px;

  p{
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 32px;
    line-height: 105.9%;
    letter-spacing: -0.025em;
    color: #FFFFFF;
    opacity: 0.5;
    font-style: normal;
  }

  .button{
    display: flex;
    align-items: center;
    justify-content: end;
  }

  @media only screen and (max-width: 1000px){
    padding: 80px 67px;
    p{
      text-align: center;
      font-size: 14px;
      margin-top: 20px;
    }
    .button{
      justify-content: center;
    }
  }
`

Container.LogoSection = styled.div`
  display: grid;
  grid-template-columns: 140px 10px 1fr;
  grid-gap: 10px;
  width: 650px;
  align-items: center;
  .line{
    height: 100%;
    width: 3px;
    background: #FFFFFF;
    box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  }
  .title{
    font-family: 'BenchNine';
    font-style: normal;
    font-weight: 400;
    font-size: 58px;
    color: #FFFFFF;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 1000px){
    display: none;
  }
`

Container.ButtonLine = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  flex-wrap: wrap;
  @media only screen and (max-width: 1000px){
    gap: 27px;
  }
`
Container.Button = styled.div`
  max-width: 282px;
  width: 100%;
  height: 53.04px;
  //background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
  background: var(--buttonColor);
  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
   
  label{
    color: #FFFFFF;
    font-weight: 400;
    font-size: 20px;
    line-height: 105.9%;
    text-align: center;
  }

  input{
    width: 15px;
    height: 15px;
  }

  @media only screen and (max-width: 1000px){
    height: 49px;
    border-radius: 5px;
    padding: 5px 10px;
    label{
      font-size: 17px;
    }
  }

`

export default Container