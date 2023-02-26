import styled from 'styled-components'

const Container = styled.div`
 height: 100%;
 background: #221F51;
 box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.81);
 border-radius: 30px;  
 display: grid;
 grid-template-rows: 84px 1fr;
  
 @media only screen and (max-width: 1000px){
   box-shadow: 0px 0px 0px 0px;
   grid-template-rows: 44px 470px;
 }
`
Container.Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 40px;
  line-height: 49px;
  color: #fff;
  background: #221F51;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 30px 30px 0px 0px;

  @media only screen and (max-width: 1000px){
    font-size: 16px;
    height: 31px;
  }
`

Container.Bottom = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 padding: 10px 10px;

 @media only screen and (max-width: 1000px){
   padding: 10px 10px;
 }
`
Container.Img = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-wrap: wrap;
 gap: 23px;

 .img{
   border-radius: 20px;
   max-width: 355px;
   width: 100%;
   height: 216.75px;
   cursor: pointer;
 }

 @media only screen and (max-width: 1000px){
  .img{
   border-radius: 5px;
   max-width: 140.45px;
   height: 85.75px;
  }
}
`

Container.BottomDesc = styled.div`
  width: 100%;
  height: 380px !important;
  overflow-y: scroll;
  padding: 0 16px 15px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  cursor: pointer;
     
  @media only screen and (max-width: 1000px) 
  {
    height: 100% !important;
    padding: 0 16px 15px 0;
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
    transform: matrix(-1, 0, 0, 1, 0, 
       0);
    transform: matrix(-1, 0, 0, 1, 0, 
       0);
    padding: 10px !important;

  }

  /* Handle */

  ::-webkit-scrollbar-thumb {
    background: #FFFFFF;
    border-radius: 30px;
    transform: matrix(-1, 0, 0, 1, 0, 
       0);
  }

  /* Handle on hover */
`

export default Container