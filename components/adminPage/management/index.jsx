import React from 'react'
import Container, { Dean, Founder, Dekan, Rector, Prorektor, Center, Bolim1, Bolim2,     } from './stayle.js'

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
            id: 1,
            title: 'Bolim'
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
            id: 1,
            title: 'Bolim'
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
            id: 1,
            title: 'Bolim'
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
            id: 1,
            title: 'Bolim'
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
            id: 1,
            title: 'Bolim'
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
              <div><p>Dekan</p></div>
          </Dean>

          <Center>
              {data.map((value) => (        
              <Bolim1>
                      <div><p>{value.title}</p></div>
                      <div><p>{value.title}</p></div>
                  </Bolim1>
              ))}
          </Center>

      </Container>
  )
}

export default ManagementCom 