import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

`
Container.Input = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .buttonAdd{
    background-color: #21d05b;
    color: white;
    border: none;
    cursor: pointer;
    width: 45px;
    height: 30px;
    border-radius: 5px;

    }
`

Container.Table = styled.div`
max-width: 670px;

  >tbody {
   min-height: 400px;
   >tr{
      border: 1px solid #D9D9D9 ; 
      
      
      th{
      color: white;
      border: 1px solid #D9D9D9;;
        padding: 7px;

      
      }
      >td{
      border: 1px solid #D9D9D9;;
      height:35px;
      color: white;
        padding: 7px;

      .buttonEdit{
        border: none;
        width: 45px;
        height: 30px;
        cursor: pointer;
        background-color: #2185d0;
        border-radius: 5px;
        color: white;

      }
      .buttonDelete{
      background-color: #f51010;
      color: white;
      border: none;
      cursor: pointer;
      width: 45px;
      height: 30px;
      border-radius: 5px;

      }
      }
      .thid{
        width: 45px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 7px;

      }
      .thname{
       width: 550px;
      }
   }
}
`
Container.BottomDesc = styled.div`
  height: 550px !important;
  border: 1px solid #FFFFFF;
  height: 100%;
  padding: 15px;
  @media only screen and (max-width: 1000px) {
    height: 550px !important;
  }
`
Container.BottomDescInset = styled.div`
  width: 100%;
  height: 530px !important;
  overflow-y: scroll;
  padding: 0 10px 0 0;

  @media only screen and (max-width: 1000px) {
    height: 530px !important;
  }
  ::-webkit-scrollbar {
    width: 5px;
  }


  ::-webkit-scrollbar-track {
    width: 10px !important;
    padding: 0 5px 0 0;
    background: #9a9a9a;
    opacity: 0.5;
    border-radius: 30px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    transform: matrix(-1, 0, 0, 1, 0, 0);
    padding: 10px !important;

  }

  /* Handle */

  ::-webkit-scrollbar-thumb {
    background: #FFFFFF;
    border-radius: 30px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }

  /* Handle on hover */

`


export default Container