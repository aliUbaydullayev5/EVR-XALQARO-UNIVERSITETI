import styled from 'styled-components'
import {Button} from "../../../generic";

const Container = styled.div`
  height: 135px;
  background: #241F69;
  box-shadow: 0px 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 15px;
  display: grid;
  grid-template-columns: 203px 1fr;
  grid-template-columns: 203px 1fr;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: 100px 1fr;
    box-shadow: none;
    height: 175px;
  }
`

Container.LeftImg = styled.div`
  .img{
    width: 100%;
  }
  @media only screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

Container.RightBlock = styled.div`
  padding: 4px 10px;
  hr{
    width: 60%;
  }
`
Container.Status = styled.div`
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  color: #FFFFFF;
  @media only screen and (max-width: 1000px) {
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
  }
`
Container.Name = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #FFFFFF;
  margin: 8px 0 0 0;
  @media only screen and (max-width: 1000px) {
    font-weight: 600;
    font-size: 10px;
    line-height: 12px;
    margin: 4px;
  }
`
Container.Text = styled.span`
  @media only screen and (max-width: 1000px) {
    ${({grey})=> grey ? 'font-weight: 500;\n  font-size: 13px;\n  line-height: 10px;\n  color: #FFFFFF;\n  opacity: 0.5;' : 'font-weight: 400;\n  font-size: 13px;\n color: #FFFFFF;'}
  }
  @media only screen and (min-width: 1000px) {
    ${({grey})=> grey ? 'font-weight: 500;\n  font-size: 13px;\n  line-height: 15px;\n  color: #FFFFFF;\n  opacity: 0.5;' : 'font-weight: 400;\n  font-size: 13px;\n color: #FFFFFF;'}
  }
`
Container.EmailSection = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 1fr 0.2fr;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`


export default Container