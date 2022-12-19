import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: grid ;
  grid-template-columns: 2fr 1fr;
  gap: 10px;
  >div{
    display: flex;
    justify-content: end;
    flex-direction: column;
    gap: 10px;
  }
`
const BoxCon = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 100px ;
  padding-bottom: 20px ;
  >h1{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 105.9%;
    display: flex;
    align-items: center;
    letter-spacing: -0.025em;
    color: #FFFFFF;
  } 
  >p{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 105.9%;
    display: flex;
    align-items: center;
    letter-spacing: -0.025em;
    color: rgba(255, 255, 255, 0.7);
  }
`

const BtnCon = styled.div`
  display: flex;
  justify-content: end;
  align-items: flex-end ;
  margin: 15px 40px;
  position: relative;
  .Orqaga{
    position: absolute;
    right: 220px;
    top:10px ;
  }
`

export { BoxCon, BtnCon }
export default Container