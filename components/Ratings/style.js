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
   grid-template-rows: 50px 1fr;
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
    font-size: 18px;
    line-height: 20px;
  }
`

Container.Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;

  h1{
    color: #ffff;
    width: 27%;
    text-align: center;
    border: 1px solid yellow;
  }
  @media only screen and (max-width: 1000px){

  }
`
Container.Sciences=styled.div`
  display: flex;
  width: 100%;
  height: 44px;
  border: 1px solid red;
  @media only screen and (max-width: 1000px){

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