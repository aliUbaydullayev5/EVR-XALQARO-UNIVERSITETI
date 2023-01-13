import React from 'react'
import Container, { Dean, Founder,  Rector, Prorektor, Center, Bolim1, Bolim2,     } from './stayle.js'

export const ManagementCom = () => {

    const data = [
     {
        id: 1,
        title:'Bolim'
        },
        {
            id: 2,
            title: 'Bolim'
        },
        {
            id: 3,
            title: 'Bolim'
        },
        {
            id: 4,
            title: 'Bolim'
        },
        {
            id: 5,
            title: 'Bolim'
        },
        {
            id: 6,
            title: 'Bolim'
        },
        {
            id: 7,
            title: 'Bolim'
        },
        {
            id: 8,
            title: 'Bolim'
        },
        {
            id: 9,
            title: 'Bolim'
        },
        {
            id: 10,
            title: 'Bolim'
        },
        {
            id: 11,
            title: 'Bolim'
        },
        {
            id: 12,
            title: 'Bolim'
        },
        {
            id: 13,
            title: 'Bolim'
        },
        {
            id: 14,
            title: 'Bolim'
        },
        {
            id: 15,
            title: 'Bolim'
        },
        {
            id: 16,
            title: 'Bolim'
        },
        {
            id: 17,
            title: 'Bolim'
        },
        {
            id: 18,
            title: 'Bolim'
        },
        {
            id: 19,
            title: 'Bolim'
        },
        {
            id: 20,
            title: 'Bolim'
        },
        {
            id: 21,
            title: 'Bolim'
        },
        {
            id: 22,
            title: 'Bolim'
        },
        {
            id: 23,
            title: 'Bolim'
        },
        {
            id: 24,
            title: 'Bolim'
        }
    ]

  return (
      <Container>
          <Founder>
              <div><p>Ta’sischi</p></div>
          </Founder> 

          <Rector>
              <div><p>Rektor</p></div>
          </Rector>
          
          <Prorektor>
              <div><p>Prorektor</p></div>
              <div><p>Prorektor</p></div>
          </Prorektor>

          <Dean>
              <div><p>Dekan</p></div>
              <div><p>Dekan</p></div>
              <div><p>Dean</p></div>
          </Dean>

          <Center>
                {data?.map((value) => value && (        
                    <Bolim1 key={value?.id}>
                        <div><p>{value?.title}</p></div>
                        <div><p>{value?.title}</p></div>
                    </Bolim1>
                ))}
          </Center>

      </Container>
  )
}

export default ManagementCom 