import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;  
  padding: 30px 90px;
display: grid;
grid-template-columns: 7fr 2fr;
  gap: 50px;
  align-items: center;
`
Container.Left = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  >select {
  width: 142px;
  height: 43px;
  background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
  box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  color: white;
  }
`
Container.Arzilar = styled.div`
  width: 138px;
  height: 43px;
  background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
  box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  >p{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 105.9%;
    display: flex;
    align-items: center;
    letter-spacing: -0.025em;
    color: #FFFFFF;
  }
`
Container.shartnoma = styled.div`
  width: 249px;
  height: 42px;
  background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
  box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  >p{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 105.9%;
    display: flex;
    align-items: center;
    letter-spacing: -0.025em;
    color: #FFFFFF;
}
`
Container.Tolangan = styled.div`
  width: 174px;
  height: 42px;
  background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.54);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  >p{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 105.9%;
    display: flex;
    align-items: center;
    letter-spacing: -0.025em;
    color: #FFFFFF;
}
`
Container.Qarzdorlik = styled.div`
  width: 174px;
  height: 42px;
  background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.54);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  >p{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
  }

`
// Table
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
  max-height: 400px;
  width: 1300px;
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
    grid-template-columns: 40px 1fr;
    gap: 10px;


`
Container.Box = styled.div`
  display: flex;
  display: grid;
  grid-template-columns: 40px 96px 200px 250px 215px 190px 110px 240px 115px 191px 170px 240px 187px  182px 200px 205px 163px 196px 180px 185px 170px 230px 230px 149px;
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
  grid-template-columns: 40px 1fr;
  gap: 10px;

`

Container.Map = styled.div`
  display: flex;
  display: grid;
  grid-template-columns: 40px 96px 200px 250px 215px 190px 110px 240px 115px 191px 170px 240px 187px  182px 200px 205px 163px 196px 180px 185px 170px 230px 230px 149px;
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
  }
  @media only screen and (max-width: 1000px) {
   
   }

`
export { ConTable }
export default Container