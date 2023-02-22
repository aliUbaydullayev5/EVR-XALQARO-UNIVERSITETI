import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  display: grid;
  max-width: 1440px;
  grid-template-columns: 1fr 0.7fr;
  padding: 0px 40px;
 @media only screen and (max-width: 1000px) {
   padding: 0px 20px;
  }
`
Container.Scrool = styled.div`
   width: 100%;
   height: 615px !important;
   overflow-y: scroll;
   padding: 0 15px 0 0;
   height: 100%;
   display: grid;
   ::-webkit-scrollbar {
      width: 5px;
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
const ConTable = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap:10px;
>input{
  height: 30px;
}
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
    grid-template-columns: 52px 1fr 1fr 0.7fr;
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
`
Container.Nav = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  margin-bottom: 10px;
  >input{
    height: 45px;
  }
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
    grid-template-columns: 52px 1fr 1fr 0.7fr;
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
`


ConTable.Center = styled.div`
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 5px;
  width: 100%;
`
Container.BottomDesc = styled.div`
  height: 247px !important;
  border: 1px solid #FFFFFF;
  height: 100%;
  padding: 15px;
`
Container.BottomDescInset = styled.div`
`
// 2 Container Hero Data filter 
const ConHero = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
 @media only screen and (max-width: 1000px) {
  padding: 10px;
  justify-content: space-evenly;
.UserImg{
  display: none;
}}
.TextPsamal{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 49px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  justify-content:center;
  align-items:center;
  @media only screen and (max-width: 1000px) {
  font-size: 20px;
  }
}
`
ConHero.Tartiblash = styled.div`
  display: flex;
  justify-content: center;
  
`

ConHero.Date = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 1000px) {
   display: flex;
   flex-direction: column;
   gap: 20px;
  }
`
ConHero.Exel = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: space-around;
 
  gap: 10px;
  >div{
    display:flex;
    align-items:center;
    gap:10px;
    width: 510px; 
    background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.54);
    border-radius: 20px;
    padding-left:25px;
    cursor: pointer;
  }
  @media only screen and (max-width: 1000px) {
   gap: 20px;
  >div{
    width: 200px;
    height: 40px;
    border-radius: 10px;
    padding-left:15px;
  }
  }
`

export { ConTable, ConHero }
export default Container