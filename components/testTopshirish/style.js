import styled from "styled-components";


const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 90px;
  gap: 35px;

`
Container.Logo = styled.div`
  display: flex;
  gap: 23px;
  align-items: center;
  >b{
    width: 3px;
    height: 132px;
    background-color: #ffff;
  }
  >div{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Bebas Neue';
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 64px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
  }
`

Container.Text = styled.div`
 >h1{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 105.9%;
    display: flex;
    align-items: center;
    letter-spacing: -0.025em;
    color: #FFFFFF;
    width: 70%;
 }
`
Container.Input = styled.div`
  display: flex;
  gap: 30px;
  >p{
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 400;
   font-size: 24px;
   line-height: 105.9%;
   display: flex;
   align-items: center;
   letter-spacing: -0.025em;
   color: #FFFFFF;
   opacity: 0.5;
  }
`

Container.Placeholder = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 105.9%;
  letter-spacing: -0.025em;
  color: #FFFFFF;
  opacity: 0.5;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

Container.Btn = styled.div`
  >button{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 105.9%;
    display: flex;
    align-items: center;
    letter-spacing: -0.025em;
    text-transform: uppercase;
    color: #FFFFFF;
  }
`

export default Container