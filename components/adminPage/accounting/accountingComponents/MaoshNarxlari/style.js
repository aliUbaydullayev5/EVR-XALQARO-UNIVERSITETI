import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;

  background: #221F51;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  padding: 20px;

  display: grid;
  grid-template-rows: 70px 50px 1fr;

  .title {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
    display: flex;
    align-items: center;

    color: #FFFFFF;

    .subTitle {
      font-style: normal;
      font-weight: 500;
      font-size: 26px;
      color: rgba(175, 175, 175, 0.71);
      padding: 0;
      margin: 5px 0 0 0;
    }

  }

  .filter {
    border: 1px solid red;
  }

  .dataArea {
    border: 1px solid red;
  }

`


export default Container