import styled from 'styled-components'


const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  overflow: hidden
  
`


Container.Inset = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  >p{
    top: 3px;
    font-weight: 600;
    font-size: 19px;
    line-height: 15px;
    color: #FFFFFF;
    position: absolute;
    animation: lineAnim 19s infinite ease-out;
    white-space: nowrap;
    @media only screen and (max-width: 1000px) {
      top: 0;
    }
      @keyframes lineAnim {
      0%{
        left: 1500px;
      }
      10%{
        
      }
      20%{
        
      }
      30%{
        
      }
      40%{
        
      }
      60%{
      }
      70%{
      }
      80%{
        left: -850px;
      }
      100%{
        left: -850px;
      }
    }
  }
  
`


export default Container