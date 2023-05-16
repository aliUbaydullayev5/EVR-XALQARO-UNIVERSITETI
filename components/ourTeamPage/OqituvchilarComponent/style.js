import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-rows: 84px 1fr;
`
Container.Top = styled.div`
  //background: #221F51;
  background: var(green);
  box-shadow: 0 2px 17px rgba(0, 0, 0, 0.54);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px 30px 0 0;
  font-weight: 500;
  font-size: 40px;
  line-height: 49px;
  color: #FFFFFF;
  position: relative;
  .closeIcon{
    position: absolute;
    top: 0px;
    right: 25px;
    cursor: pointer;
  }
`

Container.BottomInset = styled.div`
  display: grid;
  grid-gap: 15px;
`

Container.Bottom = styled.div`
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  display: flex;
  flex-direction: column;
  gap: 21px;
  height: 450px;

  overflow-y: scroll;

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



export default Container