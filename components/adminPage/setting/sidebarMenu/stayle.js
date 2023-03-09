import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  display: grid;
  width: 300px;
  max-width: 310px;
  min-width: 310px;
  background: #221F51;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.81);
  height: 100vh;
  background: #221F51;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);

@media only screen and (max-width: 800px) {
 grid-template-columns: auto;

}
`
Container.Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  text-align:center;
 
  >div{
    cursor: pointer;
     >p{ 
    font-family: 'Bebas Neue';
    font-style: normal;
    font-weight: 700;
    font-size: 37.3462px;
    line-height: 37px;
    display: flex;
    align-items: center;
    color: #FFFFFF; 
    cursor: pointer;
  } }

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
    width: 3px;
    height: 3px;

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
  display: flex;
  align-items: flex-end;
  height:50px;
  background: #221F51;
  width: 100%;
  padding: 0px 10px;
  cursor: pointer;
    transition: all 0.4 ease-in-out ;
    :hover{
      transform: scale(1.04);
    }
   >h1 {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  }
  >p{
    display: flex;
    text-align: end;
    align-items: center;
    margin:  0 0 0 auto;
  }
`


export { UserCon }
export default Container