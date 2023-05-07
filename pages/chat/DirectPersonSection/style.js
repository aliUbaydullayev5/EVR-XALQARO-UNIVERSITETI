import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 80px;
  margin: 10px 0;
  cursor: pointer;
  background: #221F51;
  box-shadow: 0 2px 17px rgba(0, 0, 0, 0.54);
  border-radius: 18px;
  display: grid;
  grid-template-columns: 80px 1fr;
  
`

Container.LeftIconSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
`

Container.RightContentSection = styled.div`
  padding: 5px 10px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  .title{
    font-size: 22px;
  }
  .desc{
    
  }
  
`

export default Container