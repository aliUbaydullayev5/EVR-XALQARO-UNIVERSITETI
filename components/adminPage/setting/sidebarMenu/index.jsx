
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
      name: 'Ta’lim yo’nalishlari ',
      clicked: false,
    },
    {
      id: 4,
      name: 'Ta’lim yo’nalish turlari',
      clicked: false,
    },
    {
      id: 5,
      name: 'Imtxon Fanlar',
      clicked: false,
    },

    {
      id: 7,
      name: 'Majburiy Fanlar',
      clicked: false,
    },
    {
      id: 6,
      name: 'Fcultet Imtxon Fanlari',
      clicked: false,

    },

    {
      id: 8,
      name: 'Test Savolar Qo`shish',
      clicked: false,
    },

    {
      id: 9,
      name: `Testlar`,
      clicked: false,
    },
    {
      id: 10,
      name: 'About US',
      clicked: false,
    },
    {
      id: 11,
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
      id: 15,
      name: 'Ta’lim yo’nalish Turlari',
      clicked: false,
    },
    {
      id: 14,
      name: 'Testlar',
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
    if (id === 1) quarey.push('/admin/setting/menagement')
    else if (id === 3) quarey.push('/admin/setting/facultets')
    else if (id === 4) quarey.push('/admin/setting/facultetsType')
    else if (id === 5) quarey.push('/admin/setting/exsam')
    else if (id === 6) quarey.push('/admin/setting/facultyImtxonselect')
    else if (id === 7) quarey.push('/admin/setting/subjectsMandatory')
    else if (id === 7) quarey.push('/admin/setting/subjectsMandatory')
    else if (id === 8) quarey.push('/admin/setting/quations')
    else if (id === 9) quarey.push('/admin/setting/quationResalt')
    else if (id === 10) quarey.push('/admin/setting/aboutUs')
  }

  return (
    <>
      <Container>
        <Container.BottomDescInset>
          {FaceMenu?.map((val) => {
            var Imgs = val?.img
            return (
              <UserCon onClick={() => CheckId(val.id)} key={val.id}>
                <UserCon.Box>
                  <UserCon.Name>
                    <h1>{val.name}</h1>
                    {Imgs}
                  </UserCon.Name>
                </UserCon.Box>
              </UserCon>
            )
          })}
        </Container.BottomDescInset>
      </Container>
    </>
  )
}
export default SidebarAdmin 