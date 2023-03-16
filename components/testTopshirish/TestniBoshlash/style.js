import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background: #221F51;
  box-shadow: 0 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 30px 30px 0 0;
  position: relative;
`
Container.Text = styled.div`
  background: #221F51;
  box-shadow: 0 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 30px 30px 0 0;
  height: 61px;
  display: flex;
  justify-content: center;
  >h1{
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 59px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
   
  }
`
Container.Img = styled.div`
  display: flex;
  justify-content: center;
  > img {
    height: 490px;
    border-radius: 34px;
    padding: 10px 0;
  }
`

Container.Btn = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
`




export default Container