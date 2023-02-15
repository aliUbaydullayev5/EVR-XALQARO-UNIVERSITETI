import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 84px 1fr;
  background: #221F51;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.81);
  border-radius: 30px;
  @media only screen and (max-width: 1000px) {
    grid-template-rows: 50px 1fr;
    box-shadow: 0 0 0 rgba(0, 0, 0);
  }
`
Container.Number = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	.customPhoneInput {
		border-radius: 15px !important;
		background: linear-gradient(
			90deg,
			#1e3c72 0%,
			#1e3c72 1%,
			#2a5298 100%
		) !important;
		box-shadow: 0 4px 17px rgba(0, 0, 0, 0.25) !important;
		font-style: normal;
		font-weight: 400;
		font-size: 32px;
		line-height: 105.9%;
		letter-spacing: -0.025em;
		color: #fff;
		width: 513px !important;
		padding: 0 0 0 20px !important;
		height: 46px;
		@media only screen and (max-width: 800px) {
          
          width: 100% !important;
          font-size: 16px;
          height: 36px !important;
          border-radius: 5px !important;
		}
	}
	@media only screen and (max-width: 800px) {
		width: 100% !important;
	}
`;

Container.NumberText = styled.div`
  position: absolute;
  top: -16px;
  left: 90px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 105.9%;
  display: flex;
  align-items: center;
  letter-spacing: -0.025em;
  color: rgba(194, 191, 191, 0.442);

@media only screen and (max-width: 1000px) {
 left: 20px; 
}
`

const TextCon = styled.div`
  width: 100%;
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #221F51;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 30px 30px 0px 0px;
 @media only screen and (max-width: 1000px) {
   height: 31px;
 }
  >h1{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 59px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
   @media only screen and (max-width: 1000px) {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
   }
  }
`

const InputCont = styled.div`
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  grid-gap: 30px;
  >div{
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .row5{
    display: flex;
    align-items: center;
    justify-content: center;
    margin:  0 auto;
  }
  .row6{
    display: flex;
    align-items: center;
    justify-content: center;
    margin:  0 auto;
  }
  .row4{
    display: flex;
    align-items: center;
    justify-content: center;
    margin:  0 auto;
  } 
  .row7 { 
    > div {
      width: 512px;
      display: grid !important;
      grid-template-columns: 1fr 1fr !important;
    }
  }


  >div{
    display: flex;
    align-items: center;
    justify-content: center;
  }
.row5{
  display: flex;
  align-items: center;
  justify-content: center;
  margin:  0 auto;
}
.row6{
  display: flex;
  align-items: center;
  justify-content: center;
  margin:  0 auto;
}
.row4{
  display: flex;
  align-items: center;
  justify-content: center;
  margin:  0 auto;
}

 .row9{
    >div{
      display: grid !important;
      grid-template-columns: 1fr 1fr !important;
      grid-gap: 10px !important;
    }
  }
  .row8{
     >div{
      display: grid !important;
      grid-template-columns: 1fr 1fr !important;
      grid-gap: 10px !important;
    }
    }

  @media only screen and (max-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(1fr, 12);
    >div{
      width: 100%;
      height: 26px;
    }
    .row1{
       grid-row: 1/2;
    }
    .row2{
       grid-row: 2/3;
    }
    .row3{
       grid-row: 3/4;
    }
    .row4{
       grid-row: 4/5;
    }
    .row5{
       grid-row: 5/6;
    }
    .row6{
       grid-row: 6/7;
    }
    .row7{
      grid-row: 7/8;
      >div {
        width: 100%;
        display: grid !important;
        grid-template-columns: 1fr 1fr !important;
        grid-column-gap: 10px !important;
        height: 36px;
      }
    }
    .row8{
       grid-row: 8/9;
      >div {
        width: 100%;
        display: grid !important;
        grid-template-columns: 1fr 1fr !important;
        height: 36px;
        grid-column-gap: 10px !important;
        
      }
    }
    .row9{
       grid-row: 9/10;
    }
    .row10{
      grid-row: 11/12;
      margin: 0 auto;
    }
  }
  .mainForm{
     position: relative;

    p{
      position: absolute;
      left: 18px;
      top: 10px;
      font-size: 24px;
      font-weight: 400;
      line-height: 105.9%;
      letter-spacing: -0.025em;
      color: white;

      @media only screen and (max-width: 1000px) {
        font-size: 16px;
        font-weight: 400;
        left: 10px;
        top: 10px;
      }
    }
  }
  @media only screen and (max-width: 1000px) {
    .mainForm{
      width: 100%;
    }

    }
  
`

InputCont.Section1 = styled.div``
InputCont.Section2 = styled.div``

