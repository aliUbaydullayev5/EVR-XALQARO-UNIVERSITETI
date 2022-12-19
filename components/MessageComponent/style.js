import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 342px;
  height: 383px;
  background: rgba(34, 31, 81, 0.95);
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 15px;
  z-index: 9999;
  display: grid;
  grid-template-rows: 50px 1fr;
  padding: 0 0 50px 0;

`

Container.Top = styled.div`
  width: 100%;
  background: #221F51;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 15px 15px 0px 0px;
  display: grid;
  grid-template-columns: 1fr 30px;
  >div{
  }
  .center{
    display: flex;
    justify-content: start;
    align-items: center;
    cursor: pointer;
  }
  
`


Container.Title = styled.div`
  padding: 11px 0 0 23px;

  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  >p{
    font-weight: 400;
    font-size: 14px;
    line-height: 12px;
    color: #FFFFFF;
    opacity: 0.5;
  }

`

Container.Bottom = styled.div`
  padding: 13px 19px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;
  position: relative;
  .data{
    font-weight: 400;
    font-size: 13px;
    line-height: 12px;
    color: #FFFFFF;
    opacity: 0.5;
    text-align: center;
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

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`

Container.Messages = styled.div`
  display: flex;
  justify-content: ${({who})=> who === 'adminPage' ? 'start' : 'end'};
  
`
Container.Message = styled.div`
  background: #2E2A6E;
  box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.25);
  border-radius: ${({who})=> who === 'adminPage' ? '0px 15px 15px 15px' : '15px 0px 15px 15px'};
  padding: 7px 21px;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  max-width: 300px;
`

Container.PushMessageArea = styled.div`
  position: absolute;
  bottom: 12px;
  left: 10px;
  .telegram{
    position: absolute;
    top: 10px;
    right: 5px; 
    cursor: pointer;
  }
`
Container.PushMessage = styled.input`
  width: 314px;
  height: 35px;
  background: #2E2A6F;
  border-radius: 15px;
  font-weight: 500;
  font-size: 16px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  padding: 9px 35px 9px 16px;
`

export default Container