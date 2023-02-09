import React, { useState } from 'react'
import Button from '../../../../generic/Button/index.jsx'
import DataAriza from '../../../../Mock/adminAriza/data.js'
import Container, { ConTable } from './style.js'

export const TalimYunalishTypeAddCom = () => {
  const [data, setData] = useState(DataAriza)
  return (
    <Container>
      <Container.Scrool style={{ overflowY: 'scroll', maxHeight: '550px', overflowX: "scroll", maxWidth: '950px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
            <Container.Nav>
              <div className='row'>
                <div >№</div>
                <div className='colum'>FIO</div>
                <div className='colum'>Kun</div>
              </div>
            </Container.Nav>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
            {data.map((value) => {
              return (
       
                <ConTable key={value.id}>
                  <div className='row'>
                    <div >{value.id}</div>
                    <div className='colum'>{value.ismi}</div>
                    <div className='colum'>
                      <div className="action">
                        <Button width={'70px'} height={'40px'} size={'18px'} radius={'5px'} border={'1px solid red'}> Edit</Button>
                      <Button width={'70px'} height={'40px'} size={'18px'} radius={'5px'} border={'1px solid red'}>Delete</Button>
                      </div>
                    </div>
                  </div>
                </ConTable>
              )
            })}
          </div>
        </Container.Scrool>
    </Container>
  )
}
export default TalimYunalishTypeAddCom