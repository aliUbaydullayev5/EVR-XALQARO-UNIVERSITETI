import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  background: #221F51;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.81);
  border-radius: 30px;  
  display: grid;
  grid-template-rows: 84px 1fr;
  
`
Container.Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 40px;
  line-height: 49px;
  color: #fff;
  background: #221F51;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 30px 30px 0px 0px;
`

Container.Bottom = styled.div`
  padding: 15px 102px;  
  display: flex;
  flex-direction: column;
  gap: 20px;
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
    font-weight: 700;
    font-size: 58px;
    line-height: 50px;
    color: #FFFFFF;
    text-transform: uppercase;
  }
`

Container.ButtonLine = styled.div`
  border: 1px solid red;
  display: flex;
  align-items: center;
  gap: 30px;
`
Container.Button = styled.div`
  width: 282px;
  height: 53.04px;
  background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  border: 0;

  font-size: 20px;
  line-height: 105.9%;
  letter-spacing: -0.025em;
  color: #FFFFFF;
  cursor: pointer;
  transition: .2s;
  
  :hover{
    
  }
  :active{
    
  }
  
`

export default Container