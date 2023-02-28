import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  .customPhoneInput {
    border-radius: 15px !important;
    background: linear-gradient(
            90deg,
            #1e3c72 0%,
            #1e3c72 1%,
            #2a5298 100%
    ) !important;
    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.25) !important;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 105.9%;
    letter-spacing: -0.025em;
    color: #fff;
    width: 513px !important;
    padding: 0 0 0 20px !important;
    height: 46px;
    @media only screen and (max-width: 800px) {
      max-width: 300px;
      width: 100% !important;
      font-size: 20px;
      height: 40px !important;
      border-radius: 5px !important;
    }
  }
  
`


export default Container