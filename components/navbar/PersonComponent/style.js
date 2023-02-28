import styled from 'styled-components'


const Component = styled.div`
  position: absolute;
  top: 0;
  left: -177px;
  width: 367px;
  background: rgba(34, 31, 81, 0.95);
  box-shadow: 0 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 15px;
  z-index: 99999;
  padding: 25px;
  display: grid;
  grid-template-rows: 98px 1fr;
  grid-gap: 12px;
  .iconArea{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .closeIcon{
    position: absolute;
    top: 0;
    right: 0;
    padding: 25px;
    height: 80px;
    width: 80px;
  }
  .title{
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #fff;
  }
  >div{
    display: flex;
    justify-content: center;
  }
  @media only screen and (max-width: 1000px){
    position: absolute;
    top: 0;
    left: -177px;
    width: 285px;
    background: rgba(34, 31, 81, 0.95);
    box-shadow: 0 2px 17px rgba(0, 0, 0, 0.54);
    border-radius: 15px;
    z-index: 99999;
    padding: 5px 25px 25px 25px;
    display: grid;
    grid-template-rows: 98px 1fr;
    grid-gap: 12px;
  }
`

export default Component