import styled from "styled-components";

const Container = styled.div`
width: 100% ;
max-width: 1440px ;
margin: 0 auto;
grid-template-columns: auto ;
height: 100% ;
padding: 50px  ;
`
const TextCon = styled.div`
width: 100% ;
margin: 0 auto ;
>h1{
 font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 48px;
line-height: 105.9%;
display: flex;
align-items: center;
letter-spacing: -0.025em;
color: #FFFFFF;
}

`
const BoxCon = styled.div`
display: flex ;
align-items: center ;
margin-top: 30px ;
position: relative ;
align-items: center ;
.InputLeft{
    margin-left: 20px ;
}
.BtnCon{
    position: absolute ;
    bottom: 10px ;
    left:20px ;
    top: 22px ;
}
.btnEnd{
   margin-left: 170px ;
}
`
const ImgBox = styled.div`
position: relative ;
.border{
    position: absolute ; 
    top: 15px ;
    left: 25px ;
    right: 0px ;
    cursor: pointer;
    transition: 0.2s ;
:hover {
    transform: scale(1.02) ;
}

}
`
export { TextCon, BoxCon, ImgBox }
export default Container