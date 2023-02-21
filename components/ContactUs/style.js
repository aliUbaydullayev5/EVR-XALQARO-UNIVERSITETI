import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  background: #221F51;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.81);
  border-radius: 30px;  
  display: grid;
  grid-template-rows: 84px 1fr;
  
`
Container.Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 40px;
  line-height: 49px;
  color: #fff;
  background: #221F51;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 30px 30px 0px 0px;
`

Container.Bottom = styled.div`
display: flex;
justify-content: center;
margin-top: 106px;
`

Container.BottomBox = styled.div`
width: 908px;
height: 277.34px;
background:none ;
display: flex;
gap: 64px;
`

Container.Box = styled.div`
position: relative;
width: 260px;
height: 100%;
background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
border-radius: 27px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
.location{
position: absolute;
bottom: 70%;
right: 20%;
cursor: pointer;
}
.location:hover{
  transform: scale(1.1);
  transition: 0.2s linear;
}
`
Container.Text = styled.div`
display: flex;
flex-direction: column;
gap: 18px;
width: 176px;
color: #FFFFFF;
margin-top: 28px;
`

Container.P = styled.p`
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
`


export default Container