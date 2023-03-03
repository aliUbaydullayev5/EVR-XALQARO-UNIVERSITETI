import { useRouter } from 'next/router.js'
import React from 'react'
import Button from '../../../../generic/Button/index.jsx'
import Container from './style.js'

export const TalimYunalishCom = () => {
  const  quary = useRouter()
  return (
    <Container>
      <Container.Block>
        <div>
          <Button mwidth={'290px'} msize={'13px'} mheight={'45px'} width={'290px'} size={'13px'} height={'45px'} onclick={() => quary.push('/admin/setting/facultets/addAbuturent')}>Abuturent</Button>
        </div>
        <div>
          <Button mwidth={'290px'} msize={'13px'} mheight={'45px'} width={'290px'} size={'13px'} height={'45px'} onclick={() => quary.push('/admin/setting/facultets/masters')}>Magistratura</Button>
        </div>
        <div>
          <Button width={'290px'} size={'13px'} height={'45px'} onclick={() => quary.push('/admin/setting/facultetsType/facultetsTypeAdd')}> Talim Abuturent</Button>
        </div>
        <div>
          <Button width={'290px'} size={'13px'} height={'45px'}>Talim Magistratura</Button>
        </div>
      </Container.Block>
      </Container>
  )
}
export default TalimYunalishCom