import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  padding: 0 20px 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1000px){
    padding: 0 0 0 0;
  }
  
`

Container.Inset = styled.div`
  width: 100%;
  background: #221F51;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.81);
  border-radius: 30px;
  height: 520px;
  display: grid;
  grid-template-rows: 84px 1fr;
  @media only screen and (max-width: 1000px) {
    grid-template-rows: 40px 1fr;
    box-shadow: 0 0 0 0;
  }


`
Container.Top = styled.div`
  background: #221F51;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 30px 30px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  position: relative;

  @media only screen and (max-width: 1000px) {
    background: #221F51;
    box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
    border-radius: 15px 15px 0px 0px;
    height: 31px;
    padding: 0;
  }
`
Container.TopTitle = styled.div`
  font-weight: 500;
  font-size: 40px;
  line-height: 49px;
  color: #FFFFFF;

  @media only screen and (max-width: 1000px) {
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
  } 

`

Container.Search = styled.div`
 position: absolute;
 font-family: 'Montserrat';
 font-style: normal;
 font-weight: 400;
 font-size: 20px;
 line-height: 105.9%;
 letter-spacing: -0.025em;
 color: #FFFFFF;
 left: 81%;
 input{
    max-width: 200px;
    height: 38px;
    width: 100%;
    color: #ffff;
    background: linear-gradient(90deg, 
    #1E3C72 0%, #1E3C72 1%, #2A5298 
    100%);
    box-shadow: 0px 4px 17px rgba(0, 0, 
    0, 0.25);
    border-radius: 100px;
    padding-left: 18px;
    padding-bottom: 10px;
    padding-right: 50px;
 }
 .search{
   position: absolute;
   right: 15px;
   top: 9px;
 } 

 @media only screen and (max-width: 1000px){
   font-weight: 200;
   font-size: 12px;
   margin-right: 30px;
   input{
     display: none;
   }
   .search{
     display: none;
   }
}

`

Container.Bottom = styled.div`
  padding: 14px 32px;
  display: grid;
  @media only screen and (max-width: 1000px) {
    padding: 20px 15px;
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
  @media only screen and (max-width: 
     1000px) {
    height: 450px !important;
    padding: 0 8px 0 0;
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

Container.BottomLine = styled.div`
  width: 98%;
  height: 4px;
  opacity: 0.5;
  border: 1px solid #FFFFFF;
  margin-top: 15px;
  border-radius: 10px;
  background: #FFFFFF;

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`

export default Container