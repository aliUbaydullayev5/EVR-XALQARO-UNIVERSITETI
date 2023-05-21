import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  //background: #221F51;
  background: var(--green);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.81);
  border-radius: 30px;
  display: grid;
  grid-template-rows: 84px 1fr;

  @media only screen and (max-width: 1000px) {
    box-shadow: 0 0 0 0;
    grid-template-rows: 44px 430px;
  }
`
Container.Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 40px;
  line-height: 49px;
  color: #fff;
  //background: #221F51;
  background: var(--green);
  box-shadow: 0 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 30px 30px 0 0;

  @media only screen and (max-width: 1000px) {
    font-size: 16px;
    height: 31px;
  }
`

Container.Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;

  @media only screen and (max-width: 1000px) {
    margin: 40px 0 15px 0;
    gap: 10px;
  }
`
Container.BottomImg = styled.div`
  display: flex;
  gap: 100px;
  justify-content: center;
  align-items: center;

  .img {
    width: 228px;
    height: 338px;
  }

  @media only screen and (max-width: 1000px) {
    gap: 15px;
    flex-direction: column;

    .img {
      height: 200px;
      width: 134px;
    }
  }

`

export default Container