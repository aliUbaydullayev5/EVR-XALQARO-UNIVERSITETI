import React, {useState} from 'react'
import Container, { Dean, Founder,  Rector, Prorektor, Center, Bolim1, Bolim2,     } from './stayle.js'

export const ManagementCom = () => {



    // get data
    const [data, setData] = useState([])

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
                {/*{data?.map((value) => value && (        */}
                {/*    <Bolim1 key={value?.id}>*/}
                {/*        <div><p>{value?.title}</p></div>*/}
                {/*        <div><p>{value?.title}</p></div>*/}
                {/*    </Bolim1>*/}
                {/*))}*/}
          </Center>

      </Container>
  )
}

export default ManagementCom 