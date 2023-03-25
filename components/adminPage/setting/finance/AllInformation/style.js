import styled from "styled-components"

const   Container = styled.div`
  width: 100%;
  max-width: 1150px;
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-direction: column;
  padding: 30px 50px;
  h1{
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
    color: #FFFFFF;
    font-family: 'Montserrat';
  }
 @media only screen and (max-width: 1000px) {}
`
Container.Top=styled.div`
 width: 100%;
 background: #221F51;
 display: flex;
 flex-wrap: wrap;
 gap: 30px;

`
Container.Wrapper=styled.div`
 width: 100%;
 height: 600px;
 background: #221F51;
 box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.3);
 border-radius: 12px;
 padding: 24px;


`

Container.Card=styled.div`
 width: 214px;
 height: 87px;
 box-shadow: 0px 0px 26px rgba(0, 0, 0, 0.14);
 border-radius: 9px; 
 background: #241F69;
 display: flex;
 align-items: center;
 justify-content: center;
 gap: 20px;
`
Container.Text=styled.div`
 display: flex;
 flex-direction: column;
 gap: 9px;
 width: 122px;

  h1{
   font-style: normal;
   font-weight: 600;
   font-size: 18px;
   line-height: 24px;
   color: #FFFFFF;
   font-family: 'Montserrat';
   display: flex;
   align-items: flex-end;
   justify-content: start;
   gap: 7px;
   h2{
     font-size: 12px;
     line-height: 18px;
     font-weight: 400;
   }
  }
  p{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
  }
`
Container.Img=styled.div`
 width: 40px;
 height: 40px;
 background: #295197;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
`

export default Container