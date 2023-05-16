import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  background:  --grean;
  padding: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1000px) {
    height: 100vh;
    background: --grean;
    padding: 22px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
`


Container.Inset = styled.div`
  height: ${({firstPage})=> firstPage ? '700px' : '700px'};
  max-width: 1440px;
  min-width: 1200px;
  width: 100%;
  background: --grean;
  box-shadow: 0px 4px 28px rgba(0, 0, 0, 0.48);
  border-radius: 45px;
  @media only screen and (max-width: 1000px) {
    padding: 20px 0 20px 0;
    height: 720px;
    max-height: 750px;
    min-height: 600px;
    width: 100%;
    max-width: 800px;
    min-width: 200px;
  }
`
Container.NavbarArea = styled.div`
  padding: 0 49px 0 49px;
  @media only screen and (max-width: 1000px) {
    padding: 0px 18px 0 18px;
  }
`


Container.MainOfInset = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 68px 20px 1fr;
  grid-gap: 8px;
  padding: 13px 0 0 0;
  @media only screen and (max-width: 1000px) {
    display: block;
    grid-gap: 9px;
    padding: 0;
    display: grid;
    grid-template-rows: 86px 18px 1fr 45px;
  }
  
`
Container.MainMiniBlock = styled.div`
  display: grid;
  grid-template-columns: ${({firstPage})=> firstPage ? '1fr' : '1fr 80px'};
  align-items: center;
  justify-content: center;
  padding: 0 27px 0 27px;
  height: 556px;
  @media only screen and (max-width: 1000px) {
    padding: 0;
    height: 100%;
    grid-template-columns: 1fr;
  }
`

Container.MiniContent = styled.div`
  height: 100%;
  padding: 15px;
  @media only screen and (max-width: 1000px) {
    padding: 0;
    height: 100%;
    width: 100%;
  }
`

Container.SideBarLaptop = styled.div`
  height: 100%;
  @media only screen and (max-width: 1000px){
    display: none;
  }
`
Container.SideBarMobile = styled.div`
  height: 100%;
  display: none;
  @media only screen and (max-width: 1000px){
    display: block;
  }
`
Container.Line = styled.div`
  height: 18px;
  background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
`




export default Container