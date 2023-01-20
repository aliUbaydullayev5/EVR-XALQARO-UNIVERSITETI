import { useRouter } from 'next/router.js'
import React from 'react'
import { Button } from '../../../../generic/index.jsx'
import data from '../../../../Mock/rahbariyat/data.js'
import Container, { AntSelect } from './style.js'
const FacultetsCom = () => {
   const quarey = useRouter()
  return (
    <Container>
      <Container.Facul>
        <AntSelect  
          showSearch
          style={{
            width: '411px',
            height: '50px',
          }}
          placeholder='Facultets'
          optionFilterProp="children"

          options={data?.map((value) => (
            {
              // value,
              // label: value
            }
          )) || []}
            
        />
      </Container.Facul>
      <Container.Fan>
        <AntSelect
          showSearch
          style={{
            width: '411px',
            height: '50px',
          }}
          placeholder='asosiy fan 1'
          optionFilterProp="children"

          options={data?.map((value) => (
            {
              // value,
              // label: value
            }
          )) || []}
          onChange={(e) => changeAllDataFunc({ type: 'edicetionType', value: e })}
        />

        <AntSelect
          showSearch
          style={{
            width: '411px',
            height: '50px',
          }}
          placeholder='asosiy fan 2'
          optionFilterProp="children"

          options={data?.map((value) => (
            {
              // value,
              // label: value
            }
          )) || []}
          onChange={(e) => changeAllDataFunc({ type: 'edicetionType', value: e })}
        />

      </Container.Fan>
      <Container.Btn>
        <Button width={'190px'} height={'55px'} size={'23px'} radius={'0px'} onclick={() => quarey.push('/admin/setting/quation')}>Qoldirish</Button>
      </Container.Btn>

    </Container>
  )
}
export default FacultetsCom