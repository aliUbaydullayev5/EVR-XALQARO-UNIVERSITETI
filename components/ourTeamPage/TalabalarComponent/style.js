import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  //background: #221F51;
  background: var(--green);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.81);
  border-radius: 30px;
  display: grid;
  grid-template-rows: 49px 30px 1fr;
  grid-gap: 10px;
`
Container.Top = styled.div`
  font-weight: 500;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  //background: #221F51;
  background: var(--green);
  box-shadow: 0 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 30px 30px 0 0;
  position: relative;

  .closeIcon {
    position: absolute;
    top: 0px;
    right: 25px;
    cursor: pointer;
  }

  @media only screen and (max-width: 1000px) {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;

  }

`
Container.Bottom = styled.div`
  overflow-y: scroll;
  max-height: 400px;

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
Container.BottomInset = styled.div`
  padding: 19px 29px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 9px;

`

Container.Section = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  cursor: pointer;

  height: 48px;
  //background: #241F69;
  background: var(--green);
  box-shadow: 0 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 15px;
  transition: .2s;

  :hover {
    letter-spacing: 1.2px;
  }

  :active {
    transform: scale(1.1);
  }

  @media only screen and (max-width: 1000px) {
    background: var(--green);
    box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
    border-radius: 5px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
  }
`

Container.Center = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 0.7fr 1fr 1fr;
  padding: 0 40px;

  > div {
    display: flex;
    justify-content: center;
  }
`
Container.Select = styled.select`
  width: ${({width}) => width && width};
  height: 30.63px;
  //background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%) !important;
  background: var(--buttonColor);
  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.25);
  border: 0 !important;
  text-align: center;

  border-radius: 100px !important;
  font-weight: 400 !important;
  font-size: 20px !important;
  line-height: 105.9% !important;
  letter-spacing: -0.025em !important;
  color: #FFFFFF !important;
  @media only screen and (max-width: 1000px) {
    font-size: 12px !important;
    height: 13px !important;
    font-style: normal !important;
    font-weight: 400 !important;
    font-size: 7px !important;
    width: ${({mwidth}) => mwidth && mwidth};

  }


  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  > option {
    //background-color: #1E3C72 !important;
    background-color: var(--buttonColor) !important;
  }

`
Container.Input = styled.input`
  width: 240px;
  height: 30.75px;
  //background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
  background: var(--buttonColor);
  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  padding: 0 10px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 105.9%;
  letter-spacing: -0.025em;
  color: #FFFFFF;
  @media only screen and (max-width: 1000px) {
    font-size: 12px !important;
    height: 13px !important;
    font-style: normal !important;
    font-weight: 400 !important;
    font-size: 7px !important;
    width: ${({mwidth}) => mwidth && mwidth};
    width: 65px !important;
  }
`


export default Container