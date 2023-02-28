import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin-bottom: 8px;
  img{
   width: 170px;
   height: 136px;
   border-radius: 15px;
   background-size: cover;
  }
  
  @media only screen and (max-width:1000px){
    img{
     width: 78px;
     height: 61px;
     border-radius: 5px;
     background-size: cover;
    }
  }
`

Container.Bottom = styled.div`
 width: 80%;
 background: #241F69;
 box-shadow: 0px 2px 17px rgba(0, 0, 0, 
 0.54);
 border-radius: 0px 15px 15px 0 ;
 height: 111px;
 gap: 225px;
 display: flex;
 padding-left: 20px;
 @media only screen and (max-width:1000px){
  width: 70%;
  border-radius: 0px 5px 5px 0 ;
  gap: 10px;
  height: 56px;
  padding-left: 8px;
 } 
`
Container.Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  max-width: 370px;
  width: 100%;
  height: 86px;

  .info{
    display: flex;
    gap: 5px;
    margin-top: 4px;
    align-items: center;
    width: 100%;
    height: 11px;
    span{
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      display: flex;
      align-items: center;
      color: #FFFFFF;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  p{
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
    opacity: 0.5;
  }
  h1{
   width: 100%;
   height: 20px;
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 600;
   font-size: 24px;
   line-height: 29px;
   color: #FFFFFF;
 }
 @media only screen and (max-width:1000px){
  gap: 2px;
  max-width: 150px;
  width: 100%;
  height: 12px;

  .info{
    gap: 1px;
    margin-top: 2px;
    width: 100%;
    height: 6px;
    span{
      font-weight: 400;
      font-size: 5px;
      line-height: 6px;
     
    }
  }
  h1{
    width: 120px;
    height: 12px;
    font-weight: 600;
    font-size: 10px;
    line-height: 12px;
   }
   p{
    font-weight: 500;
    font-size: 5px;
    line-height: 6px;
   }
  } 
`

Container.End = styled.div`
 display: flex;
 align-items: flex-end;
 gap: ${({ end }) => end && "36px"};
 margin-bottom: ${({ end }) => end && "10px"};

 @media only screen and (max-width:1000px){
  gap: ${({ end }) => end && "34px"};
  display: ${({ end }) => !end && "none"};
  padding-bottom: 5px;
  padding-right: 5px;
 } 
`

export default Container