const BtnCon = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  > div {
    width: 100%;
  }
  @media only screen and (max-width: 1000px) {
    margin: 0 auto;
  }
`

Container.ButtonLoader = styled.div`
  text-align: center;	  
  background: rgba(0, 0, 0, 0.05);	  
  border-radius: 4px;
`;

const IconBox = styled.div`
  position: relative;
  padding: 0 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  .ArrowTop {
    position: absolute;
    right: 30px;
    top: 35px;
    cursor: pointer;
  }
    position: absolute;
    left: 5px;
    top: 6px;
    cursor: pointer;
    @media only screen and (max-width: 800px) {
      height: 26px;
      position: absolute;
      left: 22px;
      top: 6px;
      cursor: pointer;
      display: none;
    }
  }
  .UploadFile1 {
    position: absolute;
    left: 5px;
    top: 6px;
    cursor: pointer;
    @media only screen and (max-width: 800px) {
      display: none;
    }
  }
  .UploadFileMobile2 {
    position: absolute;
    left: 7px;
    top: 8px;
    cursor: pointer;
    @media only screen and (min-width: 800px) {
      display: none;
    }
  }
  .UploadFileMobile {
    position: absolute;
    left: 7px;
    top: 8px;
    bottom: 5px;
    cursor: pointer;
    @media only screen and (min-width: 800px) {
      display: none;
    }
  }

```


Container.InputCustom1 = styled.input`
  width: 251px;
  height: 46px;
  padding: 0 0 0 70px;
  font-size: 24px;
  background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
  border-bottom: 0;
  border-radius: 15px;
  outline: none;
  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.25);
  font-style: normal;
  font-weight: 400;
  line-height: 105.9%;
  letter-spacing: -0.025em;
  color: transparent;
  transition: .2s ;
  :active{transform: scale(${({ scale }) => (scale ? `${scale}` : '1.02')})}
  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
  color: ${({ inputType }) => inputType && 'transparent'};
  ::-webkit-file-upload-button {
    visibility: hidden;
  }
  ::before {
    font-family: 'Montserrat', sans-serif;
    content: 'Deplom atistat';
    line-height: 105.9%;
    letter-spacing: -0.025em;
    color: #fff;
    display: inline-block;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    margin: 8px 0 0 0;
  }
  @media only screen and (max-width: 1000px) {
    width: 100% !important;
    height: 26px;
    padding: 0px 0px 0px 30px;
    font-size: 16px;
    border-radius: 5px;
  }
  
`

Container.InputCustom2 = styled.input`
  //cursor: pointer;
  //min-width: 124.72px;
  //width: 513px;
  //height: 46px;
  //padding: 0px 0px 0px 70px;
  //font-size: 24px;
  //background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
  //border-bottom: 0px;
  //border-radius: 15px;
  //outline: none;
  //box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.25);
  //font-family: 'Montserrat';
  //font-style: normal;
  //font-weight: 400;
  //line-height: 105.9%;
  //letter-spacing: -0.025em;
  //color:transparent;
  //transition: .2s ;
  //:active{transform: scale(${({ scale }) => (scale ? `${scale}` : '1.02')})}


  cursor: pointer;
  min-width: 124.72px;
  width: 251px;
  height: 46px;
  padding: 3px 0 3px 40px;
  font-size: 22px;
  background: linear-gradient(90deg, #1e3c72 0%, #1e3c72 1%, #2a5298 100%);
  border-bottom: 0;
  border-radius: 15px;
  outline: none;
  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.25);
  font-style: normal;
  font-weight: 400;
  line-height: 105.9%;
  letter-spacing: -0.025em;
  transition: 0.2s;
  color: rgba(255, 255, 255, 0);
  @media only screen and (max-width: 1000px) {
     padding: 0 0 0 30px;
     font-size:13px;
     display: flex;
     align-items: center;
     justify-content: center;
     width: 100%;
     height: 36px;
     border-radius: 5px;
  
   }

  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
  color: ${({ inputType }) => inputType && 'transparent'};
  ::-webkit-file-upload-button {
    visibility: hidden;
  }
  ::before {
    font-family: 'Montserrat', sans-serif;
    content: 'Deplom atistat';
    line-height: 105.9%;
    letter-spacing: -0.025em;
    color: #fff;
    display: inline-block;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    margin: 8px 0 0 0;
  }
  @media only screen and (max-width: 1000px) {
    width: 100% !important;
    height: 26px;
    padding: 0px 0px 0px 30px;
    font-size: 16px;
    border-radius: 5px;
  }
  
`





export { TextCon, InputCont, BtnCon, IconBox }
export default Container