import styled from 'styled-components'

const Container = styled.div`
  background: #221F51;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.81);
  border-radius: 30px;
  height: 100%;
  display: grid;
  grid-template-rows: 52px 1fr;
`
Container.Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 40px;
  line-height: 49px;
  color: #FFFFFF;
  background: #221F51;
  box-shadow: 0 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 30px 30px 0 0;
`
Container.Bottom = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
  padding: 0 40px;
`

Container.BottomMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  >div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
`

Container.BottomMenuNavigate = styled.div`
  height: 25.34px;
  background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  display: flex;
  padding: 7px 40px 7px 10px;
  position: relative;
  white-space: nowrap;

  font-weight: 500;
  font-size: 12px;
  line-height: 105.9%;
  letter-spacing: -0.025em;
  color: ${({active}) => active ? '#fff' : '#8c8c8c'};

  .active {
    width: 15px;
    height: 15px;
    border: 2px solid #fff;
    border-radius: 250px;
    position: absolute;
    top: 50%;
    right: 10px;
    background-color: ${({active}) => active ? '#fff' : 'rgba(255,255,255,0)'};
    transform: translate(-50%, -50%);
  }

`

Container.BottomMenuTimerSection = styled.div`
  width: 158px;
  height: 37px;
  background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  font-weight: 400;
  font-size: 20px;
  line-height: 105.9%;
  letter-spacing: -0.025em;
  color: #FFFFFF;

`

Container.BottomTestArea = styled.div`
  overflow-y: scroll;
  height: 410px;
  padding: 0 20px;
  >div{
    display: flex;
    flex-direction: column;
    grid-gap: 10px;
  }
  
`

Container.TestSection = styled.div`
  padding: 10px;
  min-height: 100px;
  background: #241F69;
  box-shadow: 0 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 15px;
  display: grid;
  grid-template-rows: 0.7fr 1fr;

`
Container.TestSectionQuestion = styled.div`
  min-height: 30px;
  font-weight: 500;
  font-size: 24px;
  line-height: 105.9%;
  letter-spacing: -0.025em;
  color: #FFFFFF;
  padding: 0 20px;


`
Container.TestSectionAnswer = styled.div`
  min-height: 50px;
  display: flex;
  justify-content: start;
  gap: 25px;
  
`

Container.TestSectionAnswerTitle = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 105.9%;
  letter-spacing: -0.025em;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: start;
  input{
    width: 20px;
    height: 20px;
    margin: 0 10px;
  }
  
`


export default Container