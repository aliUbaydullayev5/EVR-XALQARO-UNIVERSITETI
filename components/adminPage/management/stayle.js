import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin:  0 auto;
  padding: 50px 0px;
  display: grid;
 gap: 20px 0px;
`
const Founder = styled.div`
  display: grid;
  grid-template-columns: auto;
  width: 164.17px;
  height: 57.68px;
  background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.54);
  border-radius: 5px;
  margin:  0 auto;
  cursor: pointer;
  >div{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;

    
  }
`

const Rector = styled.div`
  display: grid;
  grid-template-columns: auto;
  width: 164.17px;
  height: 57.68px;
  background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.54);
  border-radius: 5px;
  margin:  0 auto;
  cursor: pointer;
    transition: all .3 linear;
     :hover{
      transform: scale(1.04);
      }
  >div{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  cursor: pointer;
`

const Prorektor = styled.div`
  width: 100%;
  margin:  0 auto;
  cursor: pointer;
  display: flex;
  justify-content: space-evenly;
  >div{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 164.17px;
    height: 57.68px;
    background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.54);
    border-radius: 5px;
      transition: all .3 linear;
     :hover{
      transform: scale(1.04);
      }
      cursor: pointer;
    }
`
const Dean = styled.div`
  display: flex;
  justify-content: space-evenly;
  bottom: 1px solid red;
  >div{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 164.17px;
    height: 57.68px;
    background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.54);
    border-radius: 5px;
      transition: all .3 linear;
     :hover{
      transform: scale(1.04);
      }
     cursor: pointer;
  }
`

const Center = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 3fr 3fr ;
`
const  Bolim1 = styled.div`
  display: grid;
  margin: 10px auto;
  cursor: pointer;

 >div{
     border: 1px solid ;
    width: 170px;
    height: 58px;
    background: linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.54);
    border-radius: 5px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .3 linear;
     :hover{
      transform: scale(1.04);
      }
    >p{
        color: #Fff;
    }
  
 }
 
  
`
const Bolim2 = styled.div`
  
`
const Bolim3 = styled.div`
  
`


export { Founder, Rector, Prorektor, Dean, Center, Bolim1, Bolim2, Bolim3 }
export default Container