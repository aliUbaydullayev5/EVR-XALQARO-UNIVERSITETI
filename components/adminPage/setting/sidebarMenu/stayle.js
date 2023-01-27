import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  display: grid;
  width: 400px;
  max-width: 350px;
  min-width: 350px;
   background: #221F51;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.81);
  margin-left: 20px;
@media only screen and (max-width: 800px) {
 grid-template-columns: auto;

}
`

Container.Inset = styled.div`
  width: 100%;
  background: #221F51;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.81);
  border-radius: 30px;
  height: 45vh;
  display: grid;
  grid-template-rows: 84px 1fr;
  @media only screen and (max-width: 1000px) {
    grid-template-rows: 31px 1fr;
  }


`
Container.Top = styled.div`
  background: #221F51;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 30px 30px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1000px) {
     background: #221F51;
    box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
    border-radius: 30px 30px 0px 0px;
    height: 31px;
  }
`
Container.TopTitle = styled.div`
  font-weight: 500;
  font-size: 40px;
  line-height: 49px;
  color: #FFFFFF;

  @media only screen and (max-width: 1000px) {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    border-radius: 5px ;
  } 
`


Container.BottomDescInset = styled.div`
  width: 100%;
  height: 560px !important;
  overflow-y: scroll;
  display: flex;
  flex-direction:column;
  gap:10px;
  padding: 10px;
  @media only screen and (max-width: 1000px) {
    height: 390px !important;
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
`

Container.BottomDescInsetCopy = styled.div`
  width: 100%;
  height: 470px !important;
  overflow-y: scroll;
  display: flex;
  flex-direction:column;
  gap:10px;
  padding: 10px;
  @media only screen and (max-width: 1000px) {
    height: 390px !important;
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
`


const UserCon = styled.div`
  width: 100%;
  max-width:412px;
  background: #221F51;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  padding:0px 0px 0px 10px ;
  align-items: center;
  display: flex;
  gap: 10px;
  height: 50px;
  `

UserCon.Box = styled.div`
display:flex;
align-items: center;
width: 100%;
justify-content:space-between;

`
UserCon.Name = styled.div`
  display: flex;
  align-items: center;
  height:50px;
  background: #221F51;
  display: flex;
  justify-content: space-between;
  >img{
  }
  width: 100%;
      cursor: pointer;
    transition: all 0.4 ease-in-out ;
    :hover{
    transform: scale(1.05);
}


>h1 {
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


export { UserCon,   }
export default Container