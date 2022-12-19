import styled from "styled-components";

const Container = styled.div`
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 54px;
  height: 100%;
  gap: 20px;
  .main{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    height: 100%;
  }
  @media only screen and (max-width: 1000px){
    width: 100%;
    height: 43px;
    padding: 0 15px;
    .main{
      display: grid;
      grid-template-columns: 1fr 58px;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      background: #241F69;
      box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
      border-radius: 94px;
    }

  }
  .message{
    transition: .15s;
    :hover{
      transform: scale(1.1);
    }
    :active{
      transform: scale(1.1);
    }
    cursor: pointer;
  }
  .voice{
    transition: .15s;
    :hover{
      transform: scale(1.1);
    }
    :active{
      transform: scale(1.1);
    }
    cursor: pointer;
  }
  
`

const SideNav = styled.div`
  display: flex; 
  align-items: center; 
  flex-direction:column;
  width: 100%;
  background: #241F69;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 94px;
  padding: 10px 0px ;
  cursor: pointer;
  .icon{
    margin-bottom: 2.5px ;
    transition: .15s;
    :hover{
      transform: scale(1.1);
    }
    :active{
      transform: scale(1.1);
    }
  }
  .laptopIcon{
    display: none;
  }
  
  @media only screen and (max-width: 1000px){
    max-width: 300px;
    height: 39px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    padding: 6px 0;
    grid-gap: 2px;
    background: none;
    box-shadow: none;
    .icon{
    }
    .mobileIcon{
      display: none;
    }
    .laptopIcon{
      display: block;
    }
  }
  @media only screen and (max-width: 470px){
    grid-gap: 0px;
  }

`
Container.Messanger = styled.div`
  width: 100%;
  padding: 5px 0;
  background: #241F69;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .laptopIcon{
    display: none;
  }
  @media only screen and (max-width: 1000px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 60px;
    padding: 0 0 0 0;
    align-items: center;
    grid-gap: 2px;
    padding: 0;
    box-shadow: none;
    background: none;
    margin: 5px 0 0 0;
    .mobileIcon{
      display: none;
    }
    .laptopIcon{
      display: block;
    }
  }
`
Container.MeesengerArea = styled.div`
  position: relative;
`
Container.MeesengerYellow = styled.div`
  cursor: pointer;
  width: 15px;
  height: 15px;
  border-radius: 30px;
  display: flex;
  font-size: 13px;
  justify-content: center;
  align-items: center;
  background-color: #FFC700;
  position: absolute;
  top: 2px;
  right: 2px;
  animation: 3s shadow infinite;
  @media only screen and (max-width: 1000px){
    width: 5px;
    height: 5px;
    font-size: 10px;
  }
    @keyframes shadow {
    0%{
      box-shadow: 0 0 2px 1px yellow;
    }
    50%{
      box-shadow: 0 0 5px 5px yellow;
    }
    100%{
      box-shadow: 0 0 2px 1px yellow;

    }
  }
`


export { SideNav }
export default Container