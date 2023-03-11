import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1000px) {
    padding: 0 20px;
  }
`
const Wrapper=styled.div`
  background: #221F51;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  padding: 30px;
  height: 600px !important;
`
Container.Scrool = styled.div`
  width: 900px;
  overflow-y: scroll;
  padding: 0 15px 0 0;
  display: grid;
  gap:10px;
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-track {
    width: 10px !important;
    padding: 0 5px 0 0;
    background: #9a9a9a;
    opacity: 0.5;
    border-radius: 30px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }

  ::-webkit-scrollbar-thumb {
    background: #FFFFFF;
    border-radius: 30px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
  @media only screen and (max-width: 1000px) {

  }
`

Container.Nav = styled.div`
  display: grid;
  >div{
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    gap: 10px;
  }
  .row{
    display: grid;
    grid-template-columns:  50px 10fr  200px;
    padding-left: 15px;
    background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
    border-radius: 5px;
    height: 50px;
  }
   box-shadow: 0 2px 17px rgba(0, 0, 0, 0.54); 
   border-radius: 5px;
  .colum{
    border-left:  2px solid white;
    padding-left: 10px;
  }

`
const ConTable = styled.div`
  display: grid;
  grid-template-columns:  1fr;
  gap:10px;
  background: #241F69;

  >div{
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
  }
  .row{
    display: grid;
    grid-template-columns: 50px 10fr  10fr  200px;
    padding-left: 15px;
    box-shadow: 0 2px 17px rgba(0, 0, 0, 0.54);
    border-radius: 8px;
  }

  .colum{
    border-left:  2px solid white;
    padding-left: 10px;
  }
  .action{
    display: flex;
    justify-content: space-between;
    padding-right: 10px;
  }
`


export { ConTable,Wrapper }
export default Container