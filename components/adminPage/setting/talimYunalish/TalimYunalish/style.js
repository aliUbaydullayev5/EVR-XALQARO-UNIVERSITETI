import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

Container.Block = styled.div`
  background: rgba(34, 31, 81, 0.95);
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 15px;
  width: 397px;
  height: 428px;
  display: flex;
  flex-direction: column;
  gap:40px;
  align-items:center;
  justify-content: center;

`

export default Container