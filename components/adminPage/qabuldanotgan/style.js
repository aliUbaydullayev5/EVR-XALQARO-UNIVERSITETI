import styled from "styled-components";

const Container = styled.div`
  max-width:  1440px;
  width:  100%;
  margin:  0 auto;
  padding: 0px 40px;
  display: grid;
  grid-template-columns: 7fr 3fr;
  gap: 20px;
  >div{
    height: 100%;
     height: 40px;
    }
  select {
  border: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
`
const ContainerRith = styled.div`
 display: flex;   
 justify-content:space-between;
` 

const ConW = styled.div`
  background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.54);   
  border-radius: 20px;
  width: 221.69px;
  height: 42px; 
  display: flex;
  justify-content: center;
  align-items: center;
  gap:10px;
  cursor: pointer;
  >p{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
  }
`
const Conpul = styled.div`
  background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.54);   
  border-radius: 20px;
  width: 216px; 
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap:10px;
  >b{
    font-size:32px ;
   
  }
  >div{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    justify-content: center;
    color: #FFFFFF;
  }
  >b{
    color: #FFFFFF;
  }
`
const ConExel = styled.div`
  background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.54);   
  border-radius: 20px;
  width: 233px;
  height: 42px;   
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap:10px;
>p{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
   text-align: center;
   color: #FFFFFF;  
}
`
const ConSms = styled.div`

`

const ConDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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
`
const ConSelect = styled.div`
  display: flex;
  justify-content: space-between;
  gap:10px;


`
const TalimY = styled.div`
position: relative;
.Down{
    position: absolute;
    right: 20px;
    bottom: 17px;

:hover {
    transform:scale(1.05) ;
}
}
cursor: pointer;

>select{
  width: 217.71px;
  height: 30.97px;
  border-radius: 20px;   
  background: #295196 ;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 17px;
  padding:0px 0px 0px 27px;
  color: #FFFFFF;
}
`
const TalimSh = styled.div`
position: relative;
.Down{
    position: absolute;
    right: 20px;
    bottom: 17px;
}
>select{
  width: 207.71px;
  height: 30.97px;
  border-radius: 20px;   
  background: #295196 ;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 17px;
  color: #FFFFFF;
  padding:0px 0px 0px 27px;


}
` 
const TalimT = styled.div`
position: relative;
.Down{
    position: absolute;
    right: 20px;
    bottom: 17px;
}
>select{
  background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%); 
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.54);
  border-radius: 20px;
  width: 144.83px;
  height: 30.97px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px; 
  line-height: 20px;
  color: #FFFFFF;
  padding:0px 0px 0px 27px;
}

` 
const TalimTu = styled.div`
position: relative;
>select{
  background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%); 
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.54);
  border-radius: 20px;
  width: 144.83px;
  height: 30.97px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px; 
  line-height: 20px;
  color: #FFFFFF;
  padding:0px 0px 0px 27px;
}
 .Down{
    position: absolute;
    right: 20px;
    bottom: 17px;
}
`
const Agent = styled.div`
position: relative;
>select{
  background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.54);
  border-radius: 20px;
  width: 115.42px;
  height: 30.97px;
  color: white;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  padding:0px 0px 0px 27px;
}
 .Down{
    position: absolute;
    right: 20px;
    bottom: 17px;
}
`
const ContainerSort = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  cursor: pointer;
 >div{
    width: 264.3px;
    height: 55.21px;
    background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.54);
    border-radius: 20px;
    display: flex;
    justify-content:center;
    align-items: center;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
 }
`
const SelectSms = styled.div`
  position: relative;
  border: none;
  >select{
    background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.54);
    border-radius: 20px;
    width: 115.42px;
    height: 30.97px;
    color: white;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    padding:0px 0px 0px 67px;
    background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.54);   
    border-radius: 20px;
    width: 201px;
    height: 42px;     
    display: flex;
    justify-content: center;
    align-items: center;
    gap:10px;
  }
.Sms {
    position: absolute;
    right: 20px;
    bottom: 12px;
    left: 20px;
    top: 9px;
}
 .Down{
    position: absolute;
    right: 30px;
    bottom: 12px;
    
}`
/* table */

const ConTable = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 30px 50px;
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
  @media only screen and (max-width: 1000px) {
   
   }

`

export { ConTable, SelectSms, ContainerSort,Agent,TalimT, TalimSh, ConSelect, ContainerRith, ConW, Conpul, ConExel, ConSms, ConDate, TalimY, TalimTu }
export default Container