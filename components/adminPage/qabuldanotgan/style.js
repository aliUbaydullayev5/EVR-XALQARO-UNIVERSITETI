import { Select, Modal } from "antd";
import styled from "styled-components";

const Container = styled.div`
  width:  100%;
  display:flex ;
  flex-direction: column;
  gap: 30px;

`
Container.Filter=styled.div`
 position: relative;
 width: 100%;
 height: 60px;
 display: flex;
 align-items: center;
 gap: 40px;

 >input{
  background: #241F69;
 }

 .search{
  position: absolute;
  z-index: 2;
  top: 22px;
  left: 10px;
 
 }
 >button{
  background: #241F69;
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
 padding-left: 10px;
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

Container.Wrapper=styled.div`
  display: flex;
  flex-direction: column;
  max-width:  1440px;
  width: 100%;
  height: 600px;
  padding: 0px 40px;
  gap: 30px;

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

const ContainerRith = styled.div`
 display: flex;   
 gap: 20px;
` 

const SendModal=styled(Modal)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  position: relative;
  height: 300px;
  padding: 20px;
  div{
    display: flex;
    justify-content: space-between;
    gap: 72px;
    align-items: center;

  }

  .ant-modal-footer{
   display: none !important;
  }

  .anticon svg{
    display: none;
  }

`

const ConW = styled.div`
  background: #241F69;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.54);   
  border-radius: 10px;
  width: 241px;
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
  width: 306px; 
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
    bottom: 10px;

 :hover {
    transform:scale(1.05) ;
  }
}
cursor: pointer;

>select{
  width: 217.71px;
  height: 30.97px;
  border-radius: 20px;   
  font-family: 'Montserrat';
  font-style: normal;
  background: #241F69;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  padding:0px 0px 0px 27px;
  color: #FFFFFF;
}
`
const TalimSh = styled.div`
position: relative;
.Down{
    position: absolute;
    right: 20px;
    bottom: 10px;
}
>select{
  width: 207.71px;
  height: 30.97px;
  border-radius: 20px;   
  font-family: 'Montserrat';
  font-style: normal;
  background: #241F69;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  padding:0px 0px 0px 27px;
}
` 
const TalimT = styled.div`
position: relative;
.Down{
    position: absolute;
    right: 20px;
    bottom: 10px;
}
>select{
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.54);
  border-radius: 20px;
  width: 144.83px;
  height: 30.97px;
  font-family: 'Montserrat';
  font-style: normal;
  background: #241F69;
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
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.54);
  border-radius: 20px;
  width: 144.83px;
  height: 30.97px;
  font-family: 'Montserrat';
  font-style: normal;
  background: #241F69;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  padding:0px 0px 0px 27px;
}
 .Down{
    position: absolute;
    right: 20px;
    bottom: 10px;
}
`
const Agent = styled.div`
position: relative;
>select{
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.54);
  border-radius: 20px;
  width: 115.42px;
  height: 30.97px;
  color: white;
  font-family: 'Montserrat';
  font-style: normal;
  background: #241F69;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  padding:0px 0px 0px 27px;
}
 .Down{
    position: absolute;
    right: 20px;
    bottom: 10px;
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

const FilterModal=styled(Modal)`
  display: flex;
  height: 300px;
  padding: 20px;
  align-items: center;
  justify-content: center;
  .ant-modal-footer{
   display: none !important;
  }

  .anticon svg{
    display: none;
  }

`

const SelectSms = styled.div`
  position: relative;
  border: none;
  width: 200px;
  height: 48px;
  background:#241F69;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.54); 
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
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
.Sms {
    right: 20px;
    bottom: 12px;
    left: 20px;
    top: 9px;
    
}
 .Down{
    right: 30px;
    bottom: 12px;
    
}`
/* table */

const ConTable = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  border: 1px solid red;

`


// Table
Container.Bottom = styled.div`
  overflow-y: scroll;
  overflow-x: scroll;
  max-height: 400px;
  width: 100%;
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
  >input{
    height: 48px;
  }

`
Container.Box = styled.div`
  display: grid;
  grid-template-columns: 60px 180px 320px 90px 135px 500px 160px 150px 120px 190px 190px 250px 190px 190px 190px;
  background:#241F69;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 10px;
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
  background-color: red;
}
`

Container.Map = styled.div`
  display: grid;
  grid-template-columns: 60px 180px 320px 90px 135px 500px 160px 150px 120px 190px 190px 250px 190px 190px 190px;
  background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  text-align: center;
  >div{
    border-right: 2px solid rgba(255, 255, 255, 0.5);
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
  }
  @media only screen and (max-width: 1000px) {}
`
const AntSelect = styled (Select)`
   .ant-select-dropdown, .css-dev-only-do-not-override-1s3dcof, .ant-select-dropdown-placement-topLeft{
      background-color: transparent !important;
  }
  .ant-select-selection-item{
    color: #fff !important;
    display: flex;
    align-items: center;
    padding: 0 20px !important;
    font-size: 24px !important;
    font-weight: 400 !important;
    font-family: 'Montserrat' !important;
    @media only screen and (max-width: 1000px) {
      font-size: 16px !important;
      padding: 0 12px !important;
    }
  }
  .ant-select-arrow{
   position: absolute;
   right: -20px;
    color: white !important;
    font-size: 30px;
    @media only screen and (max-width: 1000px) {
      font-size: 13px;
    }
  }
  .ant-select-selection-search-input{
    display: none !important;
  }
  .ant-select-selection-placeholder{
    display: flex;
    align-items: center;
    padding: 0 20px !important;
    font-size: 22px !important;
    color: #ffff;
    @media only screen and (max-width: 800px) {
      font-size: 16px !important;
      padding: 0 8px !important;
    }
  }

 .ant-select-item-option-content{
  font-size: 17px !important;
 } 
 .ant-select-item .ant-select-item-option .ant-select-item-option-active{
   font-size: 17px !important;
 }
`
export { ConTable,SendModal, AntSelect,SelectSms, ContainerSort,Agent,TalimT, TalimSh, ConSelect, ContainerRith, ConW, Conpul,FilterModal, ConExel, ConDate, TalimY, TalimTu }
export default Container