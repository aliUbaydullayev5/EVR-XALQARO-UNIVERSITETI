import { useRouter } from 'next/router.js'
import React from 'react'
import Button from '../../../../generic/Button/index.jsx'
import Container from './style.js'

export const AccessComponent = () => {
  const quary = useRouter()
  return (
    <Container>
      <Container.Block>
        <div>
          <Button mwidth={'290px'} msize={'13px'} mheight={'45px'} width={'290px'} size={'13px'} height={'45px'} onclick={() => quary.push('/admin/setting/library/after')}>Mualif</Button>
        </div>
        <div>
          <Button mwidth={'290px'} msize={'13px'} mheight={'45px'} width={'290px'} size={'13px'} height={'45px'} onclick={() => quary.push('/admin/setting/facultets/masters')}>Yunalishlar</Button>
        </div>
        <div>
          <Button width={'290px'} size={'13px'} height={'45px'} onclick={() => quary.push('/admin/setting/facultetsType/facultetsTypeAdd')}>Till</Button>
        </div>
      </Container.Block>
    </Container>
  )
}
export default AccessComponent