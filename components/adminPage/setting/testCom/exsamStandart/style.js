import styled from "styled-components"
import {Modal} from "antd";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  width: 100%;

  > div {
    display: grid;
    grid-template-columns: 10fr auto;
    margin-bottom: 10px;

    > h1 {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
      line-height: 44px;
      display: flex;
      align-items: center;
      color: #FFFFFF;
    }
  }

`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  max-width: 1440px;
  grid-template-columns: 5fr ;
  padding: 10px 10px;
  background: #221F51;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  
 @media only screen and (max-width: 1000px) {
   padding: 0  20px;
  }
`

Container.Scrool = styled.div`
   width: 100%;
   height: 615px !important;
   overflow-y: scroll;
   padding: 0 15px 0 0;
   display: grid;
   ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
    ::-webkit-scrollbar-track {
      width: 10px !important;
      background: #9a9a9a;
      opacity: 0.5;
      border-radius: 30px;
      transform: matrix(-1, 0, 0, 1, 0, 0);
      padding: 10px !important;
    }

    ::-webkit-scrollbar-thumb {
      background: #FFFFFF;
      border-radius: 30px;
      transform: matrix(-1, 0, 0, 1, 0, 0);
    }
`

Container.Add = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`
const ConTable = styled.div`
  display: grid;
  grid-template-columns:  1fr;
  gap:10px;
  >div{
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
  }
  .row{
    display: grid;
    grid-template-columns: 50px 130px 130px 170px 200px 180px 100px;
    background: #241F69;
    box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
    border-radius: 8px;
    border-radius: 12px;
    border-radius: 5px;
  }
    box-shadow: 0 2px 17px rgba(0, 0, 0, 0.54);
    border-radius: 5px;
  .colum{
    border-left:  2px solid white;
    padding-left: 10px;
  }
  .action{
    display: flex;
    justify-content: space-between;
    padding-right: 10px;
    >button{
      background: #241F69;
    }

  }

`
Container.Nav = styled.div`
  display: grid;
  gap: 10px;
  margin-bottom: 10px;
  >div{
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    height: 60px;
  }
  .row{
    display: grid;
    grid-template-columns: 50px 130px 130px 170px 200px 180px 100px;
    padding-left: 15px;
    background: #241F69;
    box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
    border-radius: 8px;
    height: 50px;
  }
    /* box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54); */
    border-radius: 5px;
  .colum{
    border-left:  2px solid white;
    padding-left: 10px;
  }

`
Container.ButtonLoader = styled.div`
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
`
Container.Btn = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  background-color: red;
`
const Antmodal = styled(Modal)`
  width: 700px!important;
  left: 100px;
  top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  @media only screen and (max-width: 1000px) {
    width: 700px!important;
  }
`
Container.Add = styled.div`
  >div{
    display: flex ;
    align-items: center;
    gap: 20px;
    >h1{
      font-style: normal;
      font-weight: 400;
      font-size: 28px;
      line-height: 34px;
      display: flex;
      align-items: center;
      color: #FFFFFF;
    }
    >p{
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      display: flex;
      align-items: center;
      color: #FFFFFF;
    }
  }
`
Container.BtnAdd =styled.div`
  display: flex;
  align-items: center;
  justify-content:  space-around;
  width: 150px;
  height: 50px;
  background: #221F51;
  box-shadow: 0 3.09677px 11.6129px rgba(0, 0, 0, 0.54);
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  align-items: center;
  cursor: pointer;
  color: #FFFFFF;
`
export { ConTable,Wrapper ,Antmodal }
export default Container