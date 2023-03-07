import styled from "styled-components";

const Container = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 gap: 20px;

`

Container.Header = styled.div`
 display: flex;
 width: 100%;
 flex-wrap: wrap;
 gap: 20px 40px;
`
Container.Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 630px;
  padding: 10px 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;

`
Container.Date=styled.div`
 width: 175px;
 height: 48px;
 display: flex;
 gap: 10px;
 justify-content: center;
 align-items: center;
 background: #241F69;
 box-shadow: 0px 3.09677px 11.6129px rgba(0, 0, 0, 0.54);
 border-radius: 10px;
 p{
  color: #fff;
  width: 93px;
  height: 22px;
  padding-top: 2px;
 }
`

Container.Option=styled.div`
 width: 1350px;
 display: flex;
 padding: 0 30px;
 flex-wrap: wrap;
 gap: 40px;
 div{
  display: flex;
  gap: 30px;
  >button{
    background: #211E51;
  }
 }
`

Container.Button=styled.div`
 width: 115px;
 height: 40px;
 border-left: 2px solid #ffff;
 background: none;
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 43%;
 top: 15%;
 >button{
  background: #241F69;
  gap: 10px;
  div{
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }
 }

`

const Header = styled.div`

 position: relative;
 width: 100%;
 height: 60px;
 display: flex;
 align-items: center;
 gap: 32px;

 >input{
  background: #241F69;
  line-height: 22px;
 }

 .search{
  position: absolute;
  z-index: 2;
  top: 20px;
  left: 10px;
 
 }
 >button{
  background: #241F69;
 }
`

const ConW = styled.div`
  background: #241F69;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.54);   
  border-radius: 10px;
  width: 294px;
  height: 48px; 
  display: flex;
  justify-content: center;
  align-items: center;
  gap:10px;
  cursor: pointer;
  p{
    font-weight: 500;
    line-height: 22px;
    font-size: 18px;
    color: #FFFFFF;
    
  }
`
const Conpul = styled.div`
  background: #241F69;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.54);   
  border-radius: 10px;
  width: ${({summa})=>summa? "360px":"278px"};
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap:10px;
  p{
    font-weight: 500;
    line-height: 22px;
    font-size: 18px;
    color: #FFFFFF;
  }
`
const ConExel = styled.div`
  background: #241F69;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.54);   
  border-radius: 10px;
  width: 236px;
  height: 48px;   
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap:10px;
  p{
    font-weight: 500;
    line-height: 22px;
    font-size: 18px;
    color: #FFFFFF;
    transition: .2s;
    :active{
      transform: scale(1.05);
    }
    :hover{
      letter-spacing: 1px;
    }
  }
`

Container.Select=styled.div`
  height: 35px;
  position: relative;
  >select{
    line-height: 20px;
    font-weight: 400;
    font-size: 16px;
    background: #241F69;
  }
  .Down{
    position: absolute;
    right: 16px;
    bottom: 8px;
  }

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
  align-items: center;
  display: grid;
  grid-template-columns: 40px 1fr ;
  gap: 10px;

`


// Table
Container.Bottom = styled.div`
  overflow-y: scroll;
  overflow-x: scroll;
  max-height: 400px;
  width: 1337px;
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
  background: #241F69;
  grid-template-columns: 40px 96px 288px 90px 135px 198px 162px 240px 115px 191px 170px 240px 187px  182px 200px 205px 163px 196px 180px 185px 170px 230px 230px 149px;
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
    line-height: 22px;
    font-size: 18px;
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
  background: #241F69;
  grid-template-columns: 40px 96px 288px 90px 135px 198px 162px 240px 115px 191px 170px 240px 187px  182px 200px 205px 163px 196px 180px 185px 170px 230px 230px 149px;
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
    line-height: 22px;
    font-size: 18px;  
    color: #FFFFFF;
  }
  @media only screen and (max-width: 1000px) {}
`


export { Header,Conpul,ConExel, ConW, ConTable }
export default Container