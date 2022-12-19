import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 84px 1fr;
@media only screen and (max-width: 1000px) {
  display: flex;
  flex-direction:column ;
  margin: 0 auto ;
  grid-template-rows: 84px 1fr;
  }
`

const HerBox = styled.div`
  display: grid ;
  grid-template-columns: auto auto ;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  @media only screen and (max-width: 1000px) {
  display: flex;
  flex-direction:column ;
  margin: 0 auto;
   box-shadow: 0px 0px 0px 0px;
  }
  
  
`
const BoxCon = styled.div`
  padding: 21px 40px 0 40px;
  display: flex;
  flex-direction: column;
  gap: 7px;  
  @media only screen and (max-width: 1000px) {
  display: flex;
  flex-direction:column;
  margin: 0 auto;

  }
  .btnEnd{
    text-align: end;
    display: flex;
    justify-content: end;
  }
`
const TextCon = styled.div`
  background: #221F51;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 30px 30px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width:100% ;
    >p{
    font-weight: 500;
    font-size: 40px;
    line-height: 49px;
    color: #FFFFFF;
}

@media only screen and (max-width: 1000px) {

  background: #221F51;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 30px 30px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
>p{
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
display: flex;
align-items: center;
color: #FFFFFF;
}
}


font-family: 'Montserrat';

  
`
const InputCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  >p {
    font-weight: 400;
    font-size: 16px;
    line-height: 105.9%;
    display: flex;
    align-items: center;
    letter-spacing: -0.025em;
    color: #FFFFFF;
  }

`
const BtnCon = styled.div`
  position: relative ;
  margin-top: 15px;  
  margin: 0 auto;
  .BtnCon{
    position: absolute ;
    bottom: 10px ;
    left:20px ;
    top: 17px ;
  }
   @media only screen and (max-width: 1000px) {
    .BtnCon{
    position: absolute ;
    bottom: 10px ;
    left:50px ;
    top: 2px ;
  }
   }
`
const TextBox = styled.div`
  display: flex ;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  >p{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: justify;
    letter-spacing: 0.055em;
    color: #FFFFFF;
  }
 @media only screen and (max-width: 1000px) {
   >p{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    display: flex;
    align-items: center;
    text-align: justify;
    letter-spacing: 0.055em;
    width: 70%;
    margin: 0 auto;

color: #FFFFFF;
   }

 } 
`
const ConTainerImg = styled.div`
  display: grid;
  grid-template-columns: 177px 178px;
  gap: 20px;
  margin:  0 auto;
  margin-top: 10px;
    @media only screen and (max-width: 1000px) {
        grid-template-columns: 133px 133px;
    }
  >div{
    width:  100%;
    align-items: center;
    height: 55px;
    background-color: #fff;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    cursor: pointer;  
  @media only screen and (max-width: 1000px) {
    .Click{
    display: none;
    }
    .Payme{
      display: none;
    }
    .Paynet{
      display: none;
    }
    .Apelsin{
      display: none;
    }
    .Oson{
      display: none;
    }
    .Tolov{
      display: none;
    }
   }


 @media only screen and (min-width: 1000px) {
    .CilckMobile{
    display: none;
    }
    .PaymeMobile{
      display: none;
    }
    .PaynetMobile{
      display: none;
    }
    .ApelsinMobile{
      display: none;
    }
    .OsonMobile{
      display: none;
    }
    .TolovMobile{
      display: none;
    }
   }
  }
`
const ImgBox = styled.div`
  position: relative;

  .Tolov{
    position: absolute ;

    cursor: pointer;
    :hover {
      transform: scale(1.02) ;
    }
  }
  .oson{
    position: absolute;
    left: 25px;
    bottom: 0px;
    top: 20px;
    cursor: pointer;
    :hover {
      transform: scale(1.02);
    } 
  }
  >div{

  }
  
`

export { BoxCon, TextCon, HerBox, InputCon, BtnCon, TextBox, ConTainerImg, ImgBox }
export default Container