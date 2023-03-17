import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  
`
Container.LeftMenu = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #001529;

`
Container.Logo = styled.div`
  display: flex;
  gap: 10px;
  padding: 15px;
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
      white-space: nowrap;
    }
  }
`
export default Container