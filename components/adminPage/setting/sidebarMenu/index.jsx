
import React from 'react'
import Container, { UserCon } from './stayle.js';
import { useRouter } from "next/router"
import { useState } from 'react';
import arrow from "../../../../assets/icon/arrow.svg"
import Image from 'next/image.js';
import Logo from "../../../../assets/icons/logo.svg"
import imgArow from "../../../../assets/icons/arrowLeft.svg"
export const SidebarAdmin = () => {


  const quarey = useRouter()
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const getId = (value) => {

  }
  const FaceMenu = [

    {
      id: 3,
      name: 'Ta’lim yo’nalishlari ',
      clicked: false,
      img: imgArow,
      child: [
        {
          name: 'Abuturent',
          clicked: false,
          id: 1
        },
        {
          name: 'Magistratura',
          clicked: false,
          id: 2
        },
      ]
    },

    {
      id: 5,
      name: 'Imtxon Fanlar',
      clicked: false,
      img: imgArow,

    },

    {
      id: 7,
      name: 'Majburiy Fanlar',
      clicked: false,
      img: imgArow,

    },
    {
      id: 6,
      name: 'Fcultet Imtxon Fanlari',
      clicked: false,
      img: imgArow,
    },

    {
      id: 8,
      name: 'Test Savolar Qo`shish',
      clicked: false,
      img: imgArow,
    },

    {
      id: 9,
      name: `Testlar`,
      img: imgArow,
      clicked: false,
    },
    {
      id: 10,
      name: `Test Boshqaruv`,
      clicked: false,
      img: imgArow,
    },


    {
      id: 11,
      name: 'Biz haqimizda',
      img: imgArow,
      clicked: false,
    },
    {
      id: 12,
      name: 'Kutubxona',
      clicked: false,
      img: imgArow,
    },
    {
      id: 13,
      name: 'Galereya',
      clicked: false,
      img: imgArow,
    },
    {
      id: 14,
      name: 'Yangliklar',
      clicked: false,
      img: imgArow,
    },
 
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
    else if (id === 10) quarey.push('/admin/setting/exsamStandart')
    else if (id === 11) quarey.push('/admin/setting/aboutUs')
    else if (id === 12) quarey.push('/admin/setting/library')
    else if (id === 13) quarey.push('/admin/setting/galereya')
    else if (id === 14) quarey.push('/admin/setting/news')




  }

  return (
    <>
      <Container>
        <Container.Logo >
          <div>   <Logo onClick={() => quarey.push('/admin/home')} /></div>
          <div onClick={() => quarey.push('/admin/home')} className={'nocopy'}>
            <p>EVR XALQARO</p>
            <p>universiteti</p>
          </div>

        </Container.Logo>
        <Container.BottomDescInset>
          {FaceMenu?.map((value) => {
            var Imgsa = value?.img
            return (
              <>
                <UserCon onClick={() => CheckId(value.id)} key={value.id}>
                  <UserCon>
                    <h1>{value.name} </h1>
                    <p> <Imgsa /></p>
                  </UserCon>
                </UserCon>
              </>
            )
          })}
        </Container.BottomDescInset>
      </Container>
    </>
  )
}
export default SidebarAdmin 