import styled from 'styled-components'


const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: ${({navbar})=> navbar ? '200px 1fr' : '1fr'};
  >div{
  }
`

export default Container