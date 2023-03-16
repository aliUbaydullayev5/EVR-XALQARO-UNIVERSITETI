import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 50px 80px;
  grid-gap: 24px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: center ;
    padding: 20px 30px;
  }

  > div {
    min-width: 250px;
    min-height: 200px;
    background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.54);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media only screen and (max-width: 1000px) {
      min-width: 150px;
      min-height: 140px ;
    }
    cursor: pointer;
    :hover {
      transform: scale(1.02);
    }
    >p{
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 49px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #FFFFFF;
      @media only screen and (max-width: 1000px) {
        font-size: 19px;
      }
    }
  }
`;

export default Container