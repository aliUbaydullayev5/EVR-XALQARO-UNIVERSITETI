import React from 'react'
import Container from './style.js'
import MoneySend from "../../../../../assets/icons/admin/moneySend.svg"
import MoneyRecive from "../../../../../assets/icons/admin/moneyRecive.svg"
import DollarCircle from "../../../../../assets/icons/admin/dollarCircle.svg"
import ProfileUser from "../../../../../assets/icons/admin/profileUser.svg"



const data =[
  {
   id:1,
   img:MoneySend,
   sena: "209,000",
   valyuta:"so`m",
   name:"Xarajatlar"
  },
  {
   id:2,
   img:MoneyRecive,
   sena: "209,000",
   valyuta:"so`m",
   name:"Kirimlar"
  },
  {
   id:3,
   img:DollarCircle,
   sena: "209,000",
   valyuta:"so`m",
   name:"Talaba to'lovi"
  },
  {
   id:4,
   img:ProfileUser,
   sena: "209,000",
   valyuta:"ta",
   name:"To'laganlar"
  },
  {
   id:5,
   img:ProfileUser,
   sena: "209,000",
   valyuta:"ta",
   name:"Ishchilar soni"
  },
]


export const AllInformationComponet = () => {

  return (
    <Container>
        <h1>Moliya</h1> 
       <Container.Wrapper>
        <Container.Top>

          {
            data.map((value)=>{
              let Imgs = value.img
              return <Container.Card key={value.id} >
                 <Container.Text> 
                  <h1>{value.sena}<h2>{value.valyuta}</h2> </h1>
                  <p>{value.name}</p>
                 </Container.Text>
                 <Container.Img>
                  <Imgs />
                 </Container.Img>
              </Container.Card>
            })
          }

        </Container.Top>
        </Container.Wrapper>
    </Container>
  );
};



export default AllInformationComponet;
