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
    background: #241F69 !important;
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

Container.Block = styled.div`
  width: 500px;
  left: 461px;
  background: #221F51;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.81);
  border-radius: 30px;
  display: grid;
  grid-template-rows: 130px 1fr;

  @media only screen and (max-width: 800px) {
    width: 100%;
    grid-template-rows: 60px 1fr;
  }
  
`
Container.BlockTop = styled.div`
  background: #221F51;
  box-shadow: 0 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 30px 30px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 40px;
  line-height: 49px;
  color: #FFFFFF;

  @media only screen and (max-width: 800px) {
    font-weight: 600;
    font-size: 30px;
    line-height: 49px;
    color: #FFFFFF;
  }

`

Container.BlockBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  .customPhoneInput{
    width: 333px !important;
    font-size: 24px;
  }
  >div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  h1{
    color: #fff;
  }
`

Container.Model = styled.div`
	margin: 0 !important;
	padding: 15px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	> p {
		font-size: 18px;
		color: #fff;
	}
`;

Container.InputArea = styled.div`
  position: relative;
  .personIcon {
    position: absolute;
    left: 5px;
    top: 0;
  }
  .blockIcon {
    position: absolute;
    left: 5px;
    top: 0;
  }
  .customPhoneInput {
    height: 30px;
    background: #241F69 !important;
    border-bottom: 2px solid #fff;
    width: 333px;
    font-size: 24px;
    color: #fff;
    padding: 0 0 0 40px;
    font-weight: 400;
    @media only screen and (max-width: 1000px) {
      width: 200px;
      height: 30px;
      font-size: 16px;
    }
  }
  
`


export default Container