import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 84px 1fr;
  //background: #221F51;
  background: var(--green);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.81);
  border-radius: 30px;
`

Container.Top = styled.div`
  font-weight: 500;
  font-size: 40px;
  line-height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  //background: #221F51;
  background: var(--green);
  box-shadow: 0 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 30px 30px 0 0;

`

Container.Row = styled.div`
  display: grid;
  grid-template-columns: ${({columns})=> columns ? columns : '1fr'};
  grid-gap: ${({gap})=> gap ? gap : '0px'};
  align-items: center;
  >div{
    position: relative;
  }
  div>p{
    font-weight: 300;
    font-size: 14px;
    line-height: 105.9%;
    letter-spacing: -0.025em;
    color: #FFFFFF;
  }
  .icon{
    position: absolute;
    bottom: 5px;
    right: 31px;
  }
`

Container.Bottom = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 13px 56px;
  .center{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 50px 0 0;
    .img{
      width: 300px;
      height: 300px;
    }
  }
  .rightSection{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

`

export default Container