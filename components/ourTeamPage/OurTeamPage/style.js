import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
`

Container.Block = styled.div`
  width: 576px;
  //background: #221F51;
  background: var(--green);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.81);
  border-radius: 30px;
  max-height: 694px;
  display: grid;
  grid-template-rows: 84px 1fr;
  @media only screen and (max-width: 1000px) {
    max-width: 289px;
  }
`
Container.Top = styled.div`
  position: relative;
  //background: #221F51;
  background: var(--green);
  box-shadow: 0 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 30px 30px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  
`
Container.Bottom = styled.div`
  padding: 34px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 21px;
`
Container.Text = styled.div`
  font-weight: 700;
  font-size: 48px;
  line-height: 59px;
  text-transform: uppercase;
  color: #FFFFFF;
  @media only screen and (max-width: 1000px) {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-transform: uppercase;
    color: #FFFFFF;
  }
`

export default Container