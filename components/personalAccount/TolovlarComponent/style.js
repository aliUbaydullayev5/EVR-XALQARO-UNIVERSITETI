import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  background: #221F51;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.81);
  border-radius: 30px;
  display: grid;
  grid-template-rows: 84px 1fr;
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
    .closeIcon{
      display: none;
    }
  }
`

Container.Bottom= styled.div`
  padding: 20px 63px;
  display: grid;
  grid-template-rows: 1fr 1.1fr;
  @media only screen and (max-width: 1000px) {
    padding: 20px 15px;
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
    @media only screen and (max-width: 1000px) {
      letter-spacing: -0.025em;
      font-weight: 300;
      font-size: 10px;
      line-height: 105.9%;
      height: 12px;
      width: 80px;
    }
  }
  .icon{
    position: absolute;
    bottom: 5px;
    right: 31px;
  }
  @media only screen and (max-width: 1000px) {
    grid-gap: ${({mgap})=> mgap ? mgap : '0px'};
    .mobile{
      display: none;
    }
  }
`

Container.Person = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

Container.InsetPerson = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  >div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
  }
  @media only screen and (max-width: 1000px) {
    grid-template-columns: 106px 1fr;
    .personIcon{
      width: 106px;
      height: 106px;
    }
    gap: 12px;
  }

`

Container.BottomSections = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
`

export default Container