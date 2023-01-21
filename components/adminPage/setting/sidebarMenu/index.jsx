
import React from 'react'
import Container, { UserCon } from './stayle.js';
import { useRouter } from "next/router"

export const SidebarAdmin = () => {

  const quarey = useRouter()
  const FaceMenu = [

    {
      id: 1,
      name: 'Boshqaruv bo’limi',
      clicked: false,
    },
    {
      id: 2,
      name: 'O’qituvchi',
      clicked: false,
    },
    {
      id: 3,
      name: 'Ta’lim yo’nalishlari',
      clicked: false,
    },
    {
      id: 4,
      name: 'Testlar',
      clicked: false,
    },
    {
      id: 5,
      name: 'Ta’lim yo’nalishlari',
      clicked: false,
    },
    {
      id: 6,
      name: 'Ta’lim yo’nalishlari',
      clicked: false,
    },
    {
      id: 7,
      name: 'Ta’lim yo’nalishlari',
      clicked: false,
    },
    {
      id: 8,
      name: 'Ta’lim yo’nalishlari',
      clicked: false,
    },

     {
      id: 9,
      name: 'Ta’lim yo’nalishlari',
      clicked: false,
     },
     {
      id: 10,
      name: 'Ta’lim yo’nalishlari',
      clicked: false,
    },
    {
      id: 12,
      name: 'Boshqaruv bo’limi',
      clicked: false,
    },
    {
      id: 12,
      name: 'O’qituvchi',
      clicked: false,
    },
    {
      id: 13,
      name: 'Ta’lim yo’nalishlari',
      clicked: false,
    },
    {
      id: 14,
      name: 'Testlar',
      clicked: false,
    },
    {
      id: 15,
      name: 'Ta’lim yo’nalishlari',
      clicked: false,
    },
    {
      id: 16,
      name: 'Ta’lim yo’nalishlari',
      clicked: false,
    },
    {
      id: 17,
      name: 'Ta’lim yo’nalishlari',
      clicked: false,
    },
    {
      id: 18,
      name: 'Ta’lim yo’nalishlari',
      clicked: false,
    },

    {
      id: 19,
      name: 'Ta’lim yo’nalishlari',
      clicked: false,
    },
    {
      id: 20,
      name: 'Ta’lim yo’nalishlari',
      clicked: false,
    },
    {
      id: 21,
      name: 'Ta’lim yo’nalishlari',
      clicked: false,
    },
    {
      id: 22,
      name: 'Ta’lim yo’nalishlari',
      clicked: false,
    }
  ]
  const CheckId = (id) => {
   if (id===1) {
     quarey.push('/admin/setting/menagement')
   }
    if (id === 4) {
      quarey.push('/admin/setting/test')
    }

  }

  return (
    <>
        <Container>
                <Container.Bottom>
                    <Container.BottomDesc>
                        <Container.BottomDescInset>
                        {FaceMenu?.map((val) => {
                                return (
                                    <UserCon onClick={()=> CheckId(val.id)} key={val.id}>
                                        <UserCon.Box>
                                         <UserCon.Name>
                                            <h1>{val.name}</h1>
                                            </UserCon.Name>
                                     </UserCon.Box>
                                    </UserCon> 
                              )
                          })}  
                        </Container.BottomDescInset>
                    </Container.BottomDesc>
                </Container.Bottom>
              </Container>
    </>
  )
}
export default SidebarAdmin 