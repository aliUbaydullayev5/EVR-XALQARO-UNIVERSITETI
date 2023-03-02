import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
 @media only screen and (max-width: 1000px) {

}

`

Container.Top=styled.div`
width: 100%;
height: 150px;
display: flex;
flex-direction: column;
gap: 20px;
`

Container.Scrool = styled.div`
   width: 100%;
   height: 410px !important;
   overflow-y: scroll;
   padding: 4px 10px 4px 0;
   height: 100%;
   display: grid;
   border-radius: 10px;
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
      transform: matrix(-1, 0, 0, 1, 0, 0);
      padding: 10px !important;
    }

    ::-webkit-scrollbar-thumb {
      background: #FFFFFF;
      border-radius: 30px;
      transform: matrix(-1, 0, 0, 1, 0, 0);
    }
`

Container.Add = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`
const ConTable = styled.div`
  display: grid;
  grid-template-columns:  1fr;
  gap:10px;
  >div{
    font-family: 'Montserrat';
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
    grid-template-columns: 50px 10fr  10fr 200px ;
    padding-left: 15px;
    background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
    border-radius: 5px;
  }
    box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
    border-radius: 5px;
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
Container.Nav = styled.div`
  display: grid;
  gap: 10px;
  margin-bottom: 10px;
  >div{
    font-family: 'Montserrat';
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
    grid-template-columns:  50px 10fr  200px;
    padding-left: 15px;
    background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
    border-radius: 5px;
    height: 50px;
  }
    box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
    border-radius: 5px;
  .colum{
    border-left:  2px solid white;
    padding-left: 10px;
  }

`
Container.ButtonLoader = styled.div`
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
`


export { ConTable }
export default Container