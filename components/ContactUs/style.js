import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  //background: #221F51;
  background: var(--green);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.81);
  border-radius: 30px;  
  display: grid;
  grid-template-rows: 84px 1fr;
  
  @media only screen and (max-width: 1000px){
   box-shadow: 0 0 0 0;
   grid-template-rows: 40px 1fr;
  }
`
Container.Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 40px;
  line-height: 49px;
  color: #fff;
  //background: #221F51;
  background: var(--green);
  box-shadow: 0 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 30px 30px 0 0;
  @media only screen and (max-width: 1000px){
    height: 100%;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
  }
`

Container.Bottom = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 106px;

  @media only screen and (max-width: 1000px){
    margin:15px  0 20px 0;
  }
`

Container.BottomBox = styled.div`
  max-width: 908px;
  width: 100%;
  height: 277.34px;
  background:none ;
  display: flex;
  flex-wrap: wrap;
  gap: 64px;

  @media only screen and (max-width: 1000px){
   height: 100%;
   gap: 30px;
   align-items: center;
   justify-content: center;
  }
`

Container.Box = styled.div`
  position: relative;
  max-width: 260px;
  width: 100%;
  height: 100%;
  //background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
  background: var(--buttonColor);
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .resLocation{
   position: absolute;
   bottom: 75%;
   right: 23%;
   cursor: pointer;
  }

  .resLocation:hover{
   transform: scale(1.1);
   transition: 0.2s linear;
  }

  @media only screen and (max-width: 1000px){
  max-width: 234px;
  width: 100%;
  height: 106px;
  padding-left: 47px;
  padding-bottom: 25px;

  .resLocation{
   position: absolute;
   right: 65%;
   top: -13.5%;
  }

}
`
Container.Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 176px;
  color: #FFFFFF;
  margin-top: 28px;
  @media only screen and (max-width: 1000px){
   max-width: 149px;
   width: 100%;
   gap: 5px;
  }
`

Container.TextP = styled.p`
  cursor: pointer;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: ${({ pi }) => pi && "32px"};
  font-size: ${({ num }) => num ? "20px" : "24px"};
  line-height: 105.9%;
  letter-spacing: -0.025em;
  text-align: center;
  a{
   color: white;
  }

  @media only screen and (max-width: 1000px){
   font-size: ${({ pi }) => pi && "20px"};
   font-size: ${({ num }) => num ? "16px" : "16px"};
  }
`


export default Container