import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

Container.Block = styled.div`
  width: 518px;
  height: 455px;
  background: #221F51;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.81);
  border-radius: 30px;
  display: grid;
  grid-template-rows: 135px 1fr;
  @media only screen and (max-width: 1000px) {
    max-width: 290px;
    max-height: 312px;
    background: #221F51;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.81);
    border-radius: 30px;
    display: grid;
    grid-template-rows: 77px 1fr;
  }
`

Container.Top = styled.div`
  background: #221F51;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 30px 30px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`
Container.Title = styled.div`
  font-weight: 600;
  font-size: 64px;
  line-height: 78px;
  color: #FFFFFF;
  @media only screen and (max-width: 1000px) {
    font-size: 40px;
    line-height: 49px;
  }
`

Container.Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0 0 0;
  gap: 30px;
  @media only screen and (max-width: 1000px) {
    gap: 14px;
  }
`

Container.InputArea = styled.div`
  position: relative;
  .personIcon{
    position: absolute;
    left: 5px;
    top: 0;
  }
  .blockIcon{
    position: absolute;
    left: 5px;
    top: 0;
  }
`

Container.Desc = styled.div`
  font-weight: 400;
  font-size: 19px;
  line-height: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #FFFFFF;
  text-align: center;
  margin: 14px 0 0 0;
  transition: .2s;
  :hover{
    transform: scale(1.05);
  }
  :active{
    transform: scale(1.05);
  }
  @media only screen and (max-width: 1000px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
    max-width: 160px;
    :hover{
      transform: none;
    }
    :active{
      transform: none;
    }
  }
`
Container.SubDesc = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #FFFFFF;
  text-align: center;
  margin: 20px 0 0 0;
  cursor: pointer;
  transition: .2s;
  :hover{
    transform: scale(1.05);
  }
  :active{
    transform: scale(1.05);
  }
  @media only screen and (max-width: 1000px) {
    font-weight: 600;
    font-size: 18px;
    line-height: 19px;
    color: #FFFFFF;
    text-align: center;
    margin: 10px 0 0 0;
    :hover{
      transform: none;
    }
    :active{
      transform: none;
    }
  }
`
Container.ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center !important;
`

export default Container