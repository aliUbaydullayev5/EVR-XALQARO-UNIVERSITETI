import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  padding: 0 20px 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  
`
Container.Inset = styled.div`
  max-width: 1121px;
  width: 100%;
  background: #221F51;
  padding: 15px 13px 15px 37px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.81);
  border-radius: 30px;
  height: 520px;  
  @media only screen and (max-width: 1000px) {
  box-shadow: 0 0 0 0;
  padding: 10px 10px 10px 10px;
  height:  492px;
  .but{
    display: none;
  }
  }
`

Container.Bottom = styled.div`
  display: flex;
  gap: 27px;
  max-width: 1121px;  
  width: 100%;
  height: 90%;
  
  @media only screen and (max-width: 1000px) {
    height: 492px;
    flex-direction: column;
  }
`

Container.Img = styled.div`
width: 100%;
display: flex;

.newsImgs{
 width: 100%;
 height: 111px;
 border-radius: 20px;
}
@media only screen and (max-width: 1000px) {
.newsImgs{
 width: 90px;
 height: 64px;
 border-radius: 5px;
}
}
`

Container.BottomBox = styled.div`
  max-width: ${({top})=>top?'791px':'303px'};
  width: 100%;
  .newsImg{
    max-width: 769px;
    width: 100%;
    height: 233px;
    border-radius: 20px;
    background: none;
    border: none;
  }

  @media only screen and (max-width: 1000px) {
  height: ${({top})=>top?'362px':'64px'};
  max-width: ${({top})=>top?'791px':'100%'};
  .newsImg{
    height: 157px;
  }
}
`
Container.BottomDesc = styled.div`
  width: 100%;
  height: 100% !important;
  overflow-y: scroll;
  padding: 0 16px 15px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;

 div{
  display: flex;
  flex-wrap: wrap;
  gap: 11px;
 }

 p{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: justify;
  color: #FFFFFF;
 }

  audio{
    width: 100%;
    height: 29px;
  }
  @media only screen and (max-width: 
     1000px) {
    height: 100% !important;
    padding: ${({bot})=>bot && '0 0 0 0'};
    div{
     gap: 5px;
    }
  }
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */

  ::-webkit-scrollbar-track {
    width: 10px !important;
    padding: 0 5px 0 0;
    background: #9a9a9a;
    opacity: 0.5;
    border-radius: 30px;
    transform: matrix(-1, 0, 0, 1, 0, 
       0);
    transform: matrix(-1, 0, 0, 1, 0, 
       0);
    padding: 10px !important;

  }

  /* Handle */

  ::-webkit-scrollbar-thumb {
    background: #FFFFFF;
    border-radius: 30px;
    transform: matrix(-1, 0, 0, 1, 0, 
       0);
  }

  /* Handle on hover */
  
`
Container.BottomLine = styled.div`
  width: 100%;
  height: 4px;
  opacity: 0.5;
  border: 1px solid #FFFFFF;
  margin-top: 15px;
  margin-bottom: 12px;
  border-radius: 10px;
  background: #FFFFFF;
  @media only screen and (max-width: 1000px) {
    display: none;
  }

`

export default Container