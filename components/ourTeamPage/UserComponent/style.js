import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 45px 1fr;
  background: #221F51;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.81);
  border-radius: 30px;
  @media only screen and (max-width: 1000px) {
    grid-template-rows: 31px 1fr;
    box-shadow: none;
  }
`

Container.Top = styled.div`
  background: #221F51;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 30px 30px 0px 0px;
  font-weight: 500;
  font-size: 36px;
  line-height: 44px;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1000px) {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
`
Container.Bottom = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  padding: 23px 37px;
  grid-column-gap: 47px;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: 80px 1fr;
    padding: 23px 37px;
    grid-column-gap: 0;
    grid-row-gap: 15px;
  }
`

Container.Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #221F51;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 10px;
  padding: 0 31px;
  @media only screen and (max-width: 1000px) {
    box-shadow: none;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`

Container.PersonImage = styled.div`
  filter: drop-shadow(0px 2px 17px rgba(0, 0, 0, 0.54));
  border-radius: 250%;
  width: 150px;
  height: 178px;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  @media only screen and (max-width: 1000px) {
    border-radius: 250px;
    width: 80px;
    height: 80px;
    grid-column: 1/2;
    grid-row: 1/4;
  }
`
Container.Title = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #FFFFFF;
  @media only screen and (max-width: 1000px) {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
  }

`
Container.Desc = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #FFFFFF;
  opacity: 0.5;
  @media only screen and (max-width: 1000px) {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }
`


Container.Row = styled.div`
  display: grid;
  grid-template-columns: ${({columns})=> columns ? columns : '1fr'};
  grid-gap: ${({gap})=> gap ? gap : '0px'};
  align-items: center;
  width: 100%;
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
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`

Container.Right = styled.div`
  display: grid;
  grid-template-rows: 30px 1fr;
  @media only screen and (max-width: 1000px) {
    grid-column-gap: 15px;
  }
`
Container.RightLineTitle = styled.div`
  border-bottom: 1px solid #fff;
  padding: 0 0 5px 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  >p{
    opacity: 0.5;
  }
  @media only screen and (max-width: 1000px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    opacity: 0.5;
  }
`


Container.BottomDescInset = styled.div`
  width: 100%;
  height: 415px !important;
  font-size: 22px;
  overflow-y: scroll;
  padding: 10px 33px;
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */

  ::-webkit-scrollbar-track {
    width: 10px !important;
    background: #9a9a9a;
    opacity: 0.5;
    border-radius: 30px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    transform: matrix(-1, 0, 0, 1, 0, 0);
    padding: 10px !important;

  }

  /* Handle */

  ::-webkit-scrollbar-thumb {
    background: #FFFFFF;
    border-radius: 30px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
  >div{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  @media only screen and (max-width: 1000px) {
    height: 310px !important;
  }
  
`
Container.Section = styled.div`
  width: 100%;
  height: 50px;
  padding: 4px 27px;
  background: #221F51;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 10px;
`
Container.SectionTitle = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #FFFFFF;
`
Container.SectionDesc = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
  opacity: 0.5;
`


export default Container