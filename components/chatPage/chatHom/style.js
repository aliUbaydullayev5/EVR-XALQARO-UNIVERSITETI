import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  border: 1px solid red;
  display: grid;
  grid-template-columns: 1fr 2fr;
`

Container.Inset = styled.div`
  width: 100%;
  background: #221F51;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.81);
  border-radius: 30px;
  height: 474px;
  display: grid;
  grid-template-rows: 84px 1fr;
  @media only screen and (max-width: 1000px) {
    grid-template-rows: 31px 1fr;
  }


`
Container.Top = styled.div`
  background: #221F51;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 30px 30px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1000px) {
     background: #221F51;
    box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
    border-radius: 30px 30px 0px 0px;
    height: 31px;
  }
`
Container.TopTitle = styled.div`
  font-weight: 500;
  font-size: 40px;
  line-height: 49px;
  color: #FFFFFF;
  @media only screen and (max-width: 1000px) {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  } 

`

Container.Bottom = styled.div`
  /* padding: 0px 25px; */
  display: grid;
  grid-gap: 8px;
  @media only screen and (max-width: 1000px) {
    padding: 25px 0px;
  }
  
`

Container.BottomDesc = styled.div`
  height: 247px !important;
  height: 100% !important;
  border-bottom: 3px solid #ffffff !important;
  @media only screen and (max-width: 1000px) {
    height: 430px !important;
  }
`
Container.BottomDescInset = styled.div`
  width: 100%;
  height: 410px !important;
  overflow-y: scroll;
  padding: 20px;

  @media only screen and (max-width: 1000px) {
    height: 390px !important;
  
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
    transform: matrix(-1, 0, 0, 1, 0, 0);
    transform: matrix(-1, 0, 0, 1, 0, 0);
    padding: 10px !important;

  }

  /* Handle */

  ::-webkit-scrollbar-thumb {
    background: #FFFFFF;
    border-radius: 30px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
  /* Handle on hover */
`





 






export default Container