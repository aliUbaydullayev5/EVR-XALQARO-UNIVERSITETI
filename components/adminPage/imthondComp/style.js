import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 10px 50px;
`
Container.Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  >div{
    display: flex;
    gap: 10px;
  }
`

const ConText = styled.div`
  >p{
   font-family: 'Bebas Neue';
   font-style: normal;
   font-weight: 700;
   font-size: 64px;
   line-height: 64px;
   display: flex;
   align-items: center;
   color: #FFFFFF;
   cursor: pointer;
 }
`
Container.Left = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
 >div{
    display: flex;
    gap: 10px;
    >input{
    ::-webkit-calendar-picker-indicator {
    filter: invert(100%);}
    width: 125.41px;
    height: 35.65px;
    background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
    border-radius: 20px;
    font-size:12px ;
    font-family: 'Montserrat';
    font-style: normal;
    color: #FFFFFF;
    text-align:center;
    padding: 15px;
    font-size:14px ;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
  }
   }
`
Container.Header = styled.div`


`
const Header = styled.div`
  display: grid; 
  /* grid-template-columns: 240px 249px 174px 174px 233px 200px; */
  grid-template-columns: repeat(7 ,3fr) ;
 justify-content:space-around;
 gap: 10px;
 width: 100%;
 text-align: center;



`
Header.Con = styled.div`
  background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.54);
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 5px 0px;
 text-align: center;
  >div{
    display: flex;
    flex-direction: column;
    align-items: center;
    >p{
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;  
      line-height: 12px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #FFFFFF;
    }
  }
`
  // * table * /

const ConTable = styled.div`
  width: 100%;
  padding: 30px 50px;
  align-items: center;
  display: grid;
  grid-template-columns: 40px 1fr ;
  gap: 10px;

`


// Table
Container.Bottom = styled.div`
  overflow-y: scroll;
  overflow-x: scroll;
  max-height: 450px;
  width: 1350px;
  overflow-x: scroll;
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
  >input{
  height: 49px;
}
`
Container.Box = styled.div`
  display: flex;
  display: grid;
  grid-template-columns: 40px 96px 288px 90px 135px 198px 162px 240px 115px 191px 170px 240px 187px  182px 200px 205px 163px 196px 180px 185px 170px 230px 230px 149px;
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
.chcxboxInput{
  height: 30px;
}
`

Container.Map = styled.div`
  display: flex;
  display: grid;
  grid-template-columns: 40px 96px 288px 90px 135px 198px 162px 240px 115px 191px 170px 240px 187px  182px 200px 205px 163px 196px 180px 185px 170px 230px 230px 149px;
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
  @media only screen and (max-width: 1000px) {}
`


export { ConText, Header, ConTable }
export default Container