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
  display: grid;
  grid-template-columns: 5fr 5fr;
 >div{
  display: flex;
  flex-direction: column;
  gap: 20px;
 }   

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
  font-size: 48px;
  line-height: 108.9%;
  display: flex;
  align-items: center;
  letter-spacing: -0.025em;
  color: #FFFFFF;
 }
`
const Box = styled.div`
  width: 100%;
  display:  grid;
  grid-template-columns: 4fr ;

`

Container.Resalt = styled.div`
  display: grid; 
  grid-template-columns:  230px 150px 100px 100px;
  margin: 10px 0px 0px 0px;
 >div{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 108.9%;
  letter-spacing: -0.025em;
  color: #FFFFFF;
 }
`
const SecondBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`

export { Box, SecondBox }
export default Container