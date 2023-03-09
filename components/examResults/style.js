import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  width: 100%;
  background: #221F51;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.81);
  border-radius: 30px;  
  
  @media only screen and (max-width: 1000px){
    box-shadow: 0px 0px 0px 0px;
  }
`
Container.Top = styled.div`
  width: 100%;
  height: 84px;
  background: #221F51;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 30px 30px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 49px;
  color: #FFFFFF;
  @media only screen and (max-width: 1000px){
    height: 31px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
`

Container.Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 20px 0;

  @media only screen and (max-width: 
  1000px){
    gap: 15px;
  }

`
Container.Button = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  height: 234px;
  padding: 0 10px;

  @media only screen and (max-width: 
  1000px){
    height: 283px;
    padding: 0 5px;
  }
`

Container.BottomSelect = styled.div`
  display: flex;
  padding: 0 85px;
  gap: 32px;
  select{
    option{
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 105.9%;
      color: #FFFFFF;
      padding-bottom: 8px;
    }
  }


  @media only screen and (max-width: 1000px){
    flex-wrap: wrap;
    gap: 10px;
    /* padding: 0 5px; */
  }
`
Container.BottomDesc = styled.div`
  width: 100%;
  height: 314px !important;
  overflow-y: scroll;
  padding: 0 30px;
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