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
   grid-template-rows: 40px 1fr;
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
    height: 100%;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
  }
`

Container.Bottom = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 15px 11px 15px 42px;

  @media only screen and (max-width: 1000px){
    padding: 0 8px 0 8px;
  }
`
Container.BottomTop = styled.div`
  width: 100%;
  gap: 20px;
  display: flex;
  justify-content: center;
  padding: 0 20px 0 0;

  @media only screen and (max-width: 1000px){
   flex-wrap: wrap;
   justify-content: center;
   padding: 0 0 0 0 ;
  }
`
Container.BottomTopSelect = styled.div`
  display: flex;
  justify-content: center;
  gap: 13px;
  select{
    width: 206px;
    height: 28px;
    font-size: 20px;
    padding-left: 15px;
    option{
      background: #221F51;
      border: none;
      color: white;
      box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
    }
  }
  
  @media only screen and (max-width: 1000px){
    flex-wrap: wrap;
    select{
      width: 90%;
    }
  }
`
Container.Search = styled.div`
 font-family: 'Montserrat';
 font-style: normal;
 font-weight: 400;
 font-size: 20px;
 line-height: 105.9%;
 letter-spacing: -0.025em;
 color: #FFFFFF;
 position: relative;
 input{
    max-width: 241px;
    height: 28px;
    width: 100%;
    color: #ffff;
    background: linear-gradient(90deg, 
    #1E3C72 0%, #1E3C72 1%, #2A5298 
    100%);
    box-shadow: 0px 4px 17px rgba(0, 0, 
    0, 0.25);
    border-radius: 100px;
    padding-left: 20px;
    padding-bottom: 10px;
    padding-right: 50px;
 }
 .search{
    position: absolute;
    right: 15px;
    top: 4px;
  } 

 @media only screen and (max-width: 1000px){
   font-weight: 200;
   font-size: 10px;
   width: 200px;
   input{
    width: 200px;
    border-radius: 5px;
    padding-left: 12px;

   }
   .search{
    right: 15px;
    top: 3px;
   }
   }
`
Container.BottomDesc = styled.div`
  width: 100%;
  height: 320px !important;
  overflow-y: scroll;
  @media only screen and (max-width: 
     1000px) {
    height: 230px !important;
  }
  ::-webkit-scrollbar {
    width: 5px;
  }
  >div{
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