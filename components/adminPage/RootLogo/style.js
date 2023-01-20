import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin:  0 auto;
`
Container.Logo = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid red;
  padding: 110px 96px;
`
Container.Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0px;

`

export default Container