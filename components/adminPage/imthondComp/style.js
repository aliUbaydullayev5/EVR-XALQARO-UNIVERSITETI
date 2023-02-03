import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  border: 1px solid red;
  padding: 20px 50px;
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
  grid-template-columns: repeat(7 ,1fr) ;
 justify-content: center;
 gap: 10px;
 background-color: red;
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


export { ConText, Header }
export default Container