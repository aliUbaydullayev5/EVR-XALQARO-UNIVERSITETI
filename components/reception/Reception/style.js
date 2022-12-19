import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Box = styled.div`
  max-height: 454px;
  display: grid;
  grid-auto-rows: 116px 1fr;
  width: 466px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.81);
  border-radius: 30px;
  @media only screen and (max-width: 600px) {
    max-width: 289px;
    min-width: 269px;
  }

`

const Text = styled.div`
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 30px 30px 0px 0px;
  width: 466px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  justify-content: center;
  height: 116px;
@media only screen and (max-width: 600px) {
    max-width: 289px;
    min-width: 289px;

  }
  >p{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 78px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: #FFFFFF;
  @media only screen and (max-width: 800px) {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 48px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: #FFFFFF;
  }
  }
  
`

const BtnCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  padding: 35px 0;
  @media only screen and (max-width: 600px) {
    max-width: 289px;
    min-width: 289px;

  }
`

export { Box, Text, BtnCon }
export default Container