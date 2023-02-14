import styled from 'styled-components'

const Container = styled.div`
  padding: 20px 80px;
  max-width: 1440px;
  margin: 0 auto;
  select {
  border: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
  @media only screen and (max-width: 1000px) {
      display: flex;
      flex-wrap: wrap;
       padding: 50px 80px;

   }
     @media only screen and (max-width: 550px) {
      display: flex;
      flex-wrap: wrap;
       padding: 50px 20px;

   }
`
Container.Logo = styled.div`
  display: flex;
  align-items: center;
`
const ConText = styled.div`
  margin-left: 20px;
  :hover {
  transform: scale(1.02);
  cursor: pointer;
}
>p{
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 64px;
  align-items: center;
  color: #FFFFFF;
    @media only screen and (max-width: 600px) {
      font-family: 'Bebas Neue';
      font-style: normal;
      font-weight: 500;
      font-size: 54px;
       line-height: 54px;
       align-items: center;
       color: #FFFFFF;
   }
      @media only screen and (max-width: 550px) {
      font-family: 'Bebas Neue';
      font-style: normal;
      font-weight: 500;
      font-size: 44px;
       line-height: 44px;
       align-items: center;
       color: #FFFFFF;

   }
}
`
export { ConText }
export default Container