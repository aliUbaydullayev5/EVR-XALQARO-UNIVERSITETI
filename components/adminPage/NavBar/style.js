import styled from 'styled-components'

const Container = styled.div`
  max-width: 1440px;
  padding: 30px;
  
`
Container.Logo = styled.div`
  display: flex;
  gap: 10px;

  > div {
    cursor: pointer;

    > p {
      font-family: 'Bebas Neue';
      font-style: normal;
      font-weight: 700;
      font-size: 37.3462px;
      line-height: 37px;
      display: flex;
      align-items: center;
      color: #FFFFFF;
      cursor: pointer;
    }
  }
`
export default Container