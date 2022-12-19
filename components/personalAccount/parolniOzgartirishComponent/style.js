import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  width: 100%;
  background: #221F51;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.81);
  border-radius: 30px;
  display: grid;
  grid-template-rows: 84px 1fr;

`
Container.Top = styled.div`
  background: #221F51;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 30px 30px 0px 0px;font-weight: 500;
  font-size: 40px;
  line-height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  position: relative;
  .closeIcon{
    position: absolute;
    top: 18px;
    right: 23px;
    cursor: pointer;
  }


`
Container.Bottom = styled.div`
  display: grid;
  grid-template-columns: 305px 1fr;
  grid-gap: 96px;
  padding: 20px 85px;

`

Container.Left = styled.div`
  display: grid;
  grid-template-rows: 1fr 50px;
  justify-content: center;
  align-items: center;
  >div{
    display: flex;
    justify-content: center;
  }
`
Container.LeftMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  >div{
    position: relative;
  }
  .icon{
    position: absolute;
    z-index: 999;
    top: 5px;
    left: 39px;
  }

`

Container.Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  padding: 20px 0 0 0;
  
`
Container.Row = styled.div`
  display: grid;
  grid-template-columns: ${({columns})=> columns ? columns : '1fr'};
  grid-gap: ${({gap})=> gap ? gap : '0px'};
  align-items: center;
  >div{
    position: relative;
  }
  div>p{
    font-weight: 300;
    font-size: 14px;
    line-height: 105.9%;
    letter-spacing: -0.025em;
    color: #FFFFFF;
  }
  .icon{
    position: absolute;
    bottom: 5px;
    right: 31px;
  }
`

Container.InputCustom1 = styled.input`
  width: 100%;
  height: 33px;
  padding: 0px 0px 0px 40px;
  font-size: 24px;
  background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
  border-bottom: 0px;
  border-radius: 5px;
  outline: none;
  box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.25);
  color: transparent;
  transition: .2s ;
  :active{transform: scale(${({ scale }) => (scale ? `${scale}` : '1.02')})}
  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
  ::-webkit-file-upload-button {
    visibility: hidden;
  }
  ::before {
    content: 'Yuklab olish';
    display: inline-block;
    outline: none;
    -webkit-user-select: none;
    margin: 8px 0 0 0;
    white-space: nowrap;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 105.9%;
    letter-spacing: -0.025em;
    color: rgb(211, 211, 211);
  }
  cursor: pointer;
`


export default Container