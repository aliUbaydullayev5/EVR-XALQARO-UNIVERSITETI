import styled from 'styled-components'


const menuFunc = (menu) => {
    if(menu){
        return {
            width: '100%',
            height: '100vh'
        }
    }else{
        return {
            display: 'flex',
            alignItems: "center",
            justifyContent: 'center',
            height: '100vh'
        }
    }
}

const Container = styled.div`
  ${({menu})=> menuFunc(menu)}
  display: ${({center})=> center ? 'flex' : 'block'};
  padding: ${({padding})=> padding ? padding : '0 0 0 0'};
`

Container.Children = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

Container.Navbar = styled.div`
  display: grid;
  grid-template-rows: 140px 1fr;
  height: 100%;
  width: 100%;
`
Container.Menu = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  height: 100%;
  width: 100%;
  
`

export default Container