import styled from "styled-components"; 

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 30px 30px 30px 30px;
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
 
`

const NavbarSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding:  10px  0px;
  >div{
    display: flex;
    gap: 20px;
   
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
   cursor: pointer;
  }

  .input {
    -webkit-appearance: none;
    width: 16px !important;
    height: 12px !important;
    border-radius: 25px !important;
    cursor: pointer;
    background-color: rgba(232, 232, 232, 0);
    border: 2px solid #fff;
  }

  .input:checked {
    background-color: #fff;
    border: 2px solid #fff;
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
  height: 380px !important;
  height: 100%;
  padding: 15px;
  @media only screen and (max-width: 1000px) {
    height: 310px !important;
  }
`
Container.BottomDescInset = styled.div`
  width: 100%;
  height: 360px !important;
  overflow-y: scroll;
  padding: 0 20px 0 0;
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

  height: 75.16px;
  background: #241F69;
  border-radius: 15px;
  margin: 0 auto;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px 0px 0px 0px;
 

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


Questions.Radio = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 80%;
  .input {
    -webkit-appearance: none;
    width: 16px !important;
    height: 12px !important;
    border-radius: 25px !important;
    cursor: pointer;
    background-color: rgba(232, 232, 232, 0);
    border: 2px solid #fff;
  }

  .input:checked {
    background-color: #fff;
    border: 2px solid #fff;
  }

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
const TextSmall = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 105.9%;
  letter-spacing: -0.025em;
  color: #FFFFFF;
  white-space: nowrap;
`

const BtnCon = styled.div`
 display: flex;
 justify-content: end;
 margin-right: 30px;

`

export { NavbarSection, Questions, WidthWiet, TextSmall, BtnCon }
export default Container