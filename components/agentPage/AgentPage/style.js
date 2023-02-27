import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  padding: 0 20px 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

Container.Inset = styled.div`
  width: 100%;
  background: #221F51;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.81);
  border-radius: 30px;
  height: 474px;
  display: grid;
  grid-template-rows: 84px 1fr;
  @media only screen and (max-width: 1000px) {
    grid-template-rows: 31px 1fr;
  }


`
Container.Top = styled.div`
  background: #221F51;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 30px 30px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1000px) {
     background: #221F51;
    box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
    border-radius: 30px 30px 0px 0px;
    height: 31px;
  }
`
Container.TopTitle = styled.div`
  font-weight: 500;
  font-size: 40px;
  line-height: 49px;
  color: #FFFFFF;
  @media only screen and (max-width: 1000px) {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  } 

`

Container.Bottom = styled.div`
  padding: 14px 72px;
  display: grid;
  grid-template-rows: 1fr 57px 48px;
  grid-gap: 8px;
  @media only screen and (max-width: 1000px) {
    padding: 25px 15px;
  }
  
`

Container.BottomDesc = styled.div`
  height: 247px !important;
  border: 1px solid #FFFFFF;
  height: 100%;
  padding: 15px;
  @media only screen and (max-width: 1000px) {
    height: 310px !important;
  }
`
Container.BottomDescInset = styled.div`
  width: 100%;
  height: 215px !important;
  overflow-y: scroll;
  padding: 0 10px 0 0;
  >p{
    font-weight: 400;
    font-size: 16px;
    line-height: 105.9%;
    display: flex;
    align-items: center;
    text-align: justify;
    letter-spacing: -0.025em;
    color: #FFFFFF;
  }
  @media only screen and (max-width: 1000px) {
    height: 290px !important;
    >p{
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 105.9%;
    }
  }
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */

  ::-webkit-scrollbar-track {
    width: 10px !important;
    padding: 0 5px 0 0;
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

  /* Handle on hover */

`

Container.SelectSection = styled.div`
  display: grid;
  align-items: center;
  grid-gap: 10px;
  >div{
    display: flex;
    align-items: center;
    gap: 15px;
    cursor: pointer;
  }

  label {
    font-weight: 400;
    font-size: 16px;
    line-height: 105.9%;
    letter-spacing: -0.025em;
    color: #FFFFFF;

  }

  .input {
    -webkit-appearance: none;
    width: 16px !important;
    height: 12px !important;
    border-radius: 25px !important;
    cursor: pointer;
    background-color: rgba(232, 232, 232, 0);
    border: 2px solid #fff;
  }

  .input:checked {
    background-color: #fff;
    border: 2px solid #fff;
  }
`

Container.ButtonSection = styled.div`
  display: grid !important;
  grid-template-columns: 1fr 150px;
`

export default Container