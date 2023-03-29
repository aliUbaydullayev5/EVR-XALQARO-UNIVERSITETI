import styled from 'styled-components'

const Container = styled.div`
  width: 510px;
  padding: 20px 30px 60px 60px;
  background: rgba(34, 31, 81, 0.95);
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 15px;
  position: absolute;
  top: -10px;
  right: -10px;
  z-index: 9999;
 
  .close{
    position: absolute;
    top: 23px;
    right: 32px;
    cursor: pointer;
    transition: .1s;
    :hover{
      transform: scale(1.05);
    }
    @media only screen and (max-width: 1000px) {
      display: none;
    }
  }
  .closeMobile{
    position: absolute;
    top: 27px;
    right: 30px;
    cursor: pointer;
    transition: .1s;
    :hover{
      transform: scale(1.05);
    }
    display: none;
    @media only screen and (max-width: 1000px) {
      display: block;
    }
  }
  ul>li{
    font-weight: 300;
    font-size: 28px;
    line-height: 34px;
    color: #FFFFFF;
    margin: 10px 0;
    cursor: pointer;
    transition: .2s;
    :hover{
      font-weight: 500;
    }
    :active{
      transform: scale(1.05);
    }
  }



  @media only screen and (max-width: 1000px) {
    width: 90vw;
    height: 567px;
    padding: 52px 0px 60px 0px;
    background: rgba(34, 31, 81, 0.95);
    box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
    border-radius: 15px;
    position: absolute;
    top: -25px !important;
    right: -25px !important;
    ul{
      padding: 0 0 0 45px;
    }
    ul>li{
      font-weight: 300;
      font-size: 20px;
      line-height: 24px;
      color: #FFFFFF;
      :active{
        transform: scale(1.05);
      }
    }
  }
`
Container.ButtonArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  margin: 0 0 30px 0;
`


export default Container