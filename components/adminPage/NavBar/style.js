import styled from 'styled-components'

const Container = styled.div`
  max-width: 1440px;
  padding: 30px;
  
`
Container.Logo = styled.div`
  display: flex;
  gap: 10px;
 
  >div{
    cursor: pointer;
     >p{ 
    font-family: 'Bebas Neue';
    font-style: normal;
    font-weight: 700;
    font-size: 37.3462px;
    line-height: 37px;
    display: flex;
    align-items: center;
    color: #FFFFFF; 
    cursor: pointer;
  } }
  `
const ConText = styled.div`
  margin-left: 20px;
  :hover {
    transform: scale(1.02);
    cursor: pointer;
  }
  > p {
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 64px;
    align-items: center;
    color: #FFFFFF;
    @media only screen and (max-width: 600px) {
      font-style: normal;
      font-weight: 500;
      font-size: 54px;
      line-height: 54px;
      align-items: center;
      color: #FFFFFF;
    }
    @media only screen and (max-width: 550px) {
      font-style: normal;
      font-weight: 500;
      font-size: 44px;
      line-height: 44px;
      align-items: center;
      color: #FFFFFF;

    }
  }
`;
export { ConText }
export default Container