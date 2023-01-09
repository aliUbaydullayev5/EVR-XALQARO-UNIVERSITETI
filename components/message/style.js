import styled from 'styled-components'

const hiddenFunc = (hiddenState) => {
    if(hiddenState){
        return {
            top: '20px',
            left: '20px'
        }
    }else{
        return {
            top: '20px',
            left: '-410px'
        }
    }
}

const typeMessageFunc = (type) => {
    switch (type) {
        case 'error': {
            return {
                border: '3px solid #FF3838'
            }
        }
        case 'success': {
            return {
                border: '3px solid #5FF16E'
            }
        }
        default: {
            return {
                border: '3px solid #FFC554'
            }
        }
    }
}


const Container = styled.div`
  position: absolute;
  width: 400px;
  height: 100px;
  border-radius: 13px;
  //background: rgba(90, 68, 150, 0.8);
  background: #fff;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.81);
  transition: .3s;
  z-index: 999999;
  ${({hiddenState}) => hiddenFunc(hiddenState)}
  ${({typeMessage})=> typeMessageFunc(typeMessage)}
  padding: 15px 25px;
  display: grid;
  gap: 7px;
  grid-template-columns: 45px 1fr;
  
`
Container.Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
Container.Right = styled.div`
  padding: 5px 0;
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 20px;
`
Container.MessageArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .title{
    font-size: 24px;
    color: #000000; 
    line-height: 26px;
  }
  .desc{
    font-size: 18px;
    color: #A09E9E;
    line-height: 22px;
  }
`
Container.IconArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Container