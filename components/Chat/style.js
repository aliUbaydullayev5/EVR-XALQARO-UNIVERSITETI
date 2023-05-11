import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 60px 1fr;
  box-shadow: 0 5px 17px rgba(0, 0, 0, 0.54);
  border-radius: 30px;  
  
`
Container.Top = styled.div`
  background: #221F51;
  box-shadow: 0 5px 17px rgba(0, 0, 0, 0.54);
  border-radius: 30px 30px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 49px;
  color: #FFFFFF;
  
`
Container.Bottom = styled.div`
  border-radius: 0 0 30px 30px;
  display: grid;
  grid-template-columns: 1fr 2fr;
`

export default Container
