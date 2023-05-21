import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 342.42px;
  max-height: 221.69px;
  padding: 0 0 10px 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  //background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
  background: var(--buttonColor);
  border-radius: 20px 20px 10px 10px;
  .img{
    width: 300px;
    height: 157.33px;
    background-size: cover;
    border-radius: 20px;
  }

  @media only screen and (max-width:1000px){
    min-height: 91px;
  }

`
Container.Bottom = styled.div`
  padding: 6px;
  max-width: 318px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media only screen and (max-width:1000px){
    margin-left: 7px;
    padding-right: 10px;
  }
`

Container.BottomText = styled.div`
  max-width: 318px;
  width: 100%;
  overflow: hidden;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: -0.025em;
  color: #FFFFFF;
  @media only screen and (max-width:1000px){
    font-size: 12px;
  }
`

Container.Footer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 13px;

  a {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
  }
`;

Container.Box = styled.div`
 display: flex;
 gap: 3px;
 justify-content: center;
 align-items: center;
 p{
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 500;
   font-size: 10px;
   line-height: 12px;
   color: rgba(255, 255, 255, 0.5);
 }
 button{
 background: none;
 border: none;
 font-family: 'Montserrat';
 font-style: normal;
 font-weight: 400;
 font-size: 12px;
 line-height: 15px;
 color: #FFFFFF;
 cursor: pointer;
 }
`

export default Container