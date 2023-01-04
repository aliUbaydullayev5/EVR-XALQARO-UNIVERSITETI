import styled from "styled-components"; 

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  border: 1px solid red;
`

Container.Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #221F51;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 30px 30px 0px 0px;
  height: 52px;
  >h1{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 49px;
    color: #FFFFFF;
}
`
Container.Box = styled.div`
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border: 1px solid red;
 
`

const NavbarSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  >div{
    display: flex;
    gap: 10px;
  }

`
const Questions = styled.div`
  background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
  box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  width: 164.4px;
  height: 25.34px; 
  display: flex;
  align-items: center;
  justify-content: space-evenly;

 >label{
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 500;
   font-size: 12px;
   line-height: 105.9%;
   display: flex;
   align-items: center;
   letter-spacing: -0.025em;
   color: #FFFFFF;
   gap: 10px;

  }
`
const WidthWiet = styled.div`
height: 2px;
background-color: #ffff;
padding: 0px 10px;
`

// Scroll 
Container.Bottom = styled.div`
  padding: 14px 72px;
  display: grid;
  grid-template-rows: 1fr 57px 48px;
  grid-gap: 8px;
  @media only screen and (max-width: 1000px) {
    padding: 25px 15px;
  }
  
`

Container.BottomDesc = styled.div`
  height: 447px !important;
  border: 1px solid #FFFFFF;
  height: 100%;
  padding: 15px;
  @media only screen and (max-width: 1000px) {
    height: 310px !important;
  }
`
Container.BottomDescInset = styled.div`
  width: 100%;
  height: 415px !important;
  overflow-y: scroll;
  padding: 0 10px 0 0;
  >p{
    font-weight: 400;
    font-size: 16px;
    line-height: 105.9%;
    display: flex;
    align-items: center;
    text-align: justify;
    letter-spacing: -0.025em;
    color: #FFFFFF;
  }
  @media only screen and (max-width: 1000px) {
    height: 290px !important;
    >p{
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 105.9%;
    }
  }
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */

  ::-webkit-scrollbar-track {
    width: 10px !important;
    padding: 0 5px 0 0;
    background: #9a9a9a;
    opacity: 0.5;
    border-radius: 30px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    transform: matrix(-1, 0, 0, 1, 0, 0);
    padding: 10px !important;

  }

  /* Handle */

  ::-webkit-scrollbar-thumb {
    background: #FFFFFF;
    border-radius: 30px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }

`

Questions.Box = styled.div`
  width: 1096px;
  height: 75.16px;
  background: #241F69;
  border-radius: 15px;
  margin: 0 auto;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
 

  >h3{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 105.9%;
    display: flex;
    align-items: center;
    letter-spacing: -0.025em;
    color: #FFFFFF;

  }
`
Questions.Con = styled.div`
  display: flex;
  gap: 30px;;
`

Questions.Radio = styled.div`
 
 .Text{
   font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 105.9%;
    letter-spacing: -0.025em;
    color: #FFFFFF;    
}
`

export { NavbarSection, Questions, WidthWiet }
export default Container