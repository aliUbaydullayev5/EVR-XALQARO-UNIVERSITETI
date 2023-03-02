import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 40px;
  margin: 10px 0;
  background: #221F51;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  
  h1{
    width: 26%;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;
    color: #FFFFFF;
  }
  b{
    width: 10%;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
  }
  h2{
    width: 17%;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
  }
  @media only screen and (max-width:1000px){
   margin: 3px 0;
   height: 20px;
   border-radius: 5px;
   h1{
    font-size: 7px;
    line-height: 9px;
    gap: 5px;
    padding-left: 7px;
   }
   b{
    font-size: 8px;
    line-height: 10px;
   }
   h2{
    font-size: 8px;
    line-height: 10px;
   }
  }
`

export default Container
