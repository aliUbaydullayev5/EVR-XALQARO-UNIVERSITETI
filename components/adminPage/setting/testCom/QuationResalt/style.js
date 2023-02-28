import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  display: grid;
  max-width: 1440px;
  padding: 0px 40px;
 @media only screen and (max-width: 1000px) {
   padding: 0px 20px;
  }

`
/* table */
const ConTable = styled.div`
  width: 100%;
  max-width: 1440px;
  align-items: center;
  display: grid;
  grid-template-columns: 40px 1fr ;
`


// Table
Container.Bottom = styled.div`
  overflow-y: scroll;
  overflow-x: scroll;
  max-height: 550px;
  width: 1000px;
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
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

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`
Container.BottomInset = styled.div`
  display: grid;
  grid-row-gap: 9px;
  width: 100%;
`
Container.Nav = styled.div`
    display: grid;
    grid-template-columns:  1fr;
`
Container.Box = styled.div`
  display: flex;
  display: grid;
  grid-template-columns: 40px 300px 300px 10fr 300px 300px 300px 300px 240px 300px 300px 300px 120px  ;
  background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  text-align: center;
  >div{
    border-right: 2px solid rgba(255, 255, 255, 0.5);
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

Container.Section = styled.div`
  display: grid;
  grid-template-columns:  1fr;
  gap: 10px;

`

Container.Map = styled.div`
  display: flex;
  display: grid;
  grid-template-columns: 40px 300px 300px 300px 300px 300px 300px 300px 240px 300px 300px 300px  120px ;
  background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 80px;
  

  >div{
    border-right: 2px solid rgba(255, 255, 255, 0.5);
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
  }
  @media only screen and (max-width: 1000px) {}
`


export { ConTable }
export default Container